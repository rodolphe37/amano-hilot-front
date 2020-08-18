import React, { useState, useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import { NextSeo } from 'next-seo'
import SkillsAbility from '../components/SkillsAbility';
import HeaderPortfolio from '../components/HeaderPortfolio';
import ImportantsPointPortfolio from '../components/ImportantsPointsPortfolio';
import BigProjectPortfolio from '../components/BigProjectPortfolio';
import LittlePalmaresPortfolio from '../components/LittlePalmaresPortfolio';
import MyWorksPortfolio from '../components/MyWorksPortfolio';
import ContactBanner from '../components/ContactBanner';
import '../styles/w3c.css'
import BaseLayout from '../components/layouts/BaseLayout';
import { Row, Container } from 'reactstrap';
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';


const Portfolio = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const SEO = {
    title: 'Portfolio - Développeur',
    description: "Mon Portfolio de Développeur d'applications web, mobile et desktop",
  }

  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="content-dev">
              <Zoom ssrFadeout>
                <HeaderPortfolio />
              </Zoom>
              <Fade right>
                <ImportantsPointPortfolio />
              </Fade>
              <Fade left ssrFadeout>
                <BigProjectPortfolio />
              </Fade>
              <Bounce right ssrFadeout>
                <LittlePalmaresPortfolio />
              </Bounce>
              <Fade ssrFadeout>
                <MyWorksPortfolio />
              </Fade>
              <Slide bottom ssrFadeout>
                <div className="w3-container w3-light-grey w3-padding-64">
                  <div className="w3-row-padding">
                    <SkillsAbility />
                  </div>
                </div>
              </Slide>
              <div className="w3-container w3-center w3-dark-grey" style={{ padding: '59px 16px', marginBottom: '20px' }} id="pricing">
                <Zoom left>
                  <div className="container-fluid bg-1 text-center">
                    <h3 className="margin">Ou me trouver?</h3><br />
                    <div className="row">
                      <div className="col-sm-4">
                        <p>Si vous ne me trouvez pas en train de Coder. <br /> Ce que je fait très régulièrement afin d'assouvir cette passion !!! <br />alors vous me trouverez...</p>
                        <img src="/assets/images/about/script-developpeur.jpg" className="img-responsive" style={{ width: '100%' }} alt="Image" />
                      </div>
                      <div className="col-sm-4">
                        <p>En train de jouer de la guitare, <br /> ce que je fait depuis maintenant 25 ans et qui est un besoin fondamental pour moi. Ou bien, vous me trouverez...</p>
                        <img src="/assets/images/about/playing-guitar.jpeg" className="img-responsive" style={{ width: '100%' }} alt="Image" />
                      </div>
                      <div className="col-sm-4">
                        <p>En train de dessiner ou peindre. <br /> Ce que je fait depuis... <br /> aussi loin que je puisse remonter mes souvenirs, j'ai toujours dessiné.</p>
                        <img src="/assets/images/about/drawing.webp" className="img-responsive" style={{ width: '100%' }} alt="Image" />
                      </div>
                      <h5 className="container-fluid text-center title-creatif">Créatif, je développe des sites Web élégants avec les dernières technologies.<br /> Je cherche actuellement la bonne équipe où je peux contribuer à créer des produits digitaux incroyables.</h5>
                      <Container><p>Je suis actuellement à la recherche d'un emploi (éventuellement à distance) en tant que développeur fullStack NodeJs\ReactJs,<br /> un emploi dans lequel je peux faire passer mes compétences à un niveau supérieur et évoluer en tant que développeur Web.</p>
                        <br />
                        <h5>Vous aimez mon portfolio et pensez que je suis bon candidat?<br /> Travaillons ensemble!</h5></Container>
                    </div>
                  </div>
                </Zoom>
              </div>
              <Container className="banner-portfolio">
                <ContactBanner />
              </Container>
            </div>
          </BaseLayout>
        ) : (
          <BaseLayout>
            <InfiniteLoopLoader />
          </BaseLayout>
        )
      }
    </>
  )
}

export default Portfolio;
