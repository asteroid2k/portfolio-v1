import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Button from "../components/Button";

export default function Navbar({ resumelink }) {
  return (
    <nav className={`navbar navbar-dark fixed-top ${styles.navDark}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            priority
            src="/images/logo.svg"
            height={50}
            width={50}
            alt={"Logo"}
          />
        </a>
        {/* hamburger button */}
        <button
          className={`text-reset ${styles.clearButton}`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="svgAccent">
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="99" height="99" stroke="none" />
              <path
                d="M5 72C3.34315 72 2 73.3431 2 75C2 76.6569 3.34315 78 5 78V72ZM95 78C96.6569 78 98 76.6569 98 75C98 73.3431 96.6569 72 95 72V78ZM5 78H95V72H5V78Z"
                fill="#64FFDA"
              />
              <path
                d="M5 47C3.34315 47 2 48.3431 2 50C2 51.6569 3.34315 53 5 53V47ZM95 53C96.6569 53 98 51.6569 98 50C98 48.3431 96.6569 47 95 47V53ZM5 53H95V47H5V53Z"
                fill="#64FFDA"
              />
              <path
                d="M5 22C3.34315 22 2 23.3431 2 25C2 26.6569 3.34315 28 5 28V22ZM95 28C96.6569 28 98 26.6569 98 25C98 23.3431 96.6569 22 95 22V28ZM5 28H95V22H5V28Z"
                fill="#64FFDA"
              />
            </svg>
          </span>
        </button>
        <div
          className={`offcanvas offcanvas-end ${styles.canvasDark}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Hello there
            </h5>
            {/* close buton */}
            <button
              type="button"
              className={`text-reset ${styles.clearButton}`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="99"
                  height="99"
                  stroke="transparent"
                />
                <path
                  d="M5 47C3.34315 47 2 48.3431 2 50C2 51.6569 3.34315 53 5 53V47ZM95 53C96.6569 53 98 51.6569 98 50C98 48.3431 96.6569 47 95 47V53ZM5 53L95 53V47L5 47V53Z"
                  fill="#64FFDA"
                />
              </svg>
            </button>
          </div>
          <div className="offcanvas-body mx-auto">
            <ul
              className={`navbar-nav justify-content-end text-center flex-grow-1 ${styles.navList}`}
            >
              <li className={`"nav-item"`}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a href={resumelink} target="_blank" rel="noopener noreferrer">
              <Button text="Resume"></Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
