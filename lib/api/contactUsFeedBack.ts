import api from "./axiosConfig";
import { ContactUs } from "@/types/contactUsFeedBack";
export const contactUs = async (data: ContactUs): Promise<void> => {
  try {
    const response = await api.post("/v1/contact-us/submit", data);
    return response.data;
  } catch (error: any) {
    console.error("Error submitting contact us form:", error);
    throw new Error(
      error.response?.data?.message || "Failed to submit contact us form."
    );
  }
};

export default contactUs;
