import { useState, useEffect } from "react";
import { eventApi } from "@/lib/api/event";
import { EventResponse } from "@/types/event";

export const usePopularEvents = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await eventApi.getPopularEvents();
        setEvents(response.data);
      } catch (err) {
        setError("Failed to load events. Please try again later.");
        console.error("Error fetching popular events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
};
