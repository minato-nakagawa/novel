import { Outlet } from "react-router-dom";
import { AppLayout } from "@/components/Layout";

const Mypage = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default Mypage;
