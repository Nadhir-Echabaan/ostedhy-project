// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
export function getTime(dateSTMZP) {
  const date = new Date(dateSTMZP);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timeOnly = `${hours}:${minutes}`;
  return timeOnly;
}
