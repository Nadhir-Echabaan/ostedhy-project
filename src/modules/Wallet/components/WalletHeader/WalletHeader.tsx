import PaymentOptions from "../PaymentOptions/PaymentOptions";
import Transactions from "../TransactionsButton/Transactions";
function WalletHeader({ setIsOpenModal }: { setIsOpenModal: any }) {
  return (
    <div className="wallet-header">
      <Transactions setIsOpenModal={setIsOpenModal}  />
      <PaymentOptions />
    </div>
  );
}

export default WalletHeader;
