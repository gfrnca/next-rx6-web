/* General */
import Image from 'next/image'

/* CSS */
import { PlatformsStyles } from "./Platforms.styled"

/* Assets */
import fivem from '../../../../assets/white_fivem.png'
import redm from '../../../../assets/white_redm.png'
import discord from '../../../../assets/white_discord.png'
import telegram from '../../../../assets/white_telegram.png'

const Platforms = () => {
  return (
    <PlatformsStyles>
      <div className="platforms-wrapper">
        <h1>Qual a sua <span>plataforma</span> ?</h1>

        <div className="platforms">
          <div className="platform">
            <Image
              className='platform-icon'
              src={fivem}
              alt="FiveM"
              title='Integre todo o seu servidor com o Discord'
            />
            <p>FiveM</p>
          </div>
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

    </PlatformsStyles>
  )
}

export default Platforms