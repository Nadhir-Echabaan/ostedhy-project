import Success from "../../assets/Group 33591.svg";
import CloseButton from "../../assets/Close_circle.svg";
function SuccessfulPayment() {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="success-pay-modal">
        <div className="images-flex">
          <img src={Success} />
          <img className="close-btn" src={CloseButton} />
        </div>
        <div className="payment-message">
          <p>your payment has been successfully</p>
          <span>Now you have the acces to your live session</span>
        </div>
        <div className="purchase-informations">
          <div className="right-part">
            <p className="very-light-gray _first">Group Session info</p>
            <p className="session-title _second">
              INDUCTION ET FORCES DE LAPLACE{" "}
            </p>
            <p className="light-gray _third">8 live sessions</p>
            <p className="teacher-name _fourth">
              <span className="light-gray _fifth">By</span> Tarek benrhaiem
            </p>
            <p className="very-light-gray _sixth">Purchase</p>
            <p className="package">Live Session + Record</p>
          </div>
          <div className="left-part">
            <p className="very-light-gray _first">Level Info</p>
            <div className="subject-flex _second">
              <p className="light-gray">subject:</p>
              <span>chimie</span>
            </div>
            <div className="division-flex _third">
              <p className="light-gray">Division:</p>
              <span>Bac sc exp</span>
            </div>
            <div className="invoice-flex">
              <p className="very-light-gray">Invoice</p>
              <span>1200 PTS</span>
            </div>
          </div>
        </div>
        <button>Join Now</button>
      </div>
    </>
  );
}

export default SuccessfulPayment;
