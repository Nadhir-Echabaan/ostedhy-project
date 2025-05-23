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
import {
  useGetExpirationDateQuery,
  useGetLevelQuery,
  useUpdateFavoriteRecordedSessionMutation,
} from "../../data/subjects";

import { formatDate } from "../../../Wallet/helpers/formatDate";

function RecordedSessionCard({ recordedSession }) {
  const navigate = useNavigate();
  const {
    subjects,
    session_title,
    teachers,
    id: sessionId,
    favorite,
    groupe_id: groupeId,
  } = recordedSession;

  const { subject_name, id: subjectId, level_id: levelId } = subjects;
  const { image_url, fullname } = teachers;

  const { data: fetchedLevel, isLoading } = useGetLevelQuery({ levelId });
  const { data: fetchedExpirationDate, isLoading: b } =
    useGetExpirationDateQuery({ groupeId });

  const level = fetchedLevel?.at(0)?.level;
  const expiration_date = fetchedExpirationDate?.at(0)?.expiration_date;

  const [updateRecordedSession] = useUpdateFavoriteRecordedSessionMutation();
  function handleFavoriteRecordedSession() {
    updateRecordedSession({ favorite, sessionId });
  }
  function handleNavigate() {
    navigate(`/subjects/${subjectId}/${sessionId}`);
  }
  return (
    <div className="position-relative">
      <div onClick={() => handleNavigate()}>
        <div className="one-chapter-card one-live-session-card diff">
          <div className="subject-image">
            <span>{subject_name}</span>
          </div>
          <div className="card-content">
            <div className="first-row-info">
              <p>{session_title}</p>
              <span>{level}</span>
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
                <img src={image_url} />
                <p>{fullname}</p>
              </div>
            </div>
            <div className="fifth-row-info">
              <button className="is-purchased">
                Expires on {formatDate(expiration_date)}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="star-container">
        <img
          onClick={() => handleFavoriteRecordedSession()}
          src={favorite === true ? ColoredRecordedStar : UncoloredRecordedStar}
        />
      </div>
    </div>
  );
}

export default RecordedSessionCard;
