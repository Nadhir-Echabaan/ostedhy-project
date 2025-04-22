import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

import { useState } from "react";
import Subject from "../../../Subjects/components/Subject/Subject";
import ChapterCard from "../../../Subjects/components/ChapterCard/ChapterCard";
import RecordedSessionCard from "../../../Subjects/components/RecordedSessionCard/RecordedSessionCard";

import {
  useGetFavoriteChaptersQuery,
  useGetFavoriteSubjectsQuery,
  useGetFavoriteRecordingsQuery,
} from "../../data/library";

function Favorite() {
  const [shevronUpSub, setShevronUpSub] = useState(true);
  const [shevronUpChap, setShevronUpChap] = useState(true);
  const [shevronUpRec, setShevronRec] = useState(true);
  function handleClickShevronSub() {
    setShevronUpSub((up) => !up);
  }
  function handleClickShevronChap() {
    setShevronUpChap((up) => !up);
  }
  function handleClickShevronRec() {
    setShevronRec((up) => !up);
  }
  const { data: favoriteChapters, isLoading: isLoadingFavoriteChapters } =
    useGetFavoriteChaptersQuery();
  const { data: favoriteSubjects, isLoading: isLoadingFavoriteSubjects } =
    useGetFavoriteSubjectsQuery();
  const { data: favoriteRecordings, isLoading: isLoadingFavoriteRecordings } =
    useGetFavoriteRecordingsQuery();

  return (
    <div className="">
      <div>
        <div className="item-drop-down">
          <p>Subjects</p>
          <FaChevronDown
            onClick={handleClickShevronSub}
            className={`icon ${shevronUpSub === true ? "" : "hidden"}`}
          />
          <FaChevronUp
            onClick={handleClickShevronSub}
            className={`icon ${shevronUpSub === true ? "hidden" : ""}`}
          />
        </div>
        {shevronUpSub && !favoriteSubjects?.length && (
          <div className="no-data">There is no Subjects for the momnent</div>
        )}
        {shevronUpSub && favoriteSubjects?.length !== 0 && (
          <main className="chapters padding-bottom">
            {favoriteSubjects?.map((favoriteSubject) => (
              <Subject subjectData={favoriteSubject} />
            ))}
          </main>
        )}
      </div>
      <div>
        <div className="item-drop-down">
          <p>Chapters</p>
          <FaChevronDown
            onClick={handleClickShevronChap}
            className={`icon ${shevronUpChap === true ? "" : "hidden"}`}
          />
          <FaChevronUp
            onClick={handleClickShevronChap}
            className={`icon ${shevronUpChap === true ? "hidden" : ""} `}
          />
        </div>
        {shevronUpChap && !favoriteChapters?.length && (
          <div className="no-data">There is no Chapters for the moment</div>
        )}
        {shevronUpChap && favoriteChapters?.length !== 0 && (
          <main className="chapters">
            {favoriteChapters?.map((favoriteChapter) => (
              <ChapterCard chapterData={favoriteChapter} />
            ))}
          </main>
        )}
      </div>
      <div>
        <div className="item-drop-down">
          <p>Recordings</p>
          <FaChevronDown
            onClick={handleClickShevronRec}
            className={`icon ${shevronUpRec === true ? "" : "hidden"}`}
          />
          <FaChevronUp
            onClick={handleClickShevronRec}
            className={`icon ${shevronUpRec === true ? "hidden" : ""}`}
          />
        </div>
        {shevronUpRec && !favoriteRecordings?.length && (
          <div className="no-data">There is no recordings for the moment</div>
        )}
        {shevronUpRec && favoriteRecordings?.length !== 0 && (
          <main className="chapters">
            {favoriteRecordings?.map((favoriteRecordedSession) => (
              <RecordedSessionCard recordedSession={favoriteRecordedSession} />
            ))}
          </main>
        )}
      </div>
    </div>
  );
}

export default Favorite;
