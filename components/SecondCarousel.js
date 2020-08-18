
import React, { useState, useEffect } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
// import useLapidary from '../hooks/useLapidary'
import axios from 'axios'

const items = [
  {
    src: '/assets/images/lapidaire-carousel/lapidaire-carousel-1.png',
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: '/assets/images/lapidaire-carousel/lapidaire-carousel-2.png',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: '/assets/images/lapidaire-carousel/lapidaire-carousel-3.png',
    altText: '',
    caption: '',
    header: '',
    key: '3'
  },
  {
    src: '/assets/images/lapidaire-carousel/lapidaire-carousel-4.png',
    altText: '',
    caption: '',
    header: '',
    key: '4'
  }
];

const SecondCarousel = () => {
  const { API_URL } = process.env
  const [lapid, setLapid] = useState([]);
  // const { Lapidary } = useLapidary(lapid);

  useEffect(() => {
    const getLapidary = async () => {
      const result = await axios.get(`${API_URL}/page-lapidarts`);

      setLapid([result.data])
    }
    getLapidary();

  }, []);

  return (
    <>
      <div className="container">
        <div className="second-carousel">
          <h3 style={{ textAlign: 'center', color: 'white', padding: '10px' }}>Lapid'Art, La valorisation des gemmes imparfaites</h3>
          <UncontrolledCarousel items={items} />
          <div>

            <h4 style={{ textAlign: 'center', color: 'white', padding: '10px' }}><i className="far fa-gem" style={{ color: 'white' }} /> Bijoux uniques pour personnes uniques ! <i className="far fa-gem" style={{ color: 'white' }} /></h4>

          </div>
          <style jsx>{`
            .second-carousel {
              position: relative;
              border: 1px solid white;
              border-radius: 4px;
              background-color: rgba(29, 41, 81, 0.6);
              box-shadow: 1px 1px 7px black;
            }
          `}</style>
        </div>
      </div>
    </>
  )
};

export default SecondCarousel;
