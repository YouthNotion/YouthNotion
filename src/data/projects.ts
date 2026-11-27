import type { ImageMetadata } from "astro";
import sunagorikLogo from "@/assets/projects/sunagorik-mark.png";

export type Project = {
  slug: "terra" | "sunagorik" | "barios" | "aeroaid";
  name: string;
  /** Short label shown above the name. */
  field: string;
  /** One line for the small cards on the home page. */
  summary: string;
  href: string;
  /** Logo image, for projects whose mark is not drawn inline in ProjectMark. */
  logo?: ImageMetadata;
  /** Accent used for this project's card, glow and tags. */
  accent: string;
  /** The rest is shown on the projects page, and comes from each project's own site. */
  tagline: string;
  about: string;
  stats?: { value: string; label: string }[];
  highlights: { title: string; text: string }[];
  audience: string[];
};

const projectList: Project[] = [
  {
    slug: "terra",
    name: "Project TERRA",
    field: "Environmental response",
    summary:
      "An automated flood intelligence network: a solar-backed sensor grid streams live water level, weather and air-quality data for early warning.",
    href: "https://youthnotion.github.io/TERRA/",
    accent: "var(--teal)",
    tagline: "Automated flood intelligence network. Data saves lives.",
    about:
      "Delayed early warnings, limited sensor coverage and fragmented data leave disaster-prone communities vulnerable. TERRA deploys an autonomous sensor grid that feeds a real-time pipeline and dashboard.",
    stats: [
      { value: "52,437", label: "Lives lost in 90 major floods, 1900–2016" },
      { value: "14,421", label: "Crore BDT annual flood damage" },
      { value: "10", label: "Prototypes deployed" },
    ],
    highlights: [
      { title: "Real-time stream", text: "Live water level, temperature and air quality feeds." },
      { title: "Multi-network", text: "Wi-Fi, GSM and LoRaWAN mesh connectivity." },
      { title: "Resilient core", text: "Solar, battery and AC-DC triple redundancy." },
      { title: "Data processing", text: "A real-time ML pipeline behind the dashboard." },
    ],
    audience: ["Government", "Agriculture", "Insurance", "NGOs"],
  },
  {
    slug: "sunagorik",
    name: "Project Sunagorik",
    field: "Civic awareness",
    summary:
      "A civic engagement platform for Bangladesh: citizens report and resolve community issues, backed by real-time environmental monitoring.",
    href: "https://youthnotion.github.io/sunagorik",
    logo: sunagorikLogo,
    accent: "var(--lime)",
    tagline: "A civic engagement platform for Bangladesh.",
    about:
      "Sunagorik bridges the gap between government and citizens. People report and resolve community issues through a simple interface, voting and data analysis, improving transparency, accountability and living conditions.",
    highlights: [
      { title: "ASTRA", text: "Real-time environmental monitoring." },
      { title: "Community directory", text: "Tools for better collaboration between community groups." },
      { title: "Citizen journalism", text: "Reliable citizen-generated content." },
      { title: "Civic literacy", text: "Civic literacy programs for youth, with educational institutions." },
    ],
    audience: ["Citizens", "Local government", "Law enforcement", "Community groups"],
  },
  {
    slug: "barios",
    name: "Project BariOS",
    field: "Youth technology",
    summary:
      "A mobile-first rental OS for Bangladesh: discover verified listings, track rent, and keep repairs moving without the usual hassle.",
    href: "https://bari-os.com",
    accent: "var(--amber)",
    tagline: "Rent. Manage. Maintain.",
    about:
      "Where good landlords meet good tenants. Every landlord is checked against their NID and ownership papers, every listing is reviewed, and the address stays private until the landlord says yes.",
    stats: [
      { value: "20", label: "Dhaka neighbourhoods" },
      { value: "3 min", label: "To publish a listing" },
      { value: "24h", label: "Verification review target" },
    ],
    highlights: [
      { title: "Find a home", text: "Filter by area, budget, bedrooms and move-in month." },
      { title: "Track rent", text: "A ledger per flat, automatic reminders and receipts." },
      {
        title: "Home Care Club",
        text: "Report a repair with a photo; the team arranges a trusted plumber, electrician or painter.",
      },
      { title: "No brokers", text: "Listing, enquiring and the rent tracker are free." },
    ],
    audience: ["Tenants", "Landlords"],
  },
  {
    slug: "aeroaid",
    name: "Project AeroAid",
    field: "Community health",
    summary:
      "A blood donor network for Bangladesh's aviation community: find donors by blood group and area, and send requests in a few taps.",
    href: "https://aero-aid.com",
    accent: "var(--red)",
    tagline: "No one in our aviation community left in need.",
    about:
      "AeroAid connects aviation students and airline professionals across Bangladesh as blood donors, so help is quick to find during a medical emergency, in Dhaka and beyond.",
    stats: [
      { value: "8", label: "Blood groups searchable" },
      { value: "63", label: "Dhaka areas covered" },
    ],
    highlights: [
      { title: "Donor search", text: "Find donors by blood group and area for quick local matches." },
      { title: "Donation requests", text: "Ask a donor directly and track requests you've sent." },
      { title: "Donation history", text: "Donors log past donations and set their availability." },
      { title: "Secure by design", text: "Email-code sign-in and row-level security protect personal data." },
    ],
    audience: ["Aviation students", "Airline professionals", "Community members"],
  },
];

/** Every project, alphabetically by name. Pages, the footer and the hero animations all use this order. */
export const projects = [...projectList].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));

export const projectBySlug = (slug: Project["slug"]) => projects.find((project) => project.slug === slug)!;
