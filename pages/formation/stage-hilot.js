import { useState, useEffect } from 'react'
import BaseLayout from "../../components/layouts/BaseLayout";
import { NextSeo } from 'next-seo';
import ContactBanner from "../../components/ContactBanner";
import Zoom from 'react-reveal/Zoom';
import InfiniteLoopLoader from '../../components/InfiniteLoopLoader';

const StageHilot = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const SEO = {
    title: 'Stage Hilot Massage',
    description: "Stage Hilot Massage, technique originaire des Philippines",
  }

  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="container">
              <Zoom>
                <h1 style={{ textAlign: 'center' }}>Stage Hilot Massage</h1>
                <div className="jumbotron" style={{ color: 'black', textAlign: 'center' }}>
                  <h1 className="display-4">150 €uros</h1>
                  <p className="lead">La durée du stage est d'environ 4 heures.</p>
                  <hr className="my-4" />
                  <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="feature-description" style={{ textAlign: 'center' }}>
                      <h2>Ce stage intègre : </h2>
                      <ul className="nopuce" style={{ textAlign: 'left', listStyle: 'none', maxWidth: '55%', marginLeft: '19vw', fontSize: '12px' }}>
                        <li><i className="fa fa-check" />&nbsp;<strong>Apprentissage</strong> de <strong>diagnostic.</strong></li>
                        <li><i className="fa fa-check" />&nbsp;<strong> Apprentissage</strong> des <strong> gestes qui soignent&nbsp;</strong></li>
                        <li><i className="fa fa-check" />&nbsp;<strong>sensibilisation</strong> à <strong>l'intuition durant le soin.&nbsp;</strong></li>
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
                          <p>Ce stage fournit toutes les informations nécessaires afin d'être en mesure d'utiliser les capacités d'autoguerison ou/et d'activation de celle-ci, ceci dans un bût de soulagement des douleurs de votre entourage !</p>
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
                      <p><b>Une attestation de stage vous sera remise à la fin du stage.</b></p>
                      <img src='/assets/images/formations/specimen-stage-hilot1.jpg' alt="certificat" style={{ maxWidth: '50%' }} />
                    </div>
                  </div>
                  <br />
                  <hr />
                  <h2>Nombre de personnes.</h2>
                  <div className="alert alert-danger" role="alert">
                    <p>Pour le <strong>bon déroulement du stage</strong>, je prend&nbsp;<strong>deux personnes maximum</strong>.</p>
                    <p><strong>Le stage de 4 heures</strong> sera effectué<strong> l'après-midi</strong>.</p>
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

export default StageHilot;

