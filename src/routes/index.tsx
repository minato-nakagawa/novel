import { useRoutes, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth";
import { Landing } from "@/features/misc";
import Top from "@/pages/Top";
import Mypage from "@/pages/Mypage";
import MypageNovel from "@/pages/Mypage/Novel";
import MypageDashboard from "@/pages/Mypage/Dashboard";

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  const routes = [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/app",
      element: <Top />,
    },
    {
      path: "/mypage",
      element: <Mypage />,
      children: [
        {
          path: "novel",
          element: <MypageNovel />,
        },
        {
          path: "",
          element: <MypageDashboard />,
        },
        { path: "*", element: <Navigate to="." /> },
      ],
    },
  ];

  const element = useRoutes([...routes]);
  return <>{element}</>;
};
