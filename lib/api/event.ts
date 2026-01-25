import api from "./axiosConfig";
import type { EventResponse, PageResponse } from "@/types/event";

const baseUrl = "/v1/social/event/events";

export const eventApi = {
  // Fetch popular events (paginated)
  getPopularEvents: async (
    nextPage?: string,
  ): Promise<PageResponse<EventResponse>> => {
    const response = await api.get<PageResponse<EventResponse>>(
      `${baseUrl}/popular`,
      {
        params: { next: nextPage },
      },
    );
    return response.data;
  },

  // Fetch all events (paginated)
  getAllEvents: async (
    nextPage?: string,
  ): Promise<PageResponse<EventResponse>> => {
    const response = await api.get<PageResponse<EventResponse>>(
      `${baseUrl}/all`,
      {
        params: { next: nextPage },
      },
    );
    return response.data;
  },

  // Fetch event by ID
  getEventById: async (eventId: string): Promise<EventResponse> => {
    const response = await api.get<EventResponse>(`${baseUrl}/${eventId}`);
    return response.data;
  },

  // Fetch events owned by user
  getMyEvents: async (
    nextPage?: string,
  ): Promise<PageResponse<EventResponse>> => {
    const response = await api.get<PageResponse<EventResponse>>(
      `${baseUrl}/own`,
      {
        params: { next: nextPage },
      },
    );
    return response.data;
  },

  // Fetch events user is going to
  getGoingEvents: async (
    nextPage?: string,
  ): Promise<PageResponse<EventResponse>> => {
    const response = await api.get<PageResponse<EventResponse>>(
      `${baseUrl}/going`,
      {
        params: { next: nextPage },
      },
    );
    return response.data;
  },
};
