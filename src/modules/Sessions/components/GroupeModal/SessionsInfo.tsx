import CloseButton from "../../assets/Close_rectangle.svg";
import { markSoonestSession } from "../../helpers/markSoonestSession";
import LiveSessionItem from "./LiveSessionItem";
function SessionsInfo({ onOpenModal, liveSessionGroupe }: any) {
  const { title, subjects, teachers, live_sessions } = liveSessionGroupe;
  return (
    <>
    
    <div className="modal-overlay"></div>
    <div className="groupe-sessions-info">
      <div className="modal-header">
        <div>
          <p>Groupe Session info</p>
          <img src={CloseButton} onClick={() => onOpenModal(false)} />
        </div>
        <p className="related-chapter">{title}</p>
        <div className="groupe-infos">
          <div>
            <p>Subject:</p>
            <span className="subject-span">{subjects.subject_name}</span>
          </div>
          <div>
            <p>class:</p>
            <span>Bac sc exp</span>
          </div>
          <div>
            <p>by</p>
            <img src={teachers.image_url} />
            <span>{teachers.fullName}</span>
          </div>
        </div>
      </div>
      <div className="modal-content">
        <p className="live-sessions-count">
          {live_sessions.length} Live sessions
        </p>
        <div className="live-sessions-container">
          {markSoonestSession(live_sessions).map((live_session) => <LiveSessionItem live_session={live_session} />)}
        </div>
      </div>
      <div className="purchase">
        <div>
          <div className="with-records">
            <input type="checkbox" id="record" />
            <p>Buy Live Session Records</p>
          </div>
          <p className="extra-pricing">+5.00 TND/Month</p>
        </div>
        <button>Buy Now with 1500 PTS</button>
      </div>
    </div>
    </>
  );
}

export default SessionsInfo;
