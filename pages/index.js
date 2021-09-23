import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FeaturedProject from "../components/FeaturedProject";
import SkillCard from "../components/SkillCard";
import Project from "../components/Project";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { Fragment, useEffect } from "react";
import { GitHub, Twitter, AtSign, Linkedin } from "react-feather";
import { motion } from "framer-motion";
import {
  skillsData,
  personalInfo,
  featuredProjects,
  otherProjects,
} from "../data/my_info";

export default function Home({ skillsData }) {
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
        <Navbar resumelink={personalInfo.resume}></Navbar>
      </header>

      {/* MAIN */}
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div
            className={`${styles.heroContent} ${utilStyles.centerText} fade-in`}
          >
            <h1 className={`${styles.heroTitle} headingXXL`}>
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
              top: -20,
              left: -20,
              right: 20,
              bottom: 20,
            }}
            alt="Draggable Planet"
            height="150"
            width="150"
            src="/images/PlanetD.svg"
          ></motion.img>
        </section>

        {/* summary */}
        <section className={`${styles.proSummary}`} id="about">
          <div className="fade-in">
            <div className={`${styles.summaryText}`}>
              <h2 className={`${styles.hi} headingL`}>Hi, {"I'm"} Adusei</h2>
              <p className={`${styles.text}`}>{personalInfo.summary}</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.imageContainer}
            >
              <Image
                priority
                src={
                  personalInfo.image
                    ? personalInfo.image
                    : "/images/profile.png"
                }
                className={`${styles.profileImg}`}
                height={250}
                width={250}
                alt={"Profile Image"}
              />
            </motion.div>
          </div>
        </section>
        {/* skills */}
        <section className={`${styles.skills}`} id="skills">
          <h2 className={`sectionHeader headingL`}>Skills</h2>

          <ul className={`${styles.skillList} list fade-in`}>
            {skillsData.map((skill, index) => (
              <li key={`skill-${skill}-${index}`}>
                <SkillCard {...skill} />
              </li>
            ))}
          </ul>
        </section>
        {/* area */}
        <div className={styles.area}>
          {/* projects */}
          <section className={`${styles.projects}`} id="projects">
            <h2 className={`sectionHeader headingL`}>Projects</h2>
            <ul className={`${styles.fprojectList} list`}>
              {featuredProjects.map((project, index) => (
                <li key={`featuredProject-${project.title}-${index}`}>
                  <FeaturedProject
                    className={index % 2 == 0 ? "slide-right" : "slide-left"}
                    invert={index % 2 == 0 ? true : null}
                    {...project}
                  ></FeaturedProject>
                </li>
              ))}
            </ul>
          </section>
          {/* other projects */}
          <section className={`${styles.otherProjects} `}>
            <h2 className={`sectionHeader headingL fade-in`}>Other Projects</h2>
            <ul className={`${styles.oprojectList} list fade-in`}>
              {otherProjects.map((project, index) => (
                <li key={`featuredProject-${project.title}-${index} fade-in`}>
                  <Project {...project}></Project>
                </li>
              ))}
            </ul>
          </section>
          {/* get in touch */}
          <section className={`${styles.callToAction}`} id="contact">
            <div className="fade-in">
              <h3 className={styles.catHeader}>Get In Touch</h3>
              <p className={styles.catText}>
                Want to collaborate on a new project or improve on any of mine?
                Need help with your project? We should have a chat.
              </p>
              <a href={`mailto:${personalInfo.mail}`}>
                <Button className={styles.catButton} text="Hit Me Up"></Button>
              </a>
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
            Inspired by <a>Matt Farley</a> & <a>Brittany Chiang</a>
          </p>
        </div>
      </footer>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      personalInfo,
      skillsData,
      featuredProjects,
      otherProjects,
    },
  };
}
