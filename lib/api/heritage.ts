import api from "./axiosConfig";
import type {
  HeritageResponse,
  HeritageRequest,
  HeritageUpdateRequest,
  PageResponse,
} from "@/types/heritage";
const baseUrl = "/v1/heritages";
export const heritageApi = {
  // Create a new heritage
  createHeritage: async (data: HeritageRequest): Promise<HeritageResponse> => {
    const response = await api.post<HeritageResponse>(baseUrl, data);
    return response.data;
  },

  // Fetch all heritages (paginated)
  getAllHeritages: async (
    nextPage?: string
  ): Promise<PageResponse<HeritageResponse>> => {
    const response = await api.get<PageResponse<HeritageResponse>>(
      `${baseUrl}/all`,
      {
        params: { next: nextPage },
      }
    );
    return response.data;
  },

  // Fetch heritages owned by the logged-in user (paginated)
  getHeritageByUser: async (
    nextPage?: string
  ): Promise<PageResponse<HeritageResponse>> => {
    const response = await api.get<PageResponse<HeritageResponse>>(
      `${baseUrl}/own`,
      {
        params: { next: nextPage },
      }
    );
    return response.data;
  },

  // Fetch a single heritage by ID
  getHeritageById: async (heritageId: string): Promise<HeritageResponse> => {
    const response = await api.get<HeritageResponse>(
      `${baseUrl}/${heritageId}`
    );
    return response.data;
  },

  // Fetch popular heritages (paginated)
  getPopularHeritages: async (
    nextPage?: string
  ): Promise<PageResponse<HeritageResponse>> => {
    const response = await api.get<PageResponse<HeritageResponse>>(
      `${baseUrl}/popular`,
      {
        params: { next: nextPage },
      }
    );
    return response.data;
  },

  getSearchHeritage: async (
    name: string,
    nextPage?: string
  ): Promise<PageResponse<HeritageResponse>> => {
    const response = await api.get<PageResponse<HeritageResponse>>(
      `${baseUrl}/filter`,
      {
        params: {
          name: name,
          next: nextPage,
        },
      }
    );
    return response.data;
  },

  // Fetch recommended heritages (paginated)
  getRecommendedHeritages: async (
    nextPage?: string,
    latitude?: number,
    longitude?: number
  ): Promise<PageResponse<HeritageResponse>> => {
    const response = await api.get<PageResponse<HeritageResponse>>(
      `${baseUrl}/recommended`,
      {
        params: {
          next: nextPage,
          latitude: latitude,
          longitude: longitude,
        },
      }
    );
    return response.data;
  },
  // Fetch heritages tyes
  getHeritageTypes: async (): Promise<string[]> => {
    const response = await api.get<string[]>(`${baseUrl}/heritage-types`);
    return response.data;
  },

  // Update an existing heritage
  updateHeritage: async (
    heritageId: string,
    data: HeritageUpdateRequest
  ): Promise<HeritageResponse> => {
    const response = await api.put<HeritageResponse>(
      `${baseUrl}/${heritageId}`,
      data
    );
    return response.data;
  },

  // Delete a heritage by ID
  deleteHeritage: async (heritageId: string): Promise<void> => {
    await api.delete(`${baseUrl}/${heritageId}`);
  },

  transferOwnership: async (
    heritageId: string,
    newOwnerId: string
  ): Promise<any> => {
    if (!heritageId || !newOwnerId)
      throw new Error("Missing heritage ID or new owner ID");
    const response = await api.put(
      `${baseUrl}/change-owner/${heritageId}/${newOwnerId}`
    );
    return response.data;
  },
};
