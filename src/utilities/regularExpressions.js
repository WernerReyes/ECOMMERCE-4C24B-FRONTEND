export const regularExpressions = {
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    URL: /^https?:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+(:\d{1,5})?(\/.*)?$/i,
  };
  