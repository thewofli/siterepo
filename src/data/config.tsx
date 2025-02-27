import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Site Repository",
  initials: "SR",
  url: "https://opera.epiclese.org",
  description:
    "A collection of sites from the r/w community.",
  summary:
    "[placeholder]",
  avatarUrl: "/placeholder.png",
  skills: [],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/thewofli",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "Twitter",
        url: "https://google.com",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:example.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  sites: [
    {
      name: "Portfolio Site",
      description: "Personal portfolio website template with sections for projects, work experience, and skills",
      url: "https://portfolio-template.com",
      dates: "Jan 2024 - Feb 2024",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      video: "",
      tags: ["Next.js", "Tailwind CSS", "Portfolio"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      name: "E-Commerce Store",
      description: "Modern e-commerce platform with product listings, cart functionality, and checkout process",
      url: "https://ecommerce-template.com",
      dates: "Jan 2024 - Feb 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      video: "",
      tags: ["Next.js", "Tailwind CSS", "E-Commerce", "Stripe"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      name: "Blog Platform",
      description: "Clean and minimal blog template with markdown support and category filtering",
      url: "https://blog-template.com",
      dates: "Jan 2024 - Feb 2024",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      video: "",
      tags: ["Next.js", "Tailwind CSS", "Blog", "Markdown"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      name: "Dashboard UI",
      description: "Administrative dashboard with analytics, user management, and data visualization",
      url: "https://dashboard-template.com",
      dates: "Jan 2024 - Feb 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      video: "",
      tags: ["Next.js", "Tailwind CSS", "Dashboard", "Charts"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      name: "Landing Page",
      description: "High-converting landing page template with call-to-action sections and testimonials",
      url: "https://landing-template.com",
      dates: "Jan 2024 - Feb 2024",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      video: "",
      tags: ["Next.js", "Tailwind CSS", "Landing Page"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      name: "SaaS Application",
      description: "Software as a Service template with authentication, billing, and feature showcase",
      url: "https://saas-template.com",
      dates: "Jan 2024 - Feb 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      video: "",
      tags: ["Next.js", "Tailwind CSS", "SaaS", "Authentication"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    }
  ]
} as const;
