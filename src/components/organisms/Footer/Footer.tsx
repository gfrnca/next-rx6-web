/* CSS */
import { FooterStyles } from './Footer.styled'

/* Font Awesome */
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '../../../styles/global'

const Footer = () => {
  return (
    <FooterStyles>
      <Container className='container'>
        <div className="footer-wrapper">
          <p>Desenvolvido com ❤️ pela RX6</p>

          <div className="social-medias">
            <div className="social">
              <FontAwesomeIcon icon={ faInstagram } />
            </div>
            <div className="social">
              <FontAwesomeIcon icon={ faDiscord } />
            </div>
          </div>
        </div>
      </Container>
    </FooterStyles>
  )
}

export default Footer
