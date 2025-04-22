function LiveSessions({ selectedSessions }) {
  if (!selectedSessions) return;
  console.log(selectedSessions);

  return (
    <div className="fetched-live-sessions">
      <p className="fetched-sessions-title">Live Sessions</p>
      <div className="fetched-live-sessions-container">
        {selectedSessions.map((session) => (
          <div className="fetched-live-session">
            <p className="fetched-session-title">{session.session_title}</p>
            <p className="fetched-session-teacher">
              {session.teachers.fullname}
            </p>
            <div className="space-between">
              <span className="fetched-session-timing">
                {session?.start_at?.slice(11, 16)} - {" "}
                {session?.end_at?.slice(11, 16)}
              </span>
              <span className="fetched-session-subject">
                {session.subjects.subject_name}
              </span>
            </div>
          </div>
        ))}
        {!selectedSessions.length && (
          <p className="no-fetched-sessions">
            No sessions for this day, have a rest
          </p>
        )}
      </div>
    </div>
  );
}

export default LiveSessions;
