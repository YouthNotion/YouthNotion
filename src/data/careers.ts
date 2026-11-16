import { site } from "./site";

export type Role = {
  /** The role's URL: /careers/<slug>. */
  slug: string;
  title: string;
  /** YYYY-MM-DD. Search engines show this, so refresh it now and then while a role stays open. */
  posted: string;
  employment: "internship" | "full-time";
  /** Internships only, e.g. "3 months". */
  duration?: string;
  location: string;
  /** Tags shown under the title, after the duration or "Full-time" and the location. */
  terms: string[];
  /** Shown as written, e.g. "Paid: 5,000 BDT/month". Left out of the posting when empty. */
  pay?: string;
  summary: string;
  /** Left out of the posting when empty. */
  responsibilities?: string[];
  requirements: string[];
};

export const tracks = [
  { name: "Internships", text: "Learn by doing" },
  { name: "Junior roles", text: "Grow with the work" },
];

/** Shared by every internship, so they live here once instead of in each role. */
export const internshipTerms = [
  "Flexible hours",
  "Mentorship included",
  "Open year-round",
  "Start on acceptance",
];

const computerRequirement = "Access to a computer [Mandatory; provided where genuinely needed]";

// Only current, confirmed openings go here. When the list is empty, the page says so.
export const roles: Role[] = [
  {
    slug: "web-engineering-intern",
    title: "Web Engineering Intern",
    posted: "2026-11-06",
    employment: "internship",
    duration: "3 months",
    location: "Fully remote",
    terms: internshipTerms,
    summary:
      "Contribute to web applications across front-end, back-end and UI/UX. Interns who perform well will be considered for a junior role on completion.",
    responsibilities: [
      "Develop and maintain front-end features for production applications",
      "Implement responsive, accessible interfaces from design specifications",
      "Assist with back-end API development and front-end integration",
      "Contribute to UI/UX design, including screens and user flows",
      "Diagnose and resolve defects, and test your own changes",
      "Optimize application performance, usability and SEO",
      "Write technical documentation for your work",
      "Collaborate through version control, pull requests and code review",
    ],
    requirements: [
      "Demonstrated motivation and interest in web engineering [Mandatory]",
      "Working knowledge of Git or equivalent version control [Mandatory]",
      "Working knowledge of HTML, CSS and JavaScript [Mandatory]",
      "Clear communication and self-directed remote work [Mandatory]",
      computerRequirement,
      "SvelteKit, Astro, or languages such as Rust, Python or Go [Optional]",
      "Portfolio or personal projects [Optional]",
      "Prior work experience or university degree [Not required]",
    ],
  },
  {
    slug: "systems-engineering-intern",
    title: "Systems Engineering Intern",
    posted: "2026-11-06",
    employment: "internship",
    duration: "3 months",
    location: "Hybrid",
    terms: internshipTerms,
    summary:
      "Contribute to embedded systems projects under senior engineers. Interns who perform well will be considered for a junior role on completion.",
    responsibilities: [
      "Shadow senior engineers and complete assigned tasks under mentorship",
      "Support embedded software on Linux, BSD and RTOS platforms",
      "Work across x86, ARM and other hardware architectures",
      "Assist senior engineers with embedded system design",
      "Assist with system deployment and configuration",
      "Test hardware, microcontroller and firmware components",
      "Assist with diagnosing system, software and hardware faults",
      "Develop scripts and tools to automate routine tasks",
      "Maintain technical documentation and contribute through code review",
    ],
    requirements: [
      "Demonstrated motivation and interest in systems engineering [Mandatory]",
      "Working knowledge of Git or equivalent version control [Mandatory]",
      "Basic knowledge of C, C++ or Python [Mandatory]",
      "Clear communication and self-directed work [Mandatory]",
      computerRequirement,
      "Experience with Linux, BSD, an RTOS or networking [Optional]",
      "Experience with microcontrollers, such as Arduino or ESP [Optional]",
      "Familiarity with PLCs [Highly desirable]",
      "Computer science, electrical engineering or related studies [Optional]",
    ],
  },
  {
    slug: "digital-communications-intern",
    title: "Digital Communications Intern",
    posted: "2026-11-16",
    employment: "internship",
    duration: "3 months",
    location: "Fully remote",
    terms: internshipTerms,
    summary:
      "Run social media campaigns with our PR team, from idea to post. Interns who perform well will be considered for a junior role on completion.",
    responsibilities: [
      "Help develop social media campaign ideas with the PR team",
      "Create posts tailored to each social media platform",
      "Schedule and publish content across platforms",
      "Engage with followers through comments and conversations",
      "Respond to messages and inquiries on social media",
      "Track post performance and suggest improvements",
      "Keep content consistent with the Youth Notion brand",
      "Coordinate with the PR team on announcements and events",
    ],
    requirements: [
      "Demonstrated interest in social media and communication [Mandatory]",
      "Strong written Bengali and English [Mandatory]",
      "Familiarity with Facebook, Instagram, LinkedIn and Reddit [Mandatory]",
      "Design skills in any tool, from Canva to Adobe Suite [Mandatory]",
      "Clear communication and self-directed remote work [Mandatory]",
      computerRequirement,
      "Portfolio or personal content you've created [Optional]",
      "Work experience or university degree [Not required]",
    ],
  },
  {
    slug: "junior-systems-engineer",
    title: "Junior Systems Engineer",
    posted: "2026-11-16",
    employment: "full-time",
    location: "Hybrid",
    terms: ["ROS", "Mentorship included", "Hardware provided", "Start on acceptance"],
    summary: "Build and integrate ROS software for real robotic systems alongside our engineering team.",
    responsibilities: [
      "Develop and maintain ROS nodes, packages and launch files",
      "Integrate sensors such as LiDAR, cameras and IMUs",
      "Contribute to robot navigation, localization and mapping",
      "Test in simulation with Gazebo and RViz before deploying to hardware",
      "Deploy and debug software on robot and embedded hardware",
      "Work with senior engineers on robot system design",
      "Write unit and integration tests for robot software",
      "Document packages, interfaces and procedures",
      "Collaborate through version control, pull requests and code review",
    ],
    requirements: [
      "Working knowledge of ROS [Mandatory]",
      "Proficiency in C++ or Python [Mandatory]",
      "Comfort with Linux and the command line [Mandatory]",
      "Working knowledge of Git or equivalent version control [Mandatory]",
      "Clear communication and self-directed work [Mandatory]",
      computerRequirement,
      "Experience with Gazebo, RViz or embedded systems [Optional]",
      "Prior industry experience [Optional]",
      "A strong student or personal robotics project [Highly desirable]",
    ],
  },
  {
    slug: "full-stack-engineer",
    title: "Full-Stack Engineer",
    posted: "2026-11-16",
    employment: "full-time",
    location: "Fully remote",
    terms: ["SvelteKit + Cloudflare", "Start on acceptance"],
    summary: "Own full-stack features on the Cloudflare platform, from interface to database.",
    responsibilities: [
      "Own full-stack features end to end with SvelteKit",
      "Build server-side logic and APIs on Cloudflare Workers",
      "Design database schemas and write efficient queries in Cloudflare D1",
      "Manage file storage and uploads with Cloudflare R2",
      "Build responsive, accessible user interfaces",
      "Write tests, and diagnose and fix issues across the stack",
      "Deploy, monitor and maintain production applications on Cloudflare",
      "Review pull requests and contribute to technical decisions",
    ],
    requirements: [
      "Strong experience with SvelteKit [Mandatory]",
      "Strong experience with Cloudflare Workers, D1 and R2 [Mandatory]",
      "Strong JavaScript and TypeScript [Mandatory]",
      "SQL and relational database design [Mandatory]",
      "Shipped web applications or past work you can show us [Mandatory]",
      "Strong Git workflow: issues, branches and pull requests [Mandatory]",
      "Clear communication and self-directed remote work [Mandatory]",
      "Experience with automated testing and CI/CD [Optional]",
    ],
  },
];

/** The tags under a role's title: duration or "Full-time", location, terms, and pay if set. */
export const roleFacts = (role: Role) =>
  [role.employment === "internship" ? role.duration : "Full-time", role.location, ...role.terms, role.pay].filter(
    (fact): fact is string => Boolean(fact),
  );

/** Opens WhatsApp with a first message already typed, so nobody has to work out what to say. */
export const applyLink = (role: Role) =>
  `${site.whatsapp.href}?text=${encodeURIComponent(`Hi Youth Notion, I'm interested in the ${role.title} role.`)}`;

const htmlList = (title: string, items?: string[]) =>
  items?.length
    ? `<p><strong>${title}</strong></p><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : "";

/** schema.org JobPosting data, which is what makes a role eligible for Google's job search. */
export const jobPosting = (role: Role) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: role.title,
  description: [
    `<p>${role.summary}</p>`,
    `<p>${roleFacts(role).join(", ")}.${role.employment === "internship" ? " Hours are adjusted around your studies or job." : ""} Apply on WhatsApp: ${site.whatsapp.label}.</p>`,
    htmlList("Responsibilities", role.responsibilities),
    htmlList("Requirements", role.requirements),
  ].join(""),
  identifier: { "@type": "PropertyValue", name: site.name, value: role.slug },
  datePosted: role.posted,
  employmentType: role.employment === "internship" ? "INTERN" : "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: site.name,
    sameAs: site.url,
    logo: `${site.url}/apple-touch-icon.png`,
  },
  // Google allows TELECOMMUTE for fully remote jobs only, and needs a country with it
  // (search targeting only). Any other role is listed at the office address.
  ...(role.location === "Fully remote"
    ? {
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: { "@type": "Country", name: site.address.country },
      }
    : {
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            addressCountry: site.address.countryCode,
          },
        },
      }),
  url: `${site.url}/careers/${role.slug}/`,
});
