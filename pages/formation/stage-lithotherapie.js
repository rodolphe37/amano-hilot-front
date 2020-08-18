import { useState, useEffect } from 'react'
import BaseLayout from "../../components/layouts/BaseLayout";
import { NextSeo } from 'next-seo';
import ContactBanner from "../../components/ContactBanner";
import Zoom from 'react-reveal/Zoom';
import InfiniteLoopLoader from '../../components/InfiniteLoopLoader';

const Lithotherapie = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const SEO = {
    title: 'Stage Lithothérapie',
    description: "Stage de Lithothérapie",
  }

  return (
    <React.Fragment>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="container">
              <Zoom ssrFadeout>
                <h1 style={{ textAlign: 'center' }}>Stage Lithothérapie</h1>
                <div className="jumbotron" style={{ color: 'black', textAlign: 'center' }}>
                  <h1 className="display-4">150€uros</h1>
                  <p className="lead">La durée du stage est d'environ 4 heures.</p>
                  <hr className="my-4" />
                  <div className=" col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="feature-description" style={{ textAlign: 'center' }}>
                      <h2>Ce stage intègre : </h2>
                      <ul className="nopuce" style={{ textAlign: 'left', listStyle: 'none', maxWidth: '55%', marginLeft: '14vw', fontSize: '12px' }}>
                        <li><i className="far fa-gem" />&nbsp;<strong>Apprentissage</strong> des <strong>différentes pierres</strong>&nbsp;communément utilisées et de <strong>leurs vertus.</strong></li>
                        <li><i className="far fa-gem" />&nbsp;<strong>Sensibilisation </strong>à la<strong> technique de taille&nbsp;</strong>des pierres.&nbsp;</li>
                        <li><i className="far fa-gem" />&nbsp;<strong>sensibilisation</strong> à la <strong>technique de ponçage, pré-polissage et polissage.&nbsp;</strong></li>
                        <li><i className="far fa-gem" />&nbsp;<strong>&#8203;&#8203;&#8203;&#8203;prescription </strong>des pierres<strong> dans le cadre d'un soin.&nbsp;</strong></li>
                      </ul>
                      <hr />
                      <div className="feature-left">
                        <div className="feature-icon"><i className="far fa-question-circle" /></div>
                        <div className="feature-content">
                          <p>Vous souhaitez en savoir plus sur les pierres , leurs vertus ainsi que la technique de taille et de polissage de celle-ci ?</p>
                        </div>
                      </div>
                      <div className="feature-left">
                        <div className="feature-icon"><i className="far fa-compass" /></div>
                        <div className="feature-content">
                          <p>Ce stage fournit toutes les informations nécessaires pour être en mesure de prescrire des pierres en rapport avec leurs vertus...</p>
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
                      <p><b>Une attestation vous sera remise à la fin du stage.</b></p>
                      <img src='/assets/images/formations/specimen-stage-litho1.jpg' alt="certificat" style={{ maxWidth: '50%' }} />
                      <hr />
                      <p><b>Ainsi qu'un fichier PDF complet (Ebook) sur la Lithothérapie et les vertus des pierres vous sera offert à la fin du stage.</b></p>
                      <img src='/assets/images/formations/ebook-litho-capture.jpeg' alt="certificat" style={{ maxWidth: '50%' }} />
                    </div>
                  </div>
                  <br />
                  <hr />
                  <h2>Nombre de personnes.</h2>
                  <div role="alert" className="alert alert-danger">
                    <p><strong>Le stage de 4 heures</strong>&nbsp;sera effectué<strong>&nbsp;le matin ou l'après-midi au choix.</strong></p>
                    <p>Pour le&nbsp;<strong>bon déroulement du stage</strong>, je&nbsp;prend<strong>&nbsp;deux personnes maximum</strong>.</p>
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

export default Lithotherapie;
