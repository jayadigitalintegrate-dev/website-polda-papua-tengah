export const API_CONFIG = {
  useMock: false,

  baseUrl:
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.DEV
      ? "http://127.0.0.1:8000/api"
      : ""),

  uploadUrl:
    import.meta.env.VITE_UPLOAD_URL || "",

  timeout: 10000,
};
