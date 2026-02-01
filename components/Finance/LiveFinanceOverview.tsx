"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// CountUp Component
function CountUp({
  end,
  duration = 2200,
  prefix = "Rs.",
}: {
  end: number;
  duration?: number;
  prefix?: string;
}) {
  const pathname = usePathname();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      setCount(Math.min(Math.floor(start), end));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, pathname]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count.toLocaleString("en-IN")}
    </span>
  );
}

// Live Finance Overview Component
export default function LiveFinanceOverview() {
  const [collection, setCollection] = useState(456800);
  const [expenses, setExpenses] = useState(91160);
  const [balance, setBalance] = useState(365640);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const isIncome = Math.random() > 0.58;
        const amount = Math.floor(Math.random() * 3800) + 400;

        if (isIncome) {
          setCollection((p) => p + amount);
          setBalance((p) => p + amount);
        } else {
          setExpenses((p) => p + amount);
          setBalance((p) => Math.max(0, p - amount));
        }
      },
      7000 + Math.random() * 9000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 relative overflow-hidden w-full">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 to-transparent pointer-events-none" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 relative">
        {/* Total Collection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-gray-100"
        >
          <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-1.5">
            Total Collection
          </p>
          <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 break-words">
            <CountUp end={collection} duration={2500} />
          </p>
        </motion.div>

        {/* Expenses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-50/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-gray-100"
        >
          <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-1.5">
            Expenses
          </p>
          <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-red-600 break-words">
            <CountUp end={expenses} duration={2500} />
          </p>
        </motion.div>

        {/* Net Balance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-green-100 col-span-2"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-1.5">
                Net Balance
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-600 break-words">
                <CountUp end={balance} duration={3000} />
              </p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </motion.div>
          </div>

          {/* Progress indicator */}
          <div className="mt-3 sm:mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Collection</span>
              <span>Balance</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(balance / collection) * 100}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-linear-to-r from-green-500 to-emerald-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
