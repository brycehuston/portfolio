import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    wp,
    vs,
    vc,
    js,
    threejscover,
    jobit,
    tripguide,
    threejs,
    jobsearch,
    nftmarket,
    roland,
    jadine,
    jackie,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Web Development",
        company_name: "Self-employed",
        icon: wp,
        iconBg: "#383E56",
        date: "Feb 2017 - Oct 2018",
        points: [
            "Developed and deployed websites using hosting platforms, WordPress, and page builders.",
            "Customized websites with WordPress themes, plugins, and functionality to meet client requirements.",
            "Utilized page builders to create visually appealing and interactive web pages for enhanced user experience.",
            "Conducted website maintenance, including updates, backups, and security enhancements, to ensure optimal performance and functionality.",
        ],
    },
    {
        title: "Software Development",
        company_name: "TAFE",
        icon: vs,
        iconBg: "#E6DEDD",
        date: "Nov 2018 - Dec 2019",
        points: [
            "Developed software applications using Java, C#, PHP, and SQL, employing a wide range of programming languages and technologies.",
            "Collaborated with cross-functional teams to gather requirements and translate them into functional software solutions.",
            "Implemented best practices in software development, including code organization, version control, and documentation.",
            "Conducted thorough testing, debugging, and optimization to ensure the reliability and performance of software applications.",
        ],
    },
    {
        title: "Vanilla Web Developer",
        company_name: "Personal Projects",
        icon: js,
        iconBg: "#383E56",
        date: "Jan 2020 - Feb 2022",
        points: [
            "Developed and maintained web applications using Vanilla JavaScript, Canvas, HTML, CSS, and related technologies.",
            "Created interactive and dynamic web experiences using Vanilla JavaScript, implementing custom functionality and behavior.",
            "Utilized Canvas to design visually appealing graphics, animations, and visual effects.",
            "Developed responsive user interfaces with HTML and CSS, ensuring optimal display across devices and screen sizes.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Freelancer",
        icon: vc,
        iconBg: "#E6DEDD",
        date: "Mar 2022 - Present",
        points: [
            "Developed and maintained web applications using React.js and React Native, along with related technologies such as Tailwind CSS and REST APIs.",
            "Implemented responsive design techniques for seamless user experiences across devices and browsers.",
            "Participated in code reviews, providing constructive feedback to enhance code quality and maintainability",
            "Utilized comprehensive knowledge of React.js and React Native to optimize application performance and scalability.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Bryce has solved my computer problems on three different occasions and I have been happy with the results each time. He is knowledgeable, articulate and has provided valuable information.Next time I have a computer he will be the one I call, he is my go to guy",
        name: "Roland Blaise",
        designation: "CFO",
        company: "Okanagan Builders",
        image: roland,
    },
    {
        testimonial:
            "Bryce was able twice to help me set up my printer with my new laptop and to trouble shoot setting up my new laptop. He is patient, knowledgeable, reliable and responds to help requests promptly!  Ai would highly recommend Bryce!  His price is reasonable and he is ver knowledgeable.",
        name: "Jadine Leclaire",
        designation: "CTO",
        company: "HWH",
        image: jadine,
    },
    {
        testimonial:
            "I hired Bryce to develop my website several years ago as well as produce a short video and was very happy with the results.  Had a Mac computer that we couldn't access due to not knowing the passcode.  Even the Apple Specialist couldn't break it.  Bryce worked his magic and figured it out.",
        name: "Jackie Lysak",
        designation: "COO",
        company: "Home Made Perfect",
        image: jackie,
    },
];

const projects = [
    {
        name: "ThreeJS 3D",
        description:
            "ThreeJS-based web application that allows users to load, create, and customize stunning 3D models and geometries with various lights, as well as understand the 3D world.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: threejscover,
        source_code_1: "https://github.com/brycehuston/ai_threejs_project",
        source_code_2: "https://vanillaart.ca",
    },
    {
        name: "Job Search",
        description:
            "Application using API's that enables users to search for job openings, view estimated salary , roles and qualifications, and apply for jobs based on their location.",
        tags: [
            {
                name: "reactnative",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "vite",
                color: "pink-text-gradient",
            },
        ],
        image: jobsearch,
        source_code_1: "https://github.com/brycehuston/project_react_native_jobs",
    },
    {
        name: "NFT Marketplace",
        description:
            "Developing an NFT marketplace app and landing page using Expo and React Native, hosted on a fully decentralized peer-to-peer exchange",
        tags: [
            {
                name: "blockchain",
                color: "blue-text-gradient",
            },
            {
                name: "web3.0",
                color: "green-text-gradient",
            },
            {
                name: "NFTs",
                color: "pink-text-gradient",
            },
        ],
        image: nftmarket,
        source_code_1: "https://github.com/brycehuston/nft_store",
        source_code_2: "https://vanillaart.crypto",
    },
];

export { services, technologies, experiences, testimonials, projects, };