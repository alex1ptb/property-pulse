const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    //handle case where domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching properties", error);
    return [];
  }
}

export { fetchProperties };
