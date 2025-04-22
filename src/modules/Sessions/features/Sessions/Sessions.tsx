// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { format, addDays, startOfWeek } from "date-fns";
import moment from "moment";

import { useState } from "react";
import { useEffect } from "react";

import {
  useGetAllLiveSessionsQuery,
  useGetLiveSessionsGroupeQuery,
} from "../../data/sessions.ts";

import { getTime } from "../../helpers/formatTime.ts";
import { getDay } from "../../helpers/formatDay.ts";
import { getDate } from "../../helpers/formatDate.ts";
import { CalcTimePassed } from "../../helpers/TimePassed.ts";

import LiveSession from "../../components/LiveSession/LiveSession";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableRow from "../../components/TableRow/TableRow.tsx";
import EmptyRow from "../../components/EmptyRow/EmptyRow";
import Times from "../../components/Times/Times";
import ArrowLeft from "../../assets/Arrow_Left.svg";
import ArrowRight from "../../assets/Arrow_Right.svg";

import Join from "../../components/GroupeModal/Join.ts";
import SessionsInfo from "../../components/GroupeModal/SessionsInfo.tsx";
import { useGetSessionsGroupeQuery } from "../../data/sessionsGroupeApi.ts";

import SuccessfulPayment from "../../components/SuccessPay/SuccessfulPayment.tsx";
import FailedPayment from "../../components/FailedPay/FailedPayment.tsx";

const times = [
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
  "00:00",
];
function Sessions() {
  ///////////////////////////////
  // handling the groupeSessionId
  ///////////////////////////////
  const [groupeSessionsId, setGroupeSessionsId] = useState(1);
  ////////////////////////////////////////////////
  // handling the opening and closing of the modal
  ////////////////////////////////////////////////
  const [isOpenModal, setIsOpenModal] = useState(false);
  ////////////////////////////
  // getting the real time
  ////////////////////////////
  const [time, setTime] = useState(moment().format("HH:mm"));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("HH:mm"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  const top = CalcTimePassed(time);
  ////////////////////////////
  // getting daysOfWeek
  ////////////////////////////
  const [today, setToday] = useState(new Date());
  const monday = startOfWeek(today, { weekStartsOn: 1 });
  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    format(addDays(monday, i), "EEEE dd MMMM")
  );
  ////////////////////////////////////////////////////////////
  //updating the month while incrementing or decrementing weeks
  ////////////////////////////////////////////////////////////
  const month = today.toLocaleString("en-US", { month: "long" });
  const year = today.getFullYear();
  const result = `${month} ${year}`;
  //////////////////////////////////////
  //handle increment by one week at once
  //////////////////////////////////////
  function handleIncrementWeek() {
    setToday((today) => addDays(today, 7));
  }
  //////////////////////////////////////
  // handle decrment by one week at once
  //////////////////////////////////////
  function handleDecrementWeek() {
    setToday((today) => addDays(today, -7));
  }
  /////////////////////////////////////////
  // getting the live sessions from supbase
  /////////////////////////////////////////
  const { data: fetchedLiveSessions, isLoading: isLoadingSessions } =
    useGetAllLiveSessionsQuery();
  /////////////////////////////////////////
  // successful payment
  /////////////////////////////////////////
  const [isOpenSuccessfullPayment, setIsOpenSuccessfullPayment] =
    useState(false);
  const [isOpenFailedPayment, setIsOpenFailedPayment] = useState(false);

  const liveSessions = fetchedLiveSessions?.map((liveSession) => ({
    ...liveSession,
    day: getDay(liveSession.start_at),
    date: getDate(liveSession.start_at),
    start: getTime(liveSession.start_at),
    end: getTime(liveSession.end_at),
    teacher: liveSession?.teachers?.fullname,
    subject_name: liveSession?.subjects?.subject_name,
  }));

  if (isLoadingSessions) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isOpenModal && (
        <SessionsInfo
          onOpenModal={setIsOpenModal}
          groupeSessionsId={groupeSessionsId}
          onOpenSuccessfullPayment={setIsOpenSuccessfullPayment}
          onOpenFailedPayment={setIsOpenFailedPayment}
        />
      )}
      {isOpenSuccessfullPayment && (
        <SuccessfulPayment
          onOpenSuccessfullPayment={setIsOpenSuccessfullPayment}
          groupeSessionsId={groupeSessionsId}
        />
      )}
      {isOpenFailedPayment && (
        <FailedPayment onOpenFailedPayment={setIsOpenFailedPayment} />
      )}
      <div className="weeks-scroller">
        <span>{result}</span>
        <div className="buttons">
          <button onClick={handleDecrementWeek}>
            <img src={ArrowRight} />
          </button>
          <button onClick={handleIncrementWeek}>
            <img src={ArrowLeft} />
          </button>
        </div>
      </div>
      <div className="flex-container">
        {Number(time.split(":").at(0)) >= 6 && (
          <div className="time-line" style={{ top: `${top}rem` }}>
            <div className="relative-container">
              <span>{time}</span>
            </div>
          </div>
        )}
        <Times times={times} />
        <table>
          <TableHeader daysOfWeek={daysOfWeek} />
          <EmptyRow />
          {times.map((time) => (
            <TableRow
              onGroupeSessionsId={setGroupeSessionsId}
              sessions={liveSessions}
              time={time}
              key={time}
              daysOfWeek={daysOfWeek}
              onOpenModal={setIsOpenModal}
            />
          ))}
        </table>
      </div>
    </>
  );
}
export default Sessions;
