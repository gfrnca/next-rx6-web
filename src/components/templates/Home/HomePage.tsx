/* CSS */
import { Container } from '../../../styles/global'
import { HomePageStyles } from './HomePage.styled'

/* Components */
import Hero from '../../organisms/HomePage/Hero/Hero'
import Platforms from '../../organisms/HomePage/Platforms/Platforms'

const HomePage = () => {
  return (
    <HomePageStyles>
       <Hero />
       <Platforms></Platforms>
    </HomePageStyles>
  )
}

export default HomePage