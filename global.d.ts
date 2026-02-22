/// <reference types="vite/client" />

declare module "*.module.scss" {
  const styles: Record<string, string>;
  export default styles;
}

declare module "*.module.css" {
  const styles: Record<string, string>;
  export default styles;
}

declare module "*.scss" {
  const content: string;
  export default content;
}

declare module "*.css" {
  const content: string;
  export default content;
}
