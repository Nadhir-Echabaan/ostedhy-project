import Calendar from "../../assets/Calendar_active.svg";
import ExpireSoonTable from "../ExpireSoonTable/ExpireSoonTable";
function ExpireSoon() {
  return (
    <>
    <div className="expired-soon-title">
      <img src={Calendar} />
      <p>Expired soon</p>
    </div>
      <ExpireSoonTable />
    </>
  );
}

export default ExpireSoon;
