import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { catalogData } from "../apis";

export const getCatalogPageData = async (categoryId) => {
  console.log(`dk- ${categoryId}`);
  const toastId = toast.loading("Loading...");
  let result = null;

  try {
    const response = await apiConnector("POST", catalogData.CATALOGPAGEDATA_API, {
      categoryId: categoryId,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Category page data.");
    }

    result = response?.data;
  } catch (error) {
    console.error("CATALOGPAGEDATA_API API ERROR............", error);
    toast.error("Failed to fetch catalog page data. Please try again.");
    result = { error: error.message, response: error.response?.data };
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};
