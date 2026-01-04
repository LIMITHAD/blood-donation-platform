function Dashboard({ user }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>My Dashboard</h2>

      <div style={box}>
        <h3>My Information</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
}

const box = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
};

export default Dashboard;
