import styles from "../styles/SkillCard.module.css";

export default function SkillCard({ skill, text, tech }) {
  return (
    <div className={`${styles.card} hover-anim fade-in`}>
      <h3 className={`${styles.skillTitle} headingL`}>{skill}</h3>
      <p className={styles.skillText}>{text}</p>
      <h4 className={`${styles.skillTitle2} headingMd`}>Technologies</h4>
      <ul className={`${styles.techList} list textMd`}>
        {tech.map((t, index) => (
          <li key={`${skill}-${t}-${index}`}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
