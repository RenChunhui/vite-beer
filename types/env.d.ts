/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * 示例
   */
  VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
