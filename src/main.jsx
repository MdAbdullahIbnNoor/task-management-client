import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/Signup/Signup.jsx';
import PrivateRoutes from './provider/PrivateRoutes.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import CreateTask from './Pages/CreateTask/CreateTask.jsx';
import TaskList from './Pages/TaskList/TaskList.jsx';
import UserProfile from './Pages/UserProfile/UserProfile.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },

    ]
  },

  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      // User routes
      {
        path: 'createTask',
        element: <CreateTask />,
      },
      {
        path: 'taskList',
        element: <TaskList />,
      },
      {
        path: 'userProfile',
        element: <UserProfile />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
