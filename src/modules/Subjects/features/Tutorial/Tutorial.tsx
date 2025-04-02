import ReactVideoPlayer from "../../components/ReactVideoPlayer/ReactVideoPlayer"
import RecordOverview from "../../components/RecordOverview/RecordOverview"

import { useParams } from "react-router-dom"
import { useGetRecordedSessionsQuery } from "../../data/recordedSessionsApi";

function Tutorial() {
  const {id, sessionId} = useParams(); 
  const subjectId = Number(id); 
  const recordedId = Number(sessionId); 
  const {data} = useGetRecordedSessionsQuery({subjectId})
  const recordedData = data?.at(0).live_sessions_grp?.live_sessions.filter((recorded:any) => recorded.id === recordedId)
  
  
  
  return (
    <div className="tutorial-container">
      <ReactVideoPlayer recordedData={recordedData} />
      <RecordOverview recordedData={recordedData}  />
    </div>
  )
}

export default Tutorial
