import { checkDate } from "../../helpers/checkDate";
import {getDate} from "../../helpers/formatDate"; 
import { getTime } from "../../helpers/formatTime";

import Cursor from "../../assets/Polygon 2.svg"; 
function LiveSessionItem({ live_session }: { live_session: any }) {
  const { session_title, end_at, start_at,isSoonest } = live_session;
  const liveSessionState = checkDate(end_at);
  const start = getTime(start_at); 
  const end = getTime(end_at); 
  const date = getDate(start_at); 
  
  
  return (
    <div className={`live-session-item ${isSoonest ? "is-soonest" : ""}`}>
      <div className={`session-state ${liveSessionState === true ? "closed" : ""}`}>
        <p>{session_title}</p>
        <span>{liveSessionState === true ? "Closed" : "Upcoming"}</span>
      </div>
      <div className={`session-title ${liveSessionState === true ? "closed" : ""}`}>
        <p className={`${liveSessionState === true ? "closed" : ""}-title`}>{session_title}</p>
      </div>
      <div className="session-date">
        <p>{date}, . {start} - {end}</p>
      </div>
      {isSoonest && <img className="cursor" src={Cursor}/>}
    </div>
  );
}

export default LiveSessionItem;
