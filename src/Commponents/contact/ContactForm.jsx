import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { MessageCircle, Check } from "lucide-react";

const WHATSAPP_PHONE = "8801540097587";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Constructing WhatsApp prefilled message
    const whatsappMsg = `Hello Moonlight Spa reception, I have a general query from the website.

📋 *Contact Query details*
---------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
📝 *Subject:* ${formData.subject}
💬 *Message:* ${formData.message}`;

    const encodedMsg = encodeURIComponent(whatsappMsg);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 5000);
  };

  return (
    <div className="rounded-[35px] border border-[#EFE7D8] bg-white p-8 lg:p-12 shadow-xl hover:shadow-2xl transition duration-500 max-w-2xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#1A1410] font-poppins">
          Send Us A Message
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Fill out your contact details and message to initiate an instant chat with our customer service team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
            Your Name *
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

        {/* Email & Phone */}
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

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Custom Package Query, Corporate Rates..."
            required
            className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
            Detailed Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your questions or requests in detail..."
            rows={5}
            required
            className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300 resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-2xl bg-[#D4AF37] hover:bg-[#1A1410] hover:text-white py-5 font-bold text-black duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl cursor-pointer"
        >
          <MessageCircle size={22} />
          <span>Send via WhatsApp Message</span>
        </button>

        {submitted && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center text-emerald-800 font-medium flex items-center justify-center gap-2 animate-[fade_.25s_ease]">
            <Check size={18} />
            <span>Redirecting to WhatsApp chat support...</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
