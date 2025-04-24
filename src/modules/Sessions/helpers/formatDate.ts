// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
export function getDate (dateString:string) {
  const date = new Date(dateString);
  const options = { weekday: 'long', day: '2-digit', month: 'long' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

