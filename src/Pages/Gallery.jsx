import GalleryHero from "../Commponents/gallery/GalleryHero";
import GalleryGrid from "../Commponents/gallery/GalleryGrid";
import BookingCTA from "../Commponents/packages/BookingCTA";

const Gallery = () => {
  return (
    <main>
      {/* 1. Gallery Header */}
      <GalleryHero />

      {/* 2. Lightbox Category Image Grid */}
      <GalleryGrid />

      {/* 3. Booking Action Banner */}
      <BookingCTA />
    </main>
  );
};

export default Gallery;