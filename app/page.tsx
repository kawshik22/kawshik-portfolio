import Image from "next/image";
import CustomCursor from "./CustomCursor";
import MobileMenu from "./MobileMenu";
import BackgroundVideo from "./BackgroundVideo";
import ThemeToggle from "./ThemeToggle";

import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Bangla Fake News Detector",
    category: "MACHINE LEARNING / NLP",
    description:
      "A 3-stage NLP and machine learning system for detecting fake Bangla news through text preprocessing, feature extraction and classification.",
    technologies: ["Python", "NLP", "TF-IDF", "XGBoost", "LightGBM"],
    github: "https://github.com/kawshik22/Bangla-Fake-News-Detector",
  },
  {
    number: "02",
    title: "AgroConnect",
    category: "WEB APPLICATION",
    description:
      "A web-based agricultural marketplace connecting farmers, consumers, transport owners and administrators.",
    technologies: ["PHP", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/kawshik22/IstiakXAhamed-AgroConnect-A-Platform-To-Connect-Farmers-And-Consumers",
  },
  {
    number: "03",
    title: "SkillBridge",
    category: "REST API / FULL STACK",
    description:
      "A RESTful student skill-exchange platform covering student profiles, skills and peer-to-peer skill exchange.",
    technologies: ["Node.js", "Express.js", "React", "PostgreSQL", "REST API"],
    github:
      "https://github.com/kawshik22/SkillBridge-Student-Skill-Exchange-Platform-API-Project",
  },
  {
    number: "04",
    title: "AIUB Library Management System",
    category: "DESKTOP APPLICATION",
    description:
      "A desktop library system covering book inventory, student records, issue and return tracking, authentication and reporting.",
    technologies: ["Python", "CustomTkinter", "MySQL", "SQL", "CSV"],
    github:
      "https://github.com/kawshik22/AIUB-Library-Management-System",
  },
  {
    number: "05",
    title: "Heart Disease Risk Prediction",
    category: "MACHINE LEARNING",
    description:
      "A machine-learning pipeline for predicting heart disease risk from clinical and demographic features.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
    github:
      "https://github.com/kawshik22/Heart-Disease-Risk-Prediction",
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const technologiesRowOne = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Machine Learning",
  "SQL",
];

const technologiesRowTwo = [
  "C++",
  "Java",
  "Python",
  "React",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "NLP",
  "Git",
  "GitHub",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <BackgroundVideo />
      <CustomCursor />
      <ThemeToggle />

      {/* NAVIGATION */}
      <nav className="site-nav">
        <a href="#home" className="brand-mark">
          KAWSHIK
        </a>

        <div className="desktop-navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-talk">
          LET&apos;S TALK
          <ArrowUpRight size={14} strokeWidth={1.7} />
        </a>

        <div className="mobile-navigation">
          <MobileMenu />
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-meta">
          <div className="hero-status">
            <span className="status-dot" />
            <span className="eyebrow">SOFTWARE DEVELOPER</span>
          </div>

          <span className="eyebrow hero-location">
            BANGLADESH · 2026
          </span>
        </div>

        <div className="hero-stage">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-name">
            <div className="hero-name-line">KAWSHIK</div>
            <div className="hero-name-line hero-name-second">
              KARMOKER
            </div>
          </div>

          <div className="hero-person">
            <Image
              src="/images/hero-person.png"
              alt="Kawshik Karmoker"
              fill
              priority
              sizes="(max-width: 768px) 85vw, 510px"
              className="object-contain object-bottom"
            />
          </div>

          <div className="hero-side-info hero-left">
            <span className="eyebrow">WHAT I DO</span>

            <p>
              I build practical digital products, web applications, backend
              systems, APIs and intelligent software.
            </p>

            <div className="small-rule" />
          </div>

          <div className="hero-side-info hero-right">
            <span className="eyebrow">FOCUS</span>

            <div className="focus-list">
              <span>WEB DEVELOPMENT</span>
              <span>BACKEND &amp; APIs</span>
              <span>MACHINE LEARNING</span>
              <span>DATABASE SYSTEMS</span>
            </div>
          </div>

          <div className="hero-current">
            <span className="eyebrow">CURRENTLY</span>

            <strong>SOFTWARE DEVELOPMENT INTERN</strong>

            <span>LeoTech</span>
          </div>

          <div className="hero-mobile-info">
            <div>
              <span className="eyebrow">SOFTWARE DEVELOPER</span>
              <p>Web development · APIs · AI/ML</p>
            </div>

            <div className="text-right">
              <span className="eyebrow">BASED IN</span>
              <p>BANGLADESH</p>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#work" className="primary-button group">
              EXPLORE WORK

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="button-arrow"
              />
            </a>

            <a
              href="/Kawshik-Karmoker-CV.pdf"
              download
              className="secondary-button group"
            >
              DOWNLOAD CV

              <ArrowDownToLine
                size={14}
                strokeWidth={1.8}
                className="button-arrow"
              />
            </a>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="content-section statement-section">
  <div className="statement-background">
    <span className="statement-ghost statement-ghost-one">
      SOFTWARE
    </span>

    <span className="statement-ghost statement-ghost-two">
      IDEAS
    </span>

    <span className="statement-ghost statement-ghost-three">
      SOFTWARE
    </span>
  </div>

  <div className="statement-orb statement-orb-one" />
  <div className="statement-orb statement-orb-two" />

  <div className="section-container statement-content">
    <div className="statement-topline">
      <span className="eyebrow">A LITTLE ABOUT MY WORK</span>

      <span className="statement-index">
        01 / 06
      </span>
    </div>

    <div className="statement-main">
      <span className="statement-small-label">
        FROM CONCEPT
      </span>

      <h2
        className="statement-heading"
        data-text="I TURN IDEAS INTO"
      >
        I turn ideas into
        <br />
        <em>practical software.</em>
      </h2>

      <span className="statement-small-label statement-small-label-right">
        TO REALITY
      </span>
    </div>

    <div className="statement-bottom">
      <span>SOFTWARE · WEB · AI/ML</span>

      <span className="statement-scroll-mark">
        ↓ SCROLL
      </span>
    </div>
  </div>
</section>

      {/* WORK */}
      <section id="work" className="content-section">
        <div className="section-container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">SELECTED WORK</span>

              <h2 className="section-title">Things I&apos;ve built.</h2>
            </div>

            <p className="section-description">
              A selection of academic and independent projects spanning web
              development, APIs, databases and machine learning.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.number} className="project-row">
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <span className="eyebrow">{project.category}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technology-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-link-wrapper">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Code2 size={16} strokeWidth={1.7} />

                    VIEW REPO

                    <ExternalLink
                      size={13}
                      strokeWidth={1.7}
                      className="project-arrow"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <span className="eyebrow">TECHNOLOGIES</span>

          <div className="skills-heading-row">
            <div>
              <h2 className="section-title">Tools behind the work.</h2>
            </div>

            <p>
              A practical stack across programming, modern web development,
              databases and machine learning.
            </p>
          </div>
        </div>

        <div className="technology-marquee">
          <div className="technology-track technology-track-one">
            {[...technologiesRowOne, ...technologiesRowOne].map(
              (technology, index) => (
                <span
                  key={`row-one-${technology}-${index}`}
                  className="technology-word"
                >
                  {technology}

                  <span className="technology-dot">✦</span>
                </span>
              ),
            )}
          </div>

          <div className="technology-track technology-track-two">
            {[...technologiesRowTwo, ...technologiesRowTwo].map(
              (technology, index) => (
                <span
                  key={`row-two-${technology}-${index}`}
                  className="technology-word"
                >
                  {technology}

                  <span className="technology-dot">✦</span>
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="content-section">
        <div className="section-container">
          <span className="eyebrow">ABOUT ME</span>

          <div className="about-grid">
            <div>
              <h2 className="about-title">
                Software
                <br />
                <em>with purpose.</em>
              </h2>
            </div>

            <div className="about-copy">
              <p className="about-lead">
                I&apos;m Kawshik Karmoker, a Software Developer with a
                Computer Science and Engineering background.
              </p>

              <p>
                My work sits at the intersection of software development,
                backend systems, APIs, databases and machine learning. I enjoy
                taking an idea, breaking it into practical components and
                turning those components into usable software.
              </p>

              <p>
                Through academic and independent projects, I have worked with
                Python, JavaScript, TypeScript, React, Node.js, PostgreSQL,
                MySQL and machine-learning workflows.
              </p>

              <div className="about-details">
                <div>
                  <span className="eyebrow">PRIMARY FOCUS</span>
                  <strong>WEB · BACKEND · AI/ML</strong>
                </div>

                <div>
                  <span className="eyebrow">APPROACH</span>
                  <strong>PRACTICAL · CURIOUS · ADAPTABLE</strong>
                </div>

                <div>
                  <span className="eyebrow">BACKGROUND</span>
                  <strong>COMPUTER SCIENCE &amp; ENGINEERING</strong>
                </div>

                <div>
                  <span className="eyebrow">BASED IN</span>
                  <strong>BANGLADESH</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND THE BUILD */}
      <section
        id="credentials"
        className="content-section credentials-section"
      >
        <div className="section-container">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">BEYOND THE BUILD</span>

              <h2 className="section-title">
                More than
                <br />
                <em>the code.</em>
              </h2>
            </div>

            <p className="section-description">
              The learning, community involvement and professional strengths
              that shape how I approach software development.
            </p>
          </div>

          <div className="credentials-grid">
            <article className="credential-card">
              <div className="credential-icon">
                <Sparkles size={18} strokeWidth={1.6} />
              </div>

              <span className="eyebrow">CERTIFICATIONS</span>

              <h3>Continuous learning.</h3>

              <ul>
                <li>
                  Career Essentials in Generative AI — Microsoft &amp; LinkedIn
                </li>

                <li>
                  Introduction to Career Skills in Data Analytics
                </li>

                <li>Introduction to TypeScript</li>
              </ul>
            </article>

            <article className="credential-card">
              <div className="credential-icon">
                <BriefcaseBusiness size={18} strokeWidth={1.6} />
              </div>

              <span className="eyebrow">COMMUNITY</span>

              <h3>Beyond individual projects.</h3>

              <ul>
                <li>
                  Member — AIUB Community of Engineering Society
                </li>

                <li>Member — Environment Club, AIUB</li>

                <li>Supported charity fundraising activities</li>
              </ul>
            </article>

            <article className="credential-card">
              <div className="credential-icon">
                <Code2 size={18} strokeWidth={1.6} />
              </div>

              <span className="eyebrow">STRENGTHS</span>

              <h3>How I work.</h3>

              <div className="strength-list">
                <span>Problem Solving</span>
                <span>Communication</span>
                <span>Adaptability</span>
                <span>Time Management</span>
                <span>Teamwork</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="content-section">
        <div className="section-container">
          <span className="eyebrow">EXPERIENCE</span>

          <div className="section-heading-row experience-heading">
            <h2 className="section-title">Where I&apos;ve worked.</h2>

            <p className="section-description">
              From remote client work to my current software-development
              internship.
            </p>
          </div>

          <div className="experience-list">
            <article className="experience-row">
              <div className="experience-date">2026 — PRESENT</div>

              <div className="experience-main">
                <span className="eyebrow">SOFTWARE DEVELOPMENT</span>

                <h3>Software Development Intern</h3>

                <p className="experience-company">LeoTech</p>

                <p className="experience-description">
                  Currently working as a Software Development Intern.
                </p>
              </div>

              <span className="experience-status">CURRENT</span>
            </article>

            <article className="experience-row">
              <div className="experience-date">2020 — 2022</div>

              <div className="experience-main">
                <span className="eyebrow">PART-TIME · REMOTE</span>

                <h3>Data Entry Specialist</h3>

                <p className="experience-company">UpWork</p>

                <p className="experience-description">
                  Managed client data-entry projects involving database
                  records, document verification, data cleaning and
                  spreadsheet-based processing.
                </p>

                <div className="experience-metrics">
                  <div>
                    <strong>2,000+</strong>
                    <span>records maintained</span>
                  </div>

                  <div>
                    <strong>99%</strong>
                    <span>accuracy</span>
                  </div>

                  <div>
                    <strong>60+</strong>
                    <span>documents / week</span>
                  </div>

                  <div>
                    <strong>200+</strong>
                    <span>entries / day</span>
                  </div>
                </div>
              </div>

              <span className="experience-status">REMOTE</span>
            </article>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="content-section">
        <div className="section-container">
          <span className="eyebrow">EDUCATION</span>

          <div className="section-heading-row education-heading">
            <h2 className="section-title">The foundation.</h2>

            <p className="section-description">
              An academic foundation spanning computer science, engineering
              and earlier education.
            </p>
          </div>

          <div className="education-list">
            <article className="education-row">
              <div className="education-date">2022 — 2026</div>

              <div>
                <span className="eyebrow">BACHELOR&apos;S DEGREE</span>

                <h3>
                  Computer Science
                  <br />
                  &amp; Engineering
                </h3>

                <p>American International University-Bangladesh</p>

                <span className="education-detail">
                  CGPA: 3.31 / 4.00
                </span>
              </div>

              <span className="education-place">
                DHAKA, BANGLADESH
              </span>
            </article>

            <article className="education-row">
              <div className="education-date">2018 — 2019</div>

              <div>
                <span className="eyebrow">
                  HIGHER SECONDARY CERTIFICATE
                </span>

                <h3>Higher Secondary Certificate</h3>

                <p>Madaripur Government College</p>
              </div>

              <span className="education-place">MADARIPUR</span>
            </article>

            <article className="education-row">
              <div className="education-date">2020 — 2021</div>

              <div>
                <span className="eyebrow">
                  SECONDARY SCHOOL CERTIFICATE
                </span>

                <h3>Secondary School Certificate</h3>

                <p>United Islamia Government High School</p>
              </div>

              <span className="education-place">MADARIPUR</span>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <span className="eyebrow">CONTACT</span>

          <div className="contact-heading">
            <h2>
              Let&apos;s build
              <br />
              <em>something.</em>
            </h2>

            <p>
              Have a project, idea or opportunity? Get in touch and let&apos;s
              start a conversation.
            </p>
          </div>

          <div className="contact-list">
            <a
              href="mailto:kawshikkarmoker1@gmail.com"
              className="contact-row"
            >
              <div>
                <span className="eyebrow">EMAIL</span>

                <strong>kawshikkarmoker1@gmail.com</strong>
              </div>

              <Mail size={21} strokeWidth={1.6} />
            </a>

            <a href="tel:+8801306840920" className="contact-row">
              <div>
                <span className="eyebrow">PHONE</span>

                <strong>+880 1306 840920</strong>
              </div>

              <Phone size={21} strokeWidth={1.6} />
            </a>

            <a
              href="https://github.com/kawshik22"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <div>
                <span className="eyebrow">GITHUB</span>

                <strong>github.com/kawshik22</strong>
              </div>

              <Code2 size={21} strokeWidth={1.6} />
            </a>

            <a
              href="https://www.linkedin.com/in/kawshik-karmoker-893b50281/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <div>
                <span className="eyebrow">LINKEDIN</span>

                <strong>
                  linkedin.com/in/kawshik-karmoker-893b50281
                </strong>
              </div>

              <BriefcaseBusiness size={21} strokeWidth={1.6} />
            </a>
          </div>

          <a
            href="mailto:kawshikkarmoker1@gmail.com"
            className="primary-button contact-button group"
          >
            SEND AN EMAIL

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="button-arrow"
            />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} KAWSHIK KARMOKER</span>

          <div>
            <a
              href="https://github.com/kawshik22"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/kawshik-karmoker-893b50281/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>

            <a href="mailto:kawshikkarmoker1@gmail.com">
              EMAIL
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}