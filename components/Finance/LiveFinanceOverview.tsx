"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// CountUp Component
function CountUp({
  end,
  duration = 2200,
  prefix = "₹",
}: {
  end: number;
  duration?: number;
  prefix?: string;
}) {
  const [count, setCount] = useState(end);
  const hasAnimated = React.useRef(false);

  useEffect(() => {
    if (hasAnimated.current) {
      setCount(end);
      return;
    }

    //  First-time animation
    hasAnimated.current = true;

    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      setCount(Math.min(Math.floor(start), end));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, []);

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
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 to-transparent pointer-events-none" />

      {/* Header with Live indicator */}
      {/* <div className="flex items-center justify-between mb-7">
        <h3 className="text-xl font-bold text-gray-800">Live Overview</h3>
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500" />
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wide">
            Live
          </span>
        </div>
      </div> */}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-5">
        {/* Total Collection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50/80 rounded-2xl p-5 border border-gray-100"
        >
          <p className="text-sm text-gray-600 mb-1.5">Total Collection</p>
          <p className="text-3xl font-bold text-gray-900">
            <CountUp end={collection} duration={2500} />
          </p>
        </motion.div>

        {/* Expenses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-50/80 rounded-2xl p-5 border border-gray-100"
        >
          <p className="text-sm text-gray-600 mb-1.5">Expenses</p>
          <p className="text-3xl font-bold text-red-600">
            <CountUp end={expenses} duration={2500} />
          </p>
        </motion.div>

        {/* Net Balance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 col-span-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1.5">Net Balance</p>
              <p className="text-4xl font-extrabold text-green-600">
                <CountUp end={balance} duration={3000} />
              </p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-green-600"
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
          <div className="mt-4">
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
