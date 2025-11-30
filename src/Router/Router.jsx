import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import ApplicationForm from "../Pages/ApplicationForm/ApplicationForm";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJobs from "../Pages/Add Jobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=>fetch('http://localhost:5000/jobs')
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute>
          <ApplicationForm></ApplicationForm>
        </PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/applications",
        element:<PrivateRoute>
          <MyApplications></MyApplications>
        </PrivateRoute>
      },
      {
        path: "/addjobs",
        element:<PrivateRoute>
          <AddJobs></AddJobs>
        </PrivateRoute>
      },
      {
        path: "/mypostedjobs",
        element:<PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>
      },
      {
        path: "/mypostedjobs/:job_id",
        element:<PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/applications/job/${params.job_id}`)
      },
      {
        path: "/register",
        Component: Registration
      },
      {
        path: "/login",
        Component: SignIn
      }
    ]
  },
  
]);

export default Router;