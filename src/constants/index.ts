import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "",
  },
  {
    id: "features",
    title: "Features",
    path: "features",
  },
  {
    id: "places",
    title: "Places",
    path: "/#/places",
  },
  {
    id: "authentication",
    title: "Sign In",
    path: "",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Tailored Suggestions",
    content:
      "Discover enticing combinations of recommended attractions and activities.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We implement proactive measures to ensure your data and interactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Travel Insights",
    content:
      "Predict upcoming traveler volumes for informed local preparations and opportunities.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Location",
    value: "$10K+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.diikstra.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.diikstra.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.diikstra.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.diikstra.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.diikstra.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.diikstra.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.diikstra.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.diikstra.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.diikstra.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.diikstra.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.diikstra.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.diikstra.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
