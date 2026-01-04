function Landing() {
  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Donate Blood. <span style={{ color: "#b91c1c" }}>Save Lives.</span>
        </h1>
        <p style={styles.heroText}>
          A trusted platform that connects blood donors with people in urgent need.
          One registration can help save multiple lives.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.steps}>
          <div style={styles.stepCard}>
            <h3>📝 Register</h3>
            <p>Create an account with your blood group and location.</p>
          </div>

          <div style={styles.stepCard}>
            <h3>🚨 Request Blood</h3>
            <p>Post a blood request during emergencies in seconds.</p>
          </div>

          <div style={styles.stepCard}>
            <h3>🤝 Get Connected</h3>
            <p>Eligible donors nearby can respond and help immediately.</p>
          </div>
        </div>
      </section>

      {/* WHY BLOOD DONATION */}
      <section style={styles.highlight}>
        <h2>Why Blood Donation Matters</h2>
        <p>
          Every two seconds, someone needs blood. Your contribution can be the
          difference between life and death during emergencies, surgeries, and
          critical treatments.
        </p>
      </section>

      {/* IMPACT SECTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <div style={styles.mission}>
          <div style={styles.missionCard}>
            <h3>🌍 Community Driven</h3>
            <p>Built to empower communities to help each other.</p>
          </div>

          <div style={styles.missionCard}>
            <h3>⚡ Fast & Reliable</h3>
            <p>Instant access to blood requests without delays.</p>
          </div>

          <div style={styles.missionCard}>
            <h3>🔒 Safe & Trusted</h3>
            <p>User data is handled responsibly and securely.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={styles.cta}>
        <h2>Be a Hero Today</h2>
        <p>
          Join our platform and become part of a life-saving network.
        </p>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "80vh"
  },

  hero: {
    padding: "80px 20px",
    textAlign: "center",
    background:
      "linear-gradient(to right, #fee2e2, #fff)"
  },
  heroTitle: {
    fontSize: "2.8rem",
    marginBottom: "15px"
  },
  heroText: {
    maxWidth: "650px",
    margin: "0 auto",
    fontSize: "1.1rem",
    color: "#374151"
  },

  section: {
    padding: "60px 40px",
    textAlign: "center"
  },
  sectionTitle: {
    marginBottom: "30px"
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  stepCard: {
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
  },

  highlight: {
    padding: "60px 40px",
    backgroundColor: "#fef2f2",
    textAlign: "center"
  },

  mission: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  missionCard: {
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
  },

  cta: {
    padding: "70px 20px",
    textAlign: "center",
    backgroundColor: "#b91c1c",
    color: "white"
  }
};

export default Landing;
