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
          <p>{'</Desenvolvido com ❤️ pela RX6>'}</p>

          <div className="social-medias">
            <a href='https://www.instagram.com/rx6gg/' target='_blank'>
              <div className="social instagram">
                <FontAwesomeIcon icon={ faInstagram } />  
              </div>
            </a>

            <a href='https://discord.gg/fJC24gpDZ2' target='_blank'>
              <div className="social discord">
                <FontAwesomeIcon icon={ faDiscord } />
              </div>
            </a>
          </div>
        </div>
      </Container>
    </FooterStyles>
  )
}

export default Footer
