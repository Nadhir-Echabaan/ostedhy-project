import RedWallet from "../../assets/Group 184.svg";

import { useNavigate } from "react-router-dom";
function FailedPayment({ onOpenFailedPayment }: any) {
  const navigate = useNavigate();
  function handleNavigate() {
    onOpenFailedPayment(() => false);
    navigate("/wallet");
  }
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="failed-payment">
        <div className="icon-container">
          <img src={RedWallet} />
        </div>
        <p>insufficient balance!</p>
        <span>
          You need to fill up account with points than you will be able to buy
          the access to your live session
        </span>
        <div className="buttons-flex">
          <button className="cancel" onClick={() => onOpenFailedPayment(false)}>
            Cancel
          </button>
          <button className="fill-up" onClick={handleNavigate}>
            Fill up
          </button>
        </div>
      </div>
    </>
  );
}

export default FailedPayment;
