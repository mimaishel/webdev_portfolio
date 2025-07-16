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
    message: "I'm a computer science senior with hefty experience in app development. Previously worked as a web developer at my university, where I built tools to support both students and educators. Currently, I'm developing an educational AI tool aimed at redefining how college students interact with AI.",
    basedLocation: "Raleigh, NC",
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
        "My name is Maxim Shelepov and I'm a computer science senior at North Carolina State University. I have a knack for solving problems and creating impactful software solutions. Through personal studies in high school, I built my first every full-stack personal website maximshelepov.com. While in college, I worked as a web developer for my university's IT team, gaining extensive experience in industry-grade software and advanced app development practices.",
        "Nowadays you can find me doing CS coursework (😅) or developing an app to tackle the next big challenge."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Python",
        "JavaScript",
        "Vue.js",
        "MySQL",
        "Swift"
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Web Dev Intern",
        company: {
            name: "WolfTech",
            link: "https://tools.wolftech.ncsu.edu/support/index.php/WolfTech_Information_Technology"
        },
        duration: "Aug 2022 - Aug 2024",
        bulletPoints: [
            "Supported the development and maintenance of university web applications over two years, improving user experience and developer efficiency using PHP, Laravel, SQL, Docker, and Vue.js.",
            "Made 350+ contributions to code repositories, including developing tools for email automation, research discovery, and AI-driven news sharing, which reduced operational time and led to higher user adoption.",
            "Laid the groundwork for the modernized campus digital signage system and management application which supports 360 digital signs and 50 different organizations on campus."
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
    {
        position: "Math Tutor",
        company: {
            name: "Mathnasium",
            link: "https://www.mathnasium.com"
        },
        duration: "Jan 2022 - Aug 2022",
        bulletPoints: [
            "Provided math tutoring to students from elementary through high school, covering a range of topics from basic algebra to college-level calculus, using personalized teaching strategies.",
            "Designed and directed individualized learning plans, tailoring math topics evaluation to enhance understanding and improve performance in their school math classes."
        ],
        hashtags: [
            "Calc 1-2",
            "Algebra 1-3",
            "Discrete Math",
            "Statistics"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "EdTech AI Tool",
        yearCompleted: "2024",
        description: "Developed an educational tool in collaboration with a peer, to rethink the college student and AI interaction. With a core principle to enhance learning and personal growth. Responsible for UI, UX, and DB management with ongoing goal to complete version 1.0 in December 2024.",
        techStack: "Python, Vue.js",
        links: [
            // {
            //     label: "",
            //     type: "git",
            //     url: "#"
            // },
            // {
            //     label: "",
            //     type: "external",
            //     url: "#"
            // }
        ],
        imageLink: "images/version_edtech_pic.png",
        alignLeft: false
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
        alignLeft: true
    },
    {
        projectName: "TrackYourSubs IOS App",
        yearCompleted: "2022",
        description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
        techStack: "Swift, SwiftUI",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/mimaishel/TrackYourSubsDemo/"
            },
            {
                label: "",
                type: "external",
                url: "https://youtu.be/KsTx-F70OOk"
            }
        ],
        imageLink: "images/tracksubs_pic.png",
        alignLeft: false
    },
    {
        projectName: "Personal Portfolio App",
        yearCompleted: "2021",
        description: "Built a dynamic, live-editable personal portfolio website with an admin dashboard for real-time updates. Developed using Django (Python) for the backend, and HTML, CSS, and JavaScript for the frontend, following the MVC architecture, which enhanced my full-stack development skills.",
        techStack: "Django, Python, HTML, CSS, Bootstrap4, JS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://site--maximshelepov--6tkhqqjrq9c5.code.run"
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
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
            "Actively seeking full-time software development positions as a May 2025 graduate.",
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