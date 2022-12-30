import React from "react";
import Link from "next/link";
import Logo from "./Logo";

interface HeaderProps {
  aboutActive?: boolean;
  workActive?: boolean;
  contactActive?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  aboutActive,
  contactActive,
  workActive,
}) => (
  <header>
    <div className="box">
      <Link href="/" title="Home">
        <h1>
          <Logo />
        </h1>
      </Link>
      <nav>
        <Link
          href="/about"
          title="Go to about"
          className={aboutActive ? "active" : ""}
        >
          <p>About</p>
        </Link>
        <Link
          href="/work/"
          title="Go to work"
          className={workActive ? "active" : ""}
        >
          <p>Work</p>
        </Link>
        <Link
          href="/contact"
          title="Go to contact"
          className={contactActive ? "active" : ""}
        >
          <p>Contact</p>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
