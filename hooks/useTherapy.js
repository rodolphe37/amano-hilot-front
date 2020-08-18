import React from "react";
import Link from 'next/link';
import FizzyButton from '../components/FizzyButton'
import Zoom from 'react-reveal/Zoom';
import ContactBanner from "../components/ContactBanner";

const Shorten = (text) => {
  return text.substr(0, 260) + '...'
}

const useTherapy = (therapy) => {
  const { API_URL } = process.env

  const Therapy = () => (
    <div className="row">
      {therapy.map(ther => (
        <div key={ther.id} className="col-lg-4 col-md-6 mb-4">
          <Zoom right ssrFadeout>
            <div className="card h-100">
              <Link href={`/therapy/${ther.id}`}>
                <a><img className="card-img-top img-blog" src={`${API_URL}${ther.image.url}`} alt="" /></a>
              </Link>
              <div className="card-body">
                <div className="card-title">
                  <h1>{ther.titre}</h1>
                  <h2>{ther.subtitre}</h2>
                </div>
                <p className="card-text">{Shorten(ther.description)}</p>
              </div>
              <Link href={`/therapy/${ther.id}`}>
                <div><a className="button-effect" role="button"><FizzyButton /></a></div>
              </Link>
              <div className="card-footer">
                <small className="text-muted">{ther.date}</small>
              </div>
            </div>
          </Zoom>
        </div>
      ))}
      <ContactBanner />
      <style jsx>{`
      .cards {
        background-color: white;
        margin-bottom: 27px;
        margin: 103px;
        padding: 31px;
        box-shadow: 1px 1px 17px black;
        border-radius: 5px;
        border: 1px solid purple;
    }
      `}</style>
    </div>
  )
  return {
    Therapy
  }
}

export default useTherapy;
