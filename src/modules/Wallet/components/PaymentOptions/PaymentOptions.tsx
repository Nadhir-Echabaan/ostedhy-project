import Zitouna from "../../assets/Ellipse 19.svg";
import Biat from "../../assets/Ellipse 20.svg";
import Poste from "../../assets/Ellipse 21.svg";
import d17 from "../../assets/Group 33755.svg";
function PaymentOptions() {
  return (
    <div className="payment-options">
      <div className="payment-option">
        <div className="logo">
          <img src={Zitouna} />
          <span>Zitouna Bank</span>
        </div>
        <div className="account">
          <p>account:</p>
          <span>Ostedhy</span>
        </div>
        <div className="account-rib">
          <p>RIB:</p>
          <span>25 13 7000 0000 9567 7745</span>
        </div>
      </div>
      <div className="payment-option">
        <div className="logo">
          <img src={Biat} />
          <span>Zitouna Bank</span>
        </div>
        <div className="account">
          <p>account:</p>
          <span>Ostedhy</span>
        </div>
        <div className="account-rib">
          <p>RIB:</p>
          <span>25 13 7000 0000 9567 7745</span>
        </div>
      </div>
      <div className="payment-option">
        <div className="logo">
          <img src={Poste} />
          <span>Zitouna Bank</span>
        </div>
        <div className="account">
          <p>account:</p>
          <span>Ostedhy</span>
        </div>
        <div className="account-rib">
          <p>RIB:</p>
          <span>25 13 7000 0000 9567 7745</span>
        </div>
      </div>
      <div className="payment-option poste">
        <img src={d17} />
      </div>
    </div>
  );
}

export default PaymentOptions;
