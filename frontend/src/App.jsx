import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Notification from "./pages/Notification.jsx";
import Call from "./pages/Call.jsx";
import Chat from "./pages/Chat.jsx";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/axios.js";

function App() {
  // tanstack query

  const {
    data: authData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry: false, // auth check
  });

  const authUser = authData?.user;

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/onboarding"
          element={authUser ? <Onboarding /> : <Navigate to="/login" />}
        />
        <Route
          path="/notification"
          element={authUser ? <Notification /> : <Navigate to="/login" />}
        />
        <Route
          path="/call"
          element={authUser ? <Call /> : <Navigate to="/login" />}
        />
        <Route
          path="/chat"
          element={authUser ? <Chat /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
