import React, { useState, useEffect, useRef } from "react";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Database,
  Brain,
  Globe,
  Calendar,
  ExternalLink,
  User,
  Briefcase,
  GraduationCap,
  Star,
  Zap,
  ChevronDown,
  ArrowUp,
  FileCode,
  FileText,
  Atom,
  Braces,
  BrainCircuit,
  GitBranch,
  Paintbrush,
  Server,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef({});

  const techStack = [
    { name: "JavaScript", icon: FileCode, color: "text-yellow-400" },
    { name: "Python", icon: FileText, color: "text-blue-400" },
    { name: "React", icon: Atom, color: "text-cyan-400" }, // ⚛️ perfect visual cue
    { name: "C++", icon: Braces, color: "text-purple-400" },
    { name: "Data Science", icon: BrainCircuit, color: "text-green-400" }, // 🧠 + circuits
    { name: "Git", icon: GitBranch, color: "text-orange-400" },
    { name: "CSS", icon: Paintbrush, color: "text-blue-300" }, // 🎨 styling vibe
    { name: "Node.js", icon: Server, color: "text-green-500" },
  ];

  const projects = [
    {
      title: "Next Word Prediction",
      period: "09/2024 - 08/2024",
      description:
        "An NLP model for language prediction using advanced algorithms.",
      highlights: [
        "Developed NLP model with RNN and LSTM architectures",
        "Pre-processed large text datasets for training",
        "Achieved optimized performance through hyperparameter tuning",
        "Enhanced typing suggestions and language generation tools",
      ],
      tech: ["Python", "NLP", "RNN", "LSTM"],
    },
    {
      title: "ExploreMate - Travel Planning App",
      period: "08/2024 - 11/2024",
      description:
        "An application aimed at optimizing travel planning and enhancing user experience.",
      highlights: [
        "Designed travel planning application with optimized itineraries",
        "Applied graph theory and traversal algorithms",
        "Developed responsive frontend with Qt Creator",
        "Included feedback mechanism for user recommendations",
      ],
      tech: ["Qt Creator", "Graph Theory", "Algorithms", "UI/UX"],
    },
  ];

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "JP Morgan Chase (Forage)",
      period: "08/2024 - 09/2024",
      location: "Remote",
      highlights: [
        "Completed virtual experience program focusing on software engineering",
        "Developed solutions using TypeScript, Python, React, and web technologies",
        "Gained hands-on experience with real-world scenarios",
        "Utilized Git and GitHub for version control and collaboration",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "University of Petroleum and Energy Studies",
      period: "08/2022 - 05/2026",
      location: "Dehradun, India",
    },
    {
      degree: "Senior Secondary (Class 12)",
      institution: "Delhi Public School",
      period: "04/2022",
      location: "Agra, India",
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add("animate-fade-in-up");

          // Animate staggered elements
          const staggeredElements =
            entry.target.querySelectorAll(".stagger-animation");
          staggeredElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate");
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial animation for intro section
    setTimeout(() => {
      const introStaggered = document.querySelectorAll(
        "#intro .stagger-animation"
      );
      introStaggered.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animate");
        }, index * 200);
      });
    }, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const NavButton = ({ section, icon: Icon, label }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === section
          ? "bg-blue-600 text-white shadow-lg scale-105"
          : "text-gray-400 hover:text-white hover:bg-gray-800"
      }`}
    >
      <Icon size={18} />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .stagger-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .stagger-animation.animate {
          opacity: 1;
          transform: translateY(0);
        }

        section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        section.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToTop()}
            >
              Sunny Jain
            </div>
            <div className="flex space-x-2">
              <NavButton section="intro" icon={User} label="Home" />
              <NavButton section="about" icon={Code} label="About" />
              <NavButton section="projects" icon={Briefcase} label="Projects" />
              <NavButton
                section="experience"
                icon={GraduationCap}
                label="Experience"
              />
              <NavButton section="contact" icon={Mail} label="Contact" />
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Introduction Section */}
      <section
        id="intro"
        ref={(el) => (sectionRefs.current["intro"] = el)}
        className="min-h-screen w-screen max-w-none flex flex-col items-center justify-center text-center space-y-8 px-6 relative"
      >
        <div className="stagger-animation" style={{ animationDelay: "0.2s" }}>
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-8 mx-auto animate-pulse">
            <User size={64} className="text-white" />
          </div>
        </div>

        <div className="stagger-animation" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
            Sunny Jain
          </h1>
        </div>

        <div className="stagger-animation" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            B.Tech Computer Science Engineering
          </h2>
        </div>

        <div className="stagger-animation" style={{ animationDelay: "0.8s" }}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate third-year B.Tech student specializing in AI/ML and web
            development, with practical experience in building prediction models
            and full-stack projects.
          </p>
        </div>

        <div className="stagger-animation" style={{ animationDelay: "1s" }}>
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/JainSunny2004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github size={20} className="text-white" />
              <span className="text-white font-semibold">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sunnyjain2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Linkedin size={20} className="text-white" />
              <span className="text-white font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => (sectionRefs.current["about"] = el)}
        className="min-h-screen py-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Star className="mr-3 text-yellow-400" size={24} />
                Strengths
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-blue-400 text-lg mb-2">
                    Leadership & Recognition
                  </h4>
                  <p className="text-gray-300">
                    Successfully led social media and event management efforts,
                    earning "Star Performer of the Year" twice.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-green-400 text-lg mb-2">
                    Adaptability
                  </h4>
                  <p className="text-gray-300">
                    Ability to thrive in diverse environments, balancing
                    academics, projects, and extra-curricular responsibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Globe className="mr-3 text-blue-400" size={24} />
                Languages
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-lg">English</span>
                  <span className="text-green-400 font-medium">Proficient</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-lg">Hindi</span>
                  <span className="text-blue-400 font-medium">Native</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-500">
            <h3 className="text-3xl font-semibold mb-8 flex items-center justify-center">
              <Zap className="mr-3 text-purple-400" size={28} />
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-all duration-300 hover:scale-110 hover:shadow-lg stagger-animation"
                >
                  <tech.icon size={24} className={tech.color} />
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black/50"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  index % 2 === 0
                    ? "animate-fade-in-left"
                    : "animate-fade-in-right"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-2 lg:mb-0">
                    {project.title}
                  </h3>
                  <span className="text-gray-400 flex items-center text-lg">
                    <Calendar size={18} className="mr-2" />
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  {project.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-3 text-xl">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full font-medium border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={(el) => (sectionRefs.current["experience"] = el)}
        className="min-h-screen py-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-semibold mb-8 flex items-center">
                <Briefcase className="mr-3 text-green-400" size={28} />
                Professional Experience
              </h3>
              {experience.map((exp, index) => (
                <div
                  key={exp.title}
                  className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:scale-105 mb-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h4 className="text-2xl font-semibold text-green-400 mb-2 lg:mb-0">
                      {exp.title}
                    </h4>
                    <span className="text-gray-400 text-lg">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-300 mb-6 text-lg">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-3">•</span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-3 text-xl">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-8 flex items-center">
                <GraduationCap className="mr-3 text-purple-400" size={28} />
                Education
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                  >
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-purple-400 mb-2">
                        {edu.degree}
                      </h4>
                      <span className="text-gray-400">{edu.period}</span>
                    </div>
                    {edu.field && (
                      <p className="text-blue-400 mb-3 font-medium">
                        {edu.field}
                      </p>
                    )}
                    <div className="text-gray-300">
                      <p className="font-medium mb-1">{edu.institution}</p>
                      <p className="flex items-center text-sm">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => (sectionRefs.current["contact"] = el)}
        className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black/50"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <div className="bg-gray-800/50 p-8 md:p-12 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500">
            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology and innovation. Feel free
              to reach out!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:jainsunny0308@gmail.com"
                className="flex items-center justify-center space-x-3 p-6 bg-red-600/20 hover:bg-red-600/30 rounded-lg transition-all duration-300 border border-red-600/30 hover:border-red-600/50 hover:scale-105 text-lg"
              >
                <Mail size={24} className="text-red-400" />
                <span>jainsunny0308@gmail.com</span>
              </a>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/sunnyjain2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-6 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-all duration-300 border border-blue-600/30 hover:border-blue-600/50 hover:scale-105 text-lg"
                >
                  <Linkedin size={24} className="text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink size={18} className="text-gray-400" />
                </a>

                <a
                  href="https://github.com/JainSunny2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-6 bg-gray-600/20 hover:bg-gray-600/30 rounded-lg transition-all duration-300 border border-gray-600/30 hover:border-gray-600/50 hover:scale-105 text-lg"
                >
                  <Github size={24} className="text-gray-400" />
                  <span>GitHub</span>
                  <ExternalLink size={18} className="text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-gray-500">
            <p>&copy; 2024 Sunny Jain. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
