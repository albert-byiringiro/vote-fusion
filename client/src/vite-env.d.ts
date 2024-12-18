/// <reference types="vite/client" />

declare module '*.css';

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_HOST: string;
  readonly VITE_API_PORT: string;
  readonly VITE_POLLS_NAMESPACE: string;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
