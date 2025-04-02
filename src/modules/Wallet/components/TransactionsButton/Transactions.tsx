function Transactions({setIsOpenModal}: { setIsOpenModal: any }) {
  return (
    <div className="transactions">
      <div className="balance">
        <p className="text">Your Current Balance:</p>
        <p className="points">
          0<span>PTS</span>
        </p>
      </div>
      <div className="buttons">
        <button className="add-point" onClick={() => setIsOpenModal(true)}>Add Point</button>
        <button className="transfer-point">Transfer Point</button>
      </div>
    </div>
  );
}

export default Transactions;
