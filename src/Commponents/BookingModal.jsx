import { useEffect } from "react";
import { X, MessageCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const WHATSAPP_LINK = "https://wa.me/8801540097587";

const WHATSAPP_MESSAGE =
  "Hello,%20I%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20%0APreferred%20Service:%20%0APreferred%20Date:%20%0APreferred%20Time:%20";

export default function BookingModal() {
  const { isBookingOpen, closeBookingModal } = useBooking();

  useEffect(() => {
    if (!isBookingOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeBookingModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBookingOpen, closeBookingModal]);

  if (!isBookingOpen) return null;

  return (
    <div
      onClick={closeBookingModal}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#1A1A1A] p-7 shadow-2xl animate-[fade_.25s_ease]"
      >
        <button
          onClick={closeBookingModal}
          className="absolute right-5 top-5 text-white transition hover:text-red-400"
        >
          <X size={24} />
        </button>

        <div className="mb-6 text-center">
          <h2 className="font-poppins text-3xl font-bold text-white">
            Book Appointment
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Choose your preferred booking method.
          </p>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
        >
          <MessageCircle size={22} />
          WhatsApp Booking
        </a>

        <Link
          to="/booking"
          onClick={closeBookingModal}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#D4AF37] py-4 text-lg font-semibold text-black transition hover:bg-white"
        >
          <Globe size={22} />
          Website Booking
        </Link>
      </div>
    </div>
  );
}