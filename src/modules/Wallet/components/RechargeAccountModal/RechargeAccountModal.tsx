// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import CloseButton from "../../assets/fi_x-circle.svg";
import BankTransfer from "../../assets/Group 98.svg";
import OnlinePayment from "../../assets/Group 99.svg";
import D17 from "../../assets/Group 100.svg";
function RechargeAccountModal({ setIsOpenModal, setIsOpenBankTransferModal }) {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="position-relative-for-modal">
        <div className="recharge-modal">
          <div className="recharge-top">
            <p>Recharge my Account</p>
          </div>
          <div className="title">
            <p>Choose your Fill-Up method</p>
          </div>
          <div className="fill-up-methods">
            <div
              className="fill-up-method"
              onClick={() => {
                setIsOpenModal(false);
                setIsOpenBankTransferModal(true);
              }}
            >
              <img src={BankTransfer} />
              <p>Bank Transfer</p>
            </div>
            <div className="fill-up-method">
              <img src={OnlinePayment} />
              <p>Online Payment</p>
            </div>
            <div className="fill-up-method">
              <img src={D17} />
              <p>Through D17</p>
            </div>
          </div>
        </div>
        <img
          src={CloseButton}
          className="close-button"
          onClick={() => setIsOpenModal(false)}
        />
      </div>
    </>
  );
}

export default RechargeAccountModal;
