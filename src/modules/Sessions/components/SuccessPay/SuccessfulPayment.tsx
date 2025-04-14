import Success from "../../assets/Group 33591.svg";
import CloseButton from "../../assets/Close_circle.svg";

import {
  useGetRelatedLiveSessionsQuery,
  useGetLiveSessionsGroupeQuery,
} from "../../data/sessions";
function SuccessfulPayment({
  onOpenSuccessfullPayment,
  groupeSessionsId,
}: any) {
  function handleCloseModal() {
    onOpenSuccessfullPayment(false);
  }
  const { data: relatedLiveSessions, isLoading: isLoadingRelatedLiveSessions } =
    useGetRelatedLiveSessionsQuery({ groupeSessionsId });

  const { data: liveSessionsGroupe, isLoading: isLoadingLiveSessionsGroupe } =
    useGetLiveSessionsGroupeQuery({ groupeSessionsId });

  if (isLoadingRelatedLiveSessions || isLoadingLiveSessionsGroupe) {
    return <p>Loading...</p>;
  }
  const { groupe_title, subjects, teachers } = liveSessionsGroupe.at(0);
  const { subject_name } = subjects;
  const { fullname } = teachers;

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="success-pay-modal">
        <div className="images-flex">
          <img src={Success} />
          <img
            className="close-btn"
            src={CloseButton}
            onClick={() => handleCloseModal()}
          />
        </div>
        <div className="payment-message">
          <p>your payment has been successfully</p>
          <span>Now you have the acces to your live session</span>
        </div>
        <div className="purchase-informations">
          <div className="right-part">
            <p className="very-light-gray _first">Group Session info</p>
            <p className="session-title _second">{groupe_title} </p>
            <p className="light-gray _third">
              {relatedLiveSessions?.length} live sessions
            </p>
            <p className="teacher-name _fourth">
              <span className="light-gray _fifth">By</span> {fullname}
            </p>
            <p className="very-light-gray _sixth">Purchase</p>
            <p className="package">Live Session + record</p>
          </div>
          <div className="left-part">
            <p className="very-light-gray _first">Level Info</p>
            <div className="subject-flex _second">
              <p className="light-gray">subject:</p>
              <span>{subject_name}</span>
            </div>
            <div className="division-flex _third">
              <p className="light-gray">Division:</p>
              <span>Bac sc exp</span>
            </div>
            <div className="invoice-flex">
              <p className="very-light-gray">Invoice</p>
              <span>1500 PTS</span>
            </div>
          </div>
        </div>
        <button>Join Now</button>
      </div>
    </>
  );
}

export default SuccessfulPayment;
