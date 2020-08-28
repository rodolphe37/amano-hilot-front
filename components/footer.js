import React from 'react';
import Link from 'next/link'
import '../styles/footer.css'
import Zoom from 'react-reveal/Zoom';
import AntAnimation from './AntAnimation';


const Footer = () => {
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <AntAnimation />
        <div className="topButton">
          <a href="#home" ><img src="/assets/backtotop.png" alt="back-to-top-button" /></a>
        </div>
        <Zoom cascade ssrFadeout>
          <div className="row footer-content">
            <div className="col-6 col-md">
              <Link href="/therapeute#home">
                <a className="titl">
                  <h5>Thérapeute</h5>
                </a>
              </Link>
              <div className="list-unstyled text-small">
                <Link href='/tarifs-des-prestations#home'><a className="link-footer">Tarif des prestations</a></Link>
                <Link href="/formation/formations#therapeute"><a className="link-footer">Stages et Formation</a></Link>
                <Link href="/mentions-legales#home">
                  <a className="link-footer">
                    Mentions Légales
                  </a>
                </Link>
                <Link href="/social-amano#home">
                  <a className="link-footer opt">Réseaux Sociaux</a>
                </Link>
              </div>
            </div>
            <div className="col-6 col-md">
              <Link href="/portfolio#home">
                <a className="titl">
                  <h5>Développeur</h5>
                </a>
              </Link>
              <div className="list-unstyled text-small dev-list">
                <a className="link-footer" href="https://www.rodolphe-augusto.fr/" target="new">Mon Portfolio</a><br />
                <br />
                <br />
              </div>
              <div>
                <small className="d-block mb-3 link-footer brand-footer">Copyright &copy; Amano-Hilot.fr 2020</small>
              </div>
            </div>
            <div className="col-6 col-md">
              <Link href="/lapidaire#home">
                <a className="titl">
                  <h5>Lapidaire</h5>
                </a>
              </Link>
              <div className="list-unstyled text-small">
                <Link href="/formation/formations#lapidaire"><a className="link-footer">Stage Lapidaire</a></Link>
                <Link href="/formation/formations#lithotherapie"><a className="link-footer">Stage Lithothérapie</a></Link>
                <a className="link-footer" href="https://www.facebook.com/LapidArt-173291856624985" target="new">Page Facebook</a>
              </div>
            </div>
            <div className="col-12 col-md socials">
              <div className="list-unstyled text-small">
                <h5 style={{ marginLeft: '2.5vw' }}>Page Facebook</h5>
                <iframe title="facebook" className="facebook-footer" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Famanohilot%2F&tabs=timeline&width=250&height=120&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="250" height="125" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
          </div>
        </Zoom>
      </footer>
    </>



  )
}

export default Footer;

