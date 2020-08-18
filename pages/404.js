import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Error = () => {
  const { API_URL } = process.env
  const { SITE_URL } = process.env

  return (
    <div className="stage">
      <div className="error-text">
        <div className="logo-error">
          <h1 className="title-error  text-pop-up-top">ERREUR 404</h1>
          <img className="puff-in-center " src={`${API_URL}/uploads/logo-amano-hilot_2_6d0b15c029.png`} />
        </div>
        <h1 className="tracking-in-contract">Perdu Peut-être ? </h1>
      </div>
      <Zoom ssrFadeout>
        <div className="scene-error">
          <div className="halo">
            <i />
            <span className="halo-star" />
            <span className="halo-star" />
            <span className="halo-star" />
            <i />
            <i />
            <i />
          </div>
          <div className="lantern">
            <div className="lantern-handle" />
            <div className="lantern-inner">
              <div className="lantern-chain" />
              <div className="lantern-head" />
              <div className="lantern-body">
                <div className="lantern-spark" />
                <div className="lantern-spark" />
                <div className="lantern-spark" />
                <div className="lantern-flame" />
              </div>
              <div className="lantern-base" />
            </div>
          </div>
          <div className="planets">
            <div className="planet" />
            <div className="planet" />
            <div className="planet" />
            <div className="planet" />
            <div className="planet" />
            <div className="planet" />
          </div>
        </div>
      </Zoom>
      <div className="error-text2">
        <h2 className="focus-in-expand-fwd">Il semblerai qu'il n'y ai rien ici!!!</h2>
        <h3 className="text-blur-out">Retourner sur la <a className="error-link" href={"http://localhost:3000" || "https://amano-hilot.fr"} onClick={() => "http://localhost:3000" || "https://amano-hilot.fr"}>page d'Accueil</a></h3>
        <h3 className="alert-error"></h3>
      </div>
    </div>
  )
}

export default Error;
