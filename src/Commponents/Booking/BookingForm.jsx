import { useState } from "react";
import { MessageCircle, Send, Check } from "lucide-react";
import ServiceSelector from "./ServiceSelector";

const WHATSAPP_PHONE = "8801540097587";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      service: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Constructing WhatsApp prefilled text
    const textMessage = `Hello, I would like to book a spa appointment via the website.

📋 *Booking Details*
---------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🌸 *Service:* ${formData.service}
📅 *Preferred Date:* ${formData.date}
⏰ *Preferred Time:* ${formData.time}
📝 *Special Notes:* ${formData.notes || "None"}`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;

    // Open WhatsApp link in new tab
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    // Reset state after brief delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        notes: ""
      });
    }, 5000);
  };

  // Get current date string for minimum attribute (prevent past bookings)
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="rounded-[35px] border border-[#EFE7D8] bg-white p-8 lg:p-12 shadow-xl hover:shadow-2xl transition duration-500 max-w-2xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#1A1410] font-poppins">
          Appointment Request Form
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Please fill out the form below. Submitting will open your booking directly inside WhatsApp for instant confirmation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
            Your Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            required
            className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +880 1540-097587"
              required
              className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@example.com"
              required
              className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300"
            />
          </div>
        </div>

        {/* Dynamic Service Selector */}
        <ServiceSelector value={formData.service} onChange={handleServiceChange} />

        {/* Date & Time Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
              className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Preferred Time *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300"
            >
              <option value="" disabled>-- Select Time Slot --</option>
              <option value="10:00 AM">10:00 AM (Morning)</option>
              <option value="11:30 AM">11:30 AM (Morning)</option>
              <option value="01:00 PM">01:00 PM (Afternoon)</option>
              <option value="02:30 PM">02:30 PM (Afternoon)</option>
              <option value="04:00 PM">04:00 PM (Late Afternoon)</option>
              <option value="05:30 PM">05:30 PM (Evening)</option>
              <option value="07:00 PM">07:00 PM (Evening)</option>
              <option value="08:30 PM">08:30 PM (Night)</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
            Special Requests / Health Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Please mention therapist gender preference, pressure comfort levels, or medical details..."
            rows={4}
            className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300 resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-2xl bg-[#D4AF37] hover:bg-[#1A1410] hover:text-white py-5 font-bold text-black duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl cursor-pointer"
        >
          <MessageCircle size={22} />
          <span>Confirm via WhatsApp Booking</span>
        </button>

        {submitted && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center text-emerald-800 font-medium flex items-center justify-center gap-2 animate-[fade_.25s_ease]">
            <Check size={18} />
            <span>Form submitted! Redirecting to WhatsApp booking chat...</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
