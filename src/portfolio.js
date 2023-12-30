/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashmika's Portfolio",
  description:
    "In the intricate dance of codes and creativity, I am the data whisperer, ML enthusiast, and problem-solving aficionado, turning challenges into digital elegance. From crunching numbers to crafting elegant ML solutions, I navigate the realms of computer science with a splash of creativity, transforming data into an art form.",
  og: {
    title: "Ashmika Gupte Portfolio",
    type: "website",
    url: "http://ashmikagupte.github.io",
  },
};

//Home Page
const greeting = {
  title: "Ashmika Gupte",
  logo_name: "AshmikaGupte",
  nickname: "Ash",
  subTitle:
    "In the intricate dance of codes and creativity, I am the data whisperer, ML enthusiast, and problem-solving aficionado, turning challenges into digital elegance. From crunching numbers to crafting elegant ML solutions, I navigate the realms of computer science with a splash of creativity, transforming data into an art form.",
  resumeLink:
    "https://drive.google.com/file/d/1ZZj8wA0qPScoWJC_4J0PB0zYqerMtMd7/view?usp=drive_link",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashmikagupte",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ashmikagupte",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashmika-gupte/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ashmikaa@usc.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ashmikagupte/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning, Deep Learning and AI",
      fileName: "MLImg",
      skills: [
        "⚡ Designing and implementing cutting-edge models for real-world applications",
        "⚡ Specializing in Computer Vision and NLP to extract meaningful insights",
        "⚡ Crafting innovative solutions for dynamic problem-solving"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "devicon:opencv-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Data Science and Data Analytics",
      fileName: "DaImg",
      skills: [
        "⚡ Harnessing data science skills for insightful analysis and decision support",
        "⚡ Proficient in handling and interpreting large datasets",
        "⚡ Implementing advanced analytics techniques for actionable intelligence"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
      ],
    },
        {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and engaging web applications",
        "⚡ Exploring HTML, CSS, React, Threejs and Angularjs",
        "⚡ Integrating web development skills to enhance user interfaces",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Threejs",
          fontAwesomeClassname: "skill-icons:threejs-dark",
          // style: {
          //   color: "#E34F26",
          // },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "skill-icons:tailwindcss-light",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Virtual Reality",
      fileName: "VRImg",
      skills: [
        "⚡ Creating immersive experiences in Unity and Unreal Engine",
        "⚡ Developing interactive functionalities for dynamic virtual realms",
        "⚡ Collaborating with lifelike Virtual Avatars (Metahumans) to enhance user engagement",
      ],
      softwareSkills: [
        {
          skillName: "Unreal Engine",
          fontAwesomeClassname: "skill-icons:unrealengine",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Unity 3D",
          fontAwesomeClassname: "skill-icons:unity-light",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "skill-icons:blender-light",
          style: {
            color: "#0089D6",
          },
        },
        
      ],
    },
    
    {
      title: "Other Skills",
      fileName: "OtherImg",
      skills: [
      ],
      softwareSkills: [
        {
          skillName: "Cpp",
          fontAwesomeClassname: "vscode-icons:file-type-cpp3",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "devicon:github",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "devicon:streamlit",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ashmikagupte/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/hsa01032001",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Pune Institute of Computer Technology",
      subtitle: "B.E. in Computer Engineering with Honors in Artificial Intelligence and Machine Learning",
      logo_path: "pict.png",
      alt_name: "PICT Pune",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ GPA: 9.64/10",
        "⚡ Key Courses: Computational Statistics, Machine Learning, Deep Learning, Artificial Intelligence, Computer Vision, Data Science and Big Data Analysis, Database Management System",
        "⚡ Active member of various technical clubs, fostering a diverse skill set.",
        "⚡ Engaged in multiple internships, applying technical skills in real-world scenarios.",
        "⚡ Undertook projects exploring the realms of machine learning, data science, and virtual reality.",
        "⚡ Participated in non-technical clubs, contributing to a holistic development.",
      ],
      website_link: "https://pict.edu/",
    },
    {
      title: "University of Southern California",
      subtitle: "M.S. in Computer Science",
      logo_path: "usc_logo.png",
      alt_name: "USC",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Relevant Courses: CSCI 570 (Analysis of Algorithms), CSCI 567 (Machine Learning)",
        "⚡ Engaged in research and projects covering automated question type coding for forensic interviews under the mentorship of Prof. Thomas D. Lyon, Prof. Zsofia Szojka, and Prof. Keith Burghardt.",
        "⚡ Vice captain of a dance team at USC, contributing to the cultural vibrancy and leadership.",
      ],
      website_link: "https://www.usc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://coursera.org/share/f3e61d58226942eb15105bc5e19b09ee",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "AI for Everyone",
      subtitle: "- DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/5a5928cb157f089d1431e30b84d6f0d5",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/a93978d6815cc4e25d46b5073be45c96",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Virtual Reality",
      subtitle: "- University of London",
      logo_path: "ulon.png",
      certificate_link:
        "https://coursera.org/share/d82565164e4cde4604c6cac64b913747",
      alt_name: "VR1",
      color_code: "#1F70C199",
    },
    {
      title: "3D Models for Virtual Reality",
      subtitle: "- University of London",
      logo_path: "ulon.png",
      certificate_link:
        "https://coursera.org/share/5552c86afb660c4bb889e0a2ac6455df",
      alt_name: "VR2",
      color_code: "#1F70C199",
    },
    {
      title: "3D Interaction Design in Virtual Reality",
      subtitle: "- University of London",
      logo_path: "ulon.png",
      certificate_link:
        "https://coursera.org/share/fe61984a615113d2106ac6ee216b1f8a",
      alt_name: "VR3",
      color_code: "#1F70C199",
    },
    {
      title: "Building Interactive 3D Characters and Social VR",
      subtitle: "- University of London",
      logo_path: "ulon.png",
      certificate_link:
        "https://coursera.org/share/cb15e6de969ad7ff1d0b7e69b91b382f",
      alt_name: "VR4",
      color_code: "#1F70C199",
    },
    {
      title: "Artificial Intelligence Search Methods for Problem Solving",
      subtitle: "- Deepak Khemani",
      logo_path: "iitm.png",
      certificate_link:
        "https://drive.google.com/file/d/1uuv4IhC408NwijsL2ls45Q7CE_mnpt8H/view?usp=sharing",
      alt_name: "nptel",
      color_code: "#D83B0199",
    },
    {
      title: "Graphics Design Tools (Blender 3d, OpenGL & QT)",
      subtitle: "- PICT",
      logo_path: "pict_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1rDBweaAABZGdLwneMK_M_S1_PmZTRDon/view?usp=sharing",
      alt_name: "pict",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Hobbies",
  description:
    "Navigating internships in both start-ups and multinational corporations, I've cultivated a versatile skill set marked by adaptability and a keen understanding of varied professional landscapes.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Bitglaze Technologies",
          company_url: "https://www.bitglaze.com/",
          logo_path: "bitglaze.jpeg",
          duration: "Dec 2021 - Jun 2023",
          location: "Pune, India",
          description:
            "• Played a pivotal role in building a potent MLOps platform, reducing model deployment and management time by 70%. Directed the creation of a user-friendly SDK for seamless integration, boosting efficiency. Architected vital features like model versioning, automated testing, and performance monitoring, yielding a 50% accuracy improvement. Utilized AutoML for 60% faster model selection and 75% quicker hyperparameter tuning and feature engineering",
            color: "#000000",
        },
        {
          title: "Summer Intern",
          company: "Barclays",
          company_url: "https://home.barclays/",
          logo_path: "barclays.png",
          duration: "Jun 2022 - Aug 2022",
          location: "Pune, India",
          description:
            "• Engineered GUI for real-time Avaloq interface server tracking, reducing error identification time by 50%, and facilitating prompt anomaly detection and issue resolution. Designed intuitive interface displaying live server statuses, resulting in 30% faster anomaly detection and a 60% reduction in server overuse, while allowing instant user verification of server responses through stored message requests.",
            color: "#ee3c26",
        },
        {
          title: "VR Development Intern",
          company: "CSKA Automation",
          company_url:"https://www.cskaa.com/index.html",
          logo_path: "cska.png",
          duration: "Jan 2022 - Apr 2022",
          location: "Work From Home",
          description:
            "• Spearheaded metaverse school project, constructing a dynamic virtual reality realm with immersive mini-games and activities. Leveraged Unreal Engine to engineer interactive functionalities, while integrating lifelike Virtual Avatars (Metahumans) for heightened engagement within the virtual environment.",
            color: "#0071C5",
        },
        {
          title: "Data Science Intern",
          company: "Women in Data Science",
          company_url: "https://www.widsworldwide.org/",
          logo_path: "wids.jpeg",
          duration: "May 2021 - Jan 2022",
          location: "Pune, India",
          description:
            "• Executed web scraping with tools like webscraper.io and beautiful soup, gathering pertinent data for analysis. Utilized techniques such as data preprocessing and topic modeling for robust data analysis, supported by visualization tools like Tableau and PowerBI to communicate insights effectively.",
            color: "#ee3c26",
        },
        {
          title: "Data Science And Business Analytics Intern",
          company: "The Sparks Foundation",
          company_url:"https://www.thesparksfoundationsingapore.org/",
          logo_path: "sparks.png",
          duration: "Jan 2021 - March 2021",
          location: "Work From Home",
          description:
            "• Performed Exploratory Data Analysis using Tableau to find out meaningful insights from the interactive graphs that were created from the datasets. Implemented Supervised and Unsupervised machine learning models, trained them on the data so that they can predict results with high accuracy on the unseen test data.",
            color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "ACM Member",
    //       company: "PICT ACM Student Chapter (PASC)",
    //       company_url: "https://pict.acm.org/",
    //       logo_path: "pasc.png",
    //       duration: "Dec 2019 - Jun 2022",
    //       location: "Pune, India",
    //       description:
    //         "",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Computer Society of India Member",
    //       company: "PICT CSI Student Branch",
    //       company_url: "https://pictcsi.com/",
    //       logo_path: "pcsb.png",
    //       duration: "May 2020 - Jun 2022",
    //       location: "Pune, India",
    //       description:
    //         "",            
    //         color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
    {
      title: "Hobbies",
      work: true,
      experiences: [
        {
          title: "Dance",
          company: "",
          company_url: "",
          logo_path: "dance.jpg",
          duration: "",
          location: "",
          description:
            "Passionate about dance since childhood, I find joy and self-expression in every movement. As the former head of the dance team during my undergraduate years, I honed my sportsmanship, collaboration, and leadership skills. Serving as the Vice Captain of the dance team at USC, I continued to contribute to the vibrant dance community, enhancing my abilities in teamwork and coordination.",
          color: "#0879bf",
        },
        {
          title: "Painting",
          company: "",
          company_url: "",
          logo_path: "painting.png",
          duration: "",
          location: "",
          description:
            "Engaging in the art of painting since my early years, I see it as a profound form of self-expression. Proficient in utilizing various colors, canvas sizes, and techniques, I find fulfillment in the act of creation. While I often paint landscapes, capturing the serenity of nature, my artistic endeavors extend to still life and portraits. For me, painting is a dynamic journey—a spontaneous exploration of emotions, a canvas that adapts to the moment, and a means of translating the essence of each experience into visual form.",
          color: "#9b1578",
        },
        {
          title: "Rubik's Cubes",
          company: "",
          company_url: "",
          logo_path: "cube.png",
          duration: "",
          location: "",
          description:
            "Passionate about solving Rubik's cubes, my proficiency extends beyond the classic 3x3 cube to include various challenging puzzles such as the 4x4, 5x5, 6x6, 2x2, Megaminx, Pyraminx, Skewb, Mirror Cube, and more. Through this intricate puzzle-solving journey, I've cultivated skills in pattern recognition, strategic thinking, problem-solving, and perseverance. Each cube presents a unique challenge, fostering adaptability and enhancing my ability to approach complex problems with a methodical mindset.",
          color: "#fc1f20",
        },
        {
          title: "Guitar",
          company: "",
          company_url: "",
          logo_path: "guitar.png",
          duration: "",
          location: "",
          description:
            "Engaging in the art of playing the guitar, I've found a profound outlet for creativity and expression. Whether strumming chords or crafting intricate melodies, the guitar serves as a versatile canvas for translating emotions into music. The guitar not only offers a source of personal enjoyment but also serves as a constant journey of exploration, discovery, and the continuous pursuit of musical mastery.",
          color: "#0879bf",
        },
        {
          title: "Reading",
          company: "",
          company_url: "",
          logo_path: "read.png",
          duration: "",
          location: "",
          description:
          "A voracious reader, my literary journey began with classics such as 'Little Women', 'Great Expectations', and 'Frankenstein'. While my love for timeless literature endures, I have diversified my reading palette to encompass a wide array of genres. From fiction that transports me to different worlds to non-fiction works spanning autobiographies, short stories, and self-help books, each book is a portal to new perspectives and knowledge. In the realm of literature, I find both solace and inspiration, constantly seeking the next captivating story or insightful narrative to explore.",
          color: "#9b1578",
        },
        {
          title: "Aviation Enthusiast",
          company: "",
          company_url: "",
          logo_path: "plane.png",
          duration: "",
          location: "",
          description:"An avid aviation enthusiast, I'm captivated by the wonder of flight and the intricacies of aircraft. From studying the engineering marvels that make aviation possible to staying abreast of technological advancements in the industry, my enthusiasm extends to exploring different aircraft models, understanding aerodynamics, and appreciating the history of aviation. Whether observing airshows, delving into pilot narratives, or staying informed about the latest innovations in aerospace, my passion for aviation is a constant source of fascination and inspiration.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Exploring the intersection of technology and creativity, my projects showcase a journey from solving complex machine learning challenges to crafting immersive virtual reality experiences, providing a glimpse into my diverse skill set and passion for innovation.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. Willing to collaborate for ML, Data Science, AI and Development projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
