import CloseButton from "../../assets/Close_rectangle.svg";
import {
  useBuyLiveSessionsGroupeMutation,
  useGetLiveSessionsGroupeQuery,
  useGetRelatedLiveSessionsQuery,
  useGetUserPointsQuery,
  useLiveSessionsSubscriptionMutation,
  useUpdateBoughtLiveSessionsMutation,
  useUpdateWalletPointsMutation,
} from "../../data/sessions";
import { markSoonestSession } from "../../helpers/markSoonestSession";
import LiveSessionItem from "./LiveSessionItem";
import { useState } from "react";
function SessionsInfo({
  onOpenModal,
  groupeSessionsId,
  onOpenSuccessfullPayment,
  onOpenFailedPayment,
}: any) {
  const [with_records, setWithRecords] = useState(false);

  const [liveSessionsSubscription] = useLiveSessionsSubscriptionMutation({});

  const { data: relatedLiveSessions, isLoading: isLoadingRelatedLiveSessions } =
    useGetRelatedLiveSessionsQuery({ groupeSessionsId });

  const { data: liveSessionsGroupe, isLoading: isLoadingLiveSessionsGroupe } =
    useGetLiveSessionsGroupeQuery({ groupeSessionsId });

  const { data: amount, isLoading } = useGetUserPointsQuery({});
  const [updateWalletPoints] = useUpdateWalletPointsMutation({});
  const [buyLiveSessionsGroupe] = useBuyLiveSessionsGroupeMutation({
    groupeSessionsId,
  });
  const [updateBoughtLiveSessions] = useUpdateBoughtLiveSessionsMutation({
    groupeSessionsId,
  });

  if (
    isLoading ||
    isLoadingRelatedLiveSessions ||
    isLoadingLiveSessionsGroupe ||
    !amount
  ) {
    return <p>Loading...</p>;
  }

  const liveSessionsPrice = 1500;
  let userPoints = amount.points;

  const { groupe_title, subjects, teachers } = liveSessionsGroupe.at(0);
  const { subject_name } = subjects;
  const { fullname, image_url } = teachers;

  function handleBuyLiveSessionsGroupe() {
    if (userPoints >= liveSessionsPrice) {
      onOpenModal(() => false);
      updateWalletPoints({
        updatedPoints: userPoints - liveSessionsPrice,
      });
      buyLiveSessionsGroupe({ groupeSessionsId, with_records });
      updateBoughtLiveSessions({ groupeSessionsId, with_records });
      liveSessionsSubscription({});
      onOpenSuccessfullPayment(() => true);
      setWithRecords(false);
    } else {
      onOpenModal(() => false);
      onOpenFailedPayment(() => true);
    }
  }
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="groupe-sessions-info">
        <div className="modal-header">
          <div>
            <p>Groupe Session info</p>
            <img src={CloseButton} onClick={() => onOpenModal(false)} />
          </div>
          <p className="related-chapter">{groupe_title}</p>
          <div className="groupe-infos">
            <div>
              <p>Subject:</p>
              <span className="subject-span">{subject_name}</span>
            </div>
            <div>
              <p>class:</p>
              <span>Bac sc exp</span>
            </div>
            <div>
              <p>by</p>
              <img src={image_url} />
              <span>{fullname}</span>
            </div>
          </div>
        </div>
        <div className="modal-content">
          <p className="live-sessions-count">
            {relatedLiveSessions.length} Live sessions
          </p>
          <div className="live-sessions-container">
            {markSoonestSession(relatedLiveSessions).map((live_session) => (
              <LiveSessionItem live_session={live_session} />
            ))}
          </div>
        </div>
        <div className="purchase">
          <div>
            <div className="with-records">
              <input
                type="checkbox"
                id="record"
                onClick={() => setWithRecords(!with_records)}
              />
              <p>Buy Live Session Records</p>
            </div>
            <p className="extra-pricing">+5.00 TND/Month</p>
          </div>
          <button onClick={handleBuyLiveSessionsGroupe}>
            Buy Now with 1500 PTS
          </button>
        </div>
      </div>
    </>
  );
}

export default SessionsInfo;
