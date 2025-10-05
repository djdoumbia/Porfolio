/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Djeneba DOUMBIA",
  title: "Hi all, I'm djeneba",
  subTitle:(
    "A passionate Data Enthusiast with hands-on experience in Data Engineering, Business Intelligence, Data Analysis and Data Science, building ETL pipelines, SQL models, and interactive dashboards with tools like Python, Pandas, Power BI, Metabase, and SQL, turning raw data into actionable insights."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ImXpxzrhjYublpdHO4_l6nW0Ws5jg8Zy/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true   
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/djdoumbia",
  linkedin: "https://www.linkedin.com/in/djenebadoumbia/",
  gmail: "djenebadoumbia172@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "INP - ISIMA",
      logo: require("./assets/images/logo_inp_isima.jpg"),
      subHeader: "Master 2 of Science in Computer Science (Information Systems and Decision Support)",
      duration: "September 2025 - June 2026",
      desc: "Focused on advanced courses in decision-making algorithms and big data analysis.",
      descBullets: [
        "Algorithmics for Decision Support",
        "Massive Data Analysis",
        "Data Mining & Artificial Intelligence",
        "Decision-Making Case Studies"
      ]
    },
  
    {
      schoolName: "INP - ISIMA",
      logo: require("./assets/images/logo_inp_isima.jpg"),
      subHeader: "Master 1 of Science in Computer Science",
      duration: "September 2024 - June 2025",
      desc: "Studied core subjects in computer science with a strong emphasis on data-driven systems.",
      descBullets: [
        "Software Engineering & Middleware",
        "Data Science & Neural Networks",
        "Data Analysis & Business Intelligence",
        "Big Data & Project Management"
      ]
    },
  
    {
      schoolName: "Clermont Auvergne University",
      logo: require("./assets/images/logo_uca.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2021 - June 2024",
      desc: "Completed undergraduate studies with a strong foundation in programming, algorithms, and databases.",
      descBullets: [
        "Python, Java, C, SQL",
        "Database Management & Web Development",
        "Object-Oriented Programming",
        "Algorithms & Graph Theory"
      ]
    }
  ]
  
};




// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Un aperçu de mes compétences techniques et professionnelles",
  skills: [
    emoji("⚡ Développement de pipelines ETL (Python, SQL, PySpark)"),
    emoji("⚡ Création de dashboards interactifs (Power BI, Metabase, Tableau, Looker)"),
    emoji("⚡ Gestion et modélisation de bases de données SQL et NoSQL (MySQL, PostgreSQL, MongoDB)"),
    emoji("⚡ Déploiement Big Data et Cloud (AWS, GCP, Spark, Docker)"),
    emoji("⚡ Développement Web (HTML, CSS, PHP, React, Node.js)"),
    emoji("⚡ Mise en place de solutions IA et Machine Learning (Python, PyTorch, Scikit-learn)"),
    emoji("⚡ Collaboration en gestion de projet Agile / SCRUM, Git/GitHub/GitLab")
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C / C++ / Go", fontAwesomeClassname: "fas fa-code" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "GCP", fontAwesomeClassname: "fab fa-google" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Metabase", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Looker", fontAwesomeClassname: "fas fa-eye" },
    { skillName: "Git/GitHub/GitLab", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "visualisation tool ", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend ", 
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer Intern ",
      company: "Acantech",
      companylogo: require("./assets/images/acantech_log.png"),
      date: "April 2025 – August 2025",
      desc: "preparation of an automated activity report based on operating data. ",
      descBullets: [
        "Data extraction, transformation and structuring (Python & SQL)",
        "Analysis and visualisation (Metabase)",
        "Implementation of an automated activity report that can be viewed via a web browse" 
        
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Todo List Project",
      companylogo: require("./assets/images/hdm_logo.jpeg"), // add your logo or an icon if you want
      date: "may 2025",
      desc: "Development of a complete Todo List application with React frontend and NestJS backend.",
      descBullets: [
        "Created, updated, and deleted tasks via a RESTful API (NestJS & Prisma)",
        "Integrated frontend and backend with React (Vite) and dynamic task display",
        "Configured MySQL database via Docker and managed Prisma migrations"
      ],


      footerLink: [
        {
          name: "source code",
          url: "https://github.com/djdoumbia/todo-frontend"
        },

        {
          name: "source code",
          url: "https://github.com/djdoumbia/todo-backend"
        }

      ]

      
    },  

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking for opportunities to contribute my skills in Data Analysis and Visualization.",
  number: "+33 749141960",
  email_address: "djenebadoumbia172@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
