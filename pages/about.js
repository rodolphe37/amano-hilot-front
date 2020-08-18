import React, { useState, useEffect } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { NextSeo } from 'next-seo'
import { Container } from 'reactstrap';
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';
import { sign } from 'crypto';

const SEO = {
  title: 'A propos de moi',
  description: "Informations concernant Rodolphe Augusto",
}


const About = () => {
  const [loading, setLoading] = useState(true)
  const [onClickedAbout, setOnClickedAbout] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, []);

  const HandleClicked = () => {
    if (onClickedAbout === false) {
      setOnClickedAbout(true)
    } else {
      setOnClickedAbout(false)
    }
  }

  return (
    <>
      {loading === false
        ? (<BaseLayout>
          <NextSeo {...SEO} />
          <div>
            <div className="form-group switch-barber">
              <span className="switch switch-sm">
                <input type="checkbox" className="switch" id="switch-sm" onClick={() => HandleClicked()} />
                <label htmlFor="switch-sm">{onClickedAbout === false ? ('Légère barbe') : ('Barbe')}</label>
              </span>
            </div>
            <hr style={{ background: '#2287ce' }} />
            <Fade>
              <div className="container-fluid bg-1 text-center">
                <h3 className="margin">Qui suis-je ?</h3>
                {onClickedAbout === false ? (<p style={{fontWeight:'400', fontSize:'13px'}}>En ce moment, je suis comme ça ! </p>) : (<p style={{fontWeight:'400', fontSize:'13px'}}>Mais à d'autres moments, je suis comme ça aussi...</p>)}
                <img className="molecular-background" src="/assets/images/about/molecular.png" alt="molecule" />
                <Fade right>
                  {onClickedAbout === true ? (<img src="/assets/images/presentation/perso-3.png" className="img-responsive img-circle margin" style={{ display: 'inline' }} alt="Bird" width={350} height={350} />) : (<img src="/assets/images/presentation/perso-3b.png" className="img-responsive img-circle margin" style={{ display: 'inline' }} alt="Bird" width={350} height={350} />)}
                  <h3>Je suis un grand passionné de la Vie elle même.</h3>
                  <Container>
                    <p>Depuis ma plus tendre enfance, je vois les algorithmes de la nature tout autour de moi, ceux de la causalité ou des objets informationnels(Matière) en physique mais aussi ceux de la sphère de la pensée comprenant le sub-conscient, l'inconscient et le conscient... Toutes ces petites choses qui forme "Un Tout". Depuis que je sais lire je n'ai cessé de chercher à comprendre "l'ensemble" et "l'envers du décor". Je me suis donc instruit en lisant autant de la littérature, que de la philosophie, de la physique en passant par la physique quantique, la sociologie, la psychologie, la médecine incluant l'anatomie et le savoir ancien des tribus amérindiennes ou des peuples autochtones, etc...<br /> Ce qui à créé en moi la naîssance d'une vrai passion envers "la Vie" et tout ce qui constitue "le grand monde du Vivant" en général.</p>
                  </Container>
                </Fade>
              </div>
            </Fade>
            <div className="container-fluid bg-2 text-center">
              <Fade>
                <div className="second-section-about bg-3 container-fluid" style={{ paddingTop: '30px', paddingBottom: '0', marginBottom: '15px' }}>
                  <h3 className="margin" style={{ color: 'black' }}>Qu'es-ce que je suis ?</h3>
                  <div className="what-about">
                    <Fade right>
                      <Container>
                        <Fade right cascade>
                          <h3 className="margin" style={{ textAlign: 'center', fontSize: '1.3rem', color: 'black' }}>Je suis développeur d'application web, mais aussi auteur,<br /> thérapeute "Hilot", formateur ainsi que lapidaire<br /> dans mon temps libre.</h3>
                          <div className="row content-what-section" style={{ width: '100%' }}>
                            <i className="fas fa-code" style={{ color: '#fd7e14' }} />{' '}<b style={{ fontSize: '14px' }}>&ensp;Je suis développeur d'application web, mobiles et desktop : </b>
                            <p style={{ textAlign: 'left' }}>J'ai appris le Javascript lors d'une formation à la Wild Code School, j'ai tout de suite était conquis par l'idée de pouvoir développer à l'aide d'un langage de programmation les idées qui remplissent ma tête. Je conçoit des application comme des sites internet ou des mini-jeux, mais aussi des applications mobile ou pour ordinateurs. Ce site ainsi que les quelques autres projets que vous verrez dans la section développeur ne sont qu'une petite partie de ce qu'il est possible de faire dans ce domaine. <br />Domaine qui tient plus d'une passion que d'une profession pour ma part. 😏.</p>

                            <i className="fas fa-child" style={{ color: '#fd7e14' }} />{' '}<b style={{ fontSize: '14px' }}>&ensp;Je suis Thérapeute Hilot ou "Manghihilot" : </b>
                            <p style={{ textAlign: 'left' }}>Il y a presque 20 ans, suite à la rencontre avec une personne ayant une double hernies, sciatique et lumbago à répétition je prends la décision de tester une technique de massage intuitive.
                            Le soin dure 3 mois à raison de 2 massages par semaine. A l'issue de cette période, les   bénéfices des soins apparaissent sans équivoques. La personne retrouve cent pour cent de sa mobilité et n'est plus assujétie aux douleurs réccurentes.
                      Riche de cette guérison inattendue et merveilleuse, je prend pleinement conscience des bienfaits de mon art de guérison. Peu de temps aprés, je découvre par le biais du documentaire " Médecine d'ailleurs " que cette technique de massage innée chez moi s'appelle le Hilot massage et est pratiquée aux Philippines depuis des temps immémoriaux. <br /> Ce secteur d'activité s'est présenté à moi comme une vocation. 🙏 </p>

                            <i className="fas fa-book" style={{ color: '#fd7e14' }} />{' '}<b style={{ fontSize: '14px' }}>&ensp;Je suis Auteur : </b>
                            <p style={{ textAlign: 'left' }}>Il y a un peu plus d'un an environ, j'ai publié quelques planches anatomiques de Yoga que j'ai conçu avec les logiciels "Gimp" et "InkScape" (les homologues Open Sources de Photoshop et Adobe Illustrator), très rapidement cette publication Facebook a touchée plus de 13 400 000 personnes et à était partagée plus de 180 000 fois. Devant un tel succés, j'ai décider de publier un livre "42 postures de Yoga et étirements" qui comporte les 42 planches anatomiques ainsi que les bienfaits avec diverses autres informations. En septembre 2019, j'ai franchi le pas de l'auto-édition, donc je suis inscrit entant qu'auteur à la <a href="https://catalogue.bnf.fr/ark:/12148/cb458093623" target="new">Bibliothèque nationale de France</a> depuis cette date. <br />Ce fût une action dû à une réelle demande plus qu'une envie personnelle, mais j'en suis pleinement comblé. 🤓</p>

                            <i className="far fa-gem" aria-hidden="true" style={{ color: '#fd7e14' }} />{' '}<b style={{ fontSize: '14px' }}>&ensp;Je suis Lapidaire : </b>
                            <p style={{ textAlign: 'left' }}>En 2016, j'ai decidé d'apprendre l'art de la taille des pierres précieuses, fines et nobles. Depuis je créer des bijoux, je les répares, et quelques fois, je taille des pierres pour les bijoutiers. Depuis le début de l'année 2020 je me concentre plus sur les stages de sensibilisation à la taille des pierres, transmettre mon savoir est une passion viscérale chez moi. Mon plus beau souvenir concernant ce secteur d'activité, c'est une maman qui à offert à sa fille de 12 ans, pour son anniversaire, un stage chez moi afin qu'elle fabrique sont propre pendentif, de la pierre brûte d'oeil du Tigre qu'elle a choisie parmis ma collection au pendentif fini. Ma petite stagiaire fût assidue durant le stage et comblée au final... Merveilleux souvenir  🤩 .</p>
                          </div>
                        </Fade>
                      </Container>
                    </Fade>
                    <Fade left>
                      <div className="row">
                        {onClickedAbout === true ? (<img className="img-responsive img-circle margin img-what what-i-iam" src="/assets/images/presentation/perso-5.png" alt="me with barber" />) : (<img className="img-responsive img-circle margin img-what what-i-iam" src="/assets/images/presentation/perso-5b.png" alt="me without barber" />)}
                      </div>
                    </Fade>
                  </div>
                </div>
              </Fade>
              <Slide right>
                <div className="container-fluid bg-1 text-center">
                  <Slide bottom>
                    <h3 className="margin">Ce qui me fait me sentir Vivant ! </h3><br />
                    <div className="row">
                      <div className="col-sm-4">
                        <p>Ressentir le monde qui m'entoure, sentir la caresse que la brise légère dépose sur mon visage, l'eau de la mère couler entre mes doigts de pieds quand je suis en train de la contempler les pieds dedans.</p>
                        <img src="/assets/images/about/birds1.jpg" className="img-responsive margin" style={{ width: '100%' }} alt="Image" />
                      </div>
                      <div className="col-sm-4">
                        <p>Découvrir une magnifique fleur, qui non contente de submerger mes yeux par ses couleurs chatoyantes, insufle à mes narines un parfum d'une douceur délicatement enhivrante.</p>
                        <img src="/assets/images/about/birds3.jpg" className="img-responsive margin" style={{ width: '100%' }} alt="Image" />
                      </div>
                      <div className="col-sm-4">
                        <p>Savoir que ce monde est aussi fragile que superbement beau, et que envers et contre tout, voir les éléments comme un grand ensemble, former à un instant donné... un havre de paix.</p>
                        <img src="/assets/images/about/birds2.jpg" className="img-responsive margin" style={{ width: '100%' }} alt="Image" />
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slide>
            </div>
            <hr style={{ background: '#00aeef' }} />
            <style jsx>{`
          .molecular-background {
            position: absolute;
            opacity: .037;
            display: flex;
            right: 0;
            top: 2px;
            width: 100%;
            height: 29.8%;
            object-fit: cover;
            margin-top:14px;
          }
        `}</style>
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

export default About;
