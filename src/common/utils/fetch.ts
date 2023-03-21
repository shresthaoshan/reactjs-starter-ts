const BASE_URL = "https://omdbapi.com";

export const localFetch = async <T>(url: string, init?: RequestInit) => {
	const [pathname, queries] = url.toString().split("?") || "";

	const q = new URLSearchParams(queries);

	const apiKey = localStorage.getItem("apiKey");
	if (apiKey) q.set("apiKey", apiKey);

	const req = await fetch(`${BASE_URL}${pathname}?${q.toString()}`, { ...init, mode: "cors" });

	return req.json() as Promise<T>;
};
