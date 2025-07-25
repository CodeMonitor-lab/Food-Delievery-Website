import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const NearByEats = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);

  // ESC key to close modal
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setHistory((prev) => {
        const updated = [query, ...prev.filter((item) => item !== query)];
        return updated.slice(0, 5);
      });
    }
    alert(`Searching for: ${query}`);
    setQuery("");
  };

  // Handle clicking a history item
  const handleHistoryClick = (term) => {
    setQuery(term);
  };

  // Clear all history
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        <FiSearch className="text-lg" />
        <span>Search</span>
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-start justify-center z-50 pt-24 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-lg relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <IoMdClose size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What are you looking for?
            </h2>

            {/* Search Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                autoFocus
                placeholder="Search nearby restaurants..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600 transition"
              >
                Search
              </button>
            </form>

            {/* Recents Section */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-gray-600">
                  Recent Searches
                </h3>
                {history.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {history.length > 0 ? (
                <ul className="space-y-2">
                  {history.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleHistoryClick(item)}
                        className="text-gray-700 hover:text-amber-600 hover:underline transition"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">No recent searches.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NearByEats;
