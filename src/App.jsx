import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div className="layout_right_left_bars">
          <Leftbar />
          <div className="main_content">
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
