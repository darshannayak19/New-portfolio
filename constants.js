export const METADATA = {
  author: "Darshan Nayak",
  title: "Portfolio | Darshan Nayak",
  description:
    "Darshan Nayak is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  twitterHandle: "darshan77551322",
  keywords: [
    "Darshan Nayak",
    "Full stack Developer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "and a Software Engineer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: darshannayak19@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/code-dars/",
  },
  {
    name: "github",
    url: "https://github.com/darshannayak19",
  },
  {
    name: "twitter",
    url: "https://x.com/darshan77551322",
  },
];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Software Developer | Reasearch Assistant",
      description: [
        "Enhanced simulation communication efficiency, reducing excessive messaging and improving system performance by 20%.",
        "Restructured Java methods into optimized functions, leveraging double HashMaps to increase software performance by 25% and user satisfaction by 30%, Integrating a live-constraint scheduler into simulations, boosting agent performance by 25%.",
        "Organized project milestones, extracted key information, and established clear goals, reducing project setup time by 70% and project completion time by 15%, addressing workflow inefficiencies, Optimizing data type usage, resolving issues and increasing system effectiveness by 40%.",
        "Published an IEEE paper on AI information sharing in heterogeneous agent teams (Java), accepted in Jan 2023, demonstrating a 138.6% increase in mission success and a 2-point average score improvement in simulations through integrated multi-agent communication protocols."
      ],
      content: (
        <div className="flex flex-col items-center mt-14">
          <div className="text-white">
            February 2023 - Present
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="mb-3 text-white">
              <span className="px-2">Tech Stack</span>
            </div>
            <div className="flex flex-row space-x-5 mt-4">
              <span className="px-2 text-white ">
                Java
              </span>
              <span className="px-2  text-white">
                J2EE
              </span>
              <span className="px-2  text-white">
                JUnit
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  AVI: [
    {
      title: "Software Development Engineer Intern",
      description: [
        "Engineered and managed back-end systems, enhancing privacy and data compliance functions by 45% through refined React.js components. Additionally, overhauled user experience by 50% through the implementation of offline access, data sync, and resolution of UI/UX issues.",
        "Employed code-splitting techniques and streamlined rendering processes in React to minimize load time, reducing API calls by 25% and boosting system performance by 15% through the adoption of Redux and profiling tools, effectively addressing heavy load time issues.",
        "Architected a robust MERN stack system architecture on Azure and Heroku, reducing hosting issues by 40% and enhancing uptime by 25%.",
        "Rectified API integration errors, improving data retrieval accuracy and ensuring consistent application behavior, resulting in a 25% enhancement in code performance and reliability.",
        "Generated 5000+ alerts from real-time data collected by over 100 IoT devices detecting anomalous behavior, utilizing 5 different graphs to categorize and verify alerts and devices before storing them in the database."
      ],
      content: (
        <div className="flex flex-col items-center mt-14">
          <div className=" text-white">
          January 2024 - April 2024
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="mb-3 text-white">
              <span className="px-2">Tech Stack</span>
            </div>
            <div className="flex flex-row items-center mt-4">
              <span className="px-2 text-white ">
                MongoDB
              </span>
              <span className="px-2 text-white ">
                Express.js
              </span>
              <span className="px-2 text-white ">
                React.js
              </span>
              <span className="px-2 text-white ">
                Node.js
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Software Development Engineer Intern",
      description: [
        "Implemented Agile methodologies to enhance the front-end development process for financial data retrieval, resulting in a 25% improvement in responsiveness and user experience, and 2 times  the efficiency of data retrieval through optimizations using JavaScript, Angular.js, and React.js.",
        "Increased user engagement by 20% and satisfaction by 15% through effective user interface enhancements and best practices in user experience and front-end development.",
      ],
      content: (
        <div className="flex flex-col items-center mt-14">
          <div className=" text-white">
          May 2020 - June 2020
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="mb-3 text-white ">
              <span className="px-2">Tech Stack</span>
            </div>
            <div className="flex flex-row items-center mt-4 space-x-2">
              <span className="px-2 text-white">
                React.js
              </span>
              <span className="px-2 text-white">
                Angular.js
              </span>
              <span className="px-2 text-white">
                Node.js
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ],
};



export const SKILLS = {
  languagesAndTools: [
    "Python",
    "html",
    "css",
    "javascript",
    "java",
    "typescript",
    "nodejs",
    "webpack",
    "vue",
    "firebase",
    "figma",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Path Finding Visualizer",
    image: "/projects/visual.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Devised 5 pathfinding algorithms, enhancing efficiency by 40% for the Path Finding Visualizer project. Executed 2 maze generation methods for real-time challenges in the Path Finding Visualizer project. Innovated a First-Person view mode and camera input functionality for the Path Finding Visualizer project, resulting in a 60% increase in user interaction. Orchestrated 3D vision for users to immerse themselves in the maze and navigate interactively.",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://dhruvmisra.github.io/Pathfinding-Visualizer-ThreeJS/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "Vue"],
  },
  {
    name: "Mathease",
    image: "/projects/Mathease.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Spearheaded the development of an Edutech platform, enhancing study materials by collaborating with 50+ professors and previewing content, resulting in a 100% increase in user engagement. Initiated user-friendly features for material downloads and an efficient admin panel, increasing user retention by 25% and cutting content management time by 30%. Established a robust NoSQL eﬀicient database framework for access to 500+ files, enhancing to 1,500+ users.",
    gradient: ["#000066", "#6699FF"],
    url: "https://mathease.onrender.com/",
    tech: ["react", "MongoDB", "Angular", "node"],
  },
  {
    name: "AI Whisper",
    image: "/projects/whisper.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Developed a web API capable of converting uploaded audio files or recording real-time audio into text, supporting over 500 languages for the AI Whisper project. Integrated the Whisper AI model to improve audio recognition, achieving a 3-fold improvement in text generation accuracy.",
    gradient: ["#F14658", "#DC2537"],
    url: "",
    tech: ["AI","react", "nextjs", "tailwindcss", "Vue"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const GTAG = "G-5HCTL2TJ5W";
