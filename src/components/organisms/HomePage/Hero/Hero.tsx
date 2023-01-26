/* CSS */
import { HeroStyles } from "./Hero.styled"
import { Container } from '../../../../styles/global'

const Hero = () => {
  return (
    <HeroStyles>
      <Container>
        <div className="hero-wrapper">
          <h1>Um novo jeito de impulsionar os <span>números</span> do seu servidor</h1>
          <p>Ofereça o melhor suporte aos seus clientes e moderadores</p>

          <div className='hero-benefits'>
            <div className='box'>
              <div className='content'>
                <h2>Crie um bot exclusivo para o seu servidor</h2>
                <p>Personalize da maneira que quiser de forma rápida e intuitiva!</p>
              </div>
            </div>
            <div className='box'>
              <div className='content'>
                <h2>Nós hospedamos e cuidamos da parte difícil</h2>
                <p>Você não precisa se preocupar com a parte entediante, nós cuidamos de tudo para você ter a melhor experiência possível.</p>
              </div>
            </div>
            <div className='box'>
              <div className='content'>
                <h2>O suporte mais dinâmico do mercado</h2>
                <p>Iremos te ajudar no que precisar quando quiser, sem custos adicionais. Você não vai ficar na mão!</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="divisor">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#12022e" fill-opacity="1" d="M0,128L720,192L1440,96L1440,320L720,320L0,320Z"></path>
      </svg>
      </div>
      
    </HeroStyles>
  )
}

export default Hero