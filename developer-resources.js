// Development Resources and Templates Database
const DeveloperResources = {
    
    // Website Development Ideas
    websiteTemplates: {
        ecommerce: {
            title: "E-commerce Website",
            description: "Complete online store with shopping cart, payment integration, and inventory management",
            features: [
                "Product catalog with search and filters",
                "Shopping cart and checkout process",
                "User authentication and profiles",
                "Payment gateway integration (Stripe, PayPal)",
                "Order tracking and management",
                "Admin dashboard for inventory",
                "Responsive design for mobile shopping",
                "SEO optimization for product pages"
            ],
            techStack: ["React/Vue.js", "Node.js/Express", "MongoDB/PostgreSQL", "Stripe API", "Redux/Vuex"],
            difficulty: "Advanced",
            timeEstimate: "4-6 weeks"
        },
        
        portfolio: {
            title: "Portfolio Website",
            description: "Professional portfolio to showcase your work, skills, and experience",
            features: [
                "Hero section with personal branding",
                "Projects showcase with live demos",
                "Skills and technologies section",
                "About me with professional timeline",
                "Contact form with email integration",
                "Blog section for articles",
                "Dark/light theme toggle",
                "Smooth animations and transitions"
            ],
            techStack: ["HTML5", "CSS3", "JavaScript", "GSAP", "EmailJS"],
            difficulty: "Beginner",
            timeEstimate: "1-2 weeks"
        },
        
        blog: {
            title: "Blog Platform",
            description: "Full-featured blogging platform with content management and user engagement",
            features: [
                "Rich text editor for writing posts",
                "Categories and tagging system",
                "User comments and moderation",
                "Search functionality",
                "RSS feed generation",
                "Social media sharing",
                "SEO optimization",
                "Analytics dashboard"
            ],
            techStack: ["Next.js", "MongoDB", "TinyMCE", "NextAuth", "Vercel"],
            difficulty: "Intermediate",
            timeEstimate: "3-4 weeks"
        },
        
        dashboard: {
            title: "Admin Dashboard",
            description: "Comprehensive admin panel with data visualization and management tools",
            features: [
                "Interactive charts and graphs",
                "Data tables with sorting/filtering",
                "User management system",
                "Real-time notifications",
                "File upload and management",
                "Export data functionality",
                "Role-based access control",
                "Responsive sidebar navigation"
            ],
            techStack: ["React", "Chart.js", "Material-UI", "Firebase", "Express.js"],
            difficulty: "Advanced",
            timeEstimate: "4-5 weeks"
        },
        
        landing: {
            title: "Landing Page",
            description: "High-converting landing page for products, services, or campaigns",
            features: [
                "Compelling hero section",
                "Feature highlights with icons",
                "Customer testimonials",
                "Pricing tables",
                "FAQ section",
                "Newsletter signup",
                "Contact form",
                "Mobile-first responsive design"
            ],
            techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS animations"],
            difficulty: "Beginner",
            timeEstimate: "3-5 days"
        },
        
        social: {
            title: "Social Media App",
            description: "Social networking platform with real-time messaging and content sharing",
            features: [
                "User profiles and authentication",
                "Post creation with media upload",
                "Real-time chat messaging",
                "Like, comment, and share system",
                "Follow/unfollow functionality",
                "News feed algorithm",
                "Push notifications",
                "Stories feature"
            ],
            techStack: ["React Native", "Socket.io", "MongoDB", "Express.js", "AWS S3"],
            difficulty: "Expert",
            timeEstimate: "8-12 weeks"
        }
    },

    // Project Templates
    projectTemplates: {
        react: {
            title: "React Application",
            description: "Modern React app with best practices and popular tools",
            setup: [
                "Create React App with TypeScript",
                "React Router for navigation",
                "Redux Toolkit for state management",
                "Material-UI or Chakra UI components",
                "Axios for API calls",
                "React Hook Form for forms",
                "Jest and React Testing Library",
                "ESLint and Prettier configuration"
            ],
            structure: `
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── store/            # Redux store and slices
├── services/         # API service functions
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
└── styles/           # Global styles and themes
            `,
            commands: [
                "npx create-react-app my-app --template typescript",
                "npm install @reduxjs/toolkit react-redux",
                "npm install @mui/material @emotion/react @emotion/styled",
                "npm install axios react-hook-form"
            ]
        },
        
        vue: {
            title: "Vue.js Project",
            description: "Vue 3 application with Composition API and modern tooling",
            setup: [
                "Vue 3 with Composition API",
                "Vue Router for routing",
                "Pinia for state management",
                "Vuetify or Quasar components",
                "Axios for HTTP requests",
                "VeeValidate for form validation",
                "Vitest for testing",
                "TypeScript support"
            ],
            structure: `
src/
├── components/       # Vue components
├── views/           # Page views
├── composables/     # Composition functions
├── stores/          # Pinia stores
├── router/          # Vue Router config
├── assets/          # Static assets
└── types/           # TypeScript types
            `,
            commands: [
                "npm create vue@latest my-vue-app",
                "npm install pinia",
                "npm install vuetify@next",
                "npm install axios vee-validate"
            ]
        },
        
        nodejs: {
            title: "Node.js Backend",
            description: "RESTful API server with authentication and database integration",
            setup: [
                "Express.js web framework",
                "MongoDB with Mongoose ODM",
                "JWT authentication",
                "Bcrypt for password hashing",
                "Multer for file uploads",
                "Helmet for security",
                "Morgan for logging",
                "Joi for input validation"
            ],
            structure: `
src/
├── controllers/     # Route controllers
├── models/         # Database models
├── middleware/     # Custom middleware
├── routes/         # API routes
├── services/       # Business logic
├── utils/          # Utility functions
├── config/         # Configuration files
└── tests/          # Test files
            `,
            commands: [
                "npm init -y",
                "npm install express mongoose bcryptjs jsonwebtoken",
                "npm install helmet morgan cors dotenv",
                "npm install -D nodemon jest supertest"
            ]
        },
        
        python: {
            title: "Python Flask API",
            description: "Python web API with Flask, SQLAlchemy, and JWT authentication",
            setup: [
                "Flask web framework",
                "SQLAlchemy ORM",
                "Flask-JWT-Extended for auth",
                "Flask-CORS for cross-origin",
                "Marshmallow for serialization",
                "Flask-Mail for emails",
                "Pytest for testing",
                "Gunicorn for production"
            ],
            structure: `
app/
├── models/          # Database models
├── resources/       # API endpoints
├── schemas/         # Marshmallow schemas
├── services/        # Business logic
├── utils/           # Helper functions
├── config/          # Configuration
└── tests/           # Test files
            `,
            commands: [
                "pip install flask flask-sqlalchemy",
                "pip install flask-jwt-extended flask-cors",
                "pip install marshmallow flask-mail",
                "pip install pytest gunicorn"
            ]
        },
        
        mobile: {
            title: "Mobile App Development",
            description: "Cross-platform mobile app with React Native or Flutter",
            options: {
                reactNative: {
                    setup: [
                        "React Native CLI or Expo",
                        "React Navigation",
                        "Redux or Zustand",
                        "React Native Paper UI",
                        "Async Storage",
                        "Push notifications",
                        "Camera and media access"
                    ],
                    commands: [
                        "npx react-native init MyApp",
                        "npm install @react-navigation/native",
                        "npm install react-native-paper",
                        "npm install @react-native-async-storage/async-storage"
                    ]
                },
                flutter: {
                    setup: [
                        "Flutter SDK",
                        "Provider or Bloc state management",
                        "Material Design components",
                        "HTTP package for API calls",
                        "Shared preferences",
                        "Firebase integration",
                        "Local database (SQLite)"
                    ],
                    commands: [
                        "flutter create my_app",
                        "flutter pub add provider",
                        "flutter pub add http",
                        "flutter pub add shared_preferences"
                    ]
                }
            }
        },
        
        game: {
            title: "Game Development",
            description: "Interactive games using various technologies",
            options: {
                web: {
                    title: "Web Game (JavaScript)",
                    tools: ["HTML5 Canvas", "Phaser.js", "Three.js", "WebGL"],
                    examples: ["2D platformer", "Puzzle game", "Racing game", "RPG"]
                },
                unity: {
                    title: "Unity Game (C#)",
                    tools: ["Unity Engine", "C# scripting", "Unity Asset Store", "Visual Studio"],
                    examples: ["3D adventure", "Mobile game", "VR experience", "Multiplayer"]
                },
                python: {
                    title: "Python Game",
                    tools: ["Pygame", "Arcade library", "Panda3D", "Kivy"],
                    examples: ["Snake game", "Tetris clone", "Space shooter", "Educational game"]
                }
            }
        }
    },

    // Library Resources
    libraries: {
        css: {
            title: "CSS Libraries & Frameworks",
            resources: [
                {
                    name: "Bootstrap",
                    description: "Popular CSS framework for responsive design",
                    url: "https://getbootstrap.com/",
                    cdn: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                },
                {
                    name: "Tailwind CSS",
                    description: "Utility-first CSS framework",
                    url: "https://tailwindcss.com/",
                    install: "npm install tailwindcss"
                },
                {
                    name: "Bulma",
                    description: "Modern CSS framework based on Flexbox",
                    url: "https://bulma.io/",
                    cdn: "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
                },
                {
                    name: "Animate.css",
                    description: "Cross-browser CSS animation library",
                    url: "https://animate.style/",
                    cdn: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                },
                {
                    name: "Material-UI",
                    description: "React components implementing Material Design",
                    url: "https://mui.com/",
                    install: "npm install @mui/material"
                }
            ]
        },
        
        js: {
            title: "JavaScript Libraries",
            resources: [
                {
                    name: "Chart.js",
                    description: "Simple yet flexible JavaScript charting",
                    url: "https://www.chartjs.org/",
                    cdn: "https://cdn.jsdelivr.net/npm/chart.js"
                },
                {
                    name: "GSAP",
                    description: "Professional-grade animation library",
                    url: "https://greensock.com/gsap/",
                    cdn: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
                },
                {
                    name: "Lodash",
                    description: "Utility library for JavaScript",
                    url: "https://lodash.com/",
                    cdn: "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
                },
                {
                    name: "Moment.js",
                    description: "JavaScript date library for parsing and formatting",
                    url: "https://momentjs.com/",
                    cdn: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"
                },
                {
                    name: "AOS",
                    description: "Animate On Scroll library",
                    url: "https://michalsnik.github.io/aos/",
                    cdn: "https://unpkg.com/aos@2.3.1/dist/aos.js"
                }
            ]
        },
        
        icons: {
            title: "Icon Libraries",
            resources: [
                {
                    name: "Font Awesome",
                    description: "Popular icon toolkit",
                    url: "https://fontawesome.com/",
                    cdn: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                },
                {
                    name: "Material Icons",
                    description: "Google's Material Design icons",
                    url: "https://fonts.google.com/icons",
                    cdn: "https://fonts.googleapis.com/icon?family=Material+Icons"
                },
                {
                    name: "Feather Icons",
                    description: "Beautiful open source icons",
                    url: "https://feathericons.com/",
                    cdn: "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"
                },
                {
                    name: "Heroicons",
                    description: "Beautiful hand-crafted SVG icons",
                    url: "https://heroicons.com/",
                    install: "npm install @heroicons/react"
                },
                {
                    name: "React Icons",
                    description: "Popular icons for React projects",
                    url: "https://react-icons.github.io/react-icons/",
                    install: "npm install react-icons"
                }
            ]
        },
        
        fonts: {
            title: "Font Resources",
            resources: [
                {
                    name: "Google Fonts",
                    description: "Free web fonts",
                    url: "https://fonts.google.com/",
                    example: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                },
                {
                    name: "Adobe Fonts",
                    description: "Premium web fonts",
                    url: "https://fonts.adobe.com/",
                    note: "Requires Adobe subscription"
                },
                {
                    name: "Font Squirrel",
                    description: "Free fonts for commercial use",
                    url: "https://www.fontsquirrel.com/",
                    note: "Download and self-host"
                },
                {
                    name: "DaFont",
                    description: "Free fonts archive",
                    url: "https://www.dafont.com/",
                    note: "Check license for commercial use"
                },
                {
                    name: "Fontjoy",
                    description: "Font pairing generator",
                    url: "https://fontjoy.com/",
                    note: "AI-powered font combinations"
                }
            ]
        },
        
        apis: {
            title: "API Resources",
            resources: [
                {
                    name: "JSONPlaceholder",
                    description: "Fake REST API for testing",
                    url: "https://jsonplaceholder.typicode.com/",
                    example: "https://jsonplaceholder.typicode.com/posts"
                },
                {
                    name: "OpenWeatherMap",
                    description: "Weather data API",
                    url: "https://openweathermap.org/api",
                    note: "Free tier available"
                },
                {
                    name: "REST Countries",
                    description: "Country information API",
                    url: "https://restcountries.com/",
                    example: "https://restcountries.com/v3.1/all"
                },
                {
                    name: "Cat API",
                    description: "Random cat images",
                    url: "https://thecatapi.com/",
                    example: "https://api.thecatapi.com/v1/images/search"
                },
                {
                    name: "News API",
                    description: "News headlines and articles",
                    url: "https://newsapi.org/",
                    note: "API key required"
                }
            ]
        },
        
        tools: {
            title: "Development Tools",
            resources: [
                {
                    name: "VS Code",
                    description: "Popular code editor",
                    url: "https://code.visualstudio.com/",
                    extensions: ["ES7+ React/Redux/React-Native", "Prettier", "ESLint", "Live Server"]
                },
                {
                    name: "Figma",
                    description: "UI/UX design tool",
                    url: "https://www.figma.com/",
                    note: "Free for personal use"
                },
                {
                    name: "Postman",
                    description: "API development environment",
                    url: "https://www.postman.com/",
                    note: "Test and document APIs"
                },
                {
                    name: "GitHub",
                    description: "Version control and collaboration",
                    url: "https://github.com/",
                    note: "Free for public repositories"
                },
                {
                    name: "Netlify",
                    description: "Static site hosting",
                    url: "https://www.netlify.com/",
                    note: "Free tier with custom domains"
                }
            ]
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeveloperResources;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.DeveloperResources = DeveloperResources;
}
