import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RequestModal from "./components/RequestModal";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("landing");
  const [showRequest, setShowRequest] = useState(false);

  const renderPage = () => {
    if (!user) {
      if (page === "login")
        return (
          <Login
            onSwitch={() => setPage("register")}
            onSuccess={(userData) => {
              setUser(userData);
              setPage("home");
            }}
          />
        );

      if (page === "register")
        return (
          <Register
            onSwitch={() => setPage("login")}
            onSuccess={(userData) => {
              setUser(userData);
              setPage("home");
            }}
          />
        );

      return <Landing />;
    }

    if (page === "dashboard") return <Dashboard user={user} />;
    return <Home user={user} />;
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar
        isLoggedIn={!!user}
        onLoginClick={() => setPage("login")}
        onLogout={() => {
          setUser(null);
          setPage("landing");
        }}
        onNavigate={(p) => setPage(p)}
        onRequestClick={() => setShowRequest(true)}
      />

      {renderPage()}

      {showRequest && (
        <RequestModal
          user={user}
          onClose={() => setShowRequest(false)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
