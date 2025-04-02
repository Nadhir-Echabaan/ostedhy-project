export function CalcTimePassed(currentTime:any) {
  const Hours = (Number(currentTime.split(":").at(0)) - 6); 
  const Minutes = Number(currentTime.split(":").at(1));
  const distance =  (Hours * 60 + Minutes) * 0.0745 + 7.4; 
  return distance; 
}