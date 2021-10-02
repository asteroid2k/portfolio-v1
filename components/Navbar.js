import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { Menu, Minus } from "react-feather";

export default function Navbar({ resumelink }) {
  return (
    <nav
      className={`navbar navbar-dark navbar-expand-md fixed-top ${styles.navDark}`}
      id="navspy"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image alt="logo" src="/images/logo.svg" width="40" height="40" />
        </a>
        <button
          className={`${styles.navToggler} ${styles.navButton}`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <Menu size={40} />
        </button>
        <div
          className={`offcanvas offcanvas-end ${styles.navCanvas}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Hello There
            </h5>
            <button
              type="button"
              className={`text-reset ${styles.navButton}`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <Minus size={40} />
            </button>
          </div>
          <div className="offcanvas-body text-center">
            <ul
              className={`navbar-nav justify-content-end flex-grow-1 ${styles.navList}`}
            >
              <li className="nav-item">
                <a
                  className="nav-link link link"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a href={resumelink} className={`${styles.navAction} my-auto`}>
              {"Resumé"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
