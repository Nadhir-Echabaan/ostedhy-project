export function formatExpireDate(expireDate:string) {
  const [year,month, day] = expireDate.split("-");
  const formatYear = year.slice(2,4); 
  return `${day}/${month}/${formatYear}`
}
