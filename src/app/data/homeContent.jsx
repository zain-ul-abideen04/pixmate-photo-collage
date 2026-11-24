// Home page ka saara text yahan hai.
// Abhi ye file se aata hai, baad mein yehi text backend (database) se aayega.
// Design/class ke naam yahan nahi hain, wo components mein hain.

export const siteName = "Pixmate";

// Navbar ke links. Jab tak page nahi bante, in par click karne se 404 aayega.
export const navLinks = [
  { label: "Editing Tools", href: "/editing-tools" },
  { label: "Templates", href: "/templates" },
  { label: "Design Library", href: "/design-library" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Learning & Support", href: "/learning-support" },
  { label: "Pricing", href: "/pricing" },
];

// "Create" dropdown ke teen columns
export const createMenu = [
  {
    title: "Marketing",
    items: [
      "Logo Maker",
      "Flyer Maker",
      "Poster Maker",
      "Business Card Maker",
      "Resume Maker",
      "Card Maker",
    ],
    seeAll: "See All",
  },
  {
    title: "Social Media",
    items: [
      "YouTube Thumbnail Maker",
      "YouTube Cover Maker",
      "Instagram Post Maker",
      "Facebook Cover Maker",
      "Twitch Cover Maker",
      "Twitter Cover Maker",
    ],
  },
  {
    title: "Events",
    items: ["Valentine Day", "Thanksgiving", "Christmas", "Halloween"],
  },
];

export const heroContent = {
  line1: "Photo",
  line2: "Collage",
  line3: "Maker",
  description:
    "A picture says a thousand words, but collages tell an entire story. Get creative with Picsart free collage maker to design motivational vision boards, social media posts, and more.",
  buttonText: "Create youe collage now",
};

export const whyChooseContent = {
  titleStart: "Why Choose ",
  titleHighlight: "Pixmate",
  titleEnd: ". to Make a Photo Collage",
};

export const whyFeatures = [
  {
    id: 1,
    title: "Easy to Use",
    description:
      "No editing skills needed. With an intuitive, drag-and-drop interface, you can easily add photos to create a collage.",
  },
  {
    id: 2,
    title: "High Quality",
    description:
      "Save photo collages in high-resolution JPEG, PNG, and PDF. Perfect for printing as a poster or wall art.",
  },
  {
    id: 3,
    title: "Versatile Collage Templates",
    description:
      "Create photo collage from a diverse library of templates and layouts for easy customization.",
  },
];

export const howItWorksContent = {
  titleStart: "Let Make a ",
  titleHighlight: "Collage",
};

export const stepsData = [
  {
    id: "1",
    title: "Open the Pixmate photo editor",
    description:
      "Open the Pixmate photo editor and browse the collage grids to find your ideal one.",
    hasButton: true,
    buttonText: "Create your collage",
  },
  {
    id: "2",
    title: "Upload your photos",
    description:
      "Once you've found the right grid, select each individual box and upload your image into it.",
    hasButton: false,
  },
  {
    id: "3",
    title: "Customize your collage",
    description:
      "Put your personal touches on your collage by adding photo effects, stickers, text, and anything else you want.",
    hasButton: false,
  },
  {
    id: "4",
    title: "Download your design",
    description:
      "When you're finished editing, name your file and download your collage.",
    hasButton: false,
  },
];

export const templateContent = {
  title1: "Photo Collage ",
  highlight1: "Template",
  title2: " and ",
  highlight2: "Layouts",
  title3: " Tailored to Your Needs",
  paragraph:
    "With our collage maker online, the possibilities for creating unique and visually appealing collages are truly endless. There are 2,000+ preset collage templates and layouts at your fingertips. To suit your demands, customize photo collage layout from our layout library. Even choose from our expertly designed collage templates for social media posts, mood boards, and more. Gather your pictures and tell your story in a creative and unique way with Pixmate picture collage maker..",
  buttonText: "Start Editing Photos",
};

export const featureStripData = [
  { id: 1, text: "Easy to create and customize" },
  { id: 2, text: "Beautifully designed templates" },
  { id: 3, text: "Millions of stock photos and illustrations" },
  { id: 4, text: "Easily download or share" },
];

export const shareContent = {
  highlight1: "Create",
  middle: " and ",
  highlight2: "share",
  end: " memories with a collage",
};

export const showcaseContent = {
  titleStart: "Get a peek at what’s ",
  titleHighlight: "possible",
  titleLine2: "with collage maker",
  description:
    "Explore a hand-picked collection of collages to get an idea of what you can create with Picsart.",
};

export const categories = [
  {
    id: "family",
    name: "Family",
    images: [
      "/pic10.png",
      "/pic11.png",
      "/pic12.png",
      "/pic13.png",
      "/pic14.png",
      "/pic15.png",
      "/pic16.png",
      "/pic17.png",
      "/pic18.png",
    ],
  },
  {
    id: "birthday",
    name: "Birthday",
    images: [
      "/pic19.png",
      "/pic20.png",
      "/pic21.png",
      "/pic22.png",
      "/pic23.png",
      "/pic24.png",
      "/pic25.png",
      "/pic26.png",
      "/pic28.png",
    ],
  },
  {
    id: "wedding",
    name: "Wedding",
    images: [
      "/pic29.png",
      "/pic30.png",
      "/pic31.png",
      "/pic32.png",
      "/pic33.png",
      "/pic34.png",
      "/pic35.png",
      "/pic36.png",
      "/pic37.png",
    ],
  },
  {
    id: "love",
    name: "Love",
    images: [
      "/pic19.png",
      "/pic21.png",
      "/pic32.png",
      "/pic36.png",
      "/pic24.png",
      "/pic15.png",
      "/pic13.png",
      "/pic23.png",
      "/pic34.png",
    ],
  },
];

export const editingContent = {
  introLines: [
    "Enhance your digital collage by",
    "turning ordinary photos into",
    "exceptional ones.",
  ],
  titleStart: "Discover ",
  titleHighlight: "time-saving",
  titleEnd: " photo editing tools",
};

export const faqContent = {
  title1: "Collage maker",
  title2: "FAQs",
  helpText: "Did not find what you were looking for?",
  buttonText: "Contact Help & Support",
};

export const faqData = [
  {
    id: 1,
    question: "Can I edit any photo collage template?",
    answer:
      "Absolutely - customize any of our pre-made photo collage layouts, any way you see fit. Pixmate offers several professionally designed, time-saving templates.",
  },
  {
    id: 2,
    question: "Can I edit the images in my photo collage?",
    answer:
      "Yes, you can easily adjust, crop, apply filters, and reposition any image within your collage frames.",
  },
  {
    id: 3,
    question: "Is the Pixmate collage maker free?",
    answer:
      "Yes! Pixmate offers a free version with access to hundreds of collage layouts, stock photos, and basic editing tools.",
  },
  {
    id: 4,
    question: "What types of collages can I create with Pixmate?",
    answer:
      "You can create grid collages, photo series, aesthetic social media posts, posters, birthday collages, and wall art.",
  },
  {
    id: 5,
    question: "How do I make a good photo collage?",
    answer:
      "Choose a consistent theme or color palette, select high-quality photos, use grid layouts to balance the image spacing, and add subtle text or stickers.",
  },
  {
    id: 6,
    question: "How long will it take to create a collage?",
    answer:
      "With our easy drag-and-drop templates, you can create and download a professional photo collage in less than 2 minutes!",
  },
];

export const newsletterContent = {
  title: "Subscribe to Newsletter",
  placeholder: "Enter your email here",
  buttonText: "Submit",
};

const footerLinks = [
  "About Us",
  "Privacy Policy",
  "Terms of Condition",
  "Contact Us",
  "Press",
  "New",
  "Partenar",
];

export const footerContent = {
  languages: ["English", "Urdu", "Spanish", "French"],
  downloadTitle: "Download from",
  columns: [
    { title: "Company", links: footerLinks },
    { title: "Support", links: footerLinks },
    { title: "About", links: footerLinks },
    { title: "Resource", links: footerLinks },
  ],
  bottomLinks: ["Terms of Use", "Privacy Policy", "Do Not Sell"],
  moreLabel: "More",
  moreLinks: ["Cookie Policy", "Accessibility", "Sitemap"],
  copyright: "© 2024 Pixmate, Inc.",
};