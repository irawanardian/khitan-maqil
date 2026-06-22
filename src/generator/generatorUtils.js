export const normalizeGuestName = (name) => {
  return String(name || "")
    .trim()
    .replace(/\s+/g, " ");
};

export const buildInvitationLink = (baseLink, guestName) => {
  const cleanBase = String(baseLink || "").trim().replace(/\/+$/, "/");
  const cleanName = normalizeGuestName(guestName);

  if (!cleanName) return cleanBase;

  const url = new URL(cleanBase);
  url.searchParams.set("to", cleanName);

  return url.toString();
};

export const buildWhatsAppMessage = (template, link) => {
  return String(template || "").replaceAll("{link}", link);
};

export const copyToClipboard = async (text) => {
  await navigator.clipboard.writeText(text);
};

export const parseBulkNames = (text) => {
  return String(text || "")
    .split("\n")
    .map((name) => normalizeGuestName(name))
    .filter(Boolean);
};