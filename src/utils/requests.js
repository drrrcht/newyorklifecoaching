export const baseUrl = "http://localhost:8000";
const baseApiUrl = baseUrl + "/api/";

export async function doPost(url, data) {
  const response = await fetch(baseApiUrl + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function doGet(url) {
  try {
    const response = await fetch(baseApiUrl + url);
    return response.json();
  } catch {}
}
