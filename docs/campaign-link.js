(() => {
  const appId = "6803422848";
  const providerToken = "128677255";
  const registeredCampaignTokens = new Set([
    "site_home_ai_q4_2026",
    "github_owned_ai_q42026",
    "apple_ads_1025_us_ai",
  ]);
  const requestedToken = new URLSearchParams(window.location.search).get("ct");
  let campaignToken = registeredCampaignTokens.has(requestedToken) ? requestedToken : null;
  try {
    if (campaignToken) window.sessionStorage.setItem("aifuyelab-campaign-ct", campaignToken);
    else campaignToken = window.sessionStorage.getItem("aifuyelab-campaign-ct");
  } catch {
    // Storage can be unavailable in privacy-restricted contexts; use the URL token only.
  }
  if (!registeredCampaignTokens.has(campaignToken)) return;

  const appStoreSelector = `a[href*="/id${appId}"]`;
  function updateLink(link) {
    if (!link || typeof link.href !== "string") return;
    try {
      const url = new URL(link.href, window.location.href);
      if (url.origin !== "https://apps.apple.com" || !url.pathname.endsWith(`/id${appId}`)) return;
      url.searchParams.set("pt", providerToken);
      url.searchParams.set("ct", campaignToken);
      url.searchParams.set("mt", "8");
      link.href = url.toString();
    } catch {
      // Leave malformed and non-App-Store links unchanged.
    }
  }

  document.querySelectorAll(appStoreSelector).forEach(updateLink);
  const banner = document.querySelector('meta[name="apple-itunes-app"]');
  if (banner) banner.content = `app-id=${appId}, ct=${campaignToken}, pt=${providerToken}, mt=8`;
  document.addEventListener("click", (event) => {
    updateLink(event.target?.closest?.(appStoreSelector));
  }, true);
})();
