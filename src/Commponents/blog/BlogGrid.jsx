import { useState } from "react";
import { FaUser, FaCalendarAlt, FaSearch, FaTimes, FaBookOpen } from "react-icons/fa";
import Container from "../Container";
import blogData from "../../data/blogData";

const BlogGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter posts
  const filteredPosts = blogData.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-[#FCF8F2]">
      <Container>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <input
            type="text"
            placeholder="Search articles, categories, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-[#D4AF37]/30 bg-white pl-6 pr-14 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300 shadow-sm"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            <FaSearch />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-[30px] bg-white border border-[#EFE7D8] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Cover Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-5 left-5 rounded-full bg-[#D4AF37] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-7">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <FaUser className="text-[#D4AF37]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[#D4AF37]" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 line-clamp-2 leading-snug group-hover:text-[#D4AF37] transition duration-300">
                  {post.title}
                </h3>

                <p className="mt-4 text-gray-500 text-sm leading-6 line-clamp-3 flex-1">
                  {post.summary}
                </p>

                {/* Read Button */}
                <div className="mt-6 border-t border-[#F2ECE0] pt-5">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-[#C9A227] hover:text-black font-bold text-sm tracking-wider uppercase transition cursor-pointer"
                  >
                    <span>Read Full Post</span>
                    <FaBookOpen />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-400 font-poppins">No articles found matching your search.</h3>
          </div>
        )}

        {/* Detailed Reading Modal */}
        {selectedPost && (
          <div
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-9999 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-y-auto max-h-[85vh] border border-[#EFE8DA] p-6 sm:p-10 animate-[fade_.25s_ease]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-2xl transition focus:outline-none cursor-pointer h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100"
              >
                <FaTimes />
              </button>

              {/* Cover */}
              <div className="relative h-72 w-full overflow-hidden rounded-[30px] mb-8 mt-4">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-5 left-5 rounded-full bg-[#D4AF37] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
                  {selectedPost.category}
                </span>
              </div>

              {/* Meta info */}
              <div className="flex items-center gap-6 text-xs text-gray-500 mb-4 font-semibold border-b border-[#F2ECE0] pb-4">
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#D4AF37]" />
                  <span>By {selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#D4AF37]" />
                  <span>{selectedPost.date}</span>
                </div>
              </div>

              {/* Content text */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug font-poppins">
                {selectedPost.title}
              </h3>

              <div className="mt-6 text-gray-700 leading-8 text-[16px] space-y-4">
                <p className="font-semibold text-gray-600 border-l-4 border-[#D4AF37] pl-4 italic">
                  {selectedPost.summary}
                </p>
                <p>
                  {selectedPost.content}
                </p>
                <p>
                  At Moonlight Spa, we believe wellness is a lifetime commitment. Implementing minor adjustments in your daily routine, 
                  combined with regular professional body therapy treatments, can significantly lower stress levels, 
                  boost natural skin brightness, and support joint mobility over the long term. 
                  Book an appointment with our wellness consultants today to outline a personalized recovery session!
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F2ECE0] text-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-8 py-3.5 rounded-full bg-[#1A1410] text-white hover:bg-[#D4AF37] hover:text-black font-semibold text-sm transition cursor-pointer"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </Container>
    </section>
  );
};

export default BlogGrid;
