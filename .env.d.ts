interface ImportMeta {
  env: {
    readonly SUPABASE_PUBLIC_KEY: string;
    readonly SUPABASE_PRIVATE_KEY: string;
    readonly SUPABASE_URL: string;
    readonly SUPABASE_JWT_SECRET: string;
  
    readonly DATABASE_URL: string;
  }
}
