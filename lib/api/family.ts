// import { PersonFormValues } from "@/schema/personFormSchema";
import api from "./axiosConfig";

import { FamilyTreeSearchResponse } from "@/types/family";
// import { OrgLinkRequest } from "@/types/orgtree";

export const familyApi = {
  searchFamilyTree: async (params: {
    name?: string;
    person?: {
      name?: string;
      dateOfBirth?: string;
      address?: string;
    };
  }): Promise<FamilyTreeSearchResponse[]> => {
    try {
      // Use query parameters for GET request
      const queryParams: Record<string, string> = {};

      if (params.name?.trim())
        queryParams.name = params.name.trim().toLowerCase();

      // Fix the parameter names to match backend expectations
      if (params.person?.name?.trim())
        queryParams["person.name"] = params.person.name.trim();
      if (params.person?.dateOfBirth)
        queryParams["person.dateOfBirth"] = params.person.dateOfBirth;
      if (params.person?.address?.trim())
        queryParams["person.address"] = params.person.address.trim();

      const response = await api.get("/v1/family/family-tree/search", {
        params: queryParams,
      });

      return response.data;
    } catch (error: any) {
      console.error("Search API error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      throw error;
    }
  },
};
