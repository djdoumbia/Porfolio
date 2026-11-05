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
  subTitle: (
    "Data Engineer building scalable data platforms, automated pipelines and AI-powered reporting. " +
    "I turn raw business data into reliable models, dashboards and decision-ready insights using Python, SQL, Databricks and Power BI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14Bgo3BTVG0Jh45KTk3nqZqovpY1M66aX/view?usp=sharing", // Set to empty to hide the button
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
      logo: require("./assets/images/image.png"),
      subHeader: "Master 2 of Science in Computer Science (Information Systems and Decision Support)",
      duration: "September 2025 - June 2026",
      desc: "Focused on advanced courses in decision-making algorithms and big data analysis.",
      descBullets: [
        "Algorithmics for Decision Support",
        "Massive Data Analysis",
        "Data Mining & Artificial Intelligence",
        "Decision-Making Case Studies",
        "IA générative (Agent IA)"
      ]
    },
  
    {
      schoolName: "INP - ISIMA",
      logo: require("./assets/images/image.png"),
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

// const skillsSection = {
//   title: "Skills",
//   subTitle: "A snapshot of my technical and professional skills",
//   skills: [
//     // emoji("⚡ Développement de pipelines ETL (Python, SQL, PySpark, Talend, dbt)"),
//     // emoji("⚡ Création de dashboards interactifs (Power BI, Metabase, Tableau, Looker)"),
//     // emoji("⚡ Gestion et modélisation de bases de données SQL et NoSQL (MySQL, PostgreSQL, MongoDB)"),
//     // emoji("⚡ Déploiement Big Data et Cloud (AWS, GCP, Spark, Docker)"),
//     // emoji("⚡ Développement Web (HTML, CSS, PHP, React, Node.js)"),
//     // emoji("⚡ Mise en place de solutions IA et Machine Learning (Python, PyTorch, Scikit-learn)"),
//     // emoji("⚡ Collaboration en gestion de projet Agile / SCRUM, Git/GitHub/GitLab")


//   emoji("⚡ Data Engineering : ETL/ELT (Python, pandas, SQL, PySpark, Talend, dbt), Streaming (Kafka)"),
//   emoji("⚡ Data Visualization & BI : Power BI, Metabase, Tableau, Looker"),
//   emoji("⚡ Bases de données : MySQL, PostgreSQL, MongoDB"),
//   emoji("⚡ Big Data & Cloud : AWS, GCP, Spark, Docker"),
//   emoji("⚡ Développement Web : HTML, CSS, PHP, React, Node.js"),
//   emoji("⚡ IA & Machine Learning : PyTorch, Scikit-learn"),
//   emoji("⚡ Méthodologies : Agile / SCRUM – Git / GitHub / GitLab")
//   ],

//   softwareSkills: [
//     { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
//     { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
//     { skillName: "C / C++ / Go", fontAwesomeClassname: "fas fa-code" },
//     { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
//     { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
//     { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
//     { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
//     { skillName: "React", fontAwesomeClassname: "fab fa-react" },
//     { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
//     { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
//     { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
//     { skillName: "GCP", fontAwesomeClassname: "fab fa-google" },
//     { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
//     { skillName: "Metabase", fontAwesomeClassname: "fas fa-chart-pie" },
//     { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
//     { skillName: "Looker", fontAwesomeClassname: "fas fa-eye" },
//     { skillName: "Talend", fontAwesomeClassname: "fas fa-project-diagram" },
//     { skillName: "dbt", fontAwesomeClassname: "fas fa-cubes" },
//     { skillName: "Dataiku", fontAwesomeClassname: "fas fa-brain" },
//     { skillName: "Git/GitHub/GitLab", fontAwesomeClassname: "fab fa-git-alt" }
//   ],
//   display: true
// };



const skillsSection = {
  title: "Technical Skills",
  subTitle:
    "Technologies and methodologies I use to build data platforms, automated pipelines, dashboards and AI-powered applications.",

  skills: [
    emoji(
      "⚡ Data Engineering: ETL/ELT pipelines, data ingestion, data cleaning, data transformation and data quality"
    ),
    emoji(
      "⚡ Data Modeling: relational modeling, dimensional modeling, business tables, normalized databases and analytical models"
    ),
    emoji(
      "⚡ Big Data: Apache Spark, PySpark, Spark SQL, Databricks, Lakehouse architecture and distributed data processing"
    ),
    emoji(
      "⚡ Cloud & Data Platforms: AWS S3, Athena, Glue, EMR, Lambda, RDS, GCP BigQuery and Google Cloud Storage"
    ),
    emoji(
      "⚡ Business Intelligence: Power BI, Metabase, Tableau, Looker, KPI definition and interactive reporting"
    ),
    emoji(
      "⚡ Automation: Power Automate, SharePoint, Excel, automated PowerPoint generation and workflow integration"
    ),
    emoji(
      "⚡ Artificial Intelligence: LLMs, RAG, prompt engineering, AI agents, Streamlit and model evaluation"
    ),
    emoji(
      "⚡ Databases: MySQL, PostgreSQL, Oracles, MongoDB, SQL queries, data normalization and database integration"
    ),
    emoji(
      "⚡ Development & Collaboration: Python, SQL, Bash, REST API, FastAPI, Git, GitHub, GitLab, Agile and Scrum"
    )
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PySpark", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Apache Spark", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Databricks", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "Lakehouse", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "GCP", fontAwesomeClassname: "fab fa-google" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Power Automate", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Metabase", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Streamlit", fontAwesomeClassname: "fas fa-window-maximize" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Git / GitHub / GitLab", fontAwesomeClassname: "fab fa-git-alt" }
  ],

  display: true
};







// Your top 4 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack: "Data Engineering & ETL",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Modeling & SQL",
      progressPercentage: "85%"
    },
    {
      Stack: "Business Intelligence & Reporting",
      progressPercentage: "85%"
    },
    {
      Stack: "Python & Data Analysis",
      progressPercentage: "80%"
    },
    {
      Stack: "Big Data & Cloud",
      progressPercentage: "70%"
    },
    {
      Stack: "Artificial Intelligence & LLM Applications",
      progressPercentage: "70%"
    }
  ],

  displayCodersrank: true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer Intern",
      company: "EDF",
      companylogo: require("./assets/images/edf.png"),
      date: "April 2026 – September 2026",

      desc:
        "Contribution to a data and AI-oriented project dedicated to the automation of project steering and COPIL reporting in a nuclear maintenance environment.",

      descBullets: [
        "Designed Lakehouse data models in Databricks to structure project, risk, planning and action data.",
        "Developed Python/SQL pipelines to automate data ingestion, transformation and preparation.",
        "Created curated datasets and optimized Power BI reports for project monitoring and decision-making.",
        "Automated COPIL reporting workflows with Power Automate, SharePoint, Excel and PowerPoint generation.",
        "Contributed to a Copilot Studio AI agent for assisted generation of project-steering materials."
      ],

      technologies: [
        "Databricks", "Lakehouse", "Python", "SQL",
        "Power BI", "Power Automate", "Copilot Studio",
        "SharePoint", "Excel"
      ],

      footerLink: [
        // {
        //   name: "source code",
        //   url: "https://github.com/djdoumbia/todo-frontend"
        // },

        {
          name:"Technologies: Databricks • Lakehouse • Python • SQL • Power BI • Power Automate • Copilot Studio • SharePoint • Excel"
,
          // url: "https://github.com/djdoumbia/todo-backend"
        }

      ]
    },
    {

      role: "Data Analyst Intern",
      company: "Acantech",
      companylogo: require("./assets/images/acantech_log.png"),
      date: "April 2025 – August 2025",

      desc:
        "Development of a data processing and reporting solution based on hotel operating data extracted from a Property Management System.",

      descBullets: [
        "Analyzed the structure and complexity of JSON files generated by the hotel management system.",
        "Developed a Python ETL pipeline to extract, transform and prepare operational data.",
        "Handled nested and multi-level JSON structures to make the data easier to query and analyze.",
        "Performed data cleaning, restructuring and standardization before loading the data into a relational database.",
        "Designed and populated a normalized MySQL database to store the transformed information.",
        "Used SQL queries to validate data consistency and prepare analytical datasets.",
        "Created interactive Metabase dashboards to monitor key operational indicators.",
        "Used Metabase’s SQL query builder to automate recurring analyses.",
        "Improved the accessibility of operational information through a web-based reporting interface."
      ],

      technologies: [
        "Python",
        "Pandas",
        "SQL",
        "MySQL",
        "JSON",
        "ETL",
        "Data Cleaning",
        "Data Modeling",
        "Metabase"
      ]

      // role: "Data Engineer Intern ",
      // company: "Acantech",
      // companylogo: require("./assets/images/acantech_log.png"),
      // date: "April 2025 – August 2025",
      // desc: "preparation of an automated activity report based on operating data. ",
      // descBullets: [
      //   "Data extraction, transformation and structuring (Python & SQL)",
      //   "Analysis and visualisation (Metabase)",
      //   "Implementation of an automated activity report that can be viewed via a web browse" 
        
      // ]
    },
    {

      role: "Full Stack Developer",
      company: "Todo List Application",
      companylogo: require("./assets/images/hdm_logo.jpeg"),
      date: "May 2025",

      desc:
        "Development of a full-stack task management application with a React frontend, a NestJS backend and a MySQL database.",

      descBullets: [
        "Designed and implemented a REST API with NestJS.",
        "Implemented task creation, update, deletion and retrieval functionalities.",
        "Used Prisma as an ORM to communicate with the database.",
        "Developed a dynamic React interface with Vite.",
        "Connected the frontend to the backend through REST API requests.",
        "Configured a MySQL database using Docker.",
        "Managed database schema evolution through Prisma migrations.",
        "Organized the source code into separate frontend and backend repositories.",
        "Technologies: React • Vite • NestJS • Prisma • MySQL • Docker • REST API • Git"
      ],

      technologies: [
      "React", "Vite", "NestJS", "Prisma",
      "MySQL", "Docker", "REST API", "Git"
    ],


      footerLink: [
        // {
        //   name: "source code",
        //   url: "https://github.com/djdoumbia/todo-frontend"
        // },

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

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true// Set false to hide this section, defaults to true
// };


const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of the major projects I have worked on",
  projects: [
    {
      image: require("./assets/images/ia.webp"),
      projectName: "Medical AI Diagnostic Assistant",

      projectDesc:
        "An AI-powered conversational assistant developed to support medical symptom analysis.",
        
        descBullets: [
          "Developed a conversational AI assistant in a two-person team using Large Language Models (LLMs).",
          "Designed a Retrieval-Augmented Generation (RAG) pipeline connected to a medical knowledge base.",
          "Built an interactive Streamlit interface for natural language symptom analysis.",
          "Evaluated and compared BioGPT, Mistral, Qwen, and Zephyr to identify the best-performing model.",
          "Technologies: Python • Streamlit • LLM • RAG • Prompt Engineering • Git"
        ],

      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/djdoumbia/IA-g-n-rative/tree/main/Projet_Agent_LLM"
        },
        {
          name: "Live Demo",
          url: "https://huggingface.co/spaces/tadiallo3/Agent-diagnostic-ia"
        }
      ]
    },



    {
  
     
      // date: "2024 – 3 months",

      image: require("./assets/images/logo_uca.png"),
      projectName: "Projet acacdémique Data Scientist",

      projectDesc:
        "Development of a machine learning model to evaluate customer creditworthiness and classify default risk.",

      descBullets: [
        "Collected, explored and prepared a customer dataset for a binary classification problem.",
        "Performed data cleaning, exploratory analysis and feature preparation.",
        "Developed a decision tree model to classify customers according to their risk of default.",
        "Optimized model hyperparameters to improve predictive performance.",
        "Evaluated the model using the AUC-ROC metric, confusion matrix and classification metrics.",
        "Analyzed model errors and interpreted the factors influencing classification results.",
        "Produced visual analyses using Seaborn and Matplotlib."
      ],
      desc: "Technologies: Python • Pandas • NumPy • Scikit-learn • Seaborn • Matplotlib • Jupyter Notebook",
    }
  ],
  display: true
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
  display: false // Set false to hide this section, defaults to true
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
