import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user && <p>Welcome, {user.email}!</p>}
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;