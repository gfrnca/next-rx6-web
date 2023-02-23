/* General */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/* CSS */
import { NavbarStyles } from "./Navbar.styled";

/* Assets */
import brand from "../../../assets/simple_brand.png";
import { Container } from "../../../styles/global";

/* Font Awesome */
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const router = useRouter();

  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(false);

  /* Change background to blurred when scrolling */
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    setLoading(true);
  }, []);

  return (
    <NavbarStyles className={navbar ? "active" : ""}>
      <Container className="container">
        <div className="brand-container">
          <Link href="/">
            <Image className="brand" src={brand} alt="RX6" />
          </Link>
        </div>

        <div className="links-container">
          <ul>
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/#platforms" scroll={false}>
                Nossos serviços
              </Link>
            </li>
            <li className={router.pathname == "/institucional" ? "active" : ""}>
              <Link href="/institucional/politicas-de-privacidade">
                Institucional
              </Link>
            </li>
          </ul>
        </div>

        <div className="discord-cta">
          <a href="https://discord.gg/fJC24gpDZ2" target="_blank">
            <button className="button">
              <FontAwesomeIcon icon={faDiscord} /> Servidor do Discord
            </button>
          </a>
        </div>
      </Container>
    </NavbarStyles>
  );
};

export default Navbar;
