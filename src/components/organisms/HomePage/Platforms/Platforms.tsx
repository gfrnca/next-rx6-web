/* General */
import Image from 'next/image'

/* CSS */
import { PlatformsStyles } from "./Platforms.styled"

/* Assets */
import fivem from '../../../../assets/white_fivem.png'
import redm from '../../../../assets/white_redm.png'
import discord from '../../../assets/white_discord.png'

const Platforms = () => {
  return (
    <PlatformsStyles>
      <div className="platforms-wrapper">
        <h1>Plataformas suportadas</h1>

        <div className="platforms">
          <div className="platform">
            <Image
              className='platform-icon'
              src={fivem}
              alt="FiveM"
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
          </div>
          <div className="platform disabled">
            <Image
              className='platform-icon'
              src={redm}
              alt="RedM"
              title='Em breve'
            />
            <p>RedM</p>
          </div>
        </div>
      </div>

    </PlatformsStyles>
  )
}

export default Platforms