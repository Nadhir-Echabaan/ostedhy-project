import LiveSession from "../LiveSession/LiveSession";
function TableRow({
  sessions,
  time,
  daysOfWeek,
  onOpenModal,
  onGroupeSessionId,
}) {
  const Monday = sessions.filter((session) => session.day === "Monday");
  const Tuesday = sessions.filter((session) => session.day === "Tuesday");
  const Wednesday = sessions.filter((session) => session.day === "Wednesday");
  const Thursday = sessions.filter((session) => session.day === "Thursday");
  const Friday = sessions.filter((session) => session.day === "Friday");
  const Saturday = sessions.filter((session) => session.day === "Saturday");
  const Sunday = sessions.filter((session) => session.day === "Sunday");
  return (
    <tr>
      <td>
        {Monday &&
          Monday.map((session) => {
            if (session.start === time && daysOfWeek.includes(session.date))
              return (
                <LiveSession
                  session={session}
                  key={session}
                  onOpenModal={onOpenModal}
                  onGroupeSessionId={onGroupeSessionId}
                />
              );
          })}
      </td>
      <td>
        {Tuesday &&
          Tuesday.map((session) => {
            if (session.start === time && daysOfWeek.includes(session.date))
              return (
                <LiveSession
                  session={session}
                  key={session}
                  onOpenModal={onOpenModal}
                  onGroupeSessionId={onGroupeSessionId}
                />
              );
          })}
      </td>
      <td>
        {Wednesday &&
          Wednesday.map((session) => {
            if (session.start === time && daysOfWeek.includes(session.date))
              return (
                <LiveSession
                  session={session}
                  key={session}
                  onOpenModal={onOpenModal}
                  onGroupeSessionId={onGroupeSessionId}
                />
              );
          })}
      </td>
      <td>
        {Thursday &&
          Thursday.map((session) => {
            if (session.start === time && daysOfWeek.includes(session.date))
              return (
                <LiveSession
                  session={session}
                  key={session}
                  onOpenModal={onOpenModal}
                  onGroupeSessionId={onGroupeSessionId}
                />
              );
          })}
      </td>
      <td>
        {Friday &&
          Friday.map((session) => {
            if (session.start === time && daysOfWeek.includes(session.date))
              return (
                <LiveSession
                  session={session}
                  key={session}
                  onOpenModal={onOpenModal}
                  onGroupeSessionId={onGroupeSessionId}
                />
              );
          })}
      </td>
      <td>
        {Saturday &&
          Saturday.map((session) => {
            if (session.start === time && daysOfWeek.includes(session.date))
              return (
                <LiveSession
                  session={session}
                  key={session}
                  onOpenModal={onOpenModal}
                  onGroupeSessionId={onGroupeSessionId}
                />
              );
          })}
      </td>
      <td>
        {Sunday &&
          Sunday.map((session) => {
            if (session.start === time && daysOfWeek.includes(session.date))
              return (
                <LiveSession
                  session={session}
                  key={session}
                  onOpenModal={onOpenModal}
                  onGroupeSessionId={onGroupeSessionId}
                />
              );
          })}
      </td>
    </tr>
  );
}

export default TableRow;
