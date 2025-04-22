import ReactVideoPlayer from "../../components/ReactVideoPlayer/ReactVideoPlayer";
import RecordOverview from "../../components/RecordOverview/RecordOverview";

import { useParams } from "react-router-dom";
import {
  useGetLevelQuery,
  useGetRecordedSessionsBySubjectIdQuery,
} from "../../data/subjects";

function Tutorial() {
  const { id, sessionId } = useParams();
  const subjectId = Number(id);
  const recordedId = Number(sessionId);
  const { data, isLoading } = useGetRecordedSessionsBySubjectIdQuery({
    subjectId,
  });

  let recordedData = data
  ?.filter((session: any) => session.id === recordedId)
  .at(0);
  const levelId = recordedData?.subjects?.level_id;
  const { data: level } = useGetLevelQuery({ levelId });
  if (level) {
    recordedData = { ...recordedData, level: level.at(0).level };
  }
  if (!data) return;


  return (
    <div className="tutorial-container">
      <ReactVideoPlayer recordedData={recordedData} />
      <RecordOverview recordedData={recordedData} />
    </div>
  );
}

export default Tutorial;
