export function markSoonestSession(sessions:any[]) {
  const currentDate = new Date(); 
  const upcomingSessions = sessions.filter((session) => new Date(session.start_at) > currentDate );
  if (!upcomingSessions.length) return sessions;
  const soonestSession = upcomingSessions.reduce((soonest, session) => 
    new Date(session.start_at) < new Date(soonest.start_at) ? session : soonest
  );
  return sessions.map((session) => ({...session , isSoonest:session.id === soonestSession.id}))
}
