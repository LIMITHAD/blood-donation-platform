import { useState } from "react";

function RequestModal({ user, onClose }) {
  const [form, setForm] = useState({
    bloodGroup: "",
    city: "",
    hospital: "",
    urgency: "High",
    note: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        createdBy: user._id
      })
    });

    if (!res.ok) {
      alert("Failed to create request");
      return;
    }

    onClose();
  } catch (error) {
    alert("Server error");
  }
};


  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Request Blood</h2>

        <label>Blood Group *</label>
        <select
          name="bloodGroup"
          value={form.bloodGroup}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select blood group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <label>City *</label>
        <input
          name="city"
          placeholder="Enter city"
          value={form.city}
          onChange={handleChange}
          style={styles.input}
        />

        <label>Hospital Name</label>
        <input
          name="hospital"
          placeholder="e.g. Apollo Hospital"
          value={form.hospital}
          onChange={handleChange}
          style={styles.input}
        />

        <label>Urgency</label>
        <select
          name="urgency"
          value={form.urgency}
          onChange={handleChange}
          style={styles.input}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>Emergency Note</label>
        <textarea
          name="note"
          placeholder="Accident, surgery, critical case..."
          value={form.note}
          onChange={handleChange}
          style={styles.textarea}
        />

        <div style={styles.actions}>
          <button style={styles.cancel} onClick={onClose}>
            Cancel
          </button>
          <button style={styles.submit} onClick={handleSubmit}>
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  },
  modal: {
    width: "380px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  textarea: {
    width: "100%",
    height: "70px",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
    marginBottom: "12px"
  },
  actions: {
    display: "flex",
    justifyContent: "space-between"
  },
  cancel: {
    backgroundColor: "#e5e7eb",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  submit: {
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default RequestModal;
