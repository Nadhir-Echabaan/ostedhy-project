import Chronometer from "../../assets/u_tachometer-fast-alt (1).svg"; 
import ExpireSoonTable from "../ExpireSoonTable/ExpireSoonTable";
import LearningProgressTable from "../LearningProgressTable/LearningProgressTable";
function LearningProgress() {
  return (
    <>
    <div className="expired-soon-title">
      <img src={Chronometer} />
      <p>Learning Progress</p>
    </div>
      <LearningProgressTable />
    </>
  );
}

export default LearningProgress;
