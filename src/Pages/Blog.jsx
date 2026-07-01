import BlogHero from "../Commponents/blog/BlogHero";
import BlogGrid from "../Commponents/blog/BlogGrid";
import BookingCTA from "../Commponents/packages/BookingCTA";

const Blog = () => {
  return (
    <main>
      {/* 1. Blog Header */}
      <BlogHero />

      {/* 2. Blog search & cards listing */}
      <BlogGrid />

      {/* 3. Booking CTA Banner */}
      <BookingCTA />
    </main>
  );
};

export default Blog;