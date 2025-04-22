// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck

import cardImage from "../../assets/Side Bar.png";
import YellowStar from "../../assets/Star 1.svg";
import TeacherAvatar from "../../assets/Ellipse 225.png";
import UncoloredChapterStar from "../../assets/subject-star.svg";
import ColoredChapterStar from "../../assets/coloredSubjectStar.svg";

import ProgressBar from "../ProgressBar/ProgressBar";
import { calculateChapterProgress } from "../../helpers/calculateChapterProgress";
import { formatDate } from "../../../Wallet/helpers/formatDate";
import { useUpdateFavoriteChapterMutation } from "../../data/subjects";

function ChapterCard({ chapterData }) {
  const {
    chapter_name,
    subjects,
    teachers,
    favorite,
    id: chapterId,
  } = chapterData;

  const { subject_name, bought, expiration_date } = subjects;
  const { fullname: teacher_name, image_url: teacher_image } = teachers;
  const [updateFavoriteChapter] = useUpdateFavoriteChapterMutation();
  function handleFavoriteChapter() {
    updateFavoriteChapter({ favorite, chapterId });
  }
  return (
    <div className="one-chapter-card">
      <img src={cardImage} />
      <div className="card-content">
        <div className="first-row-info">
          <p>{chapter_name}</p>
          <span>{subject_name}</span>
        </div>
        <div className="second-row-info">
          <ProgressBar subjectProgress={20} />
          <span>{20}%</span>
        </div>
        <div className="third-row-info">
          <p>{1} viedos</p>
          <p>{20.5} Hours</p>
          <p className="reviews">
            <img src={YellowStar} />
            <p>4.8</p>
            <span>(100 reviews)</span>
          </p>
        </div>
        <div className="fourth-row-info">
          <span>Teacher:</span>
          <div>
            <img className="teacher-img" src={teacher_image} />
            <p>{teacher_name}</p>
          </div>
        </div>

        <div className="fifth-row-info">
          <button className={bought ? "is-purchased" : ""}>
            {bought
              ? `Expires on ${formatDate(expiration_date)}`
              : "Buy 5 PTS/Month"}
          </button>
        </div>
      </div>
      <div className="star-for-chapter">
        <img
          onClick={() => handleFavoriteChapter()}
          src={favorite === true ? ColoredChapterStar : UncoloredChapterStar}
        />
      </div>
    </div>
  );
}

export default ChapterCard;
