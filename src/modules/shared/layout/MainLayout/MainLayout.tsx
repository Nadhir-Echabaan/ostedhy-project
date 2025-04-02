import { Suspense } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import SideBar from "../../components/SideBar/Sidebar";
import SuccessfullPayment from "../../../Sessions/components/SuccessPay/SuccessfulPayment";
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="app-layout">
        <SideBar />
        <DashboardHeader />
        <main className="main">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </>
  );
};
export default MainLayout;
