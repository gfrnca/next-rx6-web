/* General */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

/* CSS */
import { NavbarStyles } from "./Navbar.styled"

/* Assets */
import brand from '../../../assets/simple_brand.png'
import { Container } from '../../../styles/global'

/* Font Awesome */
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

  const router = useRouter();

  return (
    
    <NavbarStyles>
      <Container className='container'>
        <div className="brand-container">
          <Link href='/'>
            <Image
              className='brand'
              src={brand}
              alt="RX6"
            />
          </Link>
        </div>

        <div className="links-container">
          <ul>
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href='/'>Início</Link>
            </li>
            <li>
              <Link href='/teste'>Nossos serviços</Link>
            </li>
            <li>
              <Link href='/teste'>Institucional</Link>
            </li>
            <li>
              <Link href='/teste'>Quem somos?</Link>
            </li>
          </ul>
        </div>

        <div className='discord-cta'>
          <button className='button'><FontAwesomeIcon icon={faDiscord} /> Servidor do Discord</button>
        </div>
      </Container>
    </NavbarStyles>
    
  )
}

export default Navbar