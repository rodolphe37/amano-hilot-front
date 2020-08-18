import { useState, useEffect } from 'react'
import BaseLayout from "../../components/layouts/BaseLayout";
import { NextSeo } from 'next-seo';
import ContactBanner from "../../components/ContactBanner";
import Zoom from 'react-reveal/Zoom';
import InfiniteLoopLoader from '../../components/InfiniteLoopLoader';

const FormationHilot = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const SEO = {
    title: 'Formation Hilot Massage',
    description: "Formation Hilot Massage, technique originaire des Philippines, formation sur 3 jours.",
  }

  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="container">
              <Zoom>
                <h1 style={{ textAlign: 'center' }}>Formation Hilot Massage</h1>
                <div className="jumbotron" style={{ color: 'black', textAlign: 'center' }}>
                  <h1 className="display-4">500€uros</h1>
                  <p className="lead">La durée de la formation est de 3 jours. ( 3 x 6h)</p>
                  <hr className="my-4" />
                  <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="feature-description" style={{ textAlign: 'center' }}>
                      <h2>Cette formation intègre : </h2>
                      <ul className="nopuce" style={{ textAlign: 'left', listStyle: 'none', maxWidth: '55%', marginLeft: '19vw', fontSize: '12px' }}>
                        <li><i className="fa fa-check" />&nbsp;<strong>Apprentissage</strong> de <strong>diagnostic.</strong></li>
                        <li><i className="fa fa-check" />&nbsp;<strong>Apprentissage</strong> des <strong> différents gestes de la technique <br /> avec différentes parties de la main.&nbsp;</strong></li>
                        <li><i className="fa fa-check" />&nbsp;<strong>Apprentissage</strong> de <strong>l'intuition durant le soin.&nbsp;</strong></li>
                        <li><i className="fa fa-check" />&nbsp;<strong>Apprentissage</strong> de la <strong>réinitialisation d'articulation disloquée.</strong></li>
                        <li><i className="fa fa-check" />&nbsp;<strong>Consolidation</strong> des soins effectués.</li>
                        <li><i className="fa fa-check" />&nbsp;Initiation à la <strong>prescriptions de pierres</strong>  (Lithothérapie).</li>
                      </ul>
                      <hr />
                      <div className="feature-left">
                        <div className="feature-icon"><i className="far fa-question-circle" /></div>
                        <div className="feature-content">
                          <p>Vous souhaitez apprendre à vous servir de votre magnétisme , ou bien à appliquer une technique qui fonctionne afin de soulager les maux d'autrui ?</p>
                        </div>
                      </div>
                      <div className="feature-left">
                        <div className="feature-icon"><i className="far fa-compass" /></div>
                        <div className="feature-content">
                          <p>Cette formation fournit toutes les informations nécessaires afin d'être en mesure d'utiliser les capacités d'autoguerison ou/et d'activation de celle-ci, ceci dans un bût de professionnalisation éventuelle !</p>
                        </div>
                      </div>
                      <div className="feature-left">
                        <div className="feature-icon"><i className="far fa-address-book" /></div>
                        <div className="feature-content">
                          <p>Vous pouvez vous renseignez, demander des informations supplémentaires, ou bien réserver une place pour la formation...</p>
                        </div>
                      </div>
                      <ContactBanner />
                      <hr />
                      <p><b>Un certificat de "praticien Hilot" vous sera délivré à la fin de la formation.</b></p>
                      <img src='/assets/images/formations/TEST6certif-formation-hilot1.jpg' alt="certificat" style={{ maxWidth: '50%' }} />
                      <br /> <hr />
                      <h2>Cursus Manghihilot</h2>
                      <ul>
                        <li style={{ listStyle: 'none' }}>
                          <p>Pour les<strong> débutants, Cursus complet en 2 formations conseillé. </strong></p>
                          <p>Pour les<strong> praticiens,</strong> cette formation <strong>vous permet d'être autonome</strong> en <strong>technique Hilot dès la fin de la formation.</strong></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <hr />
                  <h2>Nombre de personnes.</h2>
                  <div className="alert alert-danger" role="alert">
                    <p>Pour <strong>le bon déroulement de la formation </strong>je prend <strong>3 personnes maximum</strong> à chaque session.</p>
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
    </>
  )
}

export default FormationHilot;

