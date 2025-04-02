// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

import UncoloredSubjectStar from "../../assets/subject-star.svg";
import ColoredSubjectStar from "../../assets/coloredSubjectStar.svg";
import Star from "../../assets/Star 1.svg";

import { useNavigate } from "react-router-dom";

import { useGetChaptersQuery } from "../../data/getChapters";

import { formatExpireDate } from "../../helpers/formatExpireDate";

import {
  useGetSubjectsQuery,
  useUpdateSubjectMutation,
} from "../../data/subjectsApi";

function Subject({ subjectData }) {
  const navigate = useNavigate();
  if (!subjectData) return;

  const {
    subject_name,
    id: subjectId,
    is_purchased,
    expire_date,
    favorite,
  } = subjectData;

  const { refetch } = useGetSubjectsQuery();

  const { data: chapters } = useGetChaptersQuery({ subjectId });
  const [updateSubject] = useUpdateSubjectMutation();

  const handleUpdate = async () => {
    try {
      await updateSubject({ subjectId, favorite });
      refetch();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (!chapters?.length) return;

  const handleNavigate = () => {
    navigate(`/subjects/${subjectId}`);
  };

  return (
    <>
      <div className="position-relative">
        <div className="subject" onClick={() => handleNavigate()}>
          <div className="subject-image">
            <span>{subject_name}</span>
          </div>
          <div className="subject-informations">
            <p className="subject-name">{subject_name}</p>
            <div className="progress">
              <ProgressBar subjectProgress={20} />
              <span className="percentage">20%</span>
            </div>
            <div className="subject-stats">
              <p>{chapters?.length} chapters</p>
              <p>90.5 Hours</p>
              <p className="reviews">
                <img src={Star} />

                <span>4.8 (reviews)</span>
              </p>
            </div>
            <div className="buy-btn">
              <button
                className={`${is_purchased ? "btn is-purchased" : "btn"}`}
              >
                {is_purchased
                  ? `Expires on ${formatExpireDate(expire_date)}`
                  : "Buy 5PTS/Month"}
              </button>
            </div>
          </div>
        </div>
        <div className="star-container">
          <img
            onClick={() => {
              handleUpdate();
            }}
            src={favorite === true ? ColoredSubjectStar : UncoloredSubjectStar}
          />
        </div>
      </div>
    </>
  );
}

export default Subject;
