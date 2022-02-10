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
  let txtPos = invert ? "md:right-0" : "";
  let txtAlign = invert ? "md:text-right md:items-end" : "";
  let imgPos = invert ? "md:mr-auto" : "md:ml-auto";
  return (
    <div
      className={`${styles.fprojectItem} ${className} flex relative w-full md:items-center rounded-md`}
    >
      {/* Text */}
      <div
        className={`${txtPos} ${txtAlign} overflow-x-hidden flex flex-col absolute z-10 pb-0 h-full md:h-fit pt-8 px-4 md:p-0 rounded-md max-w-full bg-black/80 md:max-w-[55%] md:bg-transparent `}
      >
        <h3 className={`${styles.title} headingL mb-6`}>{title}</h3>
        <div
          className={`${styles.summary} mb-3 md:p-4 shadow-md bg-transparent md:bg-[color:var(--darker-background)]`}
        >
          <p className={`max-w-[100%] h-auto text-base`}>{summary}</p>
        </div>
        <ul
          className={`${styles.toolsList} hidden md:flex flex-wrap gap-4 text-[13px]  py-1 px-2 md:bg-white/5 md:backdrop-blur rounded-md w-fit`}
        >
          {tools.map((tool, index) => (
            <li className={styles.tool} key={index}>
              {tool}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 mt-3 pl-2 md:pl-6">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow rounded-full grid place-items-center p-2"
            >
              <GitHub size={22} className="icon ani" />
            </a>
          ) : null}
          {extlink ? (
            <a
              href={extlink}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow rounded-full grid place-items-center p-2"
            >
              <ExternalLink size={22} className="icon ani" />
            </a>
          ) : null}
        </div>
      </div>
      {/* Image */}
      <div
        className={`${styles.imgContainer} ${imgPos} brightness-50 hover:brightness-100 transition duration-300 rounded-md`}
      >
        <Image
          src={`/images/featured_projects/${img}`}
          className={`${styles.fprojectImg} rounded-md`}
          layout="fill"
          objectFit="cover"
          alt={"Project Image"}
        />
      </div>
    </div>
  );
}
