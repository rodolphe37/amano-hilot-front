import { useState, useEffect } from 'react';
import BaseLayout from "../../components/layouts/BaseLayout";
// import { Container, Row } from "reactstrap";
import { NextSeo } from 'next-seo';
import ContactBanner from "../../components/ContactBanner";
import Zoom from 'react-reveal/Zoom';
import InfiniteLoopLoader from '../../components/InfiniteLoopLoader';

const StageLapidaire = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const SEO = {
    title: 'Stage Lapidaire',
    description: "Stage Lapidaire, confection de pendentif en 4 heures",
  }

  return (
    <React.Fragment>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="container">
              <Zoom bottom>
                <h1 style={{ textAlign: 'center' }}>Stage Lapidaire</h1>
                <div className="jumbotron" style={{ color: 'black', textAlign: 'center' }}>
                  <h1 className="display-4">100€uros</h1>
                  <p className="lead">La durée du stage est d'environ 4 heures.</p>
                  <hr className="my-4" />
                  <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="feature-description" style={{ textAlign: 'center' }}>
                      <h2>Ce stage intègre : </h2>
                      <div className="diamond-lapid" style={{ textAlign: 'left' }}>
                        <ul style={{ listStyle: 'none', fontSize: '12px' }}>
                          <li><i className="far fa-gem" /><b>Taille de la pierre</b></li>
                          <li><i className="far fa-gem" /> <b>Ponçage</b></li>
                          <li><i className="far fa-gem" /> <b>Pré-polissage</b></li>
                          <li><i className="far fa-gem" /> <b>Polissage</b></li>
                          <li><i className="far fa-gem" /> <b>Assemblage</b></li>
                        </ul>
                      </div>
                      <hr />
                      <div className="feature-left">
                        <div className="feature-icon"><i className="far fa-question-circle" /></div>
                        <div className="feature-content">
                          <p>Vous souhaitez faire votre pendentif ou votre pendule vous-même? Vous aimeriez toucher du bout des doigts le monde du minéral? Ou bien vous êtes un passionnée des pierres et vous aimeriez savoir tailler en cabochon les pierres nobles ou précieuses ?</p>
                        </div>
                      </div>
                      <div className="feature-left">
                        <div className="feature-icon"><i className="far fa-compass" /></div>
                        <div className="feature-content">
                          <p>Ce stage fournit les connaîssances nécessaires pour être en mesure de tailler, polir et monter les pierres vous même.</p>
                        </div>
                      </div>
                      <div className="feature-left">
                        <div className="feature-icon"><i className="far fa-address-book" /></div>
                        <div className="feature-content">
                          <p>Vous pouvez vous renseignez, demander des informations supplémentaires, ou bien réserver une place pour le stage...</p>
                        </div>
                      </div>
                      <ContactBanner />
                      <hr />
                      <p><b>Une Attestation vous sera délivrée à la fin du stage.</b></p>
                      <img src='/assets/images/formations/test-certif-stage-lapidaire1.jpg' alt="certificat" style={{ maxWidth: '50%' }} />
                      <br /> <hr />
                      <h2>Informations importantes</h2>
                      <ul>
                        <li style={{ listStyle: 'none' }}>
                          <p>Tout le <strong>matériel nécessaire</strong> est <strong>fournit</strong> sur place.</p>
                          <p>Vous pouvez <strong>venir avec votre pierre</strong> ou utiliser une <strong>pierre de votre choix dans mon stock disponible.</strong>.</p>
                          <p>(dans le second cas un surplus de <strong>5 à 20 Euros</strong> sera demandé selon la pierre choisie, <br />ce qui équivaut au <strong>prix de la pierre brute</strong>.)</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <hr />
                  <h2>Nombre de personnes.</h2>
                  <div className="alert alert-danger alert-banner-stages" role="alert">
                    <p>Pour le <strong>bon déroulement du stage</strong>, <strong>j'initie</strong>&nbsp;<strong>une&nbsp;personne à la fois</strong>.</p>
                    <p><strong>Le stage de 4 heures</strong>&nbsp;peux être effectué <strong>un matin </strong>ou<strong> un après-midi </strong>au choix.</p>
                  </div>
                </div>
              </Zoom>
            </div>
          </BaseLayout>
        ) : (
          <BaseLayout>
            <InfiniteLoopLoader />
          </BaseLayout>
        )
      }
    </React.Fragment>
  )
}

export default StageLapidaire;
