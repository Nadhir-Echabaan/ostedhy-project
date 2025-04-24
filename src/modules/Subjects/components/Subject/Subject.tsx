// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import { useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

import UncoloredSubjectStar from "../../assets/subject-star.svg";
import ColoredSubjectStar from "../../assets/coloredSubjectStar.svg";
import Star from "../../assets/Star 1.svg";

import { useNavigate } from "react-router-dom";

import { formatDate } from "../../../Wallet/helpers/formatDate";

import {
  useGetChaptersBySubjectIdQuery,
  useUpdateFavoriteSubjectMutation,
  useBuySubjectMutation,
} from "../../data/subjects";
import { useGetUserPointsQuery } from "../../../Sessions/data/sessions";

function Subject({ subjectData }) {
  const { data: amount, isLoading: isLoadingAmount } = useGetUserPointsQuery(
    {}
  );
  let userPoints = amount?.points;
  const chapterPrice = 5;
  const [updateFavoriteSubject] = useUpdateFavoriteSubjectMutation();
  const [buySubject] = useBuySubjectMutation();

  const navigate = useNavigate();

  const {
    subject_name,
    id: subjectId,
    bought,
    expiration_date,
    favorite,
    reviews,
    duration,
  } = subjectData;

  const { data: chapters, isLoading: isLoadingChapters } =
    useGetChaptersBySubjectIdQuery(subjectId);

  const handleNavigate = () => {
    navigate(`/subjects/${subjectId}`);
  };

  function handleFavoriteSubject() {
    updateFavoriteSubject({ favorite, subjectId });
  }

  function handleBuySubject() {
    if (userPoints - chapterPrice >= 0) {
      buySubject({ subjectId, updatedPoints: userPoints - chapterPrice });
    }
  }
  if (!subjectData || isLoadingAmount) return;

  return (
    <>
      <div className="position-relative">
        <div className="subject">
          <div className="subject-image" onClick={() => handleNavigate()}>
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
              <p>{duration} Hours</p>
              <p className="reviews">
                <img src={Star} />

                <span>{reviews} (reviews)</span>
              </p>
            </div>
            <div className="buy-btn">
              <button
                onClick={() => handleBuySubject()}
                className={`${bought ? "btn is-purchased" : "btn"}`}
              >
                {bought
                  ? `Expires on ${formatDate(expiration_date)}`
                  : "Buy 5PTS/Month"}
              </button>
            </div>
          </div>
        </div>
        <div className="star-container">
          <img
            onClick={handleFavoriteSubject}
            src={favorite === true ? ColoredSubjectStar : UncoloredSubjectStar}
          />
        </div>
      </div>
    </>
  );
}

export default Subject;
