import { jwtDecode } from "jwt-decode";
import daysjs from "dayjs";
import { errorMessage, getStorage, removeStorage } from "../utilities";

let token = getStorage("token") ? getStorage("token") : null;

export const setupInterceptors = (axiosInstance) => {
  //* Token refresh interceptor
  axiosInstance.interceptors.request.use(async (req) => {
    if (!token)
      token = getStorage("token") ? getStorage("token") : null;

    if (token) {
      const user = jwtDecode(token);
      const isExpired = daysjs.unix(user.exp).diff(daysjs()) < 1;
      if (!isExpired) {
        req.headers.Authorization = `Bearer ${token}`;
        return req;
      }
      removeStorage("token");
    }

    return req;
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      if (!error.response) {
        const message = "Error Server, please try again later";
        errorMessage([message]);
        return Promise.reject({
          status: 500,
          message,
        });
      }

      const errorMsg = error.response.data.error;
      if (errorMsg) {
        errorMessage([errorMsg])
      }
      return Promise.reject(error.response.data);
    },
  );
};