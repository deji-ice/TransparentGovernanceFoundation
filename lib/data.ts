import React from "react";
import { FaUserPlus, FaHandsHelping, FaUser, FaHandshake, FaNewspaper, FaLightbulb } from "react-icons/fa";

export interface Item {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type Leader = {
  id: number;
  title: string;
  name?: string;
  bio?: string;
  pic?: string;
  portfolio?: string;
  quotes?: string[];
  quote?: string;
};


export interface Program {
  title: string;
  description: string;
  image: string;
}


export const programsAndProjects: Program[] = [
  {
    title: "Seminars and Webinars",
    description:
      "Interactive seminars and webinars focused on capacity building and leadership development.",
    image:
      `https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    title: "Democratic Orientation",
    description:
      "Educational programs designed to guide communities on democratic processes and societal adjustments.",
    image:
      `https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8`
  },
  {
    title: "Diaspora Voting Lobby",
    description:
      "Advocacy efforts to ensure voting rights for diaspora citizens, fostering inclusive democratic participation.",
    image:
      `https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D`
  },
  {
    title: "Community Ethical Re-orientation",
    description:
      "Programs aimed at re-educating communities on ethical values to promote fairness and accountability.",
    image:
      `https://images.unsplash.com/photo-1542315099045-93937d70c67a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8`
  },
  {
    title: "Entrepreneurship Coaching",
    description:
      "Hands-on coaching and mentoring for aspiring entrepreneurs to build sustainable businesses.",
    image:
      `https://images.unsplash.com/photo-1709715357520-5e1047a2b691?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    title: "E-Commerce & Tech Incubation",
    description:
      "Support for e-commerce initiatives and establishment of regional tech-business incubation centers.",
    image:
      `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    title: "Medical Support Trips",
    description:
      "Collaborative medical outreach programs with AMPA & CAMPA to improve healthcare access.",
    image:
      `https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=3875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, // Source: Shutterstock
  },
  {
    title: "Agricultural Training",
    description:
      "Value-addition training programs for farmers to maximize agricultural productivity and profitability.",
    image:
      `https://res.cloudinary.com/dhvwthnzq/image/upload/v1734609183/africash/8e370a1542fbc35030c1c38957b7b9e4_zhbdbc.jpg`
  },
];


export const items: Item[] = [
  {
    icon: React.createElement(FaUserPlus),
    title: "Become a Member:",
    description:
      `Join our community to promote good governance and gain tools to engage with leaders and shape equitable policies.`
  },
  {
    icon: React.createElement(FaHandsHelping),
    title: "Support Our Initiatives:",
    description:
      `Support impactful reforms by donating, volunteering, or raising awareness to drive transformational projects that benefit communities.`,
  },
  {
    icon: React.createElement(FaUser),
    title: "Participate in Our Programs:",
    description:
      "Engage in workshops, seminars, and advocacy campaigns. Equip yourself with the tools to actively shape our nation's future.",
  },
  {
    icon: React.createElement(FaHandshake),
    title: "Collaborate with Us:",
    description:
      "If you represent an organization, institution, or community group, collaborate with TGF to amplify our collective impact.",
  },
  {
    icon: React.createElement(FaNewspaper),
    title: "Stay Informed:",
    description:
      "Subscribe to our newsletter and follow us on social media to stay updated on our activities, events, and advocacy efforts.",
  },
  {
    icon: React.createElement(FaLightbulb),
    title: "Share Your Ideas:",
    description: "Contribute your innovative ideas to help shape impactful solutions and drive meaningful change.",
  }
];

export const leaders: Leader[] = [
  {
    id: 1,
    title: "The Hon. Chairman",
    pic: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1735732741/Transparent%20Governance%20Foundation/WhatsApp_Image_2024-12-21_at_22.36.41_11c3fedb_jm0opg.jpg`,
    name: "Dr. Sunday A. Fadeyi, PE, DM",
    bio: "Dr. Sunday A. Fadeyi stands as a beacon of resilience, integrity, and leadership. Born in Otun Ekiti in the early 1950s, Dr. Fadeyi's early life was marked by adversity and perseverance. He worked as a carpenter alongside his siblings, a testament to his early understanding of hard work and determination. Financial constraints delayed his secondary education for six years, but his unwavering spirit and faith eventually opened doors to academic excellence. Dr. Fadeyi's educational journey is a remarkable testament to his resilience and commitment. He excelled academically at Moba Grammar School, pursued a Bachelor's Degree in Chemical Engineering from the University of Ife, and went on to achieve a Master of Engineering Degree from the University of Colorado, Denver, USA. His academic pursuits culminated in earning a Doctor of Management from Colorado Technical University, USA. Despite facing political violence that resulted in the loss of his certificates during a riot, Dr. Fadeyi's determination saw him through to become a registered Professional Engineer (PE) and complete his doctoral studies specializing in Project Management. In the United States, Dr. Fadeyi's journey of resilience continued. He transitioned from working as a taxi driver to serving as a State Professional Engineer at the Colorado Department of Public Health and Environment. His dedication to community service is exemplified through his roles as the second President of Egbe Omo Otun, USA, the Interim and Second President of Yoruba Ni Colorado, and as a Founding Member and First Treasurer of Omo Yoruba North America. Dr. Fadeyi's commitment to promoting Yoruba culture and his active involvement in U.S. national politics highlight his dedication to making a positive impact. He played a significant role as a Democratic Delegate at the Democratic National Convention in Colorado Springs, where President Obama was nominated as the Democratic Presidential candidate. Dr. Fadeyi's life story is an inspiring narrative of how unwavering determination, hard work, and a commitment to excellence can lead to remarkable achievements. His journey from a small town in Nigeria to becoming a respected professional and community leader in the United States exemplifies the power of perseverance and dedication. Through his leadership and community service, Dr. Fadeyi continues to make a significant positive impact on both local and global communities, embodying the values of integrity, compassion, and resilience.",
    quotes: [
      "Transparency is the cornerstone of democracy. By holding our leaders accountable, we can build a society that truly serves its people.",
      "Leadership in governance is not just about making decisions, but about inspiring others to uphold the values of transparency, accountability, and justice. Together, we can build a society where every voice is heard and every action is fair."
    ]
  },
  {
    id: 2,
    title: "The Hon. Vice Chairman",
    name: "Dr. Akinwale Orunesajo, DM",
    pic: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1735732741/Transparent%20Governance%20Foundation/WhatsApp_Image_2024-12-24_at_20.29.11_2e847895_kpr5ux.jpg`,
    portfolio: "[portfolio]",
    quotes: [
      "Empowering communities is the first step towards meaningful change. When people are involved, progress is inevitable.",
      "In our pursuit of good governance, we must remain steadfast and resilient. It is our duty to challenge the status quo and strive for a future where integrity and equity are the pillars of our institutions."
    ]
  },
  {
    id: 3,
    title: "Hon. Secretary General",
    name: "Dr. Samuel Afolayan, RPP, MCIP",
    pic: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1735732741/Transparent%20Governance%20Foundation/WhatsApp_Image_2024-12-24_at_20.29.11_ce85af8e_axykpn.jpg`,
    portfolio: "[portfolio]",
    quote: "The strength of our organization lies in our commitment to clarity and inclusivity. By fostering open communication and collaboration, we empower citizens and create a foundation for lasting change."
  },
  {
    id: 4,
    title: "Hon. Director of Finance",
    name: "Mr. Clement Babalola",
    pic: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1735732741/Transparent%20Governance%20Foundation/WhatsApp_Image_2024-12-21_at_22.34.44_5dae0f6e_t3ce6d.jpg`,
    portfolio: "Hon. Clement oversees the financial health of TGF. With a background in finance, banking, and multinational banks management, he ensures that our resources are used efficiently and transparently. His work guarantees that every donation and grant is maximized for impact.",
    quote: "Transparency in finances builds trust. It shows our supporters that we are committed to using their contributions responsibly."
  },
  {
    id: 5,
    title: "The Hon. Director of Comm.",
    name: "Mrs. Hon. Opeyemi",
    pic: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    portfolio: "Mrs. Hon. Opeyemi is the voice behind TGF’s public communications. With a career in IT and collaboration with civil rights and social group activists, she manages our outreach efforts, ensuring that our message of transparency and good governance reaches a wide audience. Her storytelling skills highlight the impact of our work and engage supporters.",
    quote: "Effective communication bridges the gap between the public and policymakers. It is essential for driving social change."
  }
];


