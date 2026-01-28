import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Booking() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await axios.post("http://localhost:5000/api/bookings", form);
    alert("Booking successful");
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <h2>Book Service</h2>

        <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
        <input placeholder="Address" onChange={e => setForm({...form, address:e.target.value})} />
        <input placeholder="Phone" onChange={e => setForm({...form, phone:e.target.value})} />

        <select onChange={e => setForm({...form, serviceType:e.target.value})}>
          <option value="">Service</option>
          <option>Carpenter</option>
          <option>Electrician</option>
        </select>

        <select onChange={e => setForm({...form, paymentType:e.target.value})}>
          <option value="">Payment</option>
          <option>Cash</option>
          <option>UPI</option>
        </select>

        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}

export default Booking;
