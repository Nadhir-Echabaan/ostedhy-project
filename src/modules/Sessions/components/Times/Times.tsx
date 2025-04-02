function Times({ times }: { times: string[] }) {
  return (
    <div className="times-container">
        <div className="times">
          {times.map((time) => (
            <p className="time" key={time}>{time}</p>
          ))}
        </div>
      </div>
  )
}

export default Times
