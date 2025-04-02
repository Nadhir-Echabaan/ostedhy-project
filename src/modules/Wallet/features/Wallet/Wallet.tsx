import { useState } from "react";  

import RechargeAccountModal from "../../components/RechargeAccountModal/RechargeAccountModal"
import WalletHeader from "../../components/WalletHeader/WalletHeader"; 
import BankTransfer from "../../components/BankTransferModal/BankTransfer";

function Wallet() {
  const [isOpenModal , setIsOpenModal] = useState(false); 
  const [isOpenBankTransferModal , setIsOpenBankTransferModal] = useState(true);
  return (
    <div className="wallet-page">
       <WalletHeader setIsOpenModal={setIsOpenModal}  />
      {isOpenModal && <RechargeAccountModal setIsOpenModal={setIsOpenModal} />}
      {isOpenBankTransferModal && <BankTransfer />}
    </div>
  )
}

export default Wallet
