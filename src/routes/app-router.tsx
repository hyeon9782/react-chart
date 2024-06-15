import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import NotFoundPage from "../pages/not-found-page";
import AnnouncementPage from "../pages/home/announcement-page";
import MyPage from "../pages/home/my-page";
import DashboardPage from "../pages/home/dashboard-page";
import SummaryPage from "../pages/searched/summary-page";
import IdentificationPage from "../pages/searched/identification-page";
import QuantificationPage from "../pages/searched/quantification-page";
import ProcessingPage from "../pages/statistics/processing-page";
import NormalizationPage from "../pages/statistics/normalization-page";
import DifferentialPage from "../pages/statistics/differential-page";
import NetworkPage from "../pages/network-page";
import JobStatusPage from "../pages/job/job-status-page";
import JobPlanningPage from "../pages/job/job-planning-page";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/home",
          children: [
            {
              path: "dashboard",
              element: <DashboardPage />,
            },
            {
              path: "my-page",
              element: <MyPage />,
            },
            {
              path: "announcement",
              element: <AnnouncementPage />,
            },
          ],
        },
        {
          path: "/job",
          children: [
            {
              path: "job-status",
              element: <JobStatusPage />,
            },
            {
              path: "job-planning",
              element: <JobPlanningPage />,
            },
          ],
        },
        {
          path: "/searched",
          children: [
            {
              path: "summary",
              element: <SummaryPage />,
            },
            {
              path: "identification",
              element: <IdentificationPage />,
            },
            {
              path: "quantification",
              element: <QuantificationPage />,
            },
          ],
        },
        {
          path: "/statistics",
          children: [
            {
              path: "processing",
              element: <ProcessingPage />,
            },
            {
              path: "normalization",
              element: <NormalizationPage />,
            },
            {
              path: "differential",
              element: <DifferentialPage />,
            },
          ],
        },
        {
          path: "network",
          element: <NetworkPage />,
        },
        {
          path: "/*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
