function Navbar({ isLoggedIn, onLoginClick, onLogout, onRequestClick, onNavigate }) {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo} onClick={() => onNavigate("home")}>
        🩸 Blood Donation
      </h3>

      <div style={styles.links}>
        {isLoggedIn && (
          <>
            <button style={styles.linkBtn} onClick={() => onNavigate("home")}>
              Home
            </button>
            <button style={styles.linkBtn} onClick={() => onNavigate("dashboard")}>
              Dashboard
            </button>
            <button style={styles.requestBtn} onClick={onRequestClick}>
              Request Blood
            </button>
            <button style={styles.logoutBtn} onClick={onLogout}>
              Logout
            </button>
          </>
        )}

        {!isLoggedIn && (
          <button style={styles.loginBtn} onClick={onLoginClick}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#b91c1c",
    color: "white"
  },
  logo: {
    margin: 0,
    cursor: "pointer"
  },
  links: {
    display: "flex",
    gap: "12px",
    alignItems: "center"
  },
  linkBtn: {
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "14px"
  },
  requestBtn: {
    backgroundColor: "#fff",
    color: "#b91c1c",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  logoutBtn: {
    backgroundColor: "#7f1d1d",
    color: "white",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  loginBtn: {
    backgroundColor: "white",
    color: "#b91c1c",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default Navbar;
