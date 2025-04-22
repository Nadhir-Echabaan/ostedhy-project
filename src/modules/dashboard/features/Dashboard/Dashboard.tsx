import OverView from "../../components/Overview/Overview";

import ExpireSoon from "../../components/ExpireSoon/ExpireSoon";
import Chapters from "../../components/Chapters/Chapters";
import LearningProgress from "../../components/LearningProgress/LearningProgress";
import BasicDateCalendar from "../../components/CalendarPicker/CalendarPicker";
import LiveSessions from "../../components/LiveSessions/LiveSessions";
import { useState } from "react";

import { useGetSessionsBySelectedDateQuery } from "../../data/dashboard";

function Dashboard() {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(formattedDate);

  const { data } = useGetSessionsBySelectedDateQuery();

  const selectedSessions = data?.filter(
    (session) => session.start_at.slice(0, 10) === selectedDate
  );

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
        <BasicDateCalendar setSelectedDate={setSelectedDate} />
        <LiveSessions selectedSessions={selectedSessions} />
      </div>
    </div>
  );
}

export default Dashboard;
