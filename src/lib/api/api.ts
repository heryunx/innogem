// function to fetch data from an API with a token
export async function fetchWithToken<T>(
  url: string,
  token: string,
  options: RequestInit = {}
) {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json() as Promise<T>;
}
