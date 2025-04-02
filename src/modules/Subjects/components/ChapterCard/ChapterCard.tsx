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
import { formatExpireDate } from "../../helpers/formatExpireDate";
import {
  useGetChaptersQuery,
  useUpdateChapterMutation,
} from "../../data/getChapters";
function ChapterCard({ chapterData }) {
  const {
    chapter_name,
    subjects,
    teachers,
    favorite,
    id: chapterId,
  } = chapterData;

  const { subject_name, is_purchased, expire_date } = subjects;
  const { fullName: teacher_name, image_url: teacher_image } = teachers;

  const [updateChapter] = useUpdateChapterMutation();

  

  const handleUpdate = async () => {
    try {
      await updateChapter({ chapterId, favorite });
    } catch (err) {
      console.error("Update failed:", err);
    } 
  };

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
          <button className={is_purchased ? "is-purchased" : ""}>
            {is_purchased
              ? `Expires on ${formatExpireDate(expire_date)}`
              : "Buy 5 PTS/Month"}
          </button>
        </div>
      </div>
      <div className="star-for-chapter">
        <img
          onClick={() => handleUpdate()}
          src={favorite === true ? ColoredChapterStar : UncoloredChapterStar}
        />
      </div>
    </div>
  );
}

export default ChapterCard;
