import { useGetTeacherQuery } from "../data/getTeacher";
import { useGetLevelQuery } from "../data/getLevel";
export function formatRecordedData(recordedSessions: any[], subject: any) {
  const liveSessionProperty = Closed(
    recordedSessions?.[0]?.live_sessions_grp?.live_sessions
  );
  const levelIdProperty = recordedSessions?.[0]?.subjects?.level_id;
  const teacherIdProperty =
    recordedSessions?.[0]?.live_sessions_grp?.teacher_id;
  const expire = recordedSessions?.[0]?.expire_date;
  const favorite = recordedSessions?.[0]?.favorite;

  const { data: teacher } = useGetTeacherQuery({ teacherIdProperty });
  const { data: level } = useGetLevelQuery({ levelIdProperty });

  let recordedLiveSessions = [];

  if (teacher && level && liveSessionProperty) {
    recordedLiveSessions = liveSessionProperty.map(
      (recordedLiveSession: any) => ({
        ...recordedLiveSession,
        teacher: teacher?.[0],
        level: level?.at(0),

        subject: {
          subject_name: subject?.subject_name,
          subjectId: subject?.id,
        },
        expire,
        favorite,
      })
    );
  }
  return recordedLiveSessions;
}

function Closed(liveSessions: any[]) {
  const now = new Date();
  return liveSessions?.filter(
    (liveSession) => new Date(liveSession.end_at) < now
  );
}
