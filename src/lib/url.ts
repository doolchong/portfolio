const BASE = "/portfolio/";

export const withBase = (path: string) => {
  const isDev =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";

  const clean = path.replace(/^\//, "");

  return isDev ? `/${clean}` : `${BASE}${clean}`;
};
