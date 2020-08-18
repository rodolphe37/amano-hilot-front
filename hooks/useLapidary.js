import React from "react";
import Zoom from 'react-reveal/Zoom';
import ContactBanner from "../components/ContactBanner";
import RantingWidget from '../components/RantingWidget'
import ButtonLapidArt from "../components/ButtonLapidArt";


const useLapidary = (lapid) => {
  const { API_URL } = process.env

  const Lapidary = () => (
    <div className="row">
      <ButtonLapidArt />
      {lapid.map(lp => (
        <React.Fragment key={lp.images[0].id}>
          <Zoom cascade ssrFadeout>
            <div className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[0].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague Argent 925 avec opale boulder</a>
                  </h4>
                  <p className="card-text">Cadeau d'un ami à son père, la bague est en angleterre à présent !</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid " src={`${API_URL}${lp.images[1].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague en argrent 925 avec aigue-marine</a>
                  </h4>
                  <p className="card-text">Bague femme charmante et élégante.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[2].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Parure en Turquoise d'Arizona</a>
                  </h4>
                  <p className="card-text">Parure complète pendentif, et boucles d'oreilles!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[4].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague plaquée or rose avec Lapis Lazulis</a>
                  </h4>
                  <p className="card-text">Bague petit budget en plaquée or rose et pierre noble</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[5].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague plaquée or avec Opale boulder du Queensland</a>
                  </h4>
                  <p className="card-text">bague petit budget avec Opale boulder d'Australie.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[6].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Médaillon rond pour pendentif avec Oeil du Tigre</a>
                  </h4>
                  <p className="card-text">Médaillon avec Oeil du Tigre d'Afrique!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[8].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Médaillon ovale pour pendentif avec Lapis Lazulis</a>
                  </h4>
                  <p className="card-text">Pendentif avec pierre de Lapis Lazulis d'Asie.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[10].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague plaquée argent avec opale Boulder "Fairy" d'Australie</a>
                  </h4>
                  <p className="card-text">Bague "petit budget" avec opale Boulder "Fairy" d'Australie</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[11].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Parure plaquée or\or rose en Calcedoine bleue. </a>
                  </h4>
                  <p className="card-text">Parure boucles d'oreilles plaquée or 18K et bague plaquée or rose 18K ajustable avec pierre de calcédoine bleue.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[12].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague Argent 925 avec Opale Boulder</a>
                  </h4>
                  <p className="card-text">Bague plaquée argent 925 avec Opla "fairy" boulder d'Australie.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[13].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague argent 925 avec Opale cristal.</a>
                  </h4>
                  <p className="card-text">Bague argent 925 avec Opale cristal 'Lightning Ridge' d'Australie.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[14].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Pendentif Oeil de Tigre</a>
                  </h4>
                  <p className="card-text">Pendentif en Oeil de Tigre d'Afrique du Sud.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[15].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Pendentif en Calcedoine bleue.</a>
                  </h4>
                  <p className="card-text">Pendentif en Calcedoine bleue.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[16].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Pendentif en Oeil de Tigre</a>
                  </h4>
                  <p className="card-text">Pendentif forme "Prana" en Oeil de Tigre d'Afrique du Sud.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[17].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Ecarteur d'oreilles en Oeil de Tigre.</a>
                  </h4>
                  <p className="card-text">Ecarteur d'oreilles en Oeil de Tigre d'Afrique du Sud.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[18].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague "Jaguar" en argent avec Amethyste</a>
                  </h4>
                  <p className="card-text">Bague "Jaguar" en argent 925 avec pierre d'Amethyste.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[19].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague plaquée argent en Oeil de Tigre.</a>
                  </h4>
                  <p className="card-text">Bague "petit bidget" en plaquée argent avec pierre d'Oeil de Tigre d'Afrique du sud.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[20].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bracelet avec Malachite.</a>
                  </h4>
                  <p className="card-text">Bracelet acier inoxydable avec pierre de Malachite d'Afrique.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[21].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Boucle d'oreille en charoite</a>
                  </h4>
                  <p className="card-text">Boucle d'oreilles "dormeuses" avec pierre de charoite de Russie.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[22].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague plaquée or rose avec Opale du Honduras.</a>
                  </h4>
                  <p className="card-text">Bague plaquée or rose 18K avec pierre d'Opale du Honduras.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[23].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Pendentif en Oeil de Tigre.</a>
                  </h4>
                  <p className="card-text">Pendentif en Oeil de Tigre d'Afrique du Sud.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[24].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague or blanc avec opale d'Australie </a>
                  </h4>
                  <p className="card-text">Bague or blanc 24K avec opale "Coober Pedy" d'Australie</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[25].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague argent avec Opale noire.</a>
                  </h4>
                  <p className="card-text">Bague argent 925 avec Opale noire "Lightning Ridge" Australie.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[26].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Pendentif Oeil de Tigre</a>
                  </h4>
                  <p className="card-text">Pendentif en Oeil de Tigre d'Afrique du Sud.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[27].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Pendentif Oeil de Tigre</a>
                  </h4>
                  <p className="card-text">Pendentif en Oeil de Tigre d'Afrique du Sud.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[28].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague argent avec Grenat étoilé.</a>
                  </h4>
                  <p className="card-text">Bague argent 925 avec pierre de Grenat étoilé.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[29].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bracelet or blanc avec Amétrine.</a>
                  </h4>
                  <p className="card-text">Bracelet or blanc 24K avec pierre d'Amétrine Amérique du Sud.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>

            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[30].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bracelet avec Fluorite.</a>
                  </h4>
                  <p className="card-text">Bracelet Acier inoxydable avec pierre de Fluorite</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[31].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague argent opale cristal.</a>
                  </h4>
                  <p className="card-text">Bague argent 925 avec pierre d'opale cristal "Coober Pedy" d'Australie.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[32].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Bague or blanc opale cristal.</a>
                  </h4>
                  <p className="card-text">Bague or blanc 24K avec pierre opale cristal "Lightning Ridge" d'Australie.</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[33].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[34].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[35].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[36].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[37].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[38].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[39].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[40].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[41].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[42].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[43].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[44].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[45].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[46].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[47].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[48].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[49].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[50].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[51].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[52].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[53].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[54].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[55].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[56].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[57].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[58].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[59].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[60].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[103].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[62].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[63].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[64].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[65].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[66].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[67].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[68].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[69].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[70].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[71].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[72].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[73].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[74].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[75].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[76].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[77].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[78].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[79].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[80].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[81].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[82].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[83].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[84].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[85].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[86].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[87].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[88].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[89].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[90].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[91].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[92].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[93].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[94].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[95].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[96].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[97].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[98].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[99].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[100].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[101].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[102].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[104].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[106].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[107].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[108].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[109].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[110].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[111].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[112].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[113].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[114].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[116].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
            <div key={lp.images.id} className="col-lg-4 col-md-6 mb-4 col-lapidary">
              <div className="card card-lapid h-100">
                <img className="pattern" src="assets/bg-pattern.png" alt="" />
                <a><img className="card-img-top img-lapid" src={`${API_URL}${lp.images[117].url}`} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a>Item Six</a>
                  </h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer footlap">
                  <RantingWidget />
                </div>
              </div>
            </div>
          </Zoom>
        </React.Fragment>
      ))}
      <div className="banner-lapidary alert alert-info banner-info" style={{ position: 'fixed', bottom: '0', width: '100%', height: '67px', padding: 0, marginLeft: '-14%' }}>
        <ContactBanner />
      </div>
      <style jsx>{`
      .col-lg-4 {
        max-width: 32.333%;
      }
      .img-lapid {
      width: 75%;
      margin-left: 13%;
      }
      `}</style>
    </div>
  )
  return {
    Lapidary
  }
}

export default useLapidary;
