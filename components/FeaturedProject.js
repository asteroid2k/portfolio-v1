import Image from "next/image";
import styles from "../styles/FeaturedProject.module.css";
import { GitHub, ExternalLink } from "react-feather";

export default function FeaturedProject({
  className,
  title,
  summary,
  tools,
  img,
  invert,
  github,
  extlink,
}) {
  return (
    <div className={`${styles.fprojectItem} ${className}`}>
      <div className={invert ? styles.imageInv : styles.image}>
        <Image
          src={`/images/featured_projects/${img}`}
          className={`${styles.fprojectImg}`}
          layout="fill"
          objectFit="cover"
          alt={"Project Image"}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={invert ? styles.textInv : styles.text}>
        <h3 className={`${styles.fprojectTitle} headingL`}>{title}</h3>
        <div className={styles.fprojectSummary}>{summary}</div>
        <ul className={`${styles.toolsList} list`}>
          {tools.map((tool, index) => (
            <li key={`fprojectTool-${tool}-${index}`}>{tool}</li>
          ))}
        </ul>
        <div className={styles.fprojectLinks}>
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHub size={22} className="icon ani" />
            </a>
          ) : null}
          {extlink ? (
            <a href={extlink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={22} className="icon ani" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
