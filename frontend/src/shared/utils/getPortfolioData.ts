import { type portfolioDataProp } from "./types";

const getPortfolioData = (): portfolioDataProp[] => {
  return [
    {
      id: 1,
      title: "Iskawt System",
      image: "/is1.png",
      description:
        "One of the project in our school. The Iskawt System is an administrative control system designed to manage user applications.",
      projectDescription: [
        {
          id: 1,
          title: "Google Single Sign-On (SSO):",
          description:
            "Seamlessly integrated Google SSO offers users a convenient and secure way to access various applications within the Iskawt System. This reduces the hassle of remembering multiple login credentials and enhances overall user experience.",
        },
        {
          id: 2,
          title: "QR Code Login:",
          description:
            "The innovative QR code login feature adds an extra layer of accessibility. Users can effortlessly scan QR codes to log into their accounts, streamlining the authentication process.",
        },
        {
          id: 3,
          title: "Account Flagging:",
          description:
            "The system includes a robust mechanism for flagging user accounts. Administrators can easily identify and address accounts that require attention, ensuring a safe and compliant user environment.",
        },
        {
          id: 4,
          title: "CRUD Operations for Admin:",
          description:
            "The Iskawt System puts the power in the hands of administrators with Create, Read, Update, and Delete (CRUD) operations. Admins can efficiently manage user accounts and their applications.",
        },
        {
          id: 5,
          title: "Realtime update with AJAX:",
          description:
            "Users and administrators can enjoy a dynamic experience with instant updates and responses, enhancing overall usability.",
        },
        {
          id: 6,
          title: "Activity Logs:",
          description:
            "Detailed activity logs into user interactions. Admins can monitor user behavior.",
        },
        {
          id: 7,
          title: "Multi-Factor Authentication (MFA):",
          description:
            "This feature adds an extra layer of protection by requiring users to provide multiple forms of verification before accessing their accounts.",
        },
      ],
      projectImagesLink: [
        {
          id: 1,
          link: "/is1.png",
        },
        {
          id: 2,
          link: "/is2.png",
        },
        {
          id: 3,
          link: "/is3.png",
        },
        {
          id: 4,
          link: "/is4.png",
        },
        {
          id: 5,
          link: "/is5.png",
        },
        {
          id: 6,
          link: "/is6.png",
        },
        {
          id: 7,
          link: "/is7.png",
        },
        {
          id: 8,
          link: "/is8.png",
        },
        {
          id: 9,
          link: "/is9.png",
        },
        {
          id: 10,
          link: "/is10.png",
        },
        {
          id: 11,
          link: "/is11.png",
        },
        {
          id: 12,
          link: "/is12.png",
        },
        {
          id: 13,
          link: "/is13.png",
        },
        {
          id: 14,
          link: "/is14.png",
        },
        {
          id: 15,
          link: "/is15.png",
        },
        {
          id: 16,
          link: "/is16.png",
        },
      ],
      projectGithubLink: "https://github.com/elyric10-dev/iskawt-system",
      techStacks: [
        {
          id: 1,
          icon: "html",
          name: "HTML",
        },
        {
          id: 2,
          icon: "css",
          name: "CSS",
        },
        {
          id: 3,
          icon: "javascript",
          name: "JavaScript",
        },
        {
          id: 4,
          icon: "php",
          name: "PHP",
        },
        {
          id: 5,
          icon: "mysql",
          name: "MySQL",
        },
      ],
      otherTechStacks: [
        {
          id: 1,
          icon: "xampp",
          name: "XAMPP",
        },
        {
          id: 2,
          icon: "phpmyadmin",
          name: "Phpmyadmin",
        },
        {
          id: 3,
          icon: "vscode",
          name: "VS Code",
        },
      ],
    },
    {
      id: 2,
      title: "E-Learning System",
      image: "/els1.png",
      description:
        "This was my first React and Laravel API project that was based on my training on my previous company before transfering me to the other project and collaborate with other developers. And about the project the ELS (E-Learning System) is an E-learning platform designed to provide users with an interactive for enhancing their knowledge. This project focuses on users to answer variants of categories, track their performance, save answered questions, and connect with fellow learners.",
      projectDescription: [
        {
          id: 1,
          title: "Admin-Controlled Question Categories:",
          description:
            "Administrators have the authority to create and manage question categories. This categorization ensures that users can easily find and engage with questions related to their areas of interest or study.",
        },
        {
          id: 2,
          title: "CRUD Operations for Admin:",
          description:
            "They can effortlessly manage and update question categories, keeping the content relevant and up to date. Can even add or remove users as well.",
        },
        {
          id: 3,
          title: "Score Tracking and Performance Monitoring:",
          description:
            "The platform enables users to monitor their performance by tracking their scores for each category.",
        },
        {
          id: 4,
          title: "One-Time Answer Submission: ",
          description:
            "Users are provided with a single opportunity to answer questions within a category and ensuring a fair evaluation of knowledge.",
        },
        {
          id: 5,
          title: "Immediate Feedback:",
          description:
            "After answering a question, users receive instant feedback indicating whether their answer was correct or incorrect and passed or failed.",
        },
        {
          id: 6,
          title: "Saved lesson learned:",
          description:
            "This feature lets users to review and keep track to their answered questions.",
        },
        {
          id: 7,
          title: "Activity Logs:",
          description:
            "Detailed activity logs from the categories attempted to answer, to scores achieved, and followed or unfollowed the other users.",
        },
      ],
      projectImagesLink: [
        {
          id: 1,
          link: "/els1.png",
        },
        {
          id: 2,
          link: "/els2.png",
        },
        {
          id: 3,
          link: "/els3.png",
        },
        {
          id: 4,
          link: "/els4.png",
        },
        {
          id: 5,
          link: "/els5.png",
        },
        {
          id: 6,
          link: "/els6.png",
        },
        {
          id: 7,
          link: "/els7.png",
        },
        {
          id: 8,
          link: "/els8.png",
        },
        {
          id: 9,
          link: "/els9.png",
        },
        {
          id: 10,
          link: "/els10.png",
        },
        {
          id: 11,
          link: "/els11.png",
        },
        {
          id: 12,
          link: "/els12.png",
        },
        {
          id: 13,
          link: "/els13.png",
        },
        {
          id: 14,
          link: "/els14.png",
        },
        {
          id: 15,
          link: "/els15.png",
        },
        {
          id: 16,
          link: "/els16.png",
        },
      ],
      projectGithubLink: "https://github.com/elyric10-dev/e-learning-system",
      techStacks: [
        {
          id: 1,
          icon: "reactjs",
          name: "React JS",
        },
        {
          id: 2,
          icon: "tailwind",
          name: "Tailwind",
        },
        {
          id: 3,
          icon: "javascript",
          name: "JavaScript",
        },
        {
          id: 4,
          icon: "laravel",
          name: "Laravel API",
        },
      ],
      otherTechStacks: [
        {
          id: 1,
          icon: "vscode",
          name: "VS Code",
        },
        {
          id: 2,
          icon: "postman",
          name: "Postman",
        },
      ],
    },
    {
      id: 3,
      title: "Messenger Clone App",
      image: "/CMA3.jpg",
      description:
        "This project is only for upskilling, because one of our team leader instructed us to practice or upskill in Flutter and Firebase firestore because we have upcoming mobile development project at that time, but I didn't finish it due of transfering to simulation project. However about this project is the Facebook Messenger Clone App represents a recreated or replicated and improvised user interface that Meta messenger doesn't have. This project focuses on the visual presentation and structure of the Messenger app.",
      projectDescription: [
        {
          id: 1,
          title: "Form Validation:",
          description:
            "It ensuring the accuracy and completeness of user inputs. Form validation adds a layer of reliability by confirming that the information provided meets the required criteria.",
        },
        {
          id: 2,
          title: "Admin Tab with CRUD Operations:",
          description:
            "Administrative section that empowers admin to manage data using Create, Read, Update, and Delete (CRUD) operations.",
        },
        {
          id: 3,
          title: "Follow and Unfollow",
          description: "Can visit and follow or unfollow another users.",
        },
        {
          id: 4,
          title: "Friend Requests - Pending and Incoming:",
          description:
            "Users are able to send friend requests to others and also receive incoming friend requests.",
        },

        {
          id: 5,
          title: "Realtime data transfer:",
          description:
            "With the help of firestore, realtime data transfer is guaranteed to be display on another device.",
        },
      ],
      projectImagesLink: [
        {
          id: 1,
          link: "/CMA1.jpg",
        },
        {
          id: 2,
          link: "/CMA2.jpg",
        },
        {
          id: 3,
          link: "/CMA3.jpg",
        },
        {
          id: 4,
          link: "/CMA4.jpg",
        },
        {
          id: 5,
          link: "/CMA5.jpg",
        },
        {
          id: 6,
          link: "/CMA6.jpg",
        },
        {
          id: 7,
          link: "/CMA7.jpg",
        },
        {
          id: 8,
          link: "/CMA8.jpg",
        },
        {
          id: 9,
          link: "/CMA9.jpg",
        },
        {
          id: 10,
          link: "/CMA10.jpg",
        },
        {
          id: 11,
          link: "/CMA11.jpg",
        },
      ],
      projectGithubLink: "",
      techStacks: [
        {
          id: 1,
          icon: "flutter",
          name: "Flutter",
        },
        {
          id: 2,
          icon: "firestore",
          name: "Firestore",
        },
      ],
      otherTechStacks: [
        {
          id: 1,
          icon: "vscode",
          name: "VS Code",
        },
      ],
    },
    {
      id: 4,
      title: "Learning Mananement System",
      image: "/lms2.png",
      description:
        "It was the first project that I was collaborating with some of the developers. From this project is I learned a lot about developing a website because we have a code reviewer and that's our seniors. And about this project it is a specialized platform tailored for members of my previous company emails only. Accessible exclusively through authorized Google email addresses, this system serves as a hub for employees seeking to enhance their skills and manage their learning journeys.",
      projectDescription: [
        {
          id: 1,
          title: "Exclusive Google Email Login:",
          description:
            "The LMS ensures a secure and controlled environment by permitting only individuals with verified company Google email addresses to access the platform. This authentication process safeguards sensitive company information.",
        },
        {
          id: 2,
          title: "Form Validation:",
          description:
            "It ensuring the accuracy and completeness of user inputs. Form validation adds a layer of reliability by confirming that the information provided meets the required criteria.",
        },
        {
          id: 3,
          title: "User-Friendly UI:",
          description:
            "The user interface is thoughtfully designed to be intuitive and user-friendly. Clear navigation and well-organized sections contribute to a seamless and engaging user experience.",
        },
        {
          id: 4,
          title: "Learning Path Creation:",
          description:
            "Trainers have the ability to create learning paths for their assigned trainees. A learning path is a curated sequence of courses aimed at guiding trainees through a structured learning journey.",
        },
        {
          id: 5,
          title: "Course Content Access:",
          description:
            "Trainees can access course materials, including videos and learning resources, from within the platform.",
        },
        {
          id: 6,
          title: "Progress Tracking:",
          description:
            "As trainees engage with course content, they can mark their progress by checking off completed course episodes. This visual indicator helps them keep track of their accomplishments and plan their learning path.",
        },
      ],
      projectImagesLink: [
        {
          id: 1,
          link: "/lms1.png",
        },
        {
          id: 2,
          link: "/lms2.png",
        },
        {
          id: 3,
          link: "/lms3.png",
        },
        {
          id: 4,
          link: "/lms4.png",
        },
        {
          id: 5,
          link: "/lms5.png",
        },
        {
          id: 6,
          link: "/lms6.png",
        },
        {
          id: 7,
          link: "/lms7.png",
        },
        {
          id: 8,
          link: "/lms8.png",
        },
        {
          id: 9,
          link: "/lms9.png",
        },
      ],
      projectGithubLink: "https://github.com/framgia/sph-lms",
      techStacks: [
        {
          id: 1,
          icon: "reactjs",
          name: "React JS",
        },
        {
          id: 2,
          icon: "tailwind",
          name: "Tailwind",
        },
        {
          id: 3,
          icon: "typescript",
          name: "TypeScript",
        },
        {
          id: 4,
          icon: "django",
          name: "Django API",
        },
        {
          id: 5,
          icon: "nextjs",
          name: "Next JS",
        },
      ],
      otherTechStacks: [
        {
          id: 1,
          icon: "vscode",
          name: "VS Code",
        },
        {
          id: 2,
          icon: "postman",
          name: "Postman",
        },
        {
          id: 3,
          icon: "docker",
          name: "Docker",
        },
      ],
    },
    {
      id: 5,
      title: "Portfolio Website",
      image: "/bg.jpg",
      description:
        "The Portfolio Website is to showcase of my work and abilities aimed at attracting potential employers looking to hire a web developer. This website highlights my projects and skills, serving as a digital representation of my capabilities.",
      projectDescription: [
        {
          id: 1,
          title: "Animated Elements:",
          description:
            "The website includes elements that come to life with animations. These animations enhancing the overall visual appeal.",
        },
        {
          id: 2,
          title: "Aesthetic UI Design:",
          description:
            "The user interface is thoughtfully designed to be visually appealing and inviting. The design prioritizes aesthetics to leave a positive impression on visitors.",
        },
        {
          id: 3,
          title: "Switching Theme - Dark and Light Mode:",
          description:
            " Users have the option to switch between dark and light themes, allowing them to choose the mode that best suits their preference. This feature enhances user comfort and accessibility.",
        },
        {
          id: 4,
          title: "About Me Section:",
          description:
            "This section provides insights into my journey as a web developer, detailing how I embarked on this path and became a web developer.",
        },
        {
          id: 5,
          title: "Responsive Design:",
          description:
            "The website is built with responsiveness in mind, ensuring that it looks and functions seamlessly across various devices and screen sizes.",
        },
      ],
      projectImagesLink: [
        {
          id: 1,
          link: "/bg.jpg",
        },
        {
          id: 2,
          link: "/bg.jpg",
        },
        {
          id: 3,
          link: "/bg.jpg",
        },
        {
          id: 4,
          link: "/bg.jpg",
        },
        {
          id: 5,
          link: "/bg.jpg",
        },
      ],
      projectGithubLink: "https://github.com/elyric10-dev/personal",
      techStacks: [
        {
          id: 1,
          icon: "reactjs",
          name: "React JS",
        },
        {
          id: 2,
          icon: "tailwind",
          name: "Tailwind",
        },
        {
          id: 3,
          icon: "typescript",
          name: "TypeScript",
        },
        {
          id: 4,
          icon: "javascript",
          name: "JavaScript",
        },
        {
          id: 5,
          icon: "nextjs",
          name: "Next JS",
        },
      ],
      otherTechStacks: [
        {
          id: 1,
          icon: "vscode",
          name: "VS Code",
        },
        {
          id: 2,
          icon: "docker",
          name: "Docker",
        },
        {
          id: 3,
          icon: "framer-motion",
          name: "Framer Motion",
        },
      ],
    },
  ];
};

export default getPortfolioData;
