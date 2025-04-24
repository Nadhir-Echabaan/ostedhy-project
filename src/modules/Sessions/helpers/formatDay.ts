// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
export function getDay(dateSTMPZ) {
  const date = new Date(dateSTMPZ);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  return dayName; 
}
