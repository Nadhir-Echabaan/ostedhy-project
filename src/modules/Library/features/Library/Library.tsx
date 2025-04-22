// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useState } from "react";

import RecordedSessionCard from "../../../Subjects/components/RecordedSessionCard/RecordedSessionCard";

import ChapterCard from "../../../Subjects/components/ChapterCard/ChapterCard";
import Subject from "../../../Subjects/components/Subject/Subject";
import LibraryHeader from "../../components/LibraryHeader/LibraryHeader";

import { formatRecordedData } from "../../../Subjects/helpers/formatRecordedData";
import Favorite from "../../components/Favorite/Favorite";
import {
  useGetFavoriteChaptersQuery,
  useGetPurchasedSubjectsQuery,
} from "../../data/library";
import { useGetPurchasedChaptersQuery } from "../../data/library";
import { useGetRecordingsQuery } from "../../data/library";

function Library() {
  const [activeTab, setActiveTab] = useState("subjects");

  const { data: purchasedSubjects, isLoading: isLoadingPurchasedSubjects } =
    useGetPurchasedSubjectsQuery();
  const { data: purchasedChapters, isLoading: isLoadingPurchasedChapters } =
    useGetPurchasedChaptersQuery();
  const { data: recordings, isLoading: isLoadingRecordings } =
    useGetRecordingsQuery();
  const { data: favoriteChapters, isLoading: isLoadingFavoriteChapters } =
    useGetFavoriteChaptersQuery();

  if (!purchasedSubjects) return;
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
          {recordings.map((recordedLiveSession) => (
            <RecordedSessionCard recordedSession={recordedLiveSession} />
          ))}
        </main>
      )}
      {activeTab === "favorite" && <Favorite />}
    </>
  );
}

export default Library;
