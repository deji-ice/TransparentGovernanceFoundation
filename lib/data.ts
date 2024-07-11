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

export const leaders: Leader[] = [
  {
    id: 1,
    title: "The Hon. Chairman",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
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
    pic: "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    portfolio: "[portfolio]",
    quotes: [
      "Empowering communities is the first step towards meaningful change. When people are involved, progress is inevitable.",
      "In our pursuit of good governance, we must remain steadfast and resilient. It is our duty to challenge the status quo and strive for a future where integrity and equity are the pillars of our institutions."
    ]
  },
  {
    id: 3,
    title: "Hon. Secretary General",
    name:"Dr. Samuel Afolayan, RPP, MCIP",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    portfolio: "[portfolio]",
    quote: "The strength of our organization lies in our commitment to clarity and inclusivity. By fostering open communication and collaboration, we empower citizens and create a foundation for lasting change."
  },
  {
    id: 4,
    title: "Hon. Director of Finance",
    name: "Mr. Clement Babalola",
    pic: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  
  // export const leaders: Leader[] = [
  //   {
  //     title: "The Hon. Chairman",
  //     pic:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  //     name: "Dr. Sunday A. Fadeyi, PE, DM",
  //     bio: "Dr. Sunday A. Fadeyi stands as a beacon of resilience, integrity, and leadership. Born in Otun Ekiti in the early 1950s, Dr. Fadeyi's early life was marked by adversity and perseverance. He worked as a carpenter alongside his siblings, a testament to his early understanding of hard work and determination. Financial constraints delayed his secondary education for six years, but his unwavering spirit and faith eventually opened doors to academic excellence. Dr. Fadeyi's educational journey is a remarkable testament to his resilience and commitment. He excelled academically at Moba Grammar School, pursued a Bachelor's Degree in Chemical Engineering from the University of Ife, and went on to achieve a Master of Engineering Degree from the University of Colorado, Denver, USA. His academic pursuits culminated in earning a Doctor of Management from Colorado Technical University, USA. Despite facing political violence that resulted in the loss of his certificates during a riot, Dr. Fadeyi's determination saw him through to become a registered Professional Engineer (PE) and complete his doctoral studies specializing in Project Management. In the United States, Dr. Fadeyi's journey of resilience continued. He transitioned from working as a taxi driver to serving as a State Professional Engineer at the Colorado Department of Public Health and Environment. His dedication to community service is exemplified through his roles as the second President of Egbe Omo Otun, USA, the Interim and Second President of Yoruba Ni Colorado, and as a Founding Member and First Treasurer of Omo Yoruba North America. Dr. Fadeyi's commitment to promoting Yoruba culture and his active involvement in U.S. national politics highlight his dedication to making a positive impact. He played a significant role as a Democratic Delegate at the Democratic National Convention in Colorado Springs, where President Obama was nominated as the Democratic Presidential candidate. Dr. Fadeyi's life story is an inspiring narrative of how unwavering determination, hard work, and a commitment to excellence can lead to remarkable achievements. His journey from a small town in Nigeria to becoming a respected professional and community leader in the United States exemplifies the power of perseverance and dedication. Through his leadership and community service, Dr. Fadeyi continues to make a significant positive impact on both local and global communities, embodying the values of integrity, compassion, and resilience.",
  //     quotes: [
  //       "Transparency is the cornerstone of democracy. By holding our leaders accountable, we can build a society that truly serves its people.",
  //       "Leadership in governance is not just about making decisions, but about inspiring others to uphold the values of transparency, accountability, and justice. Together, we can build a society where every voice is heard and every action is fair."
  //     ]
  //   },
  //   {
  //     title: "The Hon. Vice Chairman",
  //     pic: "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     portfolio: "[portfolio]",
  //     quotes: [
  //       "Empowering communities is the first step towards meaningful change. When people are involved, progress is inevitable.",
  //       "In our pursuit of good governance, we must remain steadfast and resilient. It is our duty to challenge the status quo and strive for a future where integrity and equity are the pillars of our institutions."
  //     ]
  //   },
  //   {
  //     title: "The Hon. Secretary General",
  //     pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     portfolio: "[portfolio]",
  //     quote: "The strength of our organization lies in our commitment to clarity and inclusivity. By fostering open communication and collaboration, we empower citizens and create a foundation for lasting change."
  //   },
  //   {
  //     title: "The Hon. Director of Finance",
  //     name: "Hon. Clement",
  //     pic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     portfolio: "Hon. Clement oversees the financial health of TGF. With a background in finance, banking, and multinational banks management, he ensures that our resources are used efficiently and transparently. His work guarantees that every donation and grant is maximized for impact.",
  //     quote: "Transparency in finances builds trust. It shows our supporters that we are committed to using their contributions responsibly."
  //   },
  //   {
  //     title: "The Hon. Director of Communication",
  //     name: "Mrs. Hon. Opeyemi",
  //     pic: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     portfolio: "Mrs. Hon. Opeyemi is the voice behind TGF’s public communications. With a career in IT and collaboration with civil rights and social group activists, she manages our outreach efforts, ensuring that our message of transparency and good governance reaches a wide audience. Her storytelling skills highlight the impact of our work and engage supporters.",
  //     quote: "Effective communication bridges the gap between the public and policymakers. It is essential for driving social change."
  //   }
  // ];
  