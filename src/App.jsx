import { createBrowserRouter, RouterProvider } from "react-router-dom";



import { Dashboard, Login, HomeLayout, Register, Landing,ErrorPage, AddJob, AllJobs, Stats, Admin, Profile, EditJob, Amazon, Bookmarks, Ebay, Media, RegistrationForm, UserTable } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "register-form",
        element: <RegistrationForm />,
      },
      {
        path: "user-table",
        element: <UserTable />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children:[
          {
            index:true,
            element:<AddJob/>
          },
          {
            path:"all-jobs",
            element:<AllJobs/>
          },
          {
            path:"edit-job",
            element:<EditJob/>
          },
          {
            path:"stats",
            element:<Stats/>
          },
          {
            path:"profile",
            element:<Profile/>
          },
          {
            path:"admin",
            element:<Admin/>
          },
          {
            path:"amazon",
            element:<Amazon/>
          },
          {
            path:"bookmark",
            element:<Bookmarks/>
          },
          {
            path:"ebay",
            element:<Ebay/>
          },
          {
            path:"media",
            element:<Media/>
          },
         
        ]
      },
     
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
