// src/remotion/compositions/Instagram/ImagePost/QuotePost/data/quote.js

export const quoteData = {
  // Primary quote
  quote: "The data tells us that people lie, but it also tells us the truth about what we really want.",
  
  // Author information
  author: {
    name: "Seth Stephens-Davidowitz",
    title: "Data Scientist & Author",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", // Author image URL
    book: "Everybody Lies",
    bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop", // Book cover URL
  },
  
  // Design options
  design: {
    textColor: "#FFFFFF",
    backgroundColor: "#1A1A2E",
    backgroundImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1080&h=1080&fit=crop", // Background image URL
    fontSize: 42,
    fontFamily: "Georgia, serif",
    alignment: "center",
  },
  
  // Animation settings
  animation: {
    delay: 0,
    duration: 60,
    type: "typewriter",
  },
  
  // Additional metadata
  metadata: {
    category: "Book Quote",
    bookId: "everybody-lies",
    tags: ["data", "psychology", "truth", "human behavior"],
    source: "Everybody Lies by Seth Stephens-Davidowitz",
  }
};

// Multiple quotes with image URLs
export const quotes = [
  {
    id: 1,
    quote: "The data tells us that people lie, but it also tells us the truth about what we really want.",
    author: {
      name: "Seth Stephens-Davidowitz",
      title: "Data Scientist & Author",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      book: "Everybody Lies",
      bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    },
    background: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1080&h=1080&fit=crop",
    textColor: "#FFFFFF",
    accentColor: "#FF6B6B",
  },
  {
    id: 2,
    quote: "Big Data is not about the data. It's about asking the right questions.",
    author: {
      name: "Seth Stephens-Davidowitz",
      title: "Data Scientist & Author",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      book: "Everybody Lies",
      bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    },
    background: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1080&h=1080&fit=crop",
    textColor: "#FFFFFF",
    accentColor: "#4ECDC4",
  },
  {
    id: 3,
    quote: "In a world of information, the most valuable thing is insight.",
    author: {
      name: "Seth Stephens-Davidowitz",
      title: "Data Scientist & Author",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      book: "Everybody Lies",
      bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    },
    background: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&h=1080&fit=crop",
    textColor: "#FFFFFF",
    accentColor: "#FFD93D",
  },
  {
    id: 4,
    quote: "The internet is the greatest lie detector ever invented.",
    author: {
      name: "Seth Stephens-Davidowitz",
      title: "Data Scientist & Author",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      book: "Everybody Lies",
      bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    },
    background: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&h=1080&fit=crop",
    textColor: "#FFFFFF",
    accentColor: "#6C5CE7",
  },
  {
    id: 5,
    quote: "What we search for reveals more about us than what we say.",
    author: {
      name: "Seth Stephens-Davidowitz",
      title: "Data Scientist & Author",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      book: "Everybody Lies",
      bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    },
    background: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1080&h=1080&fit=crop",
    textColor: "#FFFFFF",
    accentColor: "#FD79A8",
  },
];

// Helper function to get random quote
export const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// Helper function to get quote by ID
export const getQuoteById = (id) => {
  return quotes.find(quote => quote.id === id);
};

// Background image URLs collection
export const backgroundImages = [
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1080&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1080&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1080&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1080&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-4b0ec8f4b0b3?w=1080&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1080&h=1080&fit=crop",
];

// Author image URLs collection
export const authorImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108379-be9c2b7ee0b1?w=400&h=400&fit=crop&crop=face",
];

// Book cover URLs collection
export const bookCovers = [
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
];

export default quoteData;