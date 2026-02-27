export const isDev = (): boolean => {
  return import.meta.env.MODE === "development";
};

isDev.displayName = "isDev";

export default isDev;
