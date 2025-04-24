// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useState } from "react";

import { HiOutlinePlay } from "react-icons/hi2";

import Folder from "../../assets/subjectStatsIcons/folder.svg";
import Clock from "../../assets/subjectStatsIcons/clock.svg";
import Star from "../../assets/subjectStatsIcons/star.svg";

function RecordOverview({ recordedData }: { recordedData: any[] }) {
  const [isClickedLessons, setClickedLessons] = useState(true);
  const [isClickedMagazines, setClickedMagazines] = useState(false);
  function handleClickButton() {
    setClickedLessons((state) => !state);
    setClickedMagazines((state) => !state);
  }

  return (
    <div className="recorded-session-informations">
      <div className="recorded-overview">
        <p className="title">Overview</p>
        <div className="overview-stats-container">
          <div className="flex-stat">
            <img src={Folder} />
            <p>1 Sections</p>
          </div>
          <div className="flex-stat">
            <img src={Clock} />
            <p>01 H 15 Min 47 Sec</p>
          </div>
          <div className="flex-stat">
            <img src={Star} />
            <p>0 (0 review)</p>
          </div>
        </div>
      </div>
      <main>
        <div className="buttons-container">
          <div className="buttons">
            <button
              onClick={handleClickButton}
              className={isClickedLessons ? "clicked" : ""}
            >
              Lessons
            </button>
            <button
              onClick={handleClickButton}
              className={isClickedMagazines ? "clicked" : ""}
            >
              Magazines
            </button>
          </div>
          <span
            className="underline"
            style={{ left: `${isClickedLessons ? "0px" : "110px"}` }}
          ></span>
        </div>
        <div className="sections">
          {isClickedLessons && (
            <>
              <header>
                <p>Section 1</p>
              </header>
              <div className="recorded-title">
                <HiOutlinePlay className="play-icon" />
                <p>{recordedData.session_title}tile</p>
              </div>
            </>
          )}
          {isClickedMagazines && (
            <div className="no-magazines">
              There is no magazine for this chapter
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default RecordOverview;
