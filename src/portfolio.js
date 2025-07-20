// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Maxim Shelepov",
    // og: "I'm a computer science senior with hefty experience in app development. Previously worked as a web developer at my university, where I built tools to support both students and educators. Currently, I'm developing an educational AI tool aimed at redefining how college students interact with AI.",
    message: "Previously a computer science senior, a web developer for my university, and founder of an AI tool for college students. Now working at IBM as a software developer.",
    basedLocation: "Austin, TX (USA)",
    resumeLink: "https://drive.google.com/file/d/1BEiPuAOCQPWc1RVN5Bn_7KyxhR0HL_bv/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/recentportrait.png'
}

const socialMediaLinks = {
    github: "https://github.com/mimaishel",
    linkedin: "https://www.linkedin.com/in/maxim-shelepov1",
    medium: "https://medium.com/@mimaishel",
    stackoverflow: "",
    xtwitter: "https://twitter.com/mimaishel"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Maxim Shelepov, a software engineer and simply an engineer, currently working at IBM based in Austin, TX. I have a knack for solving problems and creating impactful software solutions. While in college, I worked as a web developer for my university's IT team, gaining extensive experience in industry-grade software and advanced app development practices.",
        "Nowadays working on next-generation AI products and enterprise software solutions."
    ], // Separated items are paragraphs
    techStack: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Vue.js",
        "Python"
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Software Developer",
        company: {
            name: "IBM",
            link: "https://ibm-zcouncil.com/venues/ibm-office-austin-tx/"
        },
        duration: "May 2025 - Present",
        bulletPoints: [
            "Building next-generation AI products and enterprise software solutions.",
        ],
        hashtags: [
            "JavaScript",
            "TypeScript",
            "React.js",
            "Vue.js",
            "Node.js",
            "HTML",
            "CSS",
            "Sass",
        ]
    },
    {
        position: "Founder & Software Developer",
        company: {
            name: "EduVaultAI",
            link: "https://blog.eduvaultai.com"
        },
        duration: "July 2024 - April 2025",
        bulletPoints: [
            "Engineered a high-performance RESTful API backend with FastAPI, supporting a student dashboard and file management system for 5,000+ concurrent users, with files hosted on AWS S3.",
            "Containerized MariaDB, ChromaDB, and Llama model instances using Docker, enabling scalable and maintainable backend infrastructure.",
            "Automated test data generation using Python, creating 60,000 records/files in 4 min to streamline testing.",
            "Architected a scalable backend infrastructure capable of 2x future workloads with minimal code refactoring.",
            "Developed responsive UI components in Vue.js and Tailwind.css, reducing backend load by optimizing API calls.",
            "Led an Agile (Kanban) team creating milestone-based roadmaps and schedule, engaging in bug reporting, code reviews, maintaining documentation.",
            "Estimated compute and hosting costs, gathering user analytics to scale platform accordingly."
        ],
        hashtags: [
            "JavaScript",
            "TypeScript",
            "React.js",
            "Vue.js",
            "Node.js",
            "HTML",
            "CSS",
            "Sass",
        ]
    },
    {
        position: "Web Dev Intern",
        company: {
            name: "WolfTech",
            link: "https://tools.wolftech.ncsu.edu/support/index.php/WolfTech_Information_Technology"
        },
        duration: "Aug 2022 - Aug 2024",
        bulletPoints: [
            "Williamboard Project - Solo Full-Stack Developer 					   	   May 2023 - July 2024",
            "Laid the groundwork for a multi-tenant modern digital sign management system for 360 screens across 50 campus organizations using Laravel, Vue.js, and Inertia.js.",
            "Designed MySQL database and Event-Driven app architecture to work with modern PHP and JS technologies.",
            "Implemented a tenant permission-based system supporting 5 distinct user roles and organization-specific access.",
            "Configured WebSocket's API to collect screen data and display analytics on user-facing dashboards.",
            "Automated data migration of 15,000 records to new database structure in under 5 min using custom scripts.",
            "Other Contributions									   	   Aug 2022 - May 2023",
            "Created an AI-driven LinkedIn post generator, integrating user profiles and files for personalized content.",
            "Built a search tool for 20,000 circuit design kits using PHP and SQL, achieving a 200ms average response time.",
            "Maintained and debugged email automation, research discovery, and scheduling apps, solving 10+ client issues.",
            "Mentored and assisted new interns into the team workflow shortening the onboarding period.",
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "MySQL",
            "JS",
            "Vue.js",
            "HTML",
            "Tailwind"
        ]
    },
    // {
    //     position: "Math Tutor",
    //     company: {
    //         name: "Mathnasium",
    //         link: "https://www.mathnasium.com"
    //     },
    //     duration: "Jan 2022 - Aug 2022",
    //     bulletPoints: [
    //         "Provided math tutoring to students from elementary through high school, covering a range of topics from basic algebra to college-level calculus, using personalized teaching strategies.",
    //         "Designed and directed individualized learning plans, tailoring math topics evaluation to enhance understanding and improve performance in their school math classes."
    //     ],
    //     hashtags: [
    //         "Calc 1-2",
    //         "Algebra 1-3",
    //         "Discrete Math",
    //         "Statistics"
    //     ]
    // }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Tiny React Toolbox",
        yearCompleted: "2025",
        description: "Developed a tiny open-source library of highly-reusable and malleable React components (+TS logic) for LAS public domain UI AI analytics project. Sections, toggleables, drop-downs, icons, graphs.",
        techStack: "TS, React.js, Tailwind.css",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/mimaishel/tiny-react-toolbox"
            },
        ],
        imageLink: "images/las_dashboard_pic.png",
        alignLeft: false
    },
    {
        projectName: "EduVaultAI",
        yearCompleted: "2024",
        description: "Lead the backend and frontend development of a smart study tool transforming course notes into personalized practice exams and study guides.",
        techStack: "Vue.js, JS, HTML, Tailwind.css, FastAPI, Python, MariaDB, Docker, Llama.ai",
        links: [
            {
                label: "",
                type: "external",
                url: "https://blog.eduvaultai.com"
            }
        ],
        imageLink: "images/eduvaultai_dash_pic.png",
        alignLeft: true
    },
    {
        projectName: "Open-Source Developer Portfolio",
        yearCompleted: "2023",
        description: "Designed and developed an open-sourced single page application template to help web developers create visually appealing personal portfolios, focusing on ease of use and customization. Built with Vue.js, JS, HTML, Tailwind CSS, the project achieved 27 stars and 14 forks on GitHub.",
        techStack: "Vue.js, JS, HTML, Tailwind.css",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/mimaishel/webdev_portfolio"
            },
            {
                label: "",
                type: "external",
                url: "https://maxshelepov.com"
            }
        ],
        imageLink: "images/webdevportfolio_pic.png",
        alignLeft: false
    },
    // {
    //     projectName: "TrackYourSubs IOS App",
    //     yearCompleted: "2022",
    //     description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
    //     techStack: "Swift, SwiftUI",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/mimaishel/TrackYourSubsDemo/"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://youtu.be/KsTx-F70OOk"
    //         }
    //     ],
    //     imageLink: "images/tracksubs_pic.png",
    //     alignLeft: false
    // },
    // {
    //     projectName: "Personal Portfolio App",
    //     yearCompleted: "2021",
    //     description: "Built a dynamic, live-editable personal portfolio website with an admin dashboard for real-time updates. Developed using Django (Python) for the backend, and HTML, CSS, and JavaScript for the frontend, following the MVC architecture, which enhanced my full-stack development skills.",
    //     techStack: "Django, Python, HTML, CSS, Bootstrap4, JS",
    //     links: [
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://site--maximshelepov--6tkhqqjrq9c5.code.run"
    //         }
    //     ],
    //     imageLink: "images/portfolio_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Sudoku Game & Solver",
    //     yearCompleted: "2021",
    //     description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
    //     techStack: "Java",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/mimaishel/sudokusolver"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://youtu.be/lXOjOrjf5hU"
    //         }
    //     ],
    //     imageLink: "images/sudoku_pic.png",
    //     alignLeft: false
    // },
    // {
    //     projectName: "Trivia Quiz",
    //     yearCompleted: "2020",
    //     description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
    //     techStack: "JS, HTML, CSS",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/mimaishel/JS-API-Quiz"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
    //         }
    //     ],
    //     imageLink: "images/trivia_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Coronavirus Report",
    //     yearCompleted: "2020",
    //     description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
    //     techStack: "Python",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://youtu.be/gw5kb1QKVp0"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://github.com/mimaishel/Covid-Cases-Visual"
    //         }
    //     ],
    //     imageLink: "images/covid_pic.png",
    //     alignLeft: false
    // }
]

const archiveLink = "https://github.com/mimaishel?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Reach out if you have any questions or want to collaborate on a project.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "mimaishel@gmail.com", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}