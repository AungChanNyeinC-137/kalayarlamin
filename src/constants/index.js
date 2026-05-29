const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "April 2023 – Present",
    title: "Placement Test Registrar & Main Teacher",
    description:
      "Coordinate school admissions, organize assessments, manage placement data,and cooperate as a Main teacher for Cambridge YLE exams classes.",
    image: "/images/logo1.jpg",
  },
  {
    id: 2,
    date: " Feb 2024 – Dec 2024",
    title: "Teach Adult Learners Four Skills",
    description:
      "Delivered  English lessons focused on communication skills, student participation, and interactive learning experiences.",
    image: "/images/logo2.jpg",
  },
  {
    id: 3,
    date: "Mar 2023– Aug 2023",
    title: "English Language Instructor",
    description:
      "Created engaging lesson plans, taught conversational and fun English lessons, and helped students improve fluency through personalized learning methods.",
    image: "/images/logo3.jpg",
  },
];
const techStack = [
  {
    category: "Curricula",
    items: [
      "Cambridge YLE",
      "Global English",
      "Speak Out",
      "Headway",
    ],
  },
  {
    category: "Specialism",
    items: [
      "ESL kids/adults",
      "Phonics",
      "Chemistry",
      "Social Studies",
    ],
  },
  {
    category: "Pedagogy",
    items: [
      "CLT",
      "Student-first",
      "Activity-based",
      "Differentiation",
    ],
  },
  {
    category: "EdTech",
    items: [
      "Canva",
      "Google Classroom",
      "AV tools",
    ],
  },
  {
    category: "Assessment",
    items: [
      "YLE prep",
      "Formative",
      "Speaking",
      "Tests",
    ],
  },
  {
    category: "Credentials",
    items: [
      "ESL exp",
      "Cambridge trained",
    ],
  },
];
const socials = [
  {
    id: 1,
    text: "Telegram",
    icon: "/icons/telegram.svg",
    bg: "#f4656b",
    link: "https://t.me/lilymoon636",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/claire_la_min?utm_source=qr&igsh=MWE1a2MwOWt6cXJnOQ==",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/kalayar-moon-1ab63k16",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
    title: "Gallery Image 1",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
    title: "Gallery Image 2",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
    title: "Gallery Image 3",
  },
  {
    id: 4,
    img: "/images/gal4.jpg",
    title: "Gallery Image 4",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Connect and Power",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Connect and Power Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Connect and Power is a comprehensive educational program designed to empower students with essential skills for the modern world.",
            "Instead of traditional rote learning, it focuses on interactive, project-based learning that connects theoretical knowledge with real-world applications.",
            "Think of it like a bridge that connects classroom learning to practical skills, preparing students to thrive in a rapidly changing world.",
            "It covers a wide range of subjects, including technology, communication, and critical thinking, all aimed at fostering creativity and problem-solving abilities.",
          ],
        },
        {
          id: 2,
          name: "memo1",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/connect-and-power1.jpg",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "memo2",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/connect-and-power2.jpg",
          position: "top-52 right-80",
        },
        {
          id: 4,
          name: "memo3",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/connect-and-power3.jpg",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Research Paper Writing-Poster of the Best Content",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Research Paper Writing-Poster of the Best Content.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Research Paper Writing-Poster of the Best Content is a comprehensive guide to creating outstanding academic papers.",
            "Instead of struggling with structure and content, you get expert advice on research methodologies, argumentation, and presentation.",
            "Think of it like having a seasoned academic advisor—guiding you through each step of the writing process.",
            "It’s designed to help students and researchers produce high-quality papers that stand out in any academic setting.",
          ],
        },
        {
          id: 2,
          name: "memo1",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
           imageUrl: "/images/research-paper1.jpg",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "memo2",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/research-paper2.jpg",
        },
        {
          id: 5,
          name: "memo3",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/research-paper3.jpg",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Social Studies Teaching Project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Social Studies Teaching Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Social Studies Teaching Project is an innovative educational initiative designed to enhance the teaching and learning of social studies.",
            "Instead of traditional lecture-based methods, this project emphasizes interactive and student-centered approaches to engage learners in the subject matter.",
            "Think of it like a dynamic classroom experience where students actively participate in discussions, projects, and activities that bring social studies to life.",
            "The project aims to foster critical thinking, cultural awareness, and civic engagement among students, preparing them to be informed and active citizens in a global society.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/kalayar.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/kalayar-3.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/kalayar-2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle:   "Meet the Instructor! 👩‍🏫",
      image: "/images/kalayar.jpg",
      description: [

  "Hi, I’m Kalayar, a dedicated teacher who focuses on creating dynamic learning environments where every student feels confident, capable, and motivated to succeed. 🌱",
  "My approach to teaching is built around clarity and engagement. I love breaking down challenging subjects into manageable, interactive steps, making learning a rewarding experience rather than an intimidating one. ✏️",
  "I pay close attention to the small details, ensuring my lesson plans are clear, accessible, and structured to support diverse learning needs. 🎯",
  "Outside the classroom, I am constantly researching new educational tools, refining my teaching materials, or enjoying a late-night cup of tea while preparing for the next day. 🍵",
],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/files/resume.pdf",
      // you can add href if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};
export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
export const PHOTOS_LOCATION = {
  id: 5,
  type: "photos",
  name: "Photos",
  icon: "/icons/photos.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Library",
      icon: "/icons/gicon1.svg",
      kind: "folder",
      children: [
        {
          id: 1,
          name: "gal1.jpg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/gal1.jpg",
        },
        {
          id: 2,
          name: "gal2.jpg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/gal2.jpg",
        },
        {
          id: 3,
          name: "gal3.jpg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/gal3.jpg",
        },
        {
          id: 4,
          name: "gal4.jpg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/gal4.jpg",
        },
        {
          id: 5,
          name: "gal5.jpg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/gal5.jpg",
        },
      ],
    },

    {
      id: 2,
      name: "Memories",
      icon: "/icons/gicon2.svg",
      kind: "folder",
      children: [
        {
          id: 1,
          name: "memory-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/memory-1.jpg",
        },
        {
          id: 2,
          name: "memory-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/memory-2.jpg",
        },
        {
          id: 3,
          name: "memory-3.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/memory-3.jpg",
        },
      ],
    },

    {
      id: 3,
      name: "Places",
      icon: "/icons/file.svg",
      kind: "folder",
      children: [
        {
          id: 1,
          name: "place-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/place-1.jpg",
        },
        {
          id: 2,
          name: "place-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/place-2.jpg",
        },
      ],
    },

    {
      id: 4,
      name: "People",
      icon: "/icons/gicon4.svg",
      kind: "folder",
      children: [
        {
          id: 1,
          name: "teacher-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/people-1.jpg",
        },
        {
          id: 2,
          name: "teacher-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/people-2.jpg",
        },
        {
          id: 3,
          name: "teacher-3.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/people-3.jpg",
        },
      ],
    },

    {
      id: 5,
      name: "Favorites",
      icon: "/icons/gicon5.svg",
      kind: "folder",
      children: [
        {
          id: 1,
          name: "favorite-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/favorite-1.jpg",
        },
        {
          id: 2,
          name: "favorite-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/favorite-2.jpg",
        },
      ],
    },

    {
      id: 6,
      name: "Achievements",
      icon: "/icons/gicon6.svg",
      kind: "folder",
      children: [
        {
          id: 1,
          name: "Certicicate of Foundational Principles for Teaching ESL",
          icon: "/images/certificate.png",
          kind: "file",
          fileType: "pdf",
          pdfUrl: "/files/certificate-1.pdf",
        },
        {
          id: 2,
          name: "Certificate of Lesson Design and Assessment",
          icon: "/images/certificate.png",
          kind: "file",
          fileType: "pdf",
          pdfUrl: "/files/certificate-2.pdf",
        },
        {
          id: 3,
          name: "Certificate of Technology Enriched Teaching",
          icon: "/images/certificate.png",
          kind: "file",
          fileType: "pdf",
          pdfUrl: "/files/certificate-3.pdf",
        },
        {
          id: 4,
          name: "Certificate of TESOL Capstone Project 1",
          icon: "/images/certificate.png",
          kind: "file",
          fileType: "pdf",
          pdfUrl: "/files/certificate-4.pdf",
        },
        {
          id:5,
          name: "Certificate of Theories of Second Language Acquisition",
          icon: "/images/certificate.png",
          kind: "file",
          fileType: "pdf",
          pdfUrl: "/files/certificate-5.pdf",
        },
        {
          id: 6,
          name: "Certificate_of_Teaching_Second_Language_Listening,_Speaking_and_Pronunciation",
          icon: "/images/certificate.png",
          kind: "file",
          fileType: "pdf",
          pdfUrl: "/files/certificate-6.pdf",
        },
        {
          id: 7,
          name: "Certificate_of_Teaching_Second_Language_Reading,_Writing_and_Grammar",
          icon: "/images/certificate.png",
          kind: "file",
          fileType: "pdf",
          pdfUrl: "/files/certificate-7.pdf",
        },
      ],
    },
  ],
};

export const photosLinks = PHOTOS_LOCATION.children;

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  certificate: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
