"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowLeftRight,
  AlertCircle,
  Info,
  X,
  RefreshCw,
} from "lucide-react";
import { useConvertDate } from "@/lib/api/dateConverter";

// Color palette matching the image
const PRIMARY = "#4a6cf7";
const LIGHT_BG = "#f8f9fa";

// Nepali (BS) months names
const BS_MONTHS = [
  "Baisakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function ymdFromIso(iso: string): { y: number; m: number; d: number } | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map((s) => Number(s));
  if (!y || !m || !d) return null;
  return { y, m, d };
}

function useTodayISO() {
  const iso = useMemo(() => new Date().toISOString().slice(0, 10), []);
  return iso;
}

// Card shell matching the image design
const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({ children, className, hover = false }) => (
  <div
    className={classNames(
      "rounded-xl bg-white shadow-sm border transition-all duration-200",
      hover && "hover:shadow-md hover:border-gray-300",
      className,
    )}
    style={{
      borderColor: "rgba(0,0,0,0.08)",
    }}
  >
    {children}
  </div>
);

export type AdBsConverterProps = {
  className?: string;
  primaryColor?: string;
};

const yearsRange = {
  bs: { min: 1899, max: 2100 },
};

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => (
  <input
    {...props}
    className={classNames(
      "w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-all",
      "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20",
      props.className,
    )}
  />
);

// Main component
const AdBsConverter: React.FC<AdBsConverterProps> = ({
  className,
  primaryColor,
}) => {
  const COLOR = primaryColor ?? PRIMARY;
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: convertDate } = useConvertDate();

  // Tabs: "ad2bs" | "bs2ad"
  const [mode, setMode] = useState<"ad2bs" | "bs2ad">("ad2bs");

  // AD input
  const todayISO = useTodayISO();
  const [adIso, setAdIso] = useState<string>(todayISO);

  // BS input
  const [bsYear, setBsYear] = useState<number>(2080);
  const [bsMonth, setBsMonth] = useState<number>(1);
  const [bsDay, setBsDay] = useState<number>(1);

  // Results
  const [result, setResult] = useState<{
    title: string;
    lines: Array<{ k: string; v: string }>;
    convertedDate: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch today's BS date
  const fetchTodayBSDate = async () => {
    try {
      const ymd = ymdFromIso(todayISO)!;
      const adDateString = `${ymd.y}-${String(ymd.m).padStart(2, "0")}-${String(
        ymd.d,
      ).padStart(2, "0")}`;
      const response = await convertDate({
        date: adDateString,
        format: "AD_TO_BS",
      });

      // Parse BS date from response (expected format: YYYY-MM-DD)
      const [year, month, day] = response.date.split("-").map(Number);
      if (year && month && day) {
        setBsYear(year);
        setBsMonth(month);
        setBsDay(day);
      }
    } catch (error) {
      console.error("Failed to fetch today's BS date:", error);
      const today = new Date();
      const defaultBSYear = 2080; // Adjust as needed
      setBsYear(defaultBSYear);
      setBsMonth(today.getMonth() + 1);
      setBsDay(today.getDate());
    }
  };

  async function handleConvert() {
    setError(null);
    setResult(null);
    setIsLoading(true);

    try {
      if (mode === "ad2bs") {
        const ymd = ymdFromIso(adIso);
        if (!ymd) throw new Error("Please pick a valid AD date.");

        const adDateString = `${ymd.y}-${String(ymd.m).padStart(
          2,
          "0",
        )}-${String(ymd.d).padStart(2, "0")}`;
        const response = await convertDate({
          date: adDateString,
          format: "AD_TO_BS",
        });

        // Parse the returned BS date
        const [year, month, day] = response.date.split("-").map(Number);
        if (!year || !month || !day) {
          throw new Error("Invalid date format received from server");
        }

        const monthName = BS_MONTHS[month - 1] || `Month ${month}`;

        setResult({
          title: "Conversion Result",
          lines: [
            { k: "Bikram Sambat (BS)", v: `${monthName} ${day}, ${year}` },
            { k: "BS Format", v: response.date },
            { k: "Gregorian (AD) Input", v: adDateString },
          ],
          convertedDate: response.date,
        });
      } else {
        // bs2ad
        // Format BS date with leading zeros
        const formattedMonth = bsMonth.toString().padStart(2, "0");
        const formattedDay = bsDay.toString().padStart(2, "0");
        const bsDateString = `${bsYear}-${formattedMonth}-${formattedDay}`;

        const response = await convertDate({
          date: bsDateString,
          format: "BS_TO_AD",
        });

        setResult({
          title: "Conversion Result",
          lines: [
            { k: "Gregorian (AD)", v: response.date },
            {
              k: "Bikram Sambat Input",
              v: `${
                BS_MONTHS[bsMonth - 1] || `Month ${bsMonth}`
              } ${bsDay}, ${bsYear}`,
            },
          ],
          convertedDate: response.date,
        });
      }
    } catch (e: any) {
      console.error("Conversion error:", e);
      setError(
        e?.message ||
          "Conversion failed. Please check your inputs and try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className={classNames(
        "w-full bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-6 md:p-8 relative",
        className,
      )}
      style={{
        background: `linear-gradient(135deg, ${LIGHT_BG} 0%, #f0f4ff 100%)`,
      }}
    >
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${COLOR}15` }}
            >
              <Calendar className="h-8 w-8" style={{ color: COLOR }} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              AD ↔ BS Date Converter
            </h1>
          </motion.div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Convert between Gregorian (AD) and Bikram Sambat (BS) calendars.
            Preserve your family's historical dates accurately.
          </p>
        </div>

        {/* Main Converter */}
        <div className="flex flex-col lg:flex-row gap-4">
          <Card className="p-6 flex-2" hover>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <button
                  onClick={async () => {
                    if (mode === "ad2bs") {
                      setAdIso(todayISO);
                    } else {
                      await fetchTodayBSDate();
                    }
                  }}
                  className="flex items-center gap-1.5 text-lg text-blue-600 hover:text-blue-700"
                >
                  Today
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMode("ad2bs")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    mode === "ad2bs"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  AD → BS
                </button>
                <button
                  onClick={() => setMode("bs2ad")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    mode === "bs2ad"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  BS → AD
                </button>
              </div>
            </div>

            {/* Main Converter Section */}
            <div className="flex flex-col-1 lg:flex-row gap-6">
              {/* Input Section */}
              <div className="flex-1 space-y-4">
                {mode === "ad2bs" ? (
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-2 items-start">
                      <div className="flex-1">
                        <Input
                          type="date"
                          value={adIso}
                          onChange={(e) => setAdIso(e.target.value)}
                          className="w-full py-2"
                          disabled={isLoading}
                        />
                      </div>
                      <button
                        onClick={handleConvert}
                        disabled={isLoading}
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm whitespace-nowrap"
                      >
                        {isLoading ? (
                          <>
                            <div className="h-3 w-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Converting</span>
                          </>
                        ) : (
                          <>
                            <ArrowLeftRight className="h-3.5 w-3.5" />
                            <span>Convert</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Info className="h-3 w-3" />
                      Format: YYYY-MM-DD (Gregorian Calendar)
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Year
                      </label>
                      <select
                        value={bsYear}
                        onChange={(e) => setBsYear(Number(e.target.value))}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        disabled={isLoading}
                      >
                        {Array.from({
                          length: yearsRange.bs.max - yearsRange.bs.min + 1,
                        }).map((_, i) => {
                          const y = yearsRange.bs.min + i;
                          return (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Month
                      </label>
                      <select
                        value={bsMonth}
                        onChange={(e) => setBsMonth(Number(e.target.value))}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        disabled={isLoading}
                      >
                        {BS_MONTHS.map((m, i) => (
                          <option key={m} value={i + 1}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Day
                      </label>
                      <select
                        value={bsDay}
                        onChange={(e) => setBsDay(Number(e.target.value))}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        disabled={isLoading}
                      >
                        {Array.from({ length: 32 }).map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Error Display */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                    <div className="flex items-center gap-2 text-red-700">
                      <AlertCircle className="h-4 w-4" />
                      <span className="font-medium">Error:</span>
                      <span className="flex-1">{error}</span>
                      <button
                        onClick={() => setError(null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
          {/* Result Section */}
          <div className="flex-1 bg-white p-2 rounded-lg">
            {result ? (
              <div className="space-y-4">
                <div className="p-4 ">
                  <div className="text-center mb-3">
                    <div className="text-xl flex font-bold justify-between text-blue-700">
                      <div className="text-sm text-blue-600 mt-1">
                        {result.title} :{" "}
                      </div>
                      <span className="text-xl text-blue-600 ">
                        {result.convertedDate}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {result.lines.map((line, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 border-b border-blue-100 last:border-0"
                      >
                        <span className="text-sm text-gray-600">{line.k}</span>
                        <span
                          className={`text-sm font-medium ${
                            idx === 1 ? "font-mono" : ""
                          }`}
                        >
                          {line.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setMode(mode === "ad2bs" ? "bs2ad" : "ad2bs");
                      setTimeout(handleConvert, 100);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Reverse
                  </button>
                  <button
                    onClick={handleConvert}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                    Convert Again
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 min-h-[180px]">
                <Calendar className="h-10 w-10 text-gray-300 mb-3" />
                <p className="text-gray-500 font-medium">No conversion yet</p>
                <p className="text-xs text-gray-400 mt-1">
                  Enter a date and click "Convert"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBsConverter;
