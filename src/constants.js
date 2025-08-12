// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import ParulLogo from './assets/education_logo/parul.png';
import IbmLogo from './assets/education_logo/Ibm.png';
import TataLogo from './assets/education_logo/Tata.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import portfolioimg from './assets/work_logo/portfolio.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import githubsaif from './assets/work_logo/image.png';
import { TbTarget } from 'react-icons/tb';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS (L)', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux(L)', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP(L)', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot (L)', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase (L)', logo: firebaseLogo },
      { name: 'PostgreSQL (L)', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C ', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python (L)', logo: pythonLogo },
      { name: 'C-Sharp (L)', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript (L)', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];




export const education = [
  {
    id: 0,
    img: ParulLogo,
    school: "Parul University,Vadodara-Gujrat",
    date: "Aug 2024 - Aug 2028",
    grade: "7.2 CGPA",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Parul University and am in my second year of study. I am building a solid foundation in programming, software development, and computer science concepts, with a special focus on MERN stack technologies. My learning covers Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Development. I also participate in workshops and coding events that help me enhance my skills and practical knowledge. My journey at Parul University is shaping my expertise in modern web development and preparing me for a successful career in technology..",
    degree: "B.Tech Computer Science & Engineering",
  },
  {
    id: 1,
    img: TataLogo,
    school: "TATA",
    date: "june 2025 - Aug 2025",
    grade: "Certified",
    desc: "I have completed the Tata Cybersecurity Analytics certificate, a specialized program by Tata that covered essential cybersecurity concepts from basic to medium level. Through this course, I gained knowledge in areas such as network security, threat analysis, risk management, and incident response. The program provided me with practical exposure to tools and techniques used in real-world cybersecurity scenarios. Currently, I am further strengthening my foundation in cybersecurity with Tata, enhancing my skills in identifying vulnerabilities and implementing protective measures. This experience has boosted my analytical thinking and problem-solving abilities, preparing me to tackle modern security challenges effectively.",
    degree: "Tata Cybersecurity Analytics Certificate",
    cvlink: "https://drive.google.com/file/d/15Iiqbq0VZygMa2Qt8YDts9A5GuECtZEd/view?usp=drive_link",
  },
  {
    id: 2,
    img: IbmLogo,
    school: "IBM",
    date: "june 2025 - Aug 2025",
    grade: "Certified",
    desc: "I have completed the Prompt Engineering certificate from IBM, where I learned the principles and techniques of crafting effective prompts for AI tools. This program introduced me to how prompts work in platforms like ChatGPT and other AI-based applications, helping me understand how to structure queries for accurate and context-aware responses. I explored different prompt formats, optimization strategies, and real-world use cases, enabling me to leverage AI tools more efficiently for problem-solving, content creation, and automation tasks..",
    degree: "IBM Prompt Engineering Certificate",
    cvlink: "https://drive.google.com/file/d/18DvRwRCUKHQg8KoqygaS1dQRnqtyzdwp/view?usp=drive_link",
  },
];

export const projects = [
  {
    id: 0,
    title: "Git hub id detector ",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubsaif,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/Spparasara/GitHub-Profile-Detective",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 2,
    title: "Movie-Recommendation-App ",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Spparasara/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 4,
    title: "Saif--portfolio",
    description:
      "This is a portfolio website built with React and Tailwind CSS, featuring multiple interactive effects such as tilt effect, blur bulbs, and smooth animations. The creative design and modern UI make it an engaging showcase for projects and skills.",
    image: portfolioimg,
    tags: ["React js", "Talwind css", "HTML", "CSS", "Js"],
    github: "/",
    webapp: "/",
  },

  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/Spparasara/Background---remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];  