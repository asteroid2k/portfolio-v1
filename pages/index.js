import Head from "next/head";
import Link from "next/link";
import NavbarC from "../components/NavbarC";
import FeaturedProject from "../components/FeaturedProject";
import SkillCard from "../components/SkillCard";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";
import { Fragment, useEffect } from "react";
import { GitHub, Twitter, AtSign, Linkedin } from "react-feather";
import { motion } from "framer-motion";
import info from "../data/my_info.json";
import AvatarModel from "../components/AvatarModel";
export default function Home({
  skills,
  personalInfo,
  featuredProjects,
  otherProjects,
}) {
  useEffect(() => {
    import("../util/home_animations");
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Adusei.dev</title>
        <meta name="description" content="Software developer and DevOps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavbarC resumelink={personalInfo.resume}></NavbarC>
      </header>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className={`${styles.darkToggler} toggler`}
      >
        <span className="sr-only">Color Scheme Toggler</span>
        <span className="toggler-icon"></span>
      </motion.button>

      {/* MAIN */}
      <main className={`${styles.main}`}>
        {/* HERO */}
        <section className={`${styles.hero}`}>
          <div className={styles.heroBg}>
            <div className={`${styles.heroContent}  fade-in`}>
              <h1 className={`${styles.heroTitle} h headingXXL`}>
                Software Developer + DevOps
              </h1>
              <p className={`${styles.heroSubtitle} `}>
                I build Modern Apps for the Web & Cloud
              </p>
            </div>

            <motion.img
              className={`${styles.interactivePlanet}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              drag
              dragConstraints={{
                top: -40,
                left: -40,
                right: 40,
                bottom: 40,
              }}
              alt="Draggable Planet"
              height="180"
              width="180"
              src="/images/PlanetD.svg"
            ></motion.img>
          </div>
        </section>

        {/* summary */}
        <section className={`section ${styles.proSummary}`} id="about">
          <div className="fade-in">
            <div className={`${styles.summaryText}`}>
              <h2 className={`${styles.hi} h headingXL`}>Hi, {"I'm"} Adusei</h2>
              <p className={`${styles.text}`}>{personalInfo.summary}</p>
            </div>
            <div className={styles.imageContainer}>
              <div id="avatarCanvas" className={styles.avatarCanvas}>
                <AvatarModel></AvatarModel>
              </div>
            </div>
          </div>
        </section>
        {/* skills */}
        <section className={`section ${styles.skills}`} id="skills">
          <div className="fade-in">
            <h2 className={`sectionHeader h headingXL`}>Skills</h2>
            <ul className={`${styles.skillList} list`}>
              {skills.map((skill, index) => (
                <li key={`skill-${skill}-${index}`}>
                  <SkillCard {...skill} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* area */}
        <div className={styles.area}>
          <section className={`section ${styles.projects}`} id="projects">
            <div className="fade-in">
              <h2 className={`sectionHeader h headingXL`}>Projects</h2>
              <ul className={`${styles.fprojectList} list`}>
                {featuredProjects.map((project, index) => (
                  <li key={`featuredProject-${project.title}-${index}`}>
                    <FeaturedProject
                      className={index % 2 !== 0 ? "slide-right" : "slide-left"}
                      invert={index % 2 !== 0 ? false : true}
                      {...project}
                    ></FeaturedProject>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* other projects */}
          <section className={`section ${styles.otherProjects}`}>
            <div className="fade-in">
              <h2 className={`sectionHeader h headingXL `}>Other Projects</h2>
              <ul className={`${styles.oprojectList} list`}>
                {otherProjects.map((project, index) => (
                  <li key={`featuredProject-${project.title}-${index}`}>
                    <Project {...project}></Project>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* get in touch */}
          <section className={`section ${styles.contact}`} id="contact">
            <div className="fade-in">
              <h2 className={`sectionHeader h headingXL `}>Get In Touch</h2>
              <p className={styles.catText}>
                Want to collaborate on a new project or improve on any of mine?
                We should have a chat.
              </p>
              <Link href="/contact" passHref>
                <button className="k-button">Say Hello</button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      {/* footer */}
      <footer className={`${styles.footer}`}>
        <div className="fade-in">
          <div className={styles.socialsContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={personalInfo.linkedIn}
            >
              <Linkedin size={28} className="icon ani" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${personalInfo.mail}`}
            >
              <AtSign size={28} className="icon ani" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={personalInfo.github}
            >
              <GitHub size={28} className="icon ani" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={personalInfo.twitter}
            >
              <Twitter size={28} className="icon ani" />
            </a>
          </div>
          <p className={styles.footerText}>
            Designed & built by Kwaku Adusei Okyere
          </p>
          <p className={styles.footerSub}>
            Inspired by{" "}
            <a
              href="https://mattfarley.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matt Farley
            </a>{" "}
            &{" "}
            <a
              href="https://brittanychiang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brittany Chiang
            </a>
          </p>
          <p className={styles.footerSub}>
            3D model by{" "}
            <a
              href="https://readyplayer.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wolf 3D
            </a>
          </p>
        </div>
      </footer>
    </Fragment>
  );
}

export async function getStaticProps() {
  const { skills, personalInfo, featuredProjects, otherProjects } = info;

  return {
    props: {
      personalInfo,
      skills,
      featuredProjects,
      otherProjects,
    },
  };
}
