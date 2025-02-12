/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly DB_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
