import { useEffect, useState } from "react";

function Home({ user }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const res = await fetch("http://localhost:5000/api/requests");
    const data = await res.json();
    setRequests(data);
  };

  const acceptRequest = async (requestId) => {
    await fetch(`http://localhost:5000/api/requests/${requestId}/accept`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: user._id })
    });

    fetchRequests();
  };

  return (
    <div style={{ padding: "40px", minHeight: "70vh" }}>
      <h2>Blood Requests</h2>

      <div style={grid}>
        {requests.map((req) => {
          const isCreator = req.createdBy?._id === user._id;
          const isAccepted = req.status === "accepted";
          const isAcceptedByMe = req.acceptedBy?._id === user._id;

          return (
            <div key={req._id} style={card}>
              <h3 style={{ color: "#b91c1c" }}>{req.bloodGroup}</h3>
              <p><strong>City:</strong> {req.city}</p>
              <p><strong>Hospital:</strong> {req.hospital || "—"}</p>
              <p><strong>Urgency:</strong> {req.urgency}</p>
              <p>{req.note}</p>

              {/* CASE: REQUEST CREATOR */}
              {isCreator && (
                <>
                  {!isAccepted && (
                    <p style={waiting}>⏳ Waiting for donor</p>
                  )}

                  {isAccepted && (
                    <div style={acceptedBox}>
                      <p>✅ Accepted</p>
                      <p><strong>Donor:</strong> {req.acceptedBy.name}</p>
                      <p><strong>Contact:</strong> {req.acceptedBy.phone}</p>
                    </div>
                  )}
                </>
              )}

              {/* CASE: OTHER USERS */}
              {!isCreator && (
                <>
                  {!isAccepted && (
                    <button
                      style={acceptBtn}
                      onClick={() => acceptRequest(req._id)}
                    >
                      Accept Request
                    </button>
                  )}

                  {isAccepted && isAcceptedByMe && (
                    <div style={acceptedBox}>
                      <p>✅ You accepted this request</p>
                      <p>
                        <strong>Contact:</strong>{" "}
                        {req.createdBy.phone}
                      </p>
                    </div>
                  )}

                  {isAccepted && !isAcceptedByMe && (
                    <p style={disabledText}>
                      ❌ Request already accepted
                    </p>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px"
};

const card = {
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
};

const acceptBtn = {
  marginTop: "10px",
  padding: "8px",
  width: "100%",
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const acceptedBox = {
  marginTop: "10px",
  padding: "10px",
  backgroundColor: "#ecfdf5",
  borderRadius: "6px",
  color: "#065f46",
  fontWeight: "bold"
};

const waiting = {
  marginTop: "10px",
  color: "#92400e",
  fontWeight: "bold"
};

const disabledText = {
  marginTop: "10px",
  color: "#6b7280",
  fontStyle: "italic"
};

export default Home;
