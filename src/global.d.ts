/// <reference types="svelte" />
/// <reference types="vite-svg-loader" />

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

