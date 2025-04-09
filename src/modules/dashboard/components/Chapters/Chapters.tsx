import ChaptersTable from "../ChaptersTable/ChaptersTable";
import Video from "../../assets/video.svg";

function Chapters() {
  return (
    <>
      <div className="chapters-title">
        <img src={Video} />
        <p>Last Uploaded Chapters</p>
      </div>
      <ChaptersTable />
    </>
  );
}

export default Chapters;
