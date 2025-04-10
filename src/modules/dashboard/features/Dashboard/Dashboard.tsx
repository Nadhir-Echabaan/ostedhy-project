import OverView from "../../components/Overview/Overview";

import ExpireSoon from "../../components/ExpireSoon/ExpireSoon";
import Chapters from "../../components/Chapters/Chapters";
import LearningProgress from "../../components/LearningProgress/LearningProgress";
import BasicDateCalendar from "../../components/CalendarPicker/CalendarPicker";
import LiveSessions from "../../components/LiveSessions/LiveSessions";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <main>
        <OverView />
        <div className="section-tabs">
          <div className="tab-left">
            <ExpireSoon />
            <LearningProgress />
          </div>
          <div className="tab-right">
            <Chapters />
          </div>
        </div>
      </main>
      <div className="right-side-bar">
        <BasicDateCalendar />
        <LiveSessions />  
      </div>
    </div>
  );
}

export default Dashboard;
