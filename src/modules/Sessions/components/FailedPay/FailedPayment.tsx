import RedWallet from "../../assets/Group 184.svg";
function FailedPayment() {
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
          <button className="cancel">Cancel</button>
          <button className="fill-up">Fill up</button>
        </div>
      </div>
    </>
  );
}

export default FailedPayment;
