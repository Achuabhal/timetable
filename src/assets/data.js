import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.jpg";
import image4 from "./images/4.png";

import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";
import image9 from "./images/9.png";
import image10 from "./images/10.png";
import image11 from "./images/11.png";
import image12 from "./images/12.png";
import image13 from "./images/13.png";
import image14 from "./images/14.png";
import image15 from "./images/15.png";
import image16 from "./images/16.png";
import image17 from "./images/17.png";
import image18 from "./images/18.png";
import image19 from "./images/19.png";
import image20 from "./images/20.png";
import image21 from "./images/21.png";
import image22 from "./images/22.png";
import image23 from "./images/23.png";
import image24 from "./images/24.png";
import image25 from "./images/25.png";
import image26 from "./images/26.png";
import image27 from "./images/27.png";
import image28 from "./images/28.jpg";
import image29 from "./images/29.png";
import image30 from "./images/30.png";
import image31 from "./images/31.png";

import image33 from "./images/33.png";
import image34 from "./images/34.jpg";
import image35 from "./images/35.jpg";
import image36 from "./images/36.jpg";
import image37 from "./images/37.png";
import image38 from "./images/38.jpg";
import image39 from "./images/39.jpg";
import image40 from "./images/40.png";
import image41 from "./images/41.jpg";
import image42 from "./images/42.png";
import image43 from "./images/43.png";
import image44 from "./images/44.jpg";
import image45 from "./images/45.jpg";
import image46 from "./images/46.jpg";
import image47 from "./images/47.png";
import image48 from "./images/48.png";
import image49 from "./images/49.png";
import image50 from "./images/50.png";
import image51 from "./images/51.png";
import image52 from "./images/52.jpg";
import image53 from "./images/53.jpg";
import image54 from "./images/54.png";
import image55 from "./images/55.jpg";
import image56 from "./images/56.png";
import image57 from "./images/57.png";
import image58 from "./images/58.png";
import image59 from "./images/59.jpg";
import image60 from "./images/60.png";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Function to generate options with the correct answer in a random order
const generateOptions = (correctAnswer, incorrectOptions) => {
  const options = [...incorrectOptions, correctAnswer];
  return shuffleArray(options); // Shuffle options here
};

// Data with options and a dummy image for all questions
const data = {
  imagequestions: [
    {
      question: "What programming language uses this icon?",
      image: image1, // Rust logo
      options: generateOptions("Rust", ["Go", "C", "Swift"]),
      answer: "Rust",
    },
    {
      question: "This language is symbolized by an elephant. Name it.",
      image: image2, // PostgreSQL logo
      options: generateOptions("PostgreSQL", ["Oracle", "MySQL", "SQL Server"]),
      answer: "PostgreSQL",
    },
    {
      question: "What company uses this green 'g' logo for its global services?",
      image: image3, // Gojek logo
      options: generateOptions("Gojek", ["Grab", "Uber", "Lyft"]),
      answer: "Gojek",
    },
    {
      question: "Who is the CEO of this ride-hailing company?",
      image: image4, // Uber logo
      options: generateOptions("Dara Khosrowshahi", ["Travis Kalanick", "Elon Musk", "Brian Chesky"]),
      answer: "Dara Khosrowshahi",
    },
   
    {
      question: "Who is the CEO of this space exploration company?",
      image: image6, // SpaceX logo
      options: generateOptions("Elon Musk", ["Jeff Bezos", "Richard Branson", "Tim Cook"]),
      answer: "Elon Musk",
    },
    {
      question: "What brand uses this simple red dot as its logo?",
      image: image7, // Target logo
      options: generateOptions("Target", ["Walmart", "Costco", "Tesco"]),
      answer: "Target",
    },
    {
      question: "This bee logo belongs to which marketplace?",
      image: image8, // Alibaba logo
      options: generateOptions("Alibaba", ["Amazon", "eBay", "Rakuten"]),
      answer: "Alibaba",
    },
    {
      question: "Which car brand uses a leaping cat as its logo?",
      image: image9, // Jaguar logo
      options: generateOptions("Jaguar", ["Puma", "Lamborghini", "Ferrari"]),
      answer: "Jaguar",
    },
    {
      question: "This rocket icon belongs to which cryptocurrency?",
      image: image10, // Dogecoin logo
      options: generateOptions("Dogecoin", ["Bitcoin", "Ethereum", "Litecoin"]),
      answer: "Dogecoin",
    },
    {
      question: "Identify the company that uses this green 'P' logo.",
      image: image11, // Patreon logo
      options: generateOptions("Patreon", ["Pinterest", "Puma", "PayPal"]),
      answer: "Patreon",
    },
    {
      question: "Identify the company that uses this winged shoe logo.",
      image: image12, // Goodyear logo
      options: generateOptions("Goodyear", ["Nike", "Adidas", "Pirelli"]),
      answer: "Goodyear",
    },
    {
      question: "Which programming language, known for its use in statistical computing and data analysis, is shown in the image?",
      image: image13, // R logo
      options: generateOptions("R", ["Ring", "Ruby", "Racket"]),
      answer: "R",
    },
    {
      question: "This image shows the logo of a popular language used for front-end web development. What is it called?",
      image: image14, // TypeScript logo
      options: generateOptions("TypeScript", ["TSX", "TSS", "TSQL"]),
      answer: "TypeScript",
    },
    {
      question: "Identify the programming language symbolized by this logo, often used for building cross-platform applications and known for its strong typing.",
      image: image15, // Kotlin logo
      options: generateOptions("Kotlin", ["Java", "Swift", "Dart"]),
      answer: "Kotlin",
    },
    {
      question: "Identify the software development tool shown here, known for its ability to manage and build software projects through a declarative configuration file.",
      image: image16, // Maven logo
      options: generateOptions("Maven", ["Gradle", "Ant", "Make"]),
      answer: "Maven",
    },
    {
      question: "Identify this build automation tool, known for its use in managing project dependencies and building software.",
      image: image17, // Gradle logo
      options: generateOptions("Gradle", ["Maven", "Ant", "SBT"]),
      answer: "Gradle",
    },
    {
      question: "What is the name of the scripting language shown here, famous for its use in server-side web development and automating tasks?",
      image: image18, // Bash logo
      options: generateOptions("Bash", ["Python", "Perl", "Ruby"]),
      answer: "Bash",
    },
    {
      question: "This logo represents a tool commonly used for continuous integration and continuous deployment. What is it called?",
      image: image19, // Jenkins logo
      options: generateOptions("Jenkins", ["CircleCI", "Travis CI", "GitLab CI"]),
      answer: "Jenkins",
    },
    {
      question: "What is the name of the integrated development environment shown here, often used for C++ programming?",
      image: image20, // CLion logo
      options: generateOptions("CLion", ["Eclipse", "Visual Studio", "Code::Blocks"]),
      answer: "CLion",
    },
    {
      question: "Identify this tool used for automated testing of software, known for its focus on behavior-driven development.",
      image: image21, // Cucumber logo
      options: generateOptions("Cucumber", ["JUnit", "Selenium", "Mocha"]),
      answer: "Cucumber",
    },
    {
      question: "What is the name of the software development methodology represented here, often associated with agile project management?",
      image: image22, // Scrum logo
      options: generateOptions("Scrum", ["Kanban", "Waterfall", "Lean"]),
      answer: "Scrum",
    },
    {
      question: "Identify this popular code repository and collaborative development platform used for managing source code.",
      image: image23, // Bitbucket logo
      options: generateOptions("Bitbucket", ["GitHub", "GitLab", "SourceForge"]),
      answer: "Bitbucket",
    },
    {
      question: "This image shows a tool for writing and testing regular expressions. What is it called?",
      image: image24, // Regex101 logo
      options: generateOptions("Regex101", ["RegExr", "ReFiddle", "RegexPal"]),
      answer: "Regex101",
    },
    {
      question: "Identify this device that revolutionized personal communication in the 1990s, often referred to as the 'brick phone.'",
      image: image25, // Nokia 5110
      options: generateOptions("Nokia 5110", ["Nokia 3310", "Ericsson GH688", "Siemens S6"]),
      answer: "Nokia 5110",
    },
    {
      question: "What is the name of the device pictured here, used primarily for immersive virtual reality experiences?",
      image: image26, // Oculus Rift headset
      options: generateOptions("Oculus Rift", ["HTC Vive", "PlayStation VR", "Google Daydream"]),
      answer: "Oculus Rift",
    },
    {
      question: "Identify this portable device that was a game-changer in handheld gaming in the early 2000s.",
      image: image27, // Game Boy Advance
      options: generateOptions("Game Boy Advance", ["PSP", "Nintendo DS", "Sega Game Gear"]),
      answer: "Game Boy Advance",
    },
    {
      question: "What is the name of this handheld device used for managing and syncing data, often used before smartphones became widespread?",
      image: image28, // Palm Pilot
      options: generateOptions("Palm Pilot", ["BlackBerry", "Psion", "Newton"]),
      answer: "Palm Pilot",
    },
    {
      question: "Who is the tech legend depicted here, known for his work on the development of the Unix operating system?",
      image: image29, // Ken Thompson
      options: generateOptions("Ken Thompson", ["Dennis Ritchie", "Linus Torvalds", "Richard Stallman"]),
      answer: "Ken Thompson",
    },
    {
      question: "This image features a notable computer scientist and creator of the first web browser, Mosaic. Who is he?",
      image: image30, // Marc Andreessen
      options: generateOptions("Marc Andreessen", ["Tim Berners-Lee", "Vint Cerf", "Brendan Eich"]),
      answer: "Marc Andreessen",
    },
    
    {
      question: "Who is the CEO of LinkedIn?",
      image: image31,
      options: generateOptions("Ryan Roslansky", ["Jeff Weiner", "Reid Hoffman", "Bill Gates"]),
      answer: "Ryan Roslansky",
    },
    
    {
      question: "What company did the man in the picture start as his first business?",
      image: image33,
      options: generateOptions("Zip2", ["PayPal", "Tesla", "SpaceX"]),
      answer: "Zip2",
    },
    {
      question: "Name the tech event shown in the image.",
      image: image34,
      options: generateOptions("Apple WWDC", ["Google I/O", "Microsoft Build", "Facebook F8"]),
      answer: "Apple WWDC",
    },
    {
      question: "What model of computer is depicted here?",
      image: image35,
      options: generateOptions("IBM PC", ["Apple II", "Commodore 64", "Atari 800"]),
      answer: "IBM PC",
    },
    {
      question: "This image shows a prominent figure in the development of early computer networking technologies. Who is he?",
      image: image36,
      options: generateOptions("Vinton Cerf", ["Tim Berners-Lee", "Robert Metcalfe", "Paul Baran"]),
      answer: "Vinton Cerf",
    },
    {
      question: "This logo with a red ‘F’ belongs to which company?",
      image: image37,
      options: generateOptions("Fujitsu", ["Foxconn", "FedEx", "Ferrari"]),
      answer: "Fujitsu",
    },
    {
      question: "This penguin is the mascot of which operating system?",
      image: image38,
      options: generateOptions("Linux", ["FreeBSD", "Unix", "Windows"]),
      answer: "Linux",
    },
    {
      question: "Identify this person who is credited with inventing the World Wide Web.",
      image: image39,
      options: generateOptions("Tim Berners-Lee", ["Steve Jobs", "Bill Gates", "Larry Page"]),
      answer: "Tim Berners-Lee",
    },
    {
      question: "This platform is widely used for creating and managing personal blogs.",
      image: image40,
      options: generateOptions("Blogger", ["WordPress", "Tumblr", "Medium"]),
      answer: "Blogger",
    },
    {
      question: "Identify this personality who is co-founder of Yahoo.",
      image: image41,
      options: generateOptions("Jerry Yang", ["Sergey Brin", "David Filo", "Larry Page"]),
      answer: "Jerry Yang",
    },
    {
      question: "This company is known for producing iconic films like Harry Potter and The Dark Knight. Name the company.",
      image: image42,
      options: generateOptions("Warner Brothers", ["Paramount Pictures", "Universal Studios", "Walt Disney Studios"]),
      answer: "Warner Brothers",
    },
    {
      question: "This company is the largest retailer in the world by revenue. Identify the logo.",
      image: image43,
      options: generateOptions("Walmart", ["Costco", "Target", "Amazon"]),
      answer: "Walmart",
    },
    {
      question: "Which online platform is represented by this logo, known for being a free, collaborative encyclopedia?",
      image: image44,
      options: generateOptions("Wikipedia", ["Quora", "Reddit", "Medium"]),
      answer: "Wikipedia",
    },
    {
      question: "Which telecommunications company is represented by this logo, originally known as the American Telephone and Telegraph Corporation?",
      image: image45,
      options: generateOptions("AT&T", ["Verizon", "T-Mobile", "Sprint"]),
      answer: "AT&T",
    },
    {
      question: "Which software is represented by this logo, enabling users to run Android applications on their Windows or macOS computers?",
      image: image46,
      options: generateOptions("Bluestacks", ["VirtualBox", "VMware", "Genymotion"]),
      answer: "Bluestacks",
    },
    {
      question: "Who is the CEO of this popular video conferencing platform?",
      image: image47,
      options: generateOptions("Eric Yuan", ["Reed Hastings", "Jack Ma", "Jeff Weiner"]),
      answer: "Eric Yuan",
    },
    {
      question: "Who is the CEO of this popular online payment service?",
      image: image48,
      options: generateOptions("Dan Schulman", ["Brian Armstrong", "David Marcus", "Jack Dorsey"]),
      answer: "Dan Schulman",
    },
    {
      question: "What company’s logo features a red ‘O’?",
      image: image49,
      options: generateOptions("Oracle", ["Opera", "Oculus", "Omnicom"]),
      answer: "Oracle",
    },
    {
      question: "Who is the CEO of this leading software company?",
      image: image50,
      options: generateOptions("Arvind Krishna", ["Satya Nadella", "Sundar Pichai", "Ginni Rometty"]),
      answer: "Arvind Krishna",
    },
    {
      question: "Identify the former CEO of this social media platform.",
      image: image51,
      options: generateOptions("Parag Agrawal", ["Jack Dorsey", "Mark Zuckerberg", "Evan Spiegel"]),
      answer: "Parag Agrawal",
    },
    {
      question: "Which term best describes this concept?",
      image: image52,
      options: generateOptions("Neural Networks", ["Artificial Intelligence", "Deep Learning", "Machine Learning"]),
      answer: "Neural Networks",
    },
    {
      question: "Identify This co-founder and CEO from 2006 to 2008 of this major social network?",
      image: image53,
      options: generateOptions("Jack Dorsey", ["Mark Zuckerberg", "Elon Musk", "Reed Hastings"]),
      answer: "Jack Dorsey",
    },
    {
      question: "This blue ‘T’ logo represents which service?",
      image: image54,
      options: generateOptions("Trello", ["Twitch", "Twitter", "Tidal"]),
      answer: "Trello",
    },
    {
      question: "What browser is represented by this compass logo?",
      image: image55,
      options: generateOptions("Safari", ["Chrome", "Firefox", "Opera"]),
      answer: "Safari",
    },
    {
      question: "What company uses this blue ‘A’ for its web services?",
      image: image56,
      options: generateOptions("Atlassian", ["AWS", "Azure", "Alibaba Cloud"]),
      answer: "Atlassian",
    },
    {
      question: "Who is the CEO of this e-commerce giant?",
      image: image57,
      options: generateOptions("Tobi Lütke", ["Andy Jassy", "Jeff Bezos", "Brian Chesky"]),
      answer: "Tobi Lütke",
    },
    {
      question: "Which programming language is represented by this orange ’H’ icon?",
      image: image58,
      options: generateOptions("Haskell", ["HTML", "Haxe", "Hack"]),
      answer: "Haskell",
    },
    {
      question: "Identify the person who is the CEO of Samsung.",
      image: image59,
      options: generateOptions("Jong-Hee Han", ["Tim Cook", "Sundar Pichai", "Kazuo Hirai"]),
      answer: "Jong-Hee Han",
    },
    {
      question: "Who is the CEO of this e-commerce platform?",
      image: image60,
      options: generateOptions("Kalyan Krishnamurthi", ["Sachin Bansal", "Binny Bansal", "Sundar Pichai"]),
      answer: "Kalyan Krishnamurthi",
    },
    
  ],
};


data.imagequestions = shuffleArray(data.imagequestions);


export default data;
