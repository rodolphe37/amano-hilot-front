import Link from 'next/link';
import BaseLayout from '../../components/layouts/BaseLayout';
import { NextSeo } from 'next-seo';
import InfiniteLoopLoader from '../../components/InfiniteLoopLoader';


const Formations = () => {


  const SEO = {
    title: 'Les Stages et formation',
    description: "Les Stages et formation dans les secteurs Thérapeutes et Lapidaire proposées par Amano-Hilot.fr",
  }

  return (
    <>
      <BaseLayout>
        <NextSeo {...SEO} />
        <div className="container container-formations" style={{ backgroundColor: 'rgba(29, 41, 81, 0.6)', marginBottom: '10px' }}>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-3">Stages & Formation</h1>
            <p className="lead text-center">Je vous propose 3 stages et 1 formation.</p>
          </div>
          <hr style={{ background: 'purple' }} id='lapidaire' />
          <div className="container">
            <h1 className="display-4 text-center">Lapidaire</h1>
            <p className="lead text-center">Vous souhaitez découvrir l'univers des pierres taillées ? <br /> Apprendre à faire votre propre pendentif ou votre pendule ? <br />En 4 heures, c'est possible avec moi.</p>
            <div className="card-deck mb-3 text-center" style={{ alignItems: 'center', justifyContent: 'center' }}>
              <div className="card mb-4  shadow-drop-white-center" style={{ maxWidth: '50%' }}>
                <div className="card-header">
                  <h3 className="my-0 font-weight-bold " style={{ fontSize: '20px', color: 'purple' }}>Stage Lapidaire</h3>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">100 <small className="text-muted">€uros</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li style={{ fontStyle: 'italic' }}>4 Heures</li>
                    <li><h3 style={{ fontWeight: 'bold', fontSize: '18px', color: 'purple' }}>Ce stage intègre : </h3></li>
                    <li style={{ fontStyle: 'italic' }}><i className="far fa-gem" aria-hidden="true" /> Taille de la pierre</li>
                    <li style={{ fontStyle: 'italic' }}><i className="far fa-gem" aria-hidden="true" /> Ponçage</li>
                    <li style={{ fontStyle: 'italic' }}><i className="far fa-gem" aria-hidden="true" /> Pré-polissage</li>
                    <li style={{ fontStyle: 'italic' }}><i className="far fa-gem" aria-hidden="true" /> Polissage</li>
                    <li style={{ fontStyle: 'italic' }}><i className="far fa-gem" aria-hidden="true" /> Assemblage</li>
                    <li>Tout le matériel nécessaire est fournit sur place.</li>
                    <li><h3 style={{ fontWeight: 'bold', fontSize: '18px', color: 'purple' }}> - Confectionner et réaliser un pendentif ou un pendule vous-même!</h3></li>
                    <li>Ce stage comprend les étapes de taille, ponçage, pré-polissage, polissage et assemblage. Vous repartez avec un produit fini.</li>
                  </ul>
                  <Link href="/formation/stage-lapidaire#home">
                    <button type="button" className="btn btn-primary text-white text-white-banner" style={{ color: 'white', fontWeight: 'bold' }}>Regarder la fiche de ce stage</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr id='therapeute' style={{ background: 'purple' }} />
          <div className="container">
            <h1 className="display-4 text-center">Thérapeute</h1>
            <p className="lead text-center">Vous souhaitez maîtriser le magnétisme qui est en chacun de nous ?<br /> Apprendre une technique ancestrale qui est utilisée aux Philippines depuis des siècles ? <br />Ou bien vous aspirez simplement à soulager votre prochain de certaines douleurs récurrentes?<br /> Alors cette section s'adresse à vous !</p>
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4  shadow-drop-white-center">
                <div className="card-header">
                  <h3 className="my-0 font-weight-bold " style={{ fontSize: '20px', color: 'purple' }}>Stage de Hilot massage</h3>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">150 <small className="text-muted">€uros</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li style={{ fontStyle: 'italic' }}>4 Heures</li>
                    <li><h3 style={{ fontWeight: 'bold', fontSize: '18px', color: 'purple' }}>s'adressant aux débutants</h3></li>
                    <li>- Sensibilisation à l'apprentissage de la technique du Hilot.</li>
                    <li><h3 style={{ fontWeight: 'bold', fontSize: '18px', color: 'purple' }}>s'adressant aux praticiens ayant déjà une technique de soin.</h3></li>
                    <li>- Perfectionnement à une technique que vous possédez déjà, afin d'intégrer le Hilot.</li>
                  </ul>
                  <Link href="/formation/stage-hilot#home">
                    <button type="button" className="btn btn-primary text-white text-white-banner" style={{ color: 'white', fontWeight: 'bold' }}>Regarder la fiche de ce stage</button>
                  </Link>
                </div>
              </div>
              <div className="card mb-4  shadow-drop-white-center">
                <div className="card-header">
                  <h3 className="my-0 font-weight-bold" style={{ fontSize: '20px', color: 'purple' }}> Formation de Hilot massage</h3>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">500 <small className="text-muted">€uros</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li style={{ fontStyle: 'italic' }}>3 Jours</li>
                    <li><h3 style={{ fontWeight: 'bold', fontSize: '18px', color: 'purple' }}>s'adressant aux débutants</h3></li>
                    <li style={{ fontWeight: 'bold', fontStyle: 'italic' }}>(Cursus complet en 2 formations conseillé)</li>
                    <li> - Apprendre la technique afin de pouvoir prodiguer des soins complets.</li>
                    <li><h3 style={{ fontWeight: 'bold', fontSize: '18px', color: 'purple' }}>s'adressant aux praticiens ayant déjà une technique de soin.</h3></li>
                    <li> - Cursus d'intégration du Hilot massage.</li>
                  </ul>
                  <Link href="/formation/formation-hilot#home">
                    <button type="button" className="btn btn-primary text-white text-white-banner" style={{ color: 'white', fontWeight: 'bold' }}>Regarder la fiche de cette formation</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr id="lithotherapie" style={{ background: 'purple' }} />
          <div className="container">
            <h1 className="display-4 text-center">Lithothérapie</h1>
            <p className="lead text-center">Vous souhaitez faire des pierres taillées ou brutes vos alliés ?<br /> Mieux connaitre cette univers riche qu'est le minéral?<br /> Vous êtes passionné par les pierres et vous souhaitez faire votre propre bijou?<br /> Alors ce stage est fait pour vous!</p>
            <div className="card-deck mb-3 text-center" style={{ alignItems: 'center', justifyContent: 'center' }}>
              <div className="card mb-4  shadow-drop-white-center" style={{ maxWidth: '50%' }}>
                <div className="card-header">
                  <h3 className="my-0 font-weight-bold " style={{ fontSize: '20px', color: 'purple' }}>Stage de Lithothérapie</h3>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">150 <small className="text-muted">€uros</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li style={{ fontStyle: 'italic' }}>4 Heures</li>
                    <li><h3 style={{ fontWeight: 'bold', fontSize: '18px', color: 'purple' }}>Pour les débutants:</h3></li>
                    <li> - 2 stages lithothérapie et 1 à 2 stages Lapidaire est conseillé afin d'être autonome. </li>
                    <li><h3 style={{ fontWeight: 'bold', fontSize: '18px', color: 'purple' }}>Pour les praticiens:</h3></li>
                    <li>- cela vous permet de prescrire en Lithothérapie dès la fin de ce stage,</li>
                    <li>mais 1 ou 2 stages Lapidaire est conseillé en complément si vous souhaitez tailler les pierres.</li>
                  </ul>
                  <Link href="/formation/stage-lithotherapie#home">
                    <button type="button" className="btn btn-primary text-white text-white-banner" style={{ color: 'white', fontWeight: 'bold' }}>Regarder la fiche de ce stage</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  )
}

export default Formations;
