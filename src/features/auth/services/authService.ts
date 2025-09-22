export const authService = {
  isAuthenticated: (): boolean => {
    if (typeof window === "undefined") {
      return false;
    }
    return !!localStorage.getItem("token");
  },
};