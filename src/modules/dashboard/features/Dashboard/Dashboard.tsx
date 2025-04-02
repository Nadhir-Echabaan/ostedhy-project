import OverView from "../../components/Overview/Overview";

import Calendar from "../../assets/Calendar_active.svg";
import Video from "../../assets/video.svg"; 

function Dashboard() {
  return (
    <div className="dashboard-container">
      <main>
        <OverView />
        <div className="section-tabs">
          <div className="tab-left">
            <div className="expired-soon-title">
              <img src={Calendar} />
              <p>Expired soon</p>
            </div>
          </div>
          <div className="tab-right">
            <div className="chapters-title">
              <img src={Video} />
              <p>Last Uploaded Chapters</p>
            </div>
            <div className="section-latest">
              <div className="section-title">chapter</div>
              <div className="divider"></div>
              <div className="section-content">
                <div className="items">
                  </div>                
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="right-side-bar"></div>
    </div>
  );
}

export default Dashboard;
