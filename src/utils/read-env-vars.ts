declare global {
  interface Window {
    _env_: Record<string, string>;
  }
}

/**
 * This function reads environment variables in the order: (If a value is found, it stops.)
 *  - variables defined inside object window._env_ (env variable injected by environnment, docker)
 * @param varName : the variable name
 * @returns the value of variable name
 */
export const getEnvVar = (varName: string) => {
  return window._env_ ? window._env_[varName] : import.meta.env[varName] || "";
};

export const environment = {
  productName: getEnvVar("VITE_PRODUCT") || "The amazing product",
  emailInfo: getEnvVar("VITE_EMAIL_INFO") || "info@dummy.org",
  emailBusiness: getEnvVar("VITE_EMAIL_BUSINESS") || "business@dummy.org",
  maintenanceReason: getEnvVar("VITE_MAINTENANCE_REASON"),
};
