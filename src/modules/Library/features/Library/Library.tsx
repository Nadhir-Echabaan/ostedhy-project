// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useState } from "react";

import RecordedSessionCard from "../../../Subjects/components/RecordedSessionCard/RecordedSessionCard";

import ChapterCard from "../../../Subjects/components/ChapterCard/ChapterCard";
import Subject from "../../../Subjects/components/Subject/Subject";
import LibraryHeader from "../../components/LibraryHeader/LibraryHeader";
import { useGetPurchasedChaptersQuery } from "../../data/purchasedChaptersApi";
import { useGetPurchasedSessionsQuery } from "../../data/purchasedSessions";
import { useGetPurchasedSubjectsQuery } from "../../data/purchasedSubjectsApi";
import { useGetTeacherQuery } from "../../../Subjects/data/getTeacher";
import { useGetLevelQuery } from "../../../Subjects/data/getLevel";
import { formatRecordedData } from "../../../Subjects/helpers/formatRecordedData";
import Favorite from "../../components/Favorite/Favorite";

function Library() {
  const [activeTab, setActiveTab] = useState("subjects");

  const { data: purchasedSubjects } = useGetPurchasedSubjectsQuery();
  const { data: purchasedSessions } = useGetPurchasedSessionsQuery();
  const { data } = useGetPurchasedChaptersQuery();

  const subject_name = purchasedSessions?.at(0).subjects.subject_name;
  const subjectId = purchasedSessions?.at(0)?.subjects?.id;
  const subject = { subject_name, subjectId};
  const recordedLiveSessions = formatRecordedData(purchasedSessions, subject);
  const purchasedChapters = data?.filter(
    (chapter) => chapter?.subjects?.is_purchased === true
  );
  if (!purchasedSubjects || !purchasedSessions || !data) return;
  return (
    <>
      <LibraryHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "subjects" && (
        <div className="subjects-grid">
          {purchasedSubjects.map((subject) => (
            <Subject subjectData={subject} />
          ))}
        </div>  
      )}
      {activeTab === "chapters" && (
        <main className="chapters">
          {purchasedChapters?.map((purchasedChapter) => (
            <ChapterCard chapterData={purchasedChapter} />
          ))}
        </main>
      )}
      {activeTab === "recording" && (
        <main className="chapters">
          {recordedLiveSessions.map((recordedLiveSession) => (
            <RecordedSessionCard recordedSession={recordedLiveSession} />
          ))}
        </main>
      )}
      {activeTab === "favorite" && <Favorite />}

    </>
  );
}

export default Library;
