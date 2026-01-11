// src/api/dateConverter.ts
import api from "./axiosConfig";
import { useMutation, useQuery } from "@tanstack/react-query";

interface DateConversionPayload {
  date: string;
  format: "BS_TO_AD" | "AD_TO_BS";
}

interface DateConversionResponse {
  date: string;
  nepaliDate?: string;
}

const convertDate = async (
  payload: DateConversionPayload
): Promise<DateConversionResponse> => {
  const response = await api.post("/v1/util/convert/date", payload);
  return response.data;
};

export const useConvertDate = () => {
  return useMutation({
    mutationFn: convertDate,
  });
};

const getCurrentDate = async (format: "AD" | "BS" = "AD"): Promise<string> => {
  const response = await api.get("/v1/util/current-date", {
    params: { format },
  });
  return response.data.date;
};

export const useCurrentDate = (format: "AD" | "BS" = "AD") => {
  return useQuery({
    queryKey: ["current-date", format],
    queryFn: () => getCurrentDate(format),
  });
};

export const useDateConverter = () => {
  const { mutateAsync } = useConvertDate();

  const convertBSToAD = async (bsDate: string): Promise<string> => {
    if (!bsDate) return "";
    try {
      const response = await mutateAsync({
        date: bsDate,
        format: "BS_TO_AD",
      });
      return response.date;
    } catch (error) {
      console.error("BS to AD conversion failed:", error);
      return bsDate; // fallback to original date if conversion fails
    }
  };

  const convertADToBS = async (adDate: string): Promise<string> => {
    if (!adDate) return "";
    try {
      const response = await mutateAsync({
        date: adDate,
        format: "AD_TO_BS",
      });
      return response.date;
    } catch (error) {
      console.error("AD to BS conversion failed:", error);
      return adDate; // fallback to original date if conversion fails
    }
  };

  return { convertBSToAD, convertADToBS };
};
