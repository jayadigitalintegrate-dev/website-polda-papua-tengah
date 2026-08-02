export const API_CONFIG = {
  useMock: true,

  baseUrl:
    import.meta.env.VITE_API_BASE_URL || "",

  uploadUrl:
    import.meta.env.VITE_UPLOAD_URL || "",

  timeout: 10000,
};