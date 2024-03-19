"use client";


import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link"; // Import Link from Next.js if you're using Next.js

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          {/* Use Link instead of anchor tag if you're using Next.js */}
          <Link href="/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
