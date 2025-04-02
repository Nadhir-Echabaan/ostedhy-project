import Clock from "../../assets/statIcons/Time Circle 1.svg"; 
import Folder from "../../assets/statIcons/Folder 2.svg";
import Video from "../../assets/statIcons/Video 1.svg"; 
import Chart from "../../assets/statIcons/Chart.svg";

import Overview from "../../assets/Bar-chart.svg"; 

function OverView() {
  return (
    <div className="overview">
    <div className="overview-title">
      <img src={Overview} />
      <p>Overview</p>
    </div>
    <div className="overview-stats">
      <div className="overview-stat">
        <div className="icon">
          <img src={Clock} />
        </div>
        <div className="overview-text">
          <p>Learning Hours</p>
          <span>20h</span>
        </div>
      </div>
      <div className="overview-stat">
        <div className="icon">
          <img src={Folder} />
        </div>
        <div className="overview-text">
          <p>My Chapters</p>
          <span>20h</span>
        </div>
      </div>
      <div className="overview-stat">
        <div className="icon">
          <img src={Video} />
        </div>
        <div className="overview-text">
          <p>Recorded Sessions</p>
          <span>20h</span>
        </div>
      </div>
      <div className="overview-stat">
        <div className="icon">
          <img src={Chart} />
        </div>
        <div className="overview-text">
          <p>Learning Progress</p>
          <span>20h</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OverView
