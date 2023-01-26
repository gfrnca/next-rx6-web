/* General */
import Image from 'next/image'

/* CSS */
import { PlatformsStyles } from "./Platforms.styled"

/* Assets */
import fivem from '../../../../assets/white_fivem.png'
import redm from '../../../../assets/white_redm.png'
import discord from '../../../../assets/white_discord.png'
import telegram from '../../../../assets/white_telegram.png'
import Link from 'next/link'
import { Container } from '../../../../styles/global'

const Platforms = () => {
  return (
    <PlatformsStyles id='platforms'>
      <Container>
        <div className="platforms-wrapper">
          <div className="our-services">
            <p><span>Desenvolvemos diversos métodos automatizados de integração com o Discord em várias plataformas</span>, dando êmfase na liberdade de nossos clientes na hora da customização.</p>
          </div>


          <h1>Qual a sua <span>plataforma</span> ?</h1>

          <div className="platforms">
            <a target='_blank' href={'https://discord.com/channels/778152778648256563/1067533456726298684'}>
              <div className="platform">
                <Image
                  className='platform-icon'
                  src={fivem}
                  alt="FiveM"
                  title='Integre todo o seu servidor com o Discord'
                />
                <p>FiveM</p>
              </div>
            </a>
            <div className="platform disabled">
              <Image
                className='platform-icon'
                src={redm}
                alt="RedM"
                title='Em breve'
              />
              <p>RedM</p>
              <span>Em breve</span>
            </div>
            <div className="platform disabled">
              <Image
                className='platform-icon'
                src={discord}
                alt="Discord"
                title='Em breve'
              />
              <p>Discord</p>
              <span>Em breve</span>
            </div>
            <div className="platform disabled">
              <Image
                className='platform-icon'
                src={telegram}
                alt="Telegram"
                title='Em breve'
              />
              <p>Telegram</p>
              <span>Em breve</span>
            </div>
          </div>
        </div>
      </Container>
    </PlatformsStyles>
  )
}

export default Platforms