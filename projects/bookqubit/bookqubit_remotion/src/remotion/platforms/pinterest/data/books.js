export const books = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    tag: "Essential read",
    keyPoints: [
      "Tiny changes, remarkable results.",
      "The system beats the goal — every time.",
      "Build better habits, one percent at a time.",
    ],
    palette: { bg: "#0b1220", bg2: "#1e3a8a", accent: "#fde047", text: "#eff6ff", muted: "#bfdbfe" },
    link: "https://www.bookqubit.com/books/atomic-habits",
    hi: {
      title: "एटॉमिक हैबिट्स",
      author: "जेम्स क्लियर",
      tag: "अवश्य पढ़ें",
      keyPoints: [
        "छोटे बदलाव, बड़े परिणाम।",
        "सिस्टम हमेशा लक्ष्य से बड़ा होता है।",
        "एक प्रतिशत बेहतर, हर दिन।",
      ],
    },
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    tag: "Focus & productivity",
    keyPoints: [
      "Focus is the new superpower.",
      "Rules for success in a distracted world.",
      "Train your brain for depth, not noise.",
    ],
    palette: { bg: "#0a0a0a", bg2: "#1f2937", accent: "#38bdf8", text: "#f9fafb", muted: "#cbd5e1" },
    link: "https://www.bookqubit.com/books/deep-work",
    hi: {
      title: "डीप वर्क",
      author: "कैल न्यूपोर्ट",
      tag: "फोकस और उत्पादकता",
      keyPoints: [
        "फोकस आज की सबसे बड़ी सुपरपावर है।",
        "भटकाव भरी दुनिया में सफलता के नियम।",
        "दिमाग को गहराई के लिए प्रशिक्षित करें।",
      ],
    },
  },
  {
    id: "sapiens",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    tag: "Big history",
    keyPoints: [
      "A brief history of humankind.",
      "From stone tools to silicon chips.",
      "How stories built civilizations.",
    ],
    palette: { bg: "#0b1220", bg2: "#334155", accent: "#fbbf24", text: "#f1f5f9", muted: "#cbd5e1" },
    link: "https://www.bookqubit.com/books/sapiens",
    hi: {
      title: "सेपियंस",
      author: "युवाल नोआ हरारी",
      tag: "मानव इतिहास",
      keyPoints: [
        "मानव जाति का संक्षिप्त इतिहास।",
        "पत्थर के औज़ारों से सिलिकॉन चिप तक।",
        "कहानियों ने सभ्यताएँ बनाईं।",
      ],
    },
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    tag: "Timeless fiction",
    keyPoints: [
      "Follow your Personal Legend.",
      "A fable about destiny and dreams.",
      "The journey is the treasure.",
    ],
    palette: { bg: "#0b1220", bg2: "#1e3a8a", accent: "#fde047", text: "#eff6ff", muted: "#bfdbfe" },
    link: "https://www.bookqubit.com/books/the-alchemist",
    hi: {
      title: "द अल्केमिस्ट",
      author: "पाउलो कोएलो",
      tag: "कालजयी कथा",
      keyPoints: [
        "अपने सपनों का पीछा करें।",
        "नियति और सपनों की कहानी।",
        "सफ़र ही असली खज़ाना है।",
      ],
    },
  },
  {
    id: "the-kite-runner",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    tag: "Modern classic",
    keyPoints: [
      "A story of friendship and betrayal.",
      "One impossible act of redemption.",
      "The past never really lets go.",
    ],
    palette: { bg: "#1a0f0a", bg2: "#c2410c", accent: "#fde68a", text: "#fff7ed", muted: "#fed7aa" },
    link: "https://www.bookqubit.com/books/the-kite-runner",
    hi: {
      title: "द काइट रनर",
      author: "खालेद हुसैनी",
      tag: "आधुनिक क्लासिक",
      keyPoints: [
        "दोस्ती और विश्वासघात की कहानी।",
        "मुक्ति का एक असंभव क्षण।",
        "अतीत कभी पीछा नहीं छोड़ता।",
      ],
    },
  },
  {
    id: "klara-and-the-sun",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    tag: "Literary sci-fi",
    keyPoints: [
      "What does it mean to love?",
      "An artificial friend discovers the world.",
      "Quiet, beautiful, unforgettable.",
    ],
    palette: { bg: "#1a0f2e", bg2: "#6d28d9", accent: "#fde047", text: "#f5f3ff", muted: "#ddd6fe" },
    link: "https://www.bookqubit.com/books/klara-and-the-sun",
    hi: {
      title: "क्लारा और सूरज",
      author: "काज़ुओ इशिगुरो",
      tag: "साहित्यिक साइ-फ़ाई",
      keyPoints: [
        "प्यार का असली मतलब क्या है?",
        "एक कृत्रिम मित्र दुनिया को जानता है।",
        "शांत, सुंदर, अविस्मरणीय।",
      ],
    },
  },
];

// Helper: get book data for a given locale
// Usage: getBook(book, "hi") -> returns book with hi overrides applied
export const getBook = (book, locale = "en") => {
  if (locale === "en" || !book[locale]) return book;
  return {
    ...book,
    title: book[locale].title || book.title,
    author: book[locale].author || book.author,
    tag: book[locale].tag || book.tag,
    keyPoints: book[locale].keyPoints || book.keyPoints,
  };
};

export default books;