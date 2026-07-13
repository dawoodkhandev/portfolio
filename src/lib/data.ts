// All site content lives here, separate from the components that render it.

export const profile = {
  name: "Dawood Khan",
  role: "Full-Stack & AI Developer",
  siteUrl: "https://dawoodkhan-seven.vercel.app",
  /** Split so the last clause can be accented. */
  tagline: {
    lead: "I turn ideas into full-stack AI products that people ",
    accent: "actually use.",
  },
  email: "contact.dawoodkhann@gmail.com",
  location: "Waterloo, ON",
  socials: {
    github: "https://github.com/dawoodkhandev",
    linkedin: "https://linkedin.com/in/muhammadawoodkhan",
  },
  resumeUrl: "/Dawood_Khan_Resume.pdf",
};

/** Navbar links. Each `id` matches a <section id="..."> on the homepage. */
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraph:
    "I'm an incoming Computer Science student at the University of Waterloo (Honours, Co-op) who loves building things end-to-end. I design and ship full-stack AI products — from the data pipelines and backend to the polished interface — with a focus on tools people genuinely use. Recently I've been deep in the Anthropic and OpenAI APIs, RAG, and React Native.",
  stats: [
    { value: "500M+", label: "Views Driven" },
    { value: "1,200+", label: "Locations Indexed" },
    { value: "3", label: "Projects Shipped" },
    { value: "Waterloo", label: "CS · Co-op '31" },
  ],
};

/** The project flagged `featured` renders full-width above the others. */
export type Project = {
  name: string;
  /** URL segment for the project's own page, e.g. /projects/stimai */
  slug: string;
  /** Badge in the card corner, e.g. "In Progress". */
  status?: string;
  description: string;
  tags: string[];
  features?: { title: string; detail: string }[];
  images?: { src: string; caption: string }[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "StimAI",
    slug: "stimai",
    description:
      "A full-stack AI fitness app I built end-to-end — mobile UI, FastAPI backend, and all the AI. It computes personalized macros and adaptive workout plans from a user's health data.",
    tags: ["React Native", "FastAPI", "Python", "Anthropic API", "TypeScript"],
    featured: true,
    features: [
      {
        title: "Adaptive Routine Engine",
        detail:
          "Uses Claude structured outputs to rebuild workout plans in real time around stated conditions (e.g. knee injury → leg press).",
      },
      {
        title: "AI Coach + Memory",
        detail:
          "Full profile context, multi-thread conversation memory, and live web search for real product links.",
      },
      {
        title: "Vision Form Coach",
        detail:
          "Claude vision + text-to-speech reads the camera feed and coaches your form and poses out loud, hands-free.",
      },
      {
        title: "Personalized Macros",
        detail:
          "A Mifflin–St Jeor / TDEE pipeline computes calories and macros tailored to each user.",
      },
    ],
    images: [
      {
        src: "/projects/stimai/plan.jpeg",
        caption:
          "Plan — calories and macros computed from a Mifflin–St Jeor / TDEE pipeline, plus an AI tip aware of the user's conditions.",
      },
      {
        src: "/projects/stimai/workout.jpeg",
        caption:
          "Workout — the routine rebuilt by the AI for a user with knee arthritis and Type 2 diabetes; swapped exercises are tagged 'adjusted'.",
      },
      {
        src: "/projects/stimai/coach.jpeg",
        caption:
          "AI Coach — a chat that knows the user's full profile, remembers the conversation, and can search the web for real products.",
      },
      {
        src: "/projects/stimai/vision-live.jpeg",
        caption:
          "Vision — the live form coach reads the camera feed mid-rep and calls out corrections out loud.",
      },
      {
        src: "/projects/stimai/vision.jpeg",
        caption:
          "Vision — two modes (Form Coach and Posing), with an explicit privacy note: frames are never recorded or saved.",
      },
      {
        src: "/projects/stimai/onboarding.jpeg",
        caption:
          "Onboarding — a 7-step wizard that captures health circumstances, which then drive the plan, the coach, and the routine.",
      },
    ],
    links: [{ label: "Code", href: "https://github.com/dawoodkhandev/StimAI" }],
  },
  {
    name: "BrandIQ AI",
    slug: "brandiq-ai",
    status: "In Progress",
    description:
      "An AI-powered SaaS platform that automates brand management and marketing analytics — ingesting social and e-commerce data, then surfacing insights via sentiment analysis, competitor benchmarking, and brand-identity scoring.",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    // No links yet — the repo stays private while this is still in progress.
  },
  {
    name: "VR Career Simulation",
    slug: "vr-career-simulation",
    status: "DECA Provincials",
    description:
      "A high-fidelity VR simulation built in Unity with OpenXR for the Meta Quest. Users step inside a fully modelled healthcare facility — clinics, dental rooms, patient rooms, and management offices — and explore each professional workspace through spatial UI and physics-based interactions. Built and presented live as a technical business solution at the DECA Ontario Provincial Competition.",
    tags: ["Unity", "OpenXR", "C#", "Meta Quest 2", "URP"],
    features: [
      {
        title: "Built on the OpenXR Standard",
        detail:
          "Using OpenXR rather than a vendor-specific SDK keeps the build portable across headsets, while targeting standalone Quest hardware forced real performance discipline.",
      },
      {
        title: "Spatial UI & Physics Interactions",
        detail:
          "Interactions are physics-based and diegetic — you reach out and manipulate objects in 3D space rather than clicking a flat menu floating in front of you.",
      },
      {
        title: "High-Fidelity Environment",
        detail:
          "A full clinic modelled room by room on Unity's Universal Render Pipeline, with baked lighting, occlusion culling, and post-processing tuned to hold framerate on mobile VR hardware.",
      },
      {
        title: "Presented at DECA Provincials",
        detail:
          "Demoed live in Toronto at the Ontario Provincial Competition, mirroring the headset feed to a video wall so an audience could follow along.",
      },
    ],
    images: [
      {
        src: "/projects/vr/unity-scene.jpeg",
        caption:
          "The Unity scene graph — the facility built room by room (patient rooms, dentist room, doctor clinics, management office, halls) on the Universal Render Pipeline, with an XR Origin rig driving the Meta Quest camera.",
      },
      {
        src: "/projects/vr/demo-headset.jpeg",
        caption:
          "Live demo — a visitor in the headset while the scene mirrors to the video wall behind them.",
      },
      {
        src: "/projects/vr/demo-presenting.jpeg",
        caption:
          "Presenting the simulation to an audience at the DECA Ontario Provincial Competition.",
      },
    ],
  },
];

// Skills grouped by category, rendered as pills with brand logos.
//   slug  — simple-icons brand slug, supplies the logo and its official colour
//   glyph — fallback for skills that aren't brands (SQL, RAG, ...)
//   color — overrides logos that are black and would vanish on a black page
export type Skill = {
  name: string;
  slug?: string;
  glyph?: "database" | "cloud" | "spark" | "braces";
  color?: string;
};

export const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", slug: "python" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "C / C++", slug: "cplusplus" },
      { name: "SQL", glyph: "database", color: "#38BDF8" },
    ],
  },
  {
    title: "AI & ML",
    items: [
      { name: "LangChain", slug: "langchain" },
      { name: "Anthropic API", slug: "anthropic", color: "#D97757" },
      { name: "OpenAI API", glyph: "spark", color: "#10A37F" },
      { name: "RAG", glyph: "braces", color: "#A78BFA" },
      { name: "Prompt Engineering", glyph: "spark", color: "#A78BFA" },
      { name: "Structured Outputs", glyph: "braces", color: "#A78BFA" },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "React", slug: "react" },
      { name: "React Native (Expo)", slug: "expo", color: "#FFFFFF" },
      { name: "Next.js", slug: "nextdotjs", color: "#FFFFFF" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    title: "Backend & Cloud",
    items: [
      { name: "FastAPI", slug: "fastapi" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Docker", slug: "docker" },
      { name: "AWS", glyph: "cloud", color: "#FF9900" },
      { name: "CI/CD", slug: "githubactions" },
      { name: "Git & GitHub", slug: "git" },
    ],
  },
];

/** Work experience — rendered as a vertical timeline. */
export const experience = [
  {
    role: "Software Developer & Marketing Technologist",
    company: "Maira Khan International",
    companyUrl: undefined as string | undefined,
    location: "Remote",
    period: "Aug 2025 – Jan 2026",
    bullets: [
      "Architected and automated data-driven content pipelines across TikTok, Instagram, and YouTube, scaling total reach to 500M+ views using analytics and A/B testing.",
      "Owned full-stack Shopify engineering — product catalog systems, automated inventory workflows, and e-commerce analytics to optimize the conversion funnel end-to-end.",
    ],
    tags: ["Shopify", "Data Analytics", "A/B Testing", "Automation"],
  },
  {
    role: "Web Developer",
    company: "Flingerz Dog Toys",
    companyUrl: undefined as string | undefined,
    location: "Remote",
    period: "Mar 2024 – May 2024",
    bullets: [
      "Built and deployed a production retail store locator indexing 1,200+ locations with mapping APIs and geospatial search, directly enabling new retail partnerships.",
    ],
    tags: ["Mapping APIs", "Geospatial Search", "JavaScript"],
  },
];

/** Education — two cards. */
export const education = [
  {
    school: "University of Waterloo",
    detail: "Bachelor of Computer Science (Honours, Co-op)",
    period: "Sept 2026 – Present",
    location: "Waterloo, ON",
    note: "Incoming",
  },
  {
    school: "Jean Augustine Secondary School",
    detail: "Ontario Secondary School Diploma · 90% Average",
    period: "Feb 2024 – Jun 2026",
    location: "Brampton, ON",
    note: "1st Place Regional Chess · DECA Ontario Provincials",
  },
];
