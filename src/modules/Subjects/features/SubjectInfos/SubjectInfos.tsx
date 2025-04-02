// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck

import { useParams } from "react-router-dom";
import { useState } from "react";

import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ChapterCard from "../../components/ChapterCard/ChapterCard";

import Star from "../../assets/subjectStatsIcons/star.svg";
import Folder from "../../assets/subjectStatsIcons/folder.svg";
import Play from "../../assets/subjectStatsIcons/play.svg";
import User from "../../assets/subjectStatsIcons/user.svg";
import Clock from "../../assets/subjectStatsIcons/clock.svg";
import Download from "../../assets/subjectStatsIcons/download.svg";
import UncoloredLibraryStar from "../../assets/subject-star.svg";
import ColoredLibraryStar from "../../assets/coloredSubjectStar.svg";

import { useGetChaptersQuery } from "../../data/getChapters";
import { useGetSubjectQuery } from "../../data/getSubject";

import { calculateNumTeachers } from "../../helpers/calculateNumTeachers";
import { useGetRecordedSessionsQuery } from "../../data/recordedSessionsApi";
import RecordedSessionCard from "../../components/RecordedSessionCard/RecordedSessionCard";

import NoContent from "../../components/RecordedSessionCard/NoContent";
import { formatExpireDate } from "../../helpers/formatExpireDate";
import { formatRecordedData } from "../../helpers/formatRecordedData";

function SubjectInfos() {
  const { id } = useParams();
  const subjectId = Number(id);

  const { data: chapters } = useGetChaptersQuery({ subjectId });
  const { data: subject } = useGetSubjectQuery({ subjectId });
  const { data: recordedSessions } = useGetRecordedSessionsQuery({ subjectId });

  

  const [isClickedChapter, setIsClickedChapter] = useState(true);
  const [isClickedSession, setIsClickedSubject] = useState(false);

  function handleClickSession() {
    setIsClickedSubject((isClickedSubject) => !isClickedSubject);
    setIsClickedChapter((isClickedChapter) => !isClickedChapter);
  }
  function handleClickChapter() {
    setIsClickedChapter((isClickedChapter) => !isClickedChapter);
    setIsClickedSubject((isClickedSubject) => !isClickedSubject);
  }
  
  
  const recordedLiveSessions = formatRecordedData(recordedSessions,subject); 
  if (!chapters || !subject || !recordedSessions) return;
  const teachers = calculateNumTeachers(chapters ?? []);
  const { is_purchased, expire_date, favorite } = subject;
  

  return (
    <>
      <div className="one-subject-header">
        <div className="right-side-informations">
          <div className="subject-img">
            <p>{subject.subject_name}</p>
            <div>
              <img src={favorite ? ColoredLibraryStar : UncoloredLibraryStar} />
            </div>
          </div>
          <div className="right-side-subject-infos">
            <p className="subject-name">subject name</p>
            <p className="subject-and-class">
              {subject.subject_name} bac sciences
            </p>
            <div className="progress-container">
              <ProgressBar subjectProgress={20} />
              <span className="percentage">20%</span>
            </div>
          </div>
        </div>
        <div className="left-side-subject-infos">
          <div className="supplementary-infos">
            <div className="left">
              <div className="unit-stat">
                <img src={Star} />
                <p>Rating: </p>
                <span>4.8 (100 reviews)</span>
              </div>
              <div className="unit-stat">
                <img src={Folder} />
                <p>Chapters: </p>
                <span>{chapters.length} chapter</span>
              </div>
              <div className="unit-stat">
                <img src={Play} />
                <p>Video: </p>
                <span>1 video</span>
              </div>
            </div>
            <div className="right">
              <div className="unit-stat">
                <img src={User} />
                <p>Created By: </p>
                <span>{teachers} Teachers</span>
              </div>
              <div className="unit-stat">
                <img src={Clock} />
                <p>Duration: </p>
                <span>10.5Hours</span>
              </div>
              <div className="unit-stat">
                <img src={Download} />
                <p>Include: </p>
                <span>Lessons & Magazine</span>
              </div>
            </div>
          </div>
          {is_purchased ? (
            <div className="payment-options isBought">
              <p>Subscription Duration</p>
              <button>Expires on {formatExpireDate(expire_date)}</button>
            </div>
          ) : (
            <div className="payment-options">
              <button>Buy Now with 5.000 TND</button>
            </div>
          )}
        </div>
      </div>
      <div className="median-section">
        <div className="subject-content">
          <button
            onClick={handleClickChapter}
            className={isClickedChapter ? "active-state" : ""}
          >
            Chapters
          </button>
          <button
            onClick={handleClickSession}
            className={isClickedSession ? "active-state" : ""}
          >
            Recorded Sessions
          </button>
        </div>
        {/* <div className="sort-and-filter">
          <div className="sort-or-filter">
            <img src={Sort} />
            <span>Sort</span>
            <img src={ShevronDown} />
          </div>
          <div className="sort-or-filter">
            <img src={Filter} />
            <span>Filter</span>
            <img src={ShevronDown} />
          </div>
        </div> */}
      </div>
      <main className="chapters">
        {isClickedChapter &&
          chapters.map((chapter) => <ChapterCard chapterData={chapter} />)}
        {isClickedSession &&
          recordedLiveSessions &&
          recordedLiveSessions.map((recordedLiveSession: any) => (
            <RecordedSessionCard recordedSession={recordedLiveSession} />
          ))}
      </main>
      {isClickedSession && recordedLiveSessions.length === 0 && <NoContent />}
    </>
  );
}

export default SubjectInfos;
