import { useState, useEffect } from 'react';
// import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import Features from './features';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel'
import SecondCarousel from '../components/SecondCarousel';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import Type from '../components/type';
import BlogPrez from '../hooks/useBlog';
import Featurettes from './featurettes';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import { NextSeo } from 'next-seo';
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';


const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3250)
  }, [])

  const SEO = {
    title: "Rodolphe Augusto | Amano'Hilot.fr",
    description: " Site Internet de Rodolphe Augusto - Amano-Hilot. Thérapeute, Développeur Web Mobile et Desktop, Lapidaire. Différents services sont proposés : Le Hilot massage, Analyses géobiologiques, Lithothérapie, Service d'assistance à l'Auto Edition, Conception et Développement d'Applications Web, Mobile ou Ordinateur. Stages et formation Hilot Massage, Stage Lapidaire 'taille de pierre précieuses' ",

    openGraph: {
      type: 'website',
      locale: 'fr_IE',
      url: 'https://amano-hilot.fr',
      site_name: 'Rodolphe Augusto | Amano-Hilot.fr',
    },

    facebook: {
      handle: 'Amano-hilot.fr  "Manghihilot" Et "Albularyo',
      site: '@amanohilot',
      cardType: 'summary_large_image',
    },
  }

  return (
    <>
      {loading === false
        ? (
          <BaseLayout className="cover">
            <NextSeo {...SEO} />
            <div>
              <div className="home-page">
                <CookieConsent
                  location="bottom"
                  buttonText="J'ai compris"
                  cookieName="amanoCookieSite"
                  style={{
                    background: "linear-gradient(90deg, #00aeef 0%, #096fb9 100%)",
                    textShadow: " 2px 2px black",
                    borderTop: "1px solid white"
                  }}
                  buttonStyle={{ background: "#fd7e14", color: "white", fontWeight: "bold", fontSize: "13px", textAlign: "center" }}
                  expires={1}
                  overlay
                >
                  <span style={{ fontSize: "15px" }}>
                    <b>🍪 Nous utilisons des cookies pour améliorer votre expérience sur notre site 🍪</b>{" "}
                    <br />
            En continuant votre navigation sur ce site, vous acceptez l’utilisation de cookies pour mesurer l’audience de notre site et vous proposer des fonctionnalités sociales.&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="/mentions-legales">
                      <a style={{ fontSize: "10px" }}>Lien vers les Mentions légales</a>
                    </Link>
                  </span>
                </CookieConsent>
                <div className="background-image">
                  <img src="/assets/images/background-index.png" alt="background-image" />
                </div>
                <Zoom ssrFadeout>
                  <Carousel />
                </Zoom>
                <Container>
                  <Row>
                    <Container>
                      <Row>
                        <div className="col-lg-3 side-effet">
                          <Fade left ssrFadeout>
                            <SideMenu />
                          </Fade>
                        </div>
                        <Col md="9" className="hero-welcome-wrapper">
                          <Fade right>
                            <div className="hero-welcome-text">
                              <h1 className="anim-index" style={{ textAlign: 'center' }}>
                                Bienvenue sur le site de <b>Rodolphe Augusto</b>.<br />
                                <b><Type /></b>
                              </h1>
                            </div>

                            <div className="hero-welcome-bio" style={{ textAlign: 'center' }}>
                              <h1>
                                Visitez mon Univers.
                        </h1>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Container>
                    <hr />
                    <Bounce bottom>
                      <Features />
                    </Bounce>
                    <hr className="featurette-divider" />
                    <br />
                    <br />
                    <br />
                    <Zoom cascade>
                      <Featurettes />
                    </Zoom>
                  </Row>
                  <Slide left>
                    <Link href="/lapidaire">
                      <a>
                        <h3 className="categories" style={{ textAlign: 'center' }}>Lapidaire</h3>
                        <h4 style={{ color: 'white', textAlign: 'center' }}>Taille de pierres précieuses, semi-précieuses, fines et nobles, Réparation de bijoux, Création de bijoux.</h4>
                        <SecondCarousel />
                      </a>
                    </Link>
                    <hr className="featurette-divider" />
                  </Slide>
                  <br />
                  <Slide right ssrFadeout>
                    <Link href="/blogs">
                      <a><h3 className="categories" style={{ textAlign: 'center' }}>Blog</h3></a>
                    </Link>
                    <BlogPrez />
                  </Slide>
                  <Zoom cascade ssrFadeout>
                    <Card className="citation" body inverse >
                      <CardTitle><h4>"Ce monde est un monde d’abondance, dont les racines invisibles ignorent les barrières et transcendent les distances".</h4></CardTitle>
                      <CardText className="name-citation">Emmanuel Ransfort</CardText>
                    </Card>
                  </Zoom>
                </Container>
              </div>
              <style jsx>{
                `
          .home-page {
            margin-top: 80px;
          }
        `
              }</style>
            </div>
          </BaseLayout>
        ) : (
          <BaseLayout className="cover">
            <InfiniteLoopLoader />
          </BaseLayout>
        )}
    </>
  )
}

export default Home;
