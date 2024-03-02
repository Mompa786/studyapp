import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData = null, headers = null, params = null) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData,
    headers: headers,
    params: params,
  })
  .catch((error) => {
    // Handle Axios request error
    console.error("API Request Error:", error);
    throw error; // Re-throw the error to propagate it further
  });
};
;
