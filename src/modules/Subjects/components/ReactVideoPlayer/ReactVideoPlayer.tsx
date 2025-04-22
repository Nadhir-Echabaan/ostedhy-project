import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
function ReactVideoPlayer({ recordedData }: { recordedData: any[] }) {
  return (
    <>
      <div className="video-container">
        <div className="video-header">
          <span>{recordedData.level}</span>
          {<p>{recordedData?.session_title}</p>}
        </div>
        <Video>
          <source
            src="https://nemnkkgusenwmqjxkqeg.supabase.co/storage/v1/object/public/teaching_video//22182-325698769_small.mp4"
            type="video/webm"
          />
        </Video>
      </div>
    </>
  );
}

export default ReactVideoPlayer;
