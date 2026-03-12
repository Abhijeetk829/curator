export const IS_DEV = import.meta.env.MODE === "development";

export const CAPUB = import.meta.env.VITE_CAPUB;

export const MOBILE_AD_FREQUENCY = Number(
  import.meta.env.VITE_AD_FREQUENCY_MOBILE,
);

export const DESKTOP_AD_FREQUENCY = Number(
  import.meta.env.VITE_AD_FREQUENCY_DESKTOP,
);

export const BANNER_AD_SLOT = import.meta.env.VITE_BANNER_AD_SLOT;
export const GRID_AD_SLOT = import.meta.env.VITE_GRID_AD_SLOT;
export const AD_NAME = import.meta.env.VITE_AD_ID;
