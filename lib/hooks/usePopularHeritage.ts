"use client";

// src/hooks/usePopularHeritages.ts
import { useState, useEffect } from "react";
import { heritageApi } from "@/lib/api/heritage";
import type { HeritageResponse } from "@/types/heritage";

export const usePopularHeritages = () => {
  const [heritages, setHeritages] = useState<HeritageResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeritages = async () => {
      try {
        setLoading(true);
        const response = await heritageApi.getPopularHeritages();
        setHeritages(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to load heritage sites");
        console.error("Error fetching heritages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeritages();
  }, []);

  return { heritages, loading, error };
};
