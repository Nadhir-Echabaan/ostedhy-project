import PaymentOptions from "../PaymentOptions/PaymentOptions";
import Transactions from "../TransactionsButton/Transactions";
function WalletHeader({ setIsOpenModal, setIsOpenTransferPointModal }: { setIsOpenModal: any; setIsOpenTransferPointModal: any }) {
  return (
    <div className="wallet-header">
      <Transactions setIsOpenModal={setIsOpenModal} setIsOpenTransferPointModal={setIsOpenTransferPointModal} />
      <PaymentOptions />
    </div>
  );
}

export default WalletHeader;
