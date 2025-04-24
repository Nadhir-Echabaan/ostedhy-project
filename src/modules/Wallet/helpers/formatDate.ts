// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
export function formatDate(isoString) {
  // Create a new Date object using the input ISO string.
  const date = new Date(isoString);

  // Extract the day, month, and year.
  // Since the input has +00:00 (UTC), we use getUTC* methods.
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();

  // Format as DD/MM/YYYY
  return `${day}/${month}/${year}`;
}
