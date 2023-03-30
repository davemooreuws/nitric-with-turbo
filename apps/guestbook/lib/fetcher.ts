export default async function fetcher(url: string, init?: RequestInit) {
  const res = await fetch(url, init);
  const contentType = res.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return await res.json();
  }

  return res.text();
}
