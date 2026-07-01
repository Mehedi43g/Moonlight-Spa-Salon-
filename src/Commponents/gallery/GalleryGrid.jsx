import { useState, useEffect } from "react";
import { FaEye, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Container from "../Container";
import galleryData from "../../data/gallery";

const categories = ["All", "Interior", "Treatments", "Ambience"];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  // Filter photos
  const filteredPhotos = galleryData.filter(
    (photo) => activeCategory === "All" || photo.category === activeCategory
  );

  // Handle lightbox keyboard navigation
  useEffect(() => {
    if (!lightboxPhoto) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxPhoto(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxPhoto]);

  // Find index in filtered list
  const getIndex = () => {
    return filteredPhotos.findIndex((p) => p.id === lightboxPhoto?.id);
  };

  const handleNext = () => {
    const idx = getIndex();
    if (idx === -1) return;
    const nextIdx = (idx + 1) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[nextIdx]);
  };

  const handlePrev = () => {
    const idx = getIndex();
    if (idx === -1) return;
    const prevIdx = (idx - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[prevIdx]);
  };

  return (
    <section className="py-24 bg-[#FAF7F0]">
      <Container>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full border transition duration-300 font-semibold cursor-pointer ${
                activeCategory === category
                  ? "bg-[#D4AF37] border-[#D4AF37] text-white"
                  : "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {filteredPhotos.map((photo) => (
            <article
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="group relative aspect-square overflow-hidden rounded-[30px] shadow-md hover:shadow-2xl cursor-pointer transition duration-500 hover:-translate-y-2 border border-[#EFE7D8] bg-white"
            >
              {/* Photo */}
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1A1410]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-black text-xl shadow-lg mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <FaEye />
                </div>
                <h3 className="text-white text-lg font-bold font-poppins">{photo.title}</h3>
                <span className="text-xs uppercase tracking-[3px] text-[#D4AF37] font-semibold mt-2">
                  {photo.category}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxPhoto && (
          <div
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-9999 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-[fade_.25s_ease]"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl transition focus:outline-none cursor-pointer"
            >
              <FaTimes />
            </button>

            {/* Left Control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-5 text-white/50 hover:text-white text-4xl transition focus:outline-none cursor-pointer h-16 w-16 rounded-full bg-white/5 flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>

            {/* Center Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center"
            >
              <img
                src={lightboxPhoto.image}
                alt={lightboxPhoto.title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <div className="text-center mt-5 text-white">
                <h4 className="text-xl font-bold font-poppins">{lightboxPhoto.title}</h4>
                <p className="text-[#D4AF37] text-xs uppercase tracking-[4px] mt-2 font-semibold">
                  {lightboxPhoto.category}
                </p>
              </div>
            </div>

            {/* Right Control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-5 text-white/50 hover:text-white text-4xl transition focus:outline-none cursor-pointer h-16 w-16 rounded-full bg-white/5 flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

      </Container>
    </section>
  );
};

export default GalleryGrid;
