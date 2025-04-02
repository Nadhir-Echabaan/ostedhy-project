function ProgressBar({subjectProgress}: {subjectProgress: number}) {
  return (
    <progress value={subjectProgress} max={100} />
  )
} 

export default ProgressBar
