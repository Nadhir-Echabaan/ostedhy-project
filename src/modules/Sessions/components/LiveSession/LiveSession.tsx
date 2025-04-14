function LiveSession({ session, onOpenModal, onGroupeSessionsId }: any) {
  const { session_title, teacher, subject_name, start, end, groupe_id } =
    session;

  return (
    <>
      <div
        onClick={() => {
          onOpenModal(true);
          onGroupeSessionsId(() => groupe_id);
        }}
        className={`live-session ${subject_name}`}
      >
        <div className="content">
          <span className="live-session-title">{session_title}</span>
          <span className="live-session-tutor">{teacher}</span>
          <div className="timing-and-subject">
            <span className="live-session-timing">
              {start} - {end}
            </span>
            <span className="matiere">{subject_name}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default LiveSession;
