import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import FizzyButton from '../components/FizzyButton';

const Shorten = (text) => {
  return text.substr(0, 250) + '...'
}


const Features = () => {
  const { API_URL } = process.env
  const [therapy, setTherapy] = useState([]);

  useEffect(() => {
    const getTherapy = async () => {
      const result = await axios.get(`${API_URL}/pages`);

      setTherapy([result.data])
    }
    getTherapy();

  }, []);

  return (
    <React.Fragment>
      {therapy.map(ther => (
        <div key={ther[0].id} className="container marketing">
          <div className="row">
            <Zoom ssrFadeout>
              <div className="col-lg-4">
                <hr />
                <img className="bd-placeholder-img rounded-circle img-prez-thera" src={`${API_URL}${ther[0].image.formats.small.url}`} alt="Sea picture" />
                <h2>{ther[0].titre}</h2>
                <p className="featurette-p">{Shorten(ther[0].description)}</p>
                <div className="featurette-p">
                  <Link href={`/therapy/${ther[0].id}`}>
                    <div><a className="button-effect" role="button"><FizzyButton /></a></div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <Link href="/therapeute">
                  <a><h3 className="categories title-therap">Thérapeute</h3></a>
                </Link>
                <img className="bd-placeholder-img rounded-circle img-prez-thera" src={`${API_URL}${ther[1].image.formats.small.url}`} alt="presentation-2" />
                <h2>{ther[1].titre}</h2>
                <p className="featurette-p">{Shorten(ther[1].description)}</p>
                <div className="featurette-p">
                  <Link href={`/therapy/${ther[1].id}`}>
                    <div><a className="button-effect" role="button"><FizzyButton /></a></div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <hr />
                <img className="bd-placeholder-img rounded-circle img-prez-thera" src={`${API_URL}${ther[2].image.formats.small.url}`} alt="presentation-3" />
                <h2>{ther[2].titre}</h2>
                <p className="featurette-p">{Shorten(ther[2].description)}</p>
                <div className="featurette-p">
                  <Link href={`/therapy/${ther[2].id}`}>
                    <div><a className="button-effect" role="button"><FizzyButton /></a></div>
                  </Link>
                </div>
              </div>
            </Zoom>
          </div>
          <style jsx>{`
            .img-prez-thera {
              width:140px;
              height:140px
            }
          `}</style>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Features;



