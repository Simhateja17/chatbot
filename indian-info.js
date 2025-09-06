// Indian Basic Information Database
// This file contains comprehensive information about India

const IndianInfo = {
    // Basic Country Information
    basicInfo: {
        officialName: "Republic of India",
        hindiName: "भारत गणराज्य (Bharat Ganarajya)",
        capital: "New Delhi",
        largestCity: "Mumbai",
        area: "3,287,263 km²",
        population: "1.4+ billion (2024)",
        currency: "Indian Rupee (₹, INR)",
        timeZone: "IST (UTC+5:30)",
        callingCode: "+91",
        internetTLD: ".in",
        nationalAnthem: "Jana Gana Mana",
        nationalSong: "Vande Mataram",
        nationalAnimal: "Bengal Tiger",
        nationalBird: "Indian Peacock",
        nationalFlower: "Lotus",
        nationalTree: "Banyan Tree",
        nationalFruit: "Mango",
        nationalGame: "Hockey",
        independenceDay: "15th August 1947",
        republicDay: "26th January 1950",
        governmentType: "Federal Parliamentary Democratic Republic",
        president: "Head of State",
        primeMinister: "Head of Government",
        parliament: "Lok Sabha (Lower House) and Rajya Sabha (Upper House)",
        supremeCourt: "Highest judicial authority",
        gdp: "$3.7 trillion (2024)",
        gdpPerCapita: "$2,600 (2024)",
        lifeExpectancy: "70.8 years (2024)",
        literacyRate: "77.7% (2024)"
    },

    // Detailed Geography
    geography: {
        location: "South Asia, between 8°4' and 37°6' North latitude and 68°7' and 97°25' East longitude",
        borders: {
            countries: ["Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
            coastline: "7,516.6 km",
            landBorders: "15,200 km"
        },
        climate: {
            types: ["Tropical monsoon", "Tropical wet and dry", "Desert", "Humid subtropical", "Alpine"],
            seasons: ["Winter (December-February)", "Summer (March-May)", "Monsoon (June-September)", "Post-monsoon (October-November)"],
            averageRainfall: "1,083 mm annually",
            temperatures: "10°C to 50°C range"
        },
        naturalFeatures: {
            peninsulas: ["Indian Peninsula", "Deccan Plateau"],
            deserts: ["Thar Desert (Rajasthan)", "Cold Desert (Ladakh)"],
            forests: "21.71% forest cover",
            coastalPlains: ["Western Ghats", "Eastern Ghats", "Konkan Coast", "Coromandel Coast"],
            islands: ["Andaman and Nicobar", "Lakshadweep"],
            wetlands: ["Sundarbans", "Chilika Lake", "Wular Lake"]
        }
    },

    // States and Union Territories
    statesAndUTs: {
        states: [
            { name: "Andhra Pradesh", capital: "Amaravati", language: "Telugu" },
            { name: "Arunachal Pradesh", capital: "Itanagar", language: "English" },
            { name: "Assam", capital: "Dispur", language: "Assamese" },
            { name: "Bihar", capital: "Patna", language: "Hindi" },
            { name: "Chhattisgarh", capital: "Raipur", language: "Hindi" },
            { name: "Goa", capital: "Panaji", language: "Konkani" },
            { name: "Gujarat", capital: "Gandhinagar", language: "Gujarati" },
            { name: "Haryana", capital: "Chandigarh", language: "Hindi" },
            { name: "Himachal Pradesh", capital: "Shimla", language: "Hindi" },
            { name: "Jharkhand", capital: "Ranchi", language: "Hindi" },
            { name: "Karnataka", capital: "Bengaluru", language: "Kannada" },
            { name: "Kerala", capital: "Thiruvananthapuram", language: "Malayalam" },
            { name: "Madhya Pradesh", capital: "Bhopal", language: "Hindi" },
            { name: "Maharashtra", capital: "Mumbai", language: "Marathi" },
            { name: "Manipur", capital: "Imphal", language: "Manipuri" },
            { name: "Meghalaya", capital: "Shillong", language: "English" },
            { name: "Mizoram", capital: "Aizawl", language: "Mizo" },
            { name: "Nagaland", capital: "Kohima", language: "English" },
            { name: "Odisha", capital: "Bhubaneswar", language: "Odia" },
            { name: "Punjab", capital: "Chandigarh", language: "Punjabi" },
            { name: "Rajasthan", capital: "Jaipur", language: "Hindi" },
            { name: "Sikkim", capital: "Gangtok", language: "English" },
            { name: "Tamil Nadu", capital: "Chennai", language: "Tamil" },
            { name: "Telangana", capital: "Hyderabad", language: "Telugu" },
            { name: "Tripura", capital: "Agartala", language: "Bengali" },
            { name: "Uttar Pradesh", capital: "Lucknow", language: "Hindi" },
            { name: "Uttarakhand", capital: "Dehradun", language: "Hindi" },
            { name: "West Bengal", capital: "Kolkata", language: "Bengali" }
        ],
        unionTerritories: [
            { name: "Andaman and Nicobar Islands", capital: "Port Blair" },
            { name: "Chandigarh", capital: "Chandigarh" },
            { name: "Dadra and Nagar Haveli and Daman and Diu", capital: "Daman" },
            { name: "Delhi", capital: "New Delhi" },
            { name: "Jammu and Kashmir", capital: "Srinagar (Summer), Jammu (Winter)" },
            { name: "Ladakh", capital: "Leh" },
            { name: "Lakshadweep", capital: "Kavaratti" },
            { name: "Puducherry", capital: "Puducherry" }
        ]
    },

    // Languages
    languages: {
        official: ["Hindi", "English"],
        scheduled: [
            "Assamese", "Bengali", "Bodo", "Dogri", "Gujarati", "Hindi", "Kannada",
            "Kashmiri", "Konkani", "Maithili", "Malayalam", "Manipuri", "Marathi",
            "Nepali", "Odia", "Punjabi", "Sanskrit", "Santali", "Sindhi", "Tamil",
            "Telugu", "Urdu"
        ],
        totalLanguages: "700+ languages spoken",
        scripts: "22 official scripts"
    },

    // Major Cities
    majorCities: [
        { name: "Mumbai", state: "Maharashtra", population: "20+ million", nickname: "Financial Capital" },
        { name: "Delhi", state: "Delhi", population: "32+ million", nickname: "National Capital" },
        { name: "Bengaluru", state: "Karnataka", population: "13+ million", nickname: "Silicon Valley of India" },
        { name: "Hyderabad", state: "Telangana", population: "10+ million", nickname: "Cyberabad" },
        { name: "Chennai", state: "Tamil Nadu", population: "11+ million", nickname: "Detroit of India" },
        { name: "Kolkata", state: "West Bengal", population: "15+ million", nickname: "City of Joy" },
        { name: "Pune", state: "Maharashtra", population: "7+ million", nickname: "Oxford of the East" },
        { name: "Ahmedabad", state: "Gujarat", population: "8+ million", nickname: "Manchester of India" }
    ],

    // Rivers
    rivers: [
        { name: "Ganges (Ganga)", length: "2,525 km", significance: "Holiest river" },
        { name: "Brahmaputra", length: "2,900 km", significance: "Major river of Northeast" },
        { name: "Indus", length: "3,180 km", significance: "Ancient civilization river" },
        { name: "Godavari", length: "1,465 km", significance: "Longest river in South India" },
        { name: "Krishna", length: "1,400 km", significance: "Second longest river in South India" },
        { name: "Narmada", length: "1,312 km", significance: "Westward flowing river" },
        { name: "Yamuna", length: "1,376 km", significance: "Sacred river, tributary of Ganges" }
    ],

    // Mountains
    mountains: [
        { name: "Himalayas", highestPeak: "Kanchenjunga (8,586m)", states: "Northern border" },
        { name: "Western Ghats", highestPeak: "Anamudi (2,695m)", states: "Western coast" },
        { name: "Eastern Ghats", highestPeak: "Jindhagada (1,690m)", states: "Eastern coast" },
        { name: "Aravalli Range", highestPeak: "Guru Shikhar (1,722m)", states: "Rajasthan" },
        { name: "Vindhya Range", significance: "Central India", states: "MP, UP" },
        { name: "Satpura Range", significance: "Central India", states: "MP, Maharashtra" }
    ],

    // Festivals
    festivals: [
        { name: "Diwali", significance: "Festival of Lights", religion: "Hindu", month: "October/November" },
        { name: "Holi", significance: "Festival of Colors", religion: "Hindu", month: "March" },
        { name: "Eid ul-Fitr", significance: "End of Ramadan", religion: "Islam", month: "Varies" },
        { name: "Eid ul-Adha", significance: "Festival of Sacrifice", religion: "Islam", month: "Varies" },
        { name: "Christmas", significance: "Birth of Jesus Christ", religion: "Christianity", month: "December" },
        { name: "Dussehra", significance: "Victory of good over evil", religion: "Hindu", month: "September/October" },
        { name: "Ganesh Chaturthi", significance: "Lord Ganesha festival", religion: "Hindu", month: "August/September" },
        { name: "Karva Chauth", significance: "Married women's fast", religion: "Hindu", month: "October/November" },
        { name: "Durga Puja", significance: "Goddess Durga festival", religion: "Hindu", month: "September/October" },
        { name: "Onam", significance: "Kerala harvest festival", religion: "Hindu", month: "August/September" }
    ],

    // Historical Periods
    history: {
        ancientPeriod: {
            indusValley: "3300-1300 BCE - Harappan Civilization",
            vedicPeriod: "1500-500 BCE - Vedic texts composed",
            mauryanEmpire: "322-185 BCE - Chandragupta Maurya, Ashoka",
            guptaEmpire: "320-550 CE - Golden Age of India"
        },
        medievalPeriod: {
            delhiSultanate: "1206-1526 CE - Islamic rule in North India",
            mughalEmpire: "1526-1857 CE - Babur to Bahadur Shah II",
            marathaEmpire: "1674-1818 CE - Shivaji to Peshwas",
            vijayanagara: "1336-1646 CE - South Indian empire"
        },
        modernPeriod: {
            britishRule: "1858-1947 - British colonial period",
            independence: "August 15, 1947 - Independence from Britain",
            partition: "1947 - Partition into India and Pakistan",
            republic: "January 26, 1950 - Constitution adopted"
        }
    },

    // Famous Personalities
    personalities: {
        freedomFighters: [
            "Mahatma Gandhi - Father of Nation",
            "Jawaharlal Nehru - First Prime Minister",
            "Sardar Vallabhbhai Patel - Iron Man of India",
            "Subhas Chandra Bose - Netaji",
            "Bhagat Singh - Revolutionary",
            "Rani Lakshmibai - Queen of Jhansi",
            "Chandrashekhar Azad - Revolutionary"
        ],
        scientists: [
            "Dr. A.P.J. Abdul Kalam - Missile Man",
            "Dr. Homi Bhabha - Nuclear physicist",
            "Dr. Vikram Sarabhai - Space scientist",
            "Srinivasa Ramanujan - Mathematician",
            "Dr. C.V. Raman - Nobel laureate physicist"
        ],
        modernLeaders: [
            "Dr. Manmohan Singh - Economist, Former PM",
            "Atal Bihari Vajpayee - Former PM",
            "Indira Gandhi - Former PM",
            "Rajiv Gandhi - Former PM"
        ]
    },

    // Cuisine
    cuisine: {
        northIndian: [
            "Roti/Chapati", "Dal", "Rajma", "Chole", "Butter Chicken",
            "Biryani", "Naan", "Lassi", "Samosa", "Pakora"
        ],
        southIndian: [
            "Dosa", "Idli", "Sambar", "Rasam", "Uttapam",
            "Vada", "Coconut Chutney", "Hyderabadi Biryani"
        ],
        westIndian: [
            "Dhokla", "Thepla", "Vada Pav", "Misal Pav", "Puran Poli",
            "Modak", "Solkadhi", "Gujarati Thali"
        ],
        eastIndian: [
            "Fish Curry", "Rice", "Rosogolla", "Sandesh", "Mishti Doi",
            "Luchi", "Aloo Posto", "Machher Jhol"
        ]
    },

    // Economy
    economy: {
        gdp: "World's 5th largest economy",
        sectors: {
            agriculture: "Agriculture & allied - 18%",
            industry: "Industry - 30%",
            services: "Services - 52%"
        },
        majorIndustries: [
            "Information Technology", "Pharmaceuticals", "Textiles",
            "Automobiles", "Steel", "Chemicals", "Agriculture"
        ],
        exports: [
            "Software services", "Pharmaceuticals", "Textiles", "Rice",
            "Spices", "Tea", "Jewelry", "Engineering goods"
        ]
    },

    // Education System
    education: {
        structure: "10+2+3 system",
        boards: [
            "CBSE - Central Board of Secondary Education",
            "ICSE - Indian Certificate of Secondary Education",
            "State Boards - Various state education boards"
        ],
        higherEducation: [
            "IITs - Indian Institutes of Technology",
            "IIMs - Indian Institutes of Management",
            "AIIMS - All India Institute of Medical Sciences",
            "Universities - Central and State universities"
        ],
        literacyRate: "77.7% (2023 estimate)",
        topInstitutions: {
            engineering: ["IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kanpur", "IIT Kharagpur"],
            management: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "IIM Lucknow"],
            medical: ["AIIMS Delhi", "PGIMER Chandigarh", "CMC Vellore", "JIPMER Puducherry"],
            universities: ["Delhi University", "JNU", "BHU", "AMU", "University of Mumbai"]
        },
        challenges: ["Rural-urban education gap", "Gender parity", "Quality of education", "Infrastructure"]
    },

    // Science and Technology
    scienceAndTechnology: {
        spaceProgram: {
            organization: "ISRO (Indian Space Research Organisation)",
            achievements: [
                "Mars Orbiter Mission (Mangalyaan) - First successful Mars mission in first attempt",
                "Chandrayaan missions to Moon",
                "Record 104 satellites in single launch",
                "Aryabhatta - First satellite (1975)",
                "Cost-effective space missions"
            ],
            currentProjects: ["Gaganyaan human spaceflight", "Chandrayaan-3", "Aditya-L1 solar mission"]
        },
        nuclearProgram: {
            startYear: "1948",
            fatherOfProgram: "Dr. Homi Bhabha",
            powerPlants: "23 operational nuclear reactors",
            achievements: ["Nuclear weapon capability", "Nuclear medicine", "Peaceful nuclear applications"]
        },
        itSector: {
            description: "Global IT and software services hub",
            majorCities: ["Bangalore", "Hyderabad", "Pune", "Chennai", "Mumbai", "Delhi NCR"],
            companies: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"],
            exports: "$150+ billion annually",
            employment: "4.5+ million direct jobs"
        },
        research: {
            institutions: ["CSIR", "DRDO", "DAE", "DST", "ICMR"],
            achievements: ["Generic drug manufacturing", "Vaccine development", "IT innovations", "Agricultural research"]
        }
    },

    // Healthcare System
    healthcare: {
        overview: {
            lifeExpectancy: "70.8 years",
            infantMortality: "28 per 1000 live births",
            maternalMortality: "113 per 100,000 live births"
        },
        traditionalMedicine: {
            systems: ["Ayurveda", "Yoga", "Unani", "Siddha", "Homeopathy"],
            ministry: "AYUSH Ministry",
            practitioners: "Over 1 million qualified practitioners"
        },
        modernHealthcare: {
            hospitals: ["AIIMS", "PGI Chandigarh", "Tata Memorial", "Apollo", "Fortis"],
            medicalTourism: "$6+ billion industry",
            pharmaceuticals: "Pharmacy of the world - 20% of global generic drugs"
        },
        publicHealth: {
            schemes: ["Ayushman Bharat", "National Health Mission", "Janani Suraksha Yojana"],
            challenges: ["Rural healthcare access", "Disease burden", "Healthcare infrastructure"]
        }
    },

    // Transportation
    transportation: {
        railways: {
            network: "68,000+ km - 4th largest in world",
            passengers: "8.4 billion annually",
            zones: "18 railway zones",
            specialTrains: ["Rajdhani", "Shatabdi", "Duronto", "Vande Bharat"],
            heritage: ["Darjeeling Himalayan Railway", "Nilgiri Mountain Railway", "Kalka Shimla Railway"]
        },
        roadways: {
            network: "6.3+ million km",
            highways: ["Golden Quadrilateral", "North-South & East-West Corridors", "Bharatmala Project"],
            vehicles: "295+ million registered vehicles"
        },
        aviation: {
            airports: "500+ airports",
            majorAirports: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad"],
            airlines: ["Air India", "IndiGo", "SpiceJet", "Vistara", "GoAir"],
            passengers: "140+ million annually"
        },
        waterways: {
            ports: "12 major and 200+ minor ports",
            majorPorts: ["Mumbai", "Chennai", "Kolkata", "Kochi", "Visakhapatnam"],
            inland: ["National Waterways", "River transport systems"]
        },
        metro: {
            cities: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Kochi"],
            expansion: "Rapid metro expansion in tier-1 and tier-2 cities"
        }
    },

    // Agriculture and Food Security
    agriculture: {
        contribution: "17% of GDP, 50% of workforce",
        seasons: {
            kharif: "June-October (monsoon crops)",
            rabi: "November-April (winter crops)",
            zaid: "April-June (summer crops)"
        },
        majorCrops: {
            food: ["Rice", "Wheat", "Maize", "Millets", "Pulses"],
            cash: ["Cotton", "Sugarcane", "Jute", "Tea", "Coffee", "Rubber"],
            spices: ["Black pepper", "Cardamom", "Turmeric", "Coriander", "Cumin"]
        },
        production: {
            rice: "World's 2nd largest producer",
            wheat: "World's 2nd largest producer",
            tea: "World's largest producer",
            milk: "World's largest producer",
            spices: "World's largest producer and exporter"
        },
        challenges: ["Climate change", "Water scarcity", "Soil degradation", "Small farm sizes"],
        innovations: ["Green Revolution", "White Revolution", "Blue Revolution", "Digital agriculture"]
    },

    // Environment and Wildlife
    environment: {
        biodiversity: {
            rank: "8th most biodiverse country",
            species: "45,000 plant species, 91,000 animal species",
            endemism: "33% endemic species"
        },
        forests: {
            coverage: "21.71% of geographical area",
            types: ["Tropical rainforests", "Deciduous forests", "Mangroves", "Alpine forests"],
            treeCover: "24.56% including trees outside forests"
        },
        wildlife: {
            nationalParks: "104 national parks",
            wildlifeSanctuaries: "550+ wildlife sanctuaries",
            biosphereReserves: "18 biosphere reserves",
            ramsar: "75 Ramsar wetland sites"
        },
        conservation: {
            projects: ["Project Tiger", "Project Elephant", "Project Snow Leopard"],
            success: ["Tiger population recovery", "Asiatic lion conservation", "One-horned rhino protection"]
        },
        challenges: ["Air pollution", "Water pollution", "Deforestation", "Climate change", "Plastic waste"]
    },

    // Sports
    sports: {
        nationalSport: "Hockey",
        popularSports: [
            "Cricket", "Hockey", "Football", "Badminton", "Tennis",
            "Kabaddi", "Wrestling", "Boxing", "Chess"
        ],
        achievements: [
            "Cricket World Cup 1983, 2011",
            "Hockey Olympic Gold medals",
            "Individual Olympic medals in various sports",
            "Commonwealth Games medals"
        ]
    },

    // Political Information
    politics: {
        governmentType: "Federal Parliamentary Democratic Republic",
        constitution: {
            adopted: "January 26, 1950",
            articles: "395 articles in 22 parts",
            schedules: "12 schedules",
            amendments: "105+ amendments (as of 2023)",
            features: [
                "Federal structure with unitary bias",
                "Parliamentary system of government",
                "Fundamental rights and duties",
                "Directive principles of state policy",
                "Independent judiciary",
                "Universal adult suffrage"
            ]
        },
        executiveBranch: {
            president: {
                title: "President of India",
                role: "Head of State",
                term: "5 years",
                election: "Elected by Electoral College",
                currentPresident: "Droupadi Murmu (2022-present)",
                residence: "Rashtrapati Bhavan, New Delhi",
                powers: [
                    "Commander-in-Chief of Armed Forces",
                    "Assent to bills",
                    "Appointment of Prime Minister",
                    "Pardoning power"
                ]
            },
            primeMinister: {
                title: "Prime Minister of India",
                role: "Head of Government",
                currentPM: "Narendra Modi (2014-present)",
                party: "Bharatiya Janata Party (BJP)",
                residence: "7 Race Course Road, New Delhi",
                powers: [
                    "Chief executive authority",
                    "Leader of Council of Ministers",
                    "Policy formulation and implementation",
                    "Represents India internationally"
                ]
            },
            councilOfMinisters: {
                structure: "Cabinet Ministers, Ministers of State, Deputy Ministers",
                principle: "Collective responsibility",
                appointment: "Appointed by President on PM's advice"
            }
        },
        legislativeBranch: {
            parliament: {
                name: "Parliament of India (Sansad)",
                structure: "Bicameral",
                location: "Parliament House, New Delhi",
                sessions: "Budget, Monsoon, Winter sessions"
            },
            lokSabha: {
                name: "Lok Sabha (House of the People)",
                seats: "543 elected + 2 nominated",
                term: "5 years",
                speaker: "Presiding officer",
                currentSpeaker: "Om Birla",
                electoralSystem: "First-past-the-post",
                representation: "Direct election by people"
            },
            rajyaSabha: {
                name: "Rajya Sabha (Council of States)",
                seats: "238 elected + 12 nominated",
                term: "6 years (1/3rd retire every 2 years)",
                chairman: "Vice President of India",
                currentVicePresident: "Jagdeep Dhankhar",
                representation: "Elected by State Legislative Assemblies"
            }
        },
        judicialBranch: {
            supremeCourt: {
                establishment: "January 26, 1950",
                currentCJI: "Chief Justice of India",
                judges: "34 judges including CJI",
                jurisdiction: [
                    "Constitutional interpretation",
                    "Guardian of fundamental rights",
                    "Final court of appeal",
                    "Advisory jurisdiction"
                ],
                location: "New Delhi"
            },
            highCourts: "25 High Courts in states and UTs",
            districtCourts: "District and subordinate courts"
        },
        politicalParties: {
            national: [
                {
                    name: "Bharatiya Janata Party (BJP)",
                    founded: "1980",
                    ideology: "Hindu nationalism, Right-wing",
                    symbol: "Lotus",
                    currentLeader: "Narendra Modi",
                    strongholds: "Northern and Western India"
                },
                {
                    name: "Indian National Congress (INC)",
                    founded: "1885",
                    ideology: "Social liberalism, Secularism",
                    symbol: "Hand",
                    currentLeader: "Mallikarjun Kharge",
                    strongholds: "Traditional pan-India presence"
                },
                {
                    name: "Communist Party of India (Marxist)",
                    founded: "1964",
                    ideology: "Marxism-Leninism",
                    symbol: "Hammer, Sickle and Star",
                    strongholds: "West Bengal, Kerala, Tripura"
                },
                {
                    name: "Bahujan Samaj Party (BSP)",
                    founded: "1984",
                    ideology: "Dalit rights, Social justice",
                    symbol: "Elephant",
                    strongholds: "Uttar Pradesh"
                }
            ],
            regional: [
                {
                    name: "All India Trinamool Congress (AITC)",
                    state: "West Bengal",
                    leader: "Mamata Banerjee",
                    symbol: "Grass and Flower"
                },
                {
                    name: "Dravida Munnetra Kazhagam (DMK)",
                    state: "Tamil Nadu",
                    leader: "M. K. Stalin",
                    symbol: "Rising Sun"
                },
                {
                    name: "Shiv Sena",
                    state: "Maharashtra",
                    ideology: "Regional pride, Hindutva",
                    symbol: "Bow and Arrow"
                },
                {
                    name: "Janata Dal (United)",
                    state: "Bihar",
                    leader: "Nitish Kumar",
                    symbol: "Arrow"
                },
                {
                    name: "Aam Aadmi Party (AAP)",
                    strongholds: "Delhi, Punjab",
                    leader: "Arvind Kejriwal",
                    symbol: "Broom"
                }
            ]
        },
        electoralSystem: {
            electionCommission: {
                establishment: "January 25, 1950",
                currentCEC: "Chief Election Commissioner",
                independence: "Constitutional body",
                functions: [
                    "Conduct free and fair elections",
                    "Voter registration",
                    "Electoral roll preparation",
                    "Model Code of Conduct enforcement"
                ]
            },
            elections: {
                lokSabhaElections: "Every 5 years (General Elections)",
                stateAssemblyElections: "Every 5 years",
                presidentialElection: "Every 5 years",
                votingAge: "18 years",
                electoralRolls: "950+ million eligible voters",
                votingMethod: "Electronic Voting Machines (EVMs) with VVPAT"
            }
        },
        recentElections: {
            general2024: {
                winner: "BJP-led National Democratic Alliance (NDA)",
                primeMinister: "Narendra Modi (3rd term)",
                bjpSeats: "240 seats",
                ndalSeats: "293 seats",
                oppositionSeats: "234 seats",
                voterTurnout: "67.4%"
            },
            general2019: {
                winner: "BJP-led NDA",
                bjpSeats: "303 seats",
                ndalSeats: "353 seats",
                voterTurnout: "67.1%"
            }
        },
        keyPoliticalFigures: {
            currentLeaders: [
                {
                    name: "Narendra Modi",
                    position: "Prime Minister",
                    party: "BJP",
                    tenure: "2014-present",
                    constituency: "Varanasi"
                },
                {
                    name: "Droupadi Murmu",
                    position: "President",
                    tenure: "2022-present",
                    background: "Tribal leader, former Governor"
                },
                {
                    name: "Jagdeep Dhankhar",
                    position: "Vice President",
                    tenure: "2022-present",
                    background: "Former Governor of West Bengal"
                },
                {
                    name: "Rahul Gandhi",
                    position: "Leader of Opposition (Lok Sabha)",
                    party: "Indian National Congress",
                    constituency: "Raebareli"
                }
            ],
            historicalLeaders: [
                {
                    name: "Jawaharlal Nehru",
                    position: "First Prime Minister",
                    tenure: "1947-1964",
                    contribution: "Architect of modern India"
                },
                {
                    name: "Indira Gandhi",
                    position: "Prime Minister",
                    tenure: "1966-1977, 1980-1984",
                    contribution: "First female Prime Minister"
                },
                {
                    name: "Atal Bihari Vajpayee",
                    position: "Prime Minister",
                    tenure: "1998-2004",
                    contribution: "Poet-politician, economic reforms"
                },
                {
                    name: "Dr. Manmohan Singh",
                    position: "Prime Minister",
                    tenure: "2004-2014",
                    contribution: "Economist, economic liberalization"
                }
            ]
        },
        majorPolicies: {
            economic: [
                "Make in India - Manufacturing promotion",
                "Digital India - Technology adoption",
                "Startup India - Entrepreneurship support",
                "Goods and Services Tax (GST) - Tax reform",
                "Demonetization (2016) - Currency reform"
            ],
            social: [
                "Swachh Bharat Mission - Cleanliness campaign",
                "Ayushman Bharat - Health insurance",
                "Pradhan Mantri Awas Yojana - Housing for all",
                "Beti Bachao Beti Padhao - Girl child welfare",
                "Jan Dhan Yojana - Financial inclusion"
            ],
            infrastructure: [
                "Smart Cities Mission",
                "Bharatmala - Highway development",
                "Sagarmala - Port connectivity",
                "National Solar Mission",
                "High-speed rail projects"
            ]
        },
        foreignPolicy: {
            principles: [
                "Non-alignment and strategic autonomy",
                "Peaceful coexistence",
                "Multilateralism",
                "South-South cooperation"
            ],
            keyRelationships: [
                "USA - Strategic partnership",
                "Russia - Traditional ally",
                "China - Complex relationship",
                "Japan - Special strategic partnership",
                "European Union - Strategic partnership"
            ],
            organizations: [
                "United Nations - Founding member",
                "BRICS - Brazil, Russia, India, China, South Africa",
                "G20 - Major economies group",
                "SCO - Shanghai Cooperation Organization",
                "QUAD - India, USA, Japan, Australia"
            ]
        },
        challenges: {
            domestic: [
                "Unemployment and job creation",
                "Income inequality",
                "Agricultural distress",
                "Environmental pollution",
                "Healthcare infrastructure"
            ],
            political: [
                "Coalition politics",
                "Federal-state relations",
                "Electoral reforms",
                "Corruption in governance",
                "Communal harmony"
            ]
        }
    },

    // Literature and Arts
    literatureAndArts: {
        ancientLiterature: {
            sanskrit: ["Vedas", "Upanishads", "Ramayana", "Mahabharata", "Puranas"],
            epics: ["Ramayana by Valmiki", "Mahabharata by Vyasa"],
            drama: ["Abhijnanasakuntalam by Kalidasa", "Works of Bhasa"]
        },
        modernLiterature: {
            nobelLaureates: ["Rabindranath Tagore (1913)"],
            famous: ["Munshi Premchand", "R.K. Narayan", "Sarojini Naidu", "APJ Abdul Kalam"],
            contemporary: ["Amitav Ghosh", "Arundhati Roy", "Vikram Seth", "Chetan Bhagat"]
        },
        languages: {
            hindi: ["Tulsidas", "Kabir", "Rahim", "Harivansh Rai Bachchan"],
            bengali: ["Rabindranath Tagore", "Bankim Chandra", "Satyajit Ray"],
            tamil: ["Thiruvalluvar", "Bharathiyar", "APJ Abdul Kalam"],
            urdu: ["Mirza Ghalib", "Allama Iqbal", "Faiz Ahmed Faiz"]
        },
        visualArts: {
            painting: ["Mughal miniature", "Rajasthani", "Pahari", "Tanjore", "Madhubani"],
            sculpture: ["Ellora", "Ajanta", "Khajuraho", "Konark", "Belur"],
            handicrafts: ["Pottery", "Textiles", "Jewelry", "Woodwork", "Metalwork"]
        }
    },

    // Tourism and Heritage
    tourism: {
        worldHeritageSites: {
            cultural: [
                "Agra Fort", "Ajanta Caves", "Ellora Caves", "Fatehpur Sikri",
                "Group of Monuments at Hampi", "Khajuraho Group of Monuments",
                "Konark Sun Temple", "Mahabodhi Temple Complex", "Mountain Railways",
                "Qutub Minar", "Red Fort Complex", "Rock Shelters of Bhimbetka",
                "Taj Mahal", "Churches and Convents of Goa", "Hill Forts of Rajasthan"
            ],
            natural: [
                "Kaziranga National Park", "Keoladeo National Park",
                "Manas Wildlife Sanctuary", "Nanda Devi and Valley of Flowers",
                "Sundarbans National Park", "Western Ghats", "Great Himalayan National Park"
            ]
        },
        goldenTriangle: ["Delhi", "Agra", "Jaipur"],
        hillStations: ["Shimla", "Manali", "Darjeeling", "Ooty", "Munnar", "Nainital"],
        beaches: ["Goa", "Kerala backwaters", "Andaman", "Lakshadweep", "Pondicherry"],
        adventureTourism: ["Trekking in Himalayas", "River rafting", "Wildlife safaris", "Desert safaris"],
        spiritualTourism: ["Varanasi", "Rishikesh", "Haridwar", "Amritsar", "Bodh Gaya", "Shirdi"]
    },

    // Festivals and Celebrations
    festivals: {
        national: [
            {
                name: "Diwali",
                significance: "Festival of lights, victory of good over evil",
                month: "October-November",
                duration: "5 days"
            },
            {
                name: "Holi",
                significance: "Festival of colors, spring celebration",
                month: "March",
                duration: "2 days"
            },
            {
                name: "Dussehra",
                significance: "Victory of good over evil, Rama's victory over Ravana",
                month: "September-October",
                duration: "10 days"
            },
            {
                name: "Eid ul-Fitr",
                significance: "End of Ramadan fasting",
                month: "Lunar calendar",
                duration: "1-3 days"
            },
            {
                name: "Christmas",
                significance: "Birth of Jesus Christ",
                month: "December 25",
                duration: "1 day"
            }
        ],
        regional: {
            north: ["Karva Chauth", "Dussehra", "Baisakhi", "Teej"],
            south: ["Onam", "Pongal", "Ugadi", "Navratri"],
            east: ["Durga Puja", "Kali Puja", "Poila Boishakh"],
            west: ["Ganesh Chaturthi", "Navratri", "Gudi Padwa"]
        },
        harvest: ["Baisakhi", "Pongal", "Onam", "Makar Sankranti"],
        religious: {
            hindu: ["Janmashtami", "Ram Navami", "Shivratri", "Ganesh Chaturthi"],
            muslim: ["Eid ul-Adha", "Muharram", "Milad un-Nabi"],
            sikh: ["Guru Nanak Jayanti", "Baisakhi", "Guru Gobind Singh Jayanti"],
            christian: ["Good Friday", "Easter", "Christmas"],
            buddhist: ["Buddha Purnima", "Dhamma Chakra Day"],
            jain: ["Mahavir Jayanti", "Paryushan"]
        }
    },

    // Clothing and Fashion
    clothing: {
        traditional: {
            women: ["Saree", "Salwar Kameez", "Lehenga", "Ghagra", "Kurti"],
            men: ["Dhoti", "Kurta", "Sherwani", "Lungi", "Achkan"],
            regional: {
                punjab: ["Punjabi suit", "Patiala salwar"],
                rajasthan: ["Ghagra choli", "Bandhani"],
                bengal: ["Tant saree", "Dhuti"],
                kerala: ["Mundu", "Set saree"],
                gujarat: ["Chaniya choli", "Kediyu"]
            }
        },
        textiles: {
            fabrics: ["Cotton", "Silk", "Wool", "Jute", "Khadi"],
            techniques: ["Block printing", "Tie-dye", "Embroidery", "Weaving"],
            famous: ["Banarasi silk", "Kanchipuram silk", "Pashmina", "Khadi cotton"]
        },
        jewelry: {
            types: ["Gold", "Silver", "Precious stones", "Pearls"],
            traditional: ["Necklaces", "Earrings", "Bangles", "Nose rings", "Anklets"],
            regional: ["Kundan (Rajasthan)", "Temple jewelry (South)", "Filigree (Odisha)"]
        }
    },

    // Indian Cuisine Extended
    cuisineDetailed: {
        characteristics: {
            flavors: ["Sweet", "Salty", "Sour", "Bitter", "Pungent", "Astringent"],
            cookingMethods: ["Frying", "Roasting", "Steaming", "Boiling", "Grilling"],
            spices: ["Turmeric", "Cumin", "Coriander", "Cardamom", "Cinnamon", "Cloves"]
        },
        regional: {
            north: {
                staples: ["Wheat", "Rice", "Dairy products"],
                dishes: ["Butter chicken", "Rajma", "Chole", "Naan", "Paratha"],
                sweets: ["Gulab jamun", "Rasgulla", "Jalebi"]
            },
            south: {
                staples: ["Rice", "Coconut", "Curry leaves"],
                dishes: ["Sambar", "Rasam", "Dosa", "Idli", "Biryani"],
                sweets: ["Mysore pak", "Payasam", "Laddu"]
            },
            east: {
                staples: ["Rice", "Fish", "Mustard oil"],
                dishes: ["Fish curry", "Rasgulla", "Sandesh", "Mishti doi"],
                sweets: ["Rosogolla", "Sandesh", "Cham cham"]
            },
            west: {
                staples: ["Wheat", "Jowar", "Bajra"],
                dishes: ["Dhokla", "Thepla", "Vada pav", "Puran poli"],
                sweets: ["Modak", "Shrikhand", "Basundi"]
            }
        },
        beverages: {
            traditional: ["Lassi", "Chaas", "Nimbu paani", "Aam panna"],
            modern: ["Masala chai", "Filter coffee", "Thandai", "Falooda"]
        }
    },

    // Economy and Industry
    economy: {
        overview: {
            gdp: "$3.7 trillion (2024)",
            growth: "6-7% annual growth",
            ranking: "5th largest economy globally",
            sectors: "Services (55%), Industry (26%), Agriculture (17%)"
        },
        majorIndustries: {
            it: ["Software services", "IT consulting", "Digital services"],
            manufacturing: ["Textiles", "Pharmaceuticals", "Automobiles", "Chemicals"],
            services: ["Banking", "Insurance", "Telecommunications", "Tourism"],
            agriculture: ["Food grains", "Cash crops", "Dairy", "Fisheries"]
        },
        economicCenters: {
            mumbai: "Financial capital",
            bangalore: "IT capital",
            chennai: "Automobile hub",
            delhi: "Government and services",
            pune: "IT and automobiles",
            hyderabad: "Biotechnology and IT"
        },
        exports: {
            commodities: ["Software services", "Pharmaceuticals", "Textiles", "Gems & jewelry"],
            markets: ["USA", "Europe", "Middle East", "Asia-Pacific"]
        },
        challenges: ["Infrastructure", "Skill development", "Rural development", "Income inequality"]
    },

    // Social Issues and Development
    socialDevelopment: {
        demographics: {
            urbanPopulation: "35% (2024)",
            ruralPopulation: "65% (2024)",
            youthPopulation: "65% under 35 years",
            workingAge: "68% between 15-64 years"
        },
        challenges: {
            poverty: "21.9% below poverty line",
            unemployment: "7.4% unemployment rate",
            education: "Quality and access gaps",
            healthcare: "Rural healthcare shortage",
            gender: "Gender inequality in workforce"
        },
        initiatives: {
            education: ["Right to Education Act", "Skill India", "Digital India"],
            healthcare: ["Ayushman Bharat", "Mission Indradhanush", "Swachh Bharat"],
            women: ["Beti Bachao Beti Padhao", "Self Help Groups", "Women entrepreneurship"],
            rural: ["MGNREGA", "Pradhan Mantri Gram Sadak Yojana", "Digital villages"]
        }
    },

    // Indian Cinema/Movies - Comprehensive Database
    cinema: {
        overview: {
            description: "Indian cinema is one of the largest film industries in the world, producing films in over 20 languages",
            languages: "Films produced in Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, Marathi, Gujarati, Punjabi, and more",
            annualProduction: "1,800+ films per year (2024)",
            globalRanking: "Largest by number of films produced",
            viewership: "Billions of viewers worldwide",
            boxOffice: "₹19,000+ crores annually",
            filmFestivals: ["International Film Festival of India (IFFI)", "Mumbai Film Festival", "Kolkata International Film Festival"]
        },

        bollywood: {
            description: "Hindi film industry based in Mumbai, most popular globally",
            history: {
                silentEra: "1913-1931: Raja Harishchandra (first full-length feature)",
                goldenAge: "1940s-1960s: Classics like Mother India, Pyaasa, Mughal-E-Azam",
                modernEra: "1990s onwards: Global recognition and NRI themes",
                newMillennium: "2000s: Technical advancement and diverse content"
            },

            legendaryActors: {
                classics: [
                    "Dilip Kumar - Tragedy King, First Method Actor",
                    "Raj Kapoor - The Showman, Greatest Entertainer",
                    "Dev Anand - Evergreen Star",
                    "Rajesh Khanna - First Superstar",
                    "Amitabh Bachchan - Big B, Superstar of Millennium"
                ],
                modern: [
                    "Shah Rukh Khan - King Khan, King of Bollywood",
                    "Aamir Khan - Mr. Perfectionist",
                    "Salman Khan - Bhai of Bollywood, Dabangg Khan",
                    "Akshay Kumar - Khiladi Kumar, Action King",
                    "Hrithik Roshan - Greek God of Bollywood",
                    "Ranbir Kapoor - Chocolate Boy",
                    "Ranveer Singh - Energy Powerhouse",
                    "Varun Dhawan - Student of the Year"
                ]
            },

            legendaryActresses: {
                classics: [
                    "Madhubala - Venus of Indian Cinema",
                    "Nargis - Mother India Icon",
                    "Meena Kumari - Tragedy Queen",
                    "Waheeda Rehman - Grace Personified",
                    "Hema Malini - Dream Girl"
                ],
                modern: [
                    "Sridevi - First Female Superstar",
                    "Madhuri Dixit - Dancing Queen, Dhak Dhak Girl",
                    "Kajol - Queen of Emotions",
                    "Aishwarya Rai - Miss World, Global Beauty",
                    "Deepika Padukone - Global Icon",
                    "Priyanka Chopra - Desi Girl, Global Star",
                    "Kareena Kapoor Khan - Bebo",
                    "Alia Bhatt - Student of the Year, Gen-Next Star",
                    "Katrina Kaif - Barbie Doll",
                    "Anushka Sharma - NH10 Producer"
                ]
            },

            iconicMovies: {
                classics: [
                    "Sholay (1975) - Greatest Indian film, Jai-Veeru friendship",
                    "Mother India (1957) - Oscar nominated, Nargis masterpiece",
                    "Mughal-E-Azam (1960) - Epic romance, Salim-Anarkali",
                    "Pyaasa (1957) - Guru Dutt's poetic masterpiece",
                    "Anand (1971) - Rajesh Khanna-Amitabh classic",
                    "Pakeezah (1972) - Meena Kumari's swan song",
                    "Guide (1965) - Dev Anand-Waheeda Rehman",
                    "Devdas (1955) - Dilip Kumar's tragic role"
                ],
                modern: [
                    "Dilwale Dulhania Le Jayenge (1995) - SRK-Kajol romance classic",
                    "3 Idiots (2009) - Aamir Khan comedy-drama",
                    "Dangal (2016) - Wrestling biopic, highest grosser",
                    "Lagaan (2001) - Oscar nominated sports drama",
                    "Taare Zameen Par (2007) - Child psychology drama",
                    "Queen (2014) - Kangana Ranaut solo journey",
                    "Pink (2016) - Social message thriller",
                    "Andhadhun (2018) - Ayushmann Khurrana thriller",
                    "Gully Boy (2019) - Ranveer Singh rap drama",
                    "Article 15 (2019) - Social issue film"
                ],
                blockbusters: [
                    "Baahubali series (2015-2017) - Pan-Indian epic",
                    "KGF series (2018-2022) - Action blockbuster",
                    "RRR (2022) - Period action drama",
                    "Pushpa (2021) - Allu Arjun action",
                    "War (2019) - Hrithik-Tiger action",
                    "Sultan (2016) - Salman Khan wrestling",
                    "Chennai Express (2013) - SRK comedy",
                    "Bajrangi Bhaijaan (2015) - Salman humanitarian"
                ]
            },

            famousDirectors: {
                legends: [
                    "Satyajit Ray - Pather Panchali trilogy, International acclaim",
                    "Guru Dutt - Pyaasa, Kaagaz Ke Phool",
                    "Raj Kapoor - Awara, Shree 420",
                    "Bimal Roy - Do Bigha Zamin, Bandini",
                    "V. Shantaram - Do Aankhen Barah Haath"
                ],
                modern: [
                    "Yash Chopra - Romance King, DDLJ, Veer-Zaara",
                    "Karan Johar - Student of the Year, My Name is Khan",
                    "Sanjay Leela Bhansali - Devdas, Padmaavat",
                    "Anurag Kashyap - Gangs of Wasseypur, Dev.D",
                    "Zoya Akhtar - Zindagi Na Milegi Dobara, Gully Boy",
                    "Rajkumar Hirani - 3 Idiots, PK, Munna Bhai series",
                    "Imtiaz Ali - Jab We Met, Rockstar",
                    "Shoojit Sircar - Piku, October",
                    "Aanand L. Rai - Tanu Weds Manu series",
                    "Nitesh Tiwari - Dangal, Chhichhore"
                ]
            },

            musicDirectors: [
                "A.R. Rahman - Oscar winner, Slumdog Millionaire",
                "Ilaiyaraaja - Maestro, South Indian legend",
                "Lata Mangeshkar - Nightingale of India",
                "Kishore Kumar - Legendary playback singer",
                "R.D. Burman - Pancham Da, innovative composer",
                "Shankar-Ehsaan-Loy - Rock On, Zindagi Na Milegi Dobara",
                "Vishal-Shekhar - Om Shanti Om, Student of the Year"
            ]
        },

        regionalCinema: {
            tamil: {
                name: "Kollywood",
                center: "Chennai",
                description: "Tamil film industry, known for technical excellence and powerful storytelling",
                legends: [
                    "Rajinikanth - Thalaivar, Superstar, Global icon",
                    "Kamal Haasan - Ulaganayagan, Versatile actor",
                    "M.G. Ramachandran (MGR) - Former Chief Minister",
                    "Sivaji Ganesan - Nadigar Thilagam",
                    "Vijay - Thalapathy, Youth icon",
                    "Ajith Kumar - Thala, Racing enthusiast",
                    "Suriya - Singam series star",
                    "Dhanush - National Award winner"
                ],
                actresses: [
                    "Jayalalithaa - Former Chief Minister, Actress",
                    "Savitri - Legendary actress",
                    "Trisha - South beauty",
                    "Nayanthara - Lady Superstar",
                    "Samantha - Ye Maaya Chesave fame"
                ],
                iconicMovies: [
                    "Nayakan (1987) - Mani Ratnam masterpiece",
                    "Anbe Sivam (2003) - Kamal Haasan philosophy",
                    "Vikram (2022) - Kamal Haasan action thriller",
                    "Enthiran (2010) - Rajinikanth sci-fi",
                    "Baahubali (2015-2017) - Pan-Indian epic",
                    "96 (2018) - Vijay Sethupathi romance",
                    "Super Deluxe (2019) - Anthology thriller",
                    "Asuran (2019) - Dhanush action drama"
                ],
                directors: [
                    "Mani Ratnam - Nayakan, Roja, Bombay",
                    "Shankar - Indian, Enthiran, 2.0",
                    "Bharathiraja - Rural cinema pioneer",
                    "K. Balachander - Mentor to Rajinikanth, Kamal",
                    "Vetrimaaran - Asuran, Visaranai",
                    "Pa. Ranjith - Kabali, Kaala"
                ]
            },

            telugu: {
                name: "Tollywood",
                center: "Hyderabad",
                description: "Telugu film industry, largest regional cinema by revenue",
                legends: [
                    "N.T. Rama Rao (NTR) - Former Chief Minister, Telugu Pride",
                    "Akkineni Nageswara Rao (ANR) - Legendary actor",
                    "Chiranjeevi - Megastar, Former Union Minister",
                    "Mahesh Babu - Prince, Superstar",
                    "Prabhas - Baahubali star, Pan-Indian hero",
                    "Allu Arjun - Stylish Star, Pushpa fame",
                    "Jr. NTR - Young Tiger, RRR star",
                    "Ram Charan - Mega Power Star, RRR co-star"
                ],
                actresses: [
                    "Savitri - Mahanati, legendary actress",
                    "Vijayashanti - Lady Amitabh",
                    "Anushka Shetty - Baahubali princess",
                    "Samantha - Ye Maaya Chesave star",
                    "Rashmika Mandanna - National Crush"
                ],
                iconicMovies: [
                    "Mayabazar (1957) - Greatest Telugu film",
                    "Sankarabharanam (1979) - Classical music drama",
                    "Sagara Sangamam (1983) - Dance drama",
                    "Baahubali series (2015-2017) - Global phenomenon",
                    "RRR (2022) - SS Rajamouli's international hit",
                    "Arjun Reddy (2017) - Bold love story",
                    "Pushpa (2021) - Allu Arjun's pan-Indian hit",
                    "Eega (2012) - Unique revenge story"
                ],
                directors: [
                    "S.S. Rajamouli - Baahubali, RRR, Eega",
                    "K. Raghavendra Rao - Devotional films",
                    "Ram Gopal Varma - Shiva, Satya",
                    "Trivikram Srinivas - Dialogue writer-director",
                    "Sukumar - Arjun Reddy, Pushpa",
                    "Koratala Siva - Srimanthudu, Bharat Ane Nenu"
                ]
            },

            malayalam: {
                name: "Mollywood",
                center: "Kochi/Thiruvananthapuram",
                description: "Malayalam cinema known for realistic storytelling and technical excellence",
                legends: [
                    "Mohanlal - Complete Actor, Lalettan",
                    "Mammootty - Megastar, Three-time National Award winner",
                    "Thilakan - Greatest character actor",
                    "Fahadh Faasil - Method actor",
                    "Prithviraj Sukumaran - Director-actor",
                    "Dulquer Salmaan - Charming hero"
                ],
                actresses: [
                    "Sheela - Legendary actress",
                    "Shobana - Classical dancer-actress",
                    "Manju Warrier - Comeback queen",
                    "Parvathy Thiruvothu - National Award winner"
                ],
                iconicMovies: [
                    "Kireedam (1989) - Mohanlal's career-best",
                    "Thanmathra (2005) - Alzheimer's awareness",
                    "Drishyam (2013) - Thriller masterpiece",
                    "Kumbakonam Gopals (1998) - Comedy classic",
                    "Bangalore Days (2014) - Youth entertainer",
                    "Premam (2015) - Coming-of-age romance",
                    "The Great Indian Kitchen (2021) - Social drama"
                ],
                directors: [
                    "Adoor Gopalakrishnan - Art cinema pioneer",
                    "Shyamaprasad - Parallel cinema",
                    "Lijo Jose Pellissery - Experimental filmmaker",
                    "Anjali Menon - Bangalore Days, Koode",
                    "Aashiq Abu - Social issue films"
                ]
            },

            kannada: {
                name: "Sandalwood",
                center: "Bangalore",
                description: "Kannada film industry with rich cultural heritage",
                legends: [
                    "Dr. Rajkumar - Cultural icon, Annavru",
                    "Vishnuvardhan - Sahasa Simha",
                    "Ambareesh - Rebel Star",
                    "Yash - KGF star, Rocking Star",
                    "Puneeth Rajkumar - Power Star, Appu",
                    "Sudeep - Kiccha, Villain in Bollywood"
                ],
                iconicMovies: [
                    "Bangarada Manushya (1972) - Dr. Rajkumar classic",
                    "Sharapanjara (1971) - Kalpana's masterpiece",
                    "KGF series (2018-2022) - Pan-Indian blockbuster",
                    "Lucia (2013) - Crowdfunded psychological thriller",
                    "U Turn (2016) - Mystery thriller"
                ],
                directors: [
                    "Puttanna Kanagal - Parallel cinema pioneer",
                    "Prashanth Neel - KGF creator",
                    "Rishab Shetty - Kirik Party, Kantara"
                ]
            },

            bengali: {
                name: "Tollywood (Bengali)",
                center: "Kolkata",
                description: "Rich literary tradition and art cinema heritage",
                legends: [
                    "Uttam Kumar - Mahanayak",
                    "Soumitra Chatterjee - Satyajit Ray's favorite",
                    "Prosenjit Chatterjee - Bumba Da",
                    "Dev - Contemporary star",
                    "Jeet - Action hero"
                ],
                actresses: [
                    "Suchitra Sen - Legendary actress",
                    "Sharmila Tagore - Bollywood crossover",
                    "Rituparna Sengupta - 90s icon",
                    "Koel Mallick - Contemporary actress"
                ],
                iconicMovies: [
                    "Pather Panchali (1955) - Satyajit Ray's debut",
                    "Charulata (1964) - Ray's masterpiece",
                    "Ghare Baire (1984) - Tagore adaptation",
                    "Antarmahal (2005) - Rituparno Ghosh",
                    "Autograph (2010) - Srijit Mukherji"
                ],
                directors: [
                    "Satyajit Ray - International acclaim, Pather Panchali trilogy",
                    "Mrinal Sen - Parallel cinema movement",
                    "Rituparno Ghosh - LGBTQ+ themes pioneer",
                    "Srijit Mukherji - Contemporary filmmaker",
                    "Aniruddha Roy Chowdhury - Pink director"
                ]
            },

            marathi: {
                name: "Marathi Cinema",
                center: "Mumbai/Pune",
                description: "Innovative storytelling and social themes",
                legends: [
                    "Dada Kondke - Comedy king",
                    "Ashok Saraf - Versatile actor",
                    "Nana Patekar - Intense performer",
                    "Mahesh Manjrekar - Actor-director"
                ],
                modernStars: [
                    "Swapnil Joshi - Romantic hero",
                    "Pushkar Jog - Contemporary actor",
                    "Sonalee Kulkarni - Leading actress"
                ],
                iconicMovies: [
                    "Shwaas (2004) - Oscar entry",
                    "Harishchandrachi Factory (2009) - Oscar entry",
                    "Court (2014) - International acclaim",
                    "Sairat (2016) - Box office phenomenon",
                    "Natsamrat (2016) - Nana Patekar's comeback"
                ]
            }
        },

        contemporaryTrends: {
            panIndianCinema: [
                "Baahubali effect - Regional films going national",
                "RRR - International recognition, Oscar win",
                "KGF series - Kannada to pan-Indian success",
                "Pushpa - Telugu to Hindi dubbed success",
                "Kantara - Kannada spiritual thriller global hit",
                "Vikram - Tamil action thriller pan-Indian success"
            ],
            ottPlatforms: [
                "Netflix original films and series",
                "Amazon Prime regional content",
                "Disney+ Hotstar exclusive releases",
                "ZEE5 regional programming",
                "Direct-to-OTT releases during pandemic",
                "Jio Cinema originals and live streaming"
            ],
            technicalAdvancements: [
                "VFX and CGI excellence in Baahubali, RRR",
                "Dolby Atmos sound design",
                "IMAX releases for Indian films",
                "Virtual production techniques",
                "AI-enhanced post-production"
            ],
            latest2024_2025: {
                bollywoodHits: [
                    "Animal (2023) - Ranbir Kapoor action drama, controversial themes",
                    "Jawan (2023) - Shah Rukh Khan action thriller, director Atlee",
                    "Pathaan (2023) - SRK comeback spy thriller with Deepika",
                    "Rocky Aur Rani Kii Prem Kahaani (2023) - Karan Johar family drama",
                    "OMG 2 (2023) - Akshay Kumar social comedy sequel",
                    "Gadar 2 (2023) - Sunny Deol patriotic action sequel",
                    "Bawaal (2023) - Varun Dhawan war drama on Prime",
                    "Sam Bahadur (2023) - Vicky Kaushal as Field Marshal Sam Manekshaw",
                    "12th Fail (2023) - Vikrant Massey inspiring drama",
                    "Khel Khel Mein (2024) - Akshay Kumar comedy drama",
                    "Stree 2 (2024) - Shraddha Kapoor horror comedy sequel",
                    "Kalki 2898 AD (2024) - Prabhas sci-fi epic with Amitabh",
                    "Pushpa 2 (2024) - Allu Arjun action sequel highly anticipated"
                ],
                regionalHits: [
                    "Kantara (2022) - Rishab Shetty Kannada spiritual thriller",
                    "Varisu (2023) - Vijay Tamil family entertainer",
                    "Thunivu (2023) - Ajith Kumar Tamil heist thriller",
                    "Waltair Veerayya (2023) - Chiranjeevi Telugu action",
                    "Veera Simha Reddy (2023) - Balakrishna Telugu action",
                    "Shehzada (2023) - Kartik Aaryan action comedy",
                    "Tu Jhoothi Main Makkaar (2023) - Ranbir-Shraddha romance",
                    "Adipurush (2023) - Prabhas mythological epic (mixed reviews)",
                    "Jailer (2023) - Rajinikanth action entertainer",
                    "Leo (2023) - Vijay action thriller by Lokesh Kanagaraj",
                    "Salaar (2023) - Prabhas action drama by Prashanth Neel",
                    "Dunki (2023) - Shah Rukh Khan immigration drama",
                    "HanuMan (2024) - Telugu superhero film surprise hit",
                    "Maharaja (2024) - Vijay Sethupathi thriller"
                ],
                emergingTalent: [
                    "Kartik Aaryan - New generation romantic hero",
                    "Vicky Kaushal - Versatile actor, Uri fame",
                    "Rajkummar Rao - Content-driven films specialist",
                    "Ayushmann Khurrana - Social message films",
                    "Vikrant Massey - Breakthrough with 12th Fail",
                    "Tripti Dimri - Rising actress, Animal co-star",
                    "Rashmika Mandanna - Pan-Indian actress",
                    "Kiara Advani - Commercial and content films",
                    "Sara Ali Khan - Next generation star",
                    "Janhvi Kapoor - Sridevi's daughter, emerging talent"
                ],
                trendingDirectors: [
                    "Atlee - South director successful in Bollywood with Jawan",
                    "Lokesh Kanagaraj - Master, Leo director",
                    "Prashanth Neel - KGF and Salaar creator",
                    "Sandeep Reddy Vanga - Arjun Reddy, Animal director",
                    "Nag Ashwin - Kalki 2898 AD visionary",
                    "Rishab Shetty - Kantara creator and actor",
                    "Farhan Akhtar - Zindagi Na Milegi Dobara sequel planning",
                    "Zoya Akhtar - The Archies Netflix success"
                ]
            },
            boxOfficeRecords: [
                "Baahubali 2 - ₹1,810 crores worldwide (2017)",
                "RRR - ₹1,200+ crores worldwide, Oscar winner (2022)",
                "KGF Chapter 2 - ₹1,200+ crores worldwide (2022)",
                "Pathaan - ₹1,050+ crores worldwide (2023)",
                "Jawan - ₹1,160+ crores worldwide (2023)",
                "Animal - ₹900+ crores worldwide (2023)",
                "Gadar 2 - ₹690+ crores worldwide (2023)"
            ]
        },

        boxOfficeRecords: {
            allTimeBlockbusters: [
                "Dangal (2016) - ₹2,023 crores worldwide",
                "Baahubali 2 (2017) - ₹1,810 crores worldwide",
                "RRR (2022) - ₹1,200+ crores worldwide",
                "KGF Chapter 2 (2022) - ₹1,200+ crores worldwide",
                "Secret Superstar (2017) - ₹966 crores worldwide"
            ],
            bollywoodToppers: [
                "Dangal - Highest Bollywood grosser",
                "Sultan - ₹623 crores worldwide",
                "Tiger Zinda Hai - ₹565 crores worldwide",
                "War - ₹475 crores worldwide"
            ]
        },

        awards: {
            national: [
                "National Film Awards - Highest honor",
                "Filmfare Awards - Popular choice",
                "IIFA Awards - International recognition",
                "Screen Awards - Industry recognition"
            ],
            international: [
                "Oscar nominations - Lagaan, RRR",
                "Cannes Film Festival participations",
                "Golden Globe nominations",
                "BAFTA considerations"
            ]
        }
    },

    // Indian Dance Forms
    dance: {
        overview: {
            description: "India has a rich tradition of dance forms, both classical and folk, each telling stories through graceful movements, expressions, and rhythm",
            categories: "Classical (8 major forms), Folk (hundreds of regional varieties), Modern fusion"
        },
        classical: {
            bharatanatyam: {
                origin: "Tamil Nadu",
                description: "One of the oldest classical dance forms, characterized by fixed upper torso, bent legs, intricate footwork, and expressive hand gestures",
                features: ["Nritta (pure dance)", "Nritya (interpretive dance)", "Natya (dramatic element)"],
                costumes: "Silk sarees, temple jewelry, elaborate makeup",
                legends: ["Rukmini Devi Arundale", "Yamini Krishnamurthy", "Alarmel Valli"]
            },
            kathak: {
                origin: "Northern India (Uttar Pradesh)",
                description: "Storytelling dance with spins (chakkars), intricate footwork, and dramatic expressions",
                gharanas: ["Lucknow Gharana", "Jaipur Gharana", "Banaras Gharana"],
                features: ["Fast spins", "Tatkars (footwork)", "Bhava (expressions)"],
                legends: ["Pandit Birju Maharaj", "Kathak Kendra", "Shobana"]
            },
            odissi: {
                origin: "Odisha",
                description: "Lyrical dance form with sculpture-like poses inspired by temple carvings",
                features: ["Tribhangi (three-bend pose)", "Mudras (hand gestures)", "Facial expressions"],
                legends: ["Kelucharan Mohapatra", "Sonal Mansingh", "Madhavi Mudgal"]
            },
            kuchipudi: {
                origin: "Andhra Pradesh",
                description: "Dance-drama form with narrative storytelling and quick movements",
                features: ["Tarangam (dancing on brass plate)", "Narrative elements", "Vocal singing"],
                legends: ["Vempati Chinna Satyam", "Raja and Radha Reddy", "Yamini Reddy"]
            },
            mohiniyattam: {
                origin: "Kerala",
                description: "Graceful dance of the enchantress with swaying movements and subtle expressions",
                features: ["Lasya (graceful feminine)", "Slow tempo", "White and gold costume"],
                legends: ["Kalamandalam Kalyanikutty Amma", "Sunanda Nair"]
            },
            manipuri: {
                origin: "Manipur",
                description: "Gentle, lyrical dance form often depicting Radha-Krishna themes",
                features: ["Circular movements", "Vibrant costumes", "Devotional themes"],
                legends: ["Guru Bipin Singh", "Darshana Jhaveri"]
            },
            kathakali: {
                origin: "Kerala",
                description: "Classical dance-drama with elaborate makeup, costumes, and storytelling",
                features: ["Vivid makeup", "Elaborate costumes", "Epic storytelling"],
                legends: ["Kalamandalam Gopi", "Kalamandalam Ramankutty Nair"]
            },
            sattriya: {
                origin: "Assam",
                description: "Devotional dance form from Assamese monasteries",
                features: ["Devotional themes", "Rhythmic movements", "Traditional music"],
                legends: ["Jatin Goswami", "Indira PP Bora"]
            }
        },
        folk: {
            northIndia: [
                "Bhangra (Punjab) - Harvest celebration dance",
                "Giddha (Punjab) - Women's folk dance",
                "Garba (Gujarat) - Navratri festival dance",
                "Dandiya (Gujarat) - Stick dance",
                "Ghoomar (Rajasthan) - Twirling dance"
            ],
            southIndia: [
                "Karagattam (Tamil Nadu) - Pot balancing dance",
                "Theyyam (Kerala) - Ritual dance form",
                "Yakshagana (Karnataka) - Traditional theatre",
                "Lavani (Maharashtra) - Traditional folk dance"
            ],
            eastIndia: [
                "Bihu (Assam) - New Year celebration",
                "Chhau (Jharkhand/West Bengal/Odisha) - Martial dance",
                "Jhumar (Bengal) - Harvest dance"
            ],
            westIndia: [
                "Koli (Maharashtra) - Fishermen's dance",
                "Tarpa (Maharashtra) - Tribal dance",
                "Fugdi (Goa) - Women's group dance"
            ]
        },
        modernFusion: [
            "Bollywood dance - Film choreography style",
            "Contemporary Indian - Classical fusion",
            "Hip-hop fusion with Indian elements",
            "Jazz-Indian fusion",
            "Global dance competitions featuring Indian forms"
        ]
    },

    // Indian Temples
    temples: {
        overview: {
            description: "India is home to thousands of ancient temples representing various architectural styles, religious traditions, and cultural heritage",
            significance: "Centers of worship, art, culture, and community life",
            architecture: "Dravidian, Nagara, Vesara, and Indo-Islamic styles"
        },
        famous: {
            tirumala: {
                name: "Tirumala Venkateswara Temple",
                location: "Tirupati, Andhra Pradesh",
                deity: "Lord Venkateswara (Vishnu)",
                significance: "Richest temple in the world, millions of pilgrims annually",
                features: ["Golden dome", "Elaborate rituals", "Prasadam distribution"]
            },
            goldenTemple: {
                name: "Harmandir Sahib (Golden Temple)",
                location: "Amritsar, Punjab",
                religion: "Sikhism",
                significance: "Holiest Sikh shrine, community kitchen (langar) serves thousands daily",
                features: ["Gold-plated structure", "Sacred pool", "Open to all religions"]
            },
            konark: {
                name: "Konark Sun Temple",
                location: "Konark, Odisha",
                deity: "Sun God (Surya)",
                significance: "UNESCO World Heritage Site, architectural marvel",
                features: ["Chariot-shaped structure", "Intricate stone carvings", "Astronomical significance"]
            },
            khajuraho: {
                name: "Khajuraho Temples",
                location: "Madhya Pradesh",
                period: "10th-12th century",
                significance: "UNESCO World Heritage Site, exquisite sculpture work",
                features: ["Erotic sculptures", "Nagara architecture", "85 original temples"]
            },
            jagannath: {
                name: "Jagannath Temple",
                location: "Puri, Odisha",
                deity: "Lord Jagannath (Krishna)",
                significance: "Char Dham pilgrimage site, famous Rath Yatra",
                features: ["Wooden deities", "Annual chariot festival", "Kitchen serving thousands"]
            },
            vaishno: {
                name: "Vaishno Devi Temple",
                location: "Katra, Jammu & Kashmir",
                deity: "Goddess Vaishno Devi",
                significance: "Major pilgrimage site in North India",
                features: ["Cave temple", "Trekking pilgrimage", "3 natural rock formations"]
            },
            rameshwaram: {
                name: "Ramanathaswamy Temple",
                location: "Rameswaram, Tamil Nadu",
                deity: "Lord Shiva",
                significance: "Char Dham pilgrimage, Ramayana connection",
                features: ["Longest temple corridor", "22 holy water tanks", "Dravidian architecture"]
            },
            badrinath: {
                name: "Badrinath Temple",
                location: "Uttarakhand",
                deity: "Lord Badrinath (Vishnu)",
                significance: "Char Dham pilgrimage, Himalayan shrine",
                features: ["High altitude temple", "Seasonal opening", "Natural hot springs"]
            },
            somnath: {
                name: "Somnath Temple",
                location: "Gujarat",
                deity: "Lord Shiva",
                significance: "First among 12 Jyotirlingas, repeatedly rebuilt",
                features: ["Arabian Sea location", "Modern reconstruction", "Historical significance"]
            },
            meenakshi: {
                name: "Meenakshi Amman Temple",
                location: "Madurai, Tamil Nadu",
                deity: "Goddess Meenakshi and Lord Sundareshwar",
                significance: "Historic temple complex, architectural wonder",
                features: ["Colorful gopurams", "Thousand pillar hall", "Daily ceremonies"]
            }
        },
        architecturalStyles: {
            dravidian: {
                region: "South India",
                features: ["Pyramid-shaped towers (gopurams)", "Pillared halls", "Mandapas"],
                examples: ["Brihadeeswarar Temple", "Meenakshi Temple", "Chidambaram Temple"]
            },
            nagara: {
                region: "North India",
                features: ["Curvilinear shikhara", "Vertical emphasis", "Ornate decoration"],
                examples: ["Khajuraho Temples", "Lingaraja Temple", "Jagannath Temple"]
            },
            vesara: {
                region: "Central India",
                features: ["Blend of Dravidian and Nagara", "Stepped pyramid roofs"],
                examples: ["Hoysala temples", "Chalukya temples"]
            }
        },
        pilgrimageCircuits: {
            charDham: ["Badrinath", "Kedarnath", "Gangotri", "Yamunotri"],
            dwadashJyotirlinga: [
                "Somnath (Gujarat)", "Mallikarjuna (Andhra)", "Mahakaleshwar (MP)",
                "Omkareshwar (MP)", "Kedarnath (Uttarakhand)", "Bhimashankar (Maharashtra)",
                "Kashi Vishwanath (UP)", "Trimbakeshwar (Maharashtra)", "Vaidyanath (Jharkhand)",
                "Nageshwar (Gujarat)", "Rameshwar (Tamil Nadu)", "Grishneshwar (Maharashtra)"
            ],
            shaktipeethas: "51 sacred sites across India where body parts of Goddess Sati fell",
            panch: {
                kedars: "Five temples of Lord Shiva in Uttarakhand",
                badris: "Five temples of Lord Vishnu in Uttarakhand",
                prayags: "Five sacred confluences in Uttarakhand"
            }
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IndianInfo;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.IndianInfo = IndianInfo;
}
