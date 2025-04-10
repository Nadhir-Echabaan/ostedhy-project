function LiveSessions() {
  return (
    <div className="fetched-live-sessions">
      <p className="fetched-sessions-title">Live Sessions</p>
      <div className="fetched-live-sessions-container">
        {/* <div className="fetched-live-session">
          <p className="fetched-session-title">Serie de revision n° 1</p>
          <p className="fetched-session-teacher">Tarek ben brahim</p>
          <div className="space-between">
            <span className="fetched-session-timing">08:00 - 10:00</span>
            <span className="fetched-session-subject">Chimie</span>
          </div>
        </div> */}
        <p className="no-fetched-sessions">No sessions for this day, have a rest</p>
      </div>
    </div>
  );
}

export default LiveSessions;
