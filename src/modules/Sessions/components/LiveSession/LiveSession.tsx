function LiveSession({ session, onOpenModal,onGroupeSessionId }: any) {
  const {
    title,
    teacher,
    subject,
    start,
    end,
    GroupeSessionId: groupeSessionId,
  } = session;

  return (
    <>
      <div
        onClick={() => {
          onOpenModal(true);
          onGroupeSessionId(groupeSessionId)
        }}
        className={`live-session ${subject}`}
      >
        <div className="content">
          <span className="live-session-title">{title}</span>
          <span className="live-session-tutor">{teacher}</span>
          <div className="timing-and-subject">
            <span className="live-session-timing">
              {start} - {end}
            </span>
            <span className="matiere">{subject}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default LiveSession;
