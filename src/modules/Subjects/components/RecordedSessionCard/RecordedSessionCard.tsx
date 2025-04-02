// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useNavigate } from "react-router-dom";

import ProgressBar from "../ProgressBar/ProgressBar";

import YellowStar from "../../assets/Star 1.svg";
import TeacherAvatar from "../../assets/Ellipse 225.png";
import session from "redux-persist/lib/storage/session";

import UncoloredRecordedStar from "../../assets/subject-star.svg";
import ColoredRecordedStar from "../../assets/coloredSubjectStar.svg";

import { calculateSessionDuration } from "../../helpers/calculateSessionDuration";
import { formatDuration } from "../../helpers/calculateTotalHours";
import { calculateDurationInSec } from "../../helpers/calculateTotalHours";
import { calculateSessionProgress } from "../../helpers/calculateSessionProgress";
import { formatExpireDate } from "../../helpers/formatExpireDate";
import { useUpdateRecordedSessionMutation } from "../../data/recordedSessionsApi";

function RecordedSessionCard({ recordedSession }) {
  const { subject, title, level, teacher, expire, id, favorite } =
    recordedSession;
  console.log(recordedSession);

  const { subject_name, subjectId } = subject;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/subjects/${subjectId}/${id}`);
  };

  const recordedSessionId = id;
  const [updateRecordedSession] = useUpdateRecordedSessionMutation();

  const handleUpdate = async () => {
    try {
      await updateRecordedSession({ recordedSessionId, favorite });
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      console.log(favorite);
    }
  };
  return (
    <div className="position-relative">
      <div onClick={() => handleNavigate()}>
        <div className="one-chapter-card one-live-session-card diff">
          <div className="subject-image">
            <span>{subject_name}</span>
          </div>
          <div className="card-content">
            <div className="first-row-info">
              <p>{title}</p>
              <span>{level.level}</span>
            </div>
            <div className="second-row-info">
              <ProgressBar subjectProgress={20} />
              <span>{20}%</span>
            </div>
            <div className="third-row-info">
              <p>20.5 Hours</p>
              <p className="reviews">
                <img src={YellowStar} />
                <p>{4.8}</p>
                <span>(100 reviews)</span>
              </p>
            </div>
            <div className="fourth-row-info">
              <span>Teacher:</span>
              <div>
                <img src={teacher.image_url} />
                <p>{teacher.fullName}</p>
              </div>
            </div>
            <div className="fifth-row-info">
              <button className="is-purchased">
                Expires on {formatExpireDate(expire)}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="star-container">
        <img
          onClick={() => handleUpdate()}
          src={favorite === true ? ColoredRecordedStar : UncoloredRecordedStar}
        />
      </div>
    </div>
  );
}

export default RecordedSessionCard;
