import React, { useEffect, useState } from 'react';
import useLapidary from '../hooks/useLapidary'
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import { NextSeo } from 'next-seo'
import Zoom from 'react-reveal/Zoom';
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';

const Lapidary = () => {
  const { API_URL } = process.env
  const [lapidar, setLapidar] = useState([]);
  const { Lapidary } = useLapidary(lapidar);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  useEffect(() => {
    const getLapidary = async () => {
      const result = await axios.get(`${API_URL}/page-lapidarts`);

      setLapidar(result.data)
    }
    getLapidary();

  }, []);

  const SEO = {
    title: 'Lapidaire - Mes créations',
    description: "Mes créations de Lapidaire (taille de pierre précieuse)",
  }

  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="container-lapidary" id='home'>
              <Zoom>
                <h1 style={{ textAlign: 'center', color: 'white', padding: '10px', fontSize: '30px' }}>Lapid'Art, La valorisation des gemmes imparfaites</h1>
                <h2 style={{ color: 'white', textAlign: 'center', fontSize: '15px' }}>Taille de pierres précieuses, semi-précieuses, fines et nobles, Réparation de bijoux, Création de bijoux. Stage Lapidaire.</h2>
                <h3 className="jewel-page" style={{ textAlign: 'center', color: 'white', padding: '10px', fontSize: '19px' }}><i className="far fa-gem" style={{ color: 'white' }} /> Bijoux uniques pour personnes uniques ! <i className="far fa-gem" style={{ color: 'white' }} /></h3>
              </Zoom>
              <Lapidary />
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

export default Lapidary;
