import { useState } from "react";
import axios from "axios";
export function Contact(){  
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10-digit phone";

    if (!form.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.type) newErrors.type = "Select outdoor type";
    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await axios.post("http://localhost:5000/send-email", form);
      alert("Message sent successfully!");
      setForm({ name: "", phone: "", email: "", type: "", message: "" });
    } catch (err) {
      alert("Error sending message");
    }
  };
return(
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6">Contact Us</h1>
        <p className="text-muted text-lg">We're here to help you create your dream outdoor space.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
       <div className="bg-accent/20 p-10 md:p-12 rounded-3xl border border-black/5">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Name */}
          <div>
            <label className="text-xs font-bold uppercase">Name</label>
            <input name="name" value={form.name} onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4"
            />
            <p className="text-red-500 text-sm">{errors.name}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs font-bold uppercase">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4"
            />
            <p className="text-red-500 text-sm">{errors.phone}</p>
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-bold uppercase">Email</label>
            <input name="email" value={form.email} onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4"
            />
            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>

          {/* Type */}
          <div>
            <label className="text-xs font-bold uppercase">Type of Outdoors</label>
            <select name="type" value={form.type} onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4"
            >
              <option value="">Select</option>
              <option>Glass Verandas</option>
              <option>Pergolas</option>
              <option>Glass Rooms</option>
              <option>Outdoor Kitchens</option>
            </select>
            <p className="text-red-500 text-sm">{errors.type}</p>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-xs font-bold uppercase">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange}
            rows={5}
            className="w-full border rounded-xl px-5 py-4"
          />
          <p className="text-red-500 text-sm">{errors.message}</p>
        </div>

        <button className="bg-primary text-white w-full py-5 rounded-full font-bold">
          SEND MESSAGE
        </button>
      </form>
    </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-dark">Our Office</h4>
              <p className="text-lg text-muted">
                123 Luxury Lane<br />
                Mayfair, London<br />
                W1J 7JZ
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-dark">Direct Contact</h4>
              <p className="text-lg text-muted">+44 20 7123 4567</p>
              <p className="text-lg text-muted">info@outdoors.com</p>
            </div>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-black/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2467522033947!2d-0.1444653!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052964a6a0d3%3A0x6fbfae405510567!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
