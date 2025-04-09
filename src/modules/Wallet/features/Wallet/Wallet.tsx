import { useState } from "react";

import RechargeAccountModal from "../../components/RechargeAccountModal/RechargeAccountModal";
import WalletHeader from "../../components/WalletHeader/WalletHeader";
import BankTransfer from "../../components/BankTransferModal/BankTransfer";
import PointTransfer from "../../components/PointTransferModal/PointTransfer";
import Transactions from "../../components/TransactionsTable/Transactions";
import Transfer from "../../components/PointsTransferHistory/PointsTransferHistory";
import Subscription from "../../components/SubscriptionHistory/SubscriptionHistory";

function Wallet() {
  const [isOpenAddPointModal, setIsOpenAddPointModal] = useState(false);
  const [isOpenBankTransferModal, setIsOpenBankTransferModal] = useState(false);
  const [isOpenTransferPointModal, setIsOpenTransferPointModal] = useState(false);
  return (
    <div className="wallet-page">
      <WalletHeader setIsOpenModal={setIsOpenAddPointModal} setIsOpenTransferPointModal={setIsOpenTransferPointModal} />
      {isOpenAddPointModal && (
        <RechargeAccountModal
          setIsOpenModal={setIsOpenAddPointModal}
          setIsOpenBankTransferModal={setIsOpenBankTransferModal}
        />
      )}
      {isOpenBankTransferModal && (
        <BankTransfer setIsOpenBankTransferModal={setIsOpenBankTransferModal} />
      )}
      {isOpenTransferPointModal && (
        <PointTransfer
          setIsOpenTransferPointModal={setIsOpenTransferPointModal}
        />
      )}
      <Transactions />
      <Transfer />
      <Subscription />
    </div>
  );
}

export default Wallet;
