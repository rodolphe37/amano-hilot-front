import React from 'react';
import Link from 'next/link';
import Slide from 'react-reveal/Slide';
import FizzyButton from '../components/FizzyButton'

const Featurettes = () => {

  return (
    <React.Fragment>
      <div className="container">
        <Slide right cascade ssrFadeout>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 demo-sites">
              <br />
              <a><h3 className="categories title-responsive" style={{ textAlign: 'center', width: '120%' }}>Développeur Web, Mobile et Desktop</h3></a>
              <h2 className="featurette-heading">Site Les Jeux Amano-Hilot<br /> <span className="text-muted">Landing page + 5 jeux.</span></h2>
              <p className="featurette-p">Site conçu avec React, React-spring, express...</p>
            </div>
            <div className="col-md-5">
              <a href="https://rodolphe-augusto.fr" target="new"><img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="assets/images/developpeur/allGames.gif" alt="game amano hilot" /></a>
            </div>
          </div>
          <hr className="featurette-divider" />
          <br />
          <br />
          <div className="row featurette">
            <div className="col-md-7 demo-sites order-md-2">
              <h2 className="featurette-heading">Site NFC Update <br /><span className="text-muted">Gestion des utilisateurs</span></h2>
              <p className="featurette-p">Site conçu avec Nodejs, Express, React, Material UI Hooks, React Hooks et React-Admin (Option Themes Light et Dark)</p>
            </div>
            <div className="col-md-5 order-md-1">
              <a href="https://rodolphe-augusto.fr" target="new"><img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="assets/images/developpeur/movieDemo.gif" alt="nfc update" /></a>
            </div>
          </div>
          <hr className="featurette-divider" />
          <br />
          <br />
          <div className="row featurette">
            <div className="col-md-7 demo-sites">
              <h2 className="featurette-heading">Site Amano-Hilot <br /><span className="text-muted">Site, Blog, Portfolio et Jeux</span></h2>
              <p className="featurette-p">Site conçu avec React, Next, Bootstrap et ReactStrap, Next-seo ainsi que Sass ...</p>
            </div>
            <div className="col-md-5">
              <a href="https://rodolphe-augusto.fr" target="new"><img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="/assets/images/developpeur/amano-hilot.gif" alt="project-amano-hilot" /></a>
            </div>
          </div>
        </Slide>
        <hr className="featurette-divider" />
        <br />
        <br />
      </div>
    </React.Fragment>
  )
}

export default Featurettes;
