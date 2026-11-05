declare module "@/server/mock-api.cjs" {
  export function handleMockApi(req: unknown, res: unknown, pathname: string, searchParams: URLSearchParams): boolean;
}
