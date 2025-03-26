export interface Result {
  url: string;
  title: string;
  pageTitle?: string;
  [key: string]: any;  // Add index signature to satisfy BaseItem constraint
}

declare module '@/mdx/search.mjs' {
  export function search(query: string, options?: { limit?: number }): Result[];
} 