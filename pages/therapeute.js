import React, { useEffect, useState } from 'react';
import useTherapy from '../hooks/useTherapy';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import { NextSeo } from 'next-seo'
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';

const Therapy = () => {
  const { API_URL } = process.env
  const [therapy, setTherapy] = useState([]);
  const { Therapy } = useTherapy(therapy);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const SEO = {
    title: 'Thérapeute',
    description: 'Mes différentes activités de thérapie et pour les thérapeutes',
  }

  useEffect(() => {
    const getTherapy = async () => {
      const result = await axios.get(`${API_URL}/pages`);

      setTherapy(result.data)
    }
    getTherapy();

  }, []);
  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="container-therapy">
              <Therapy />
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

export default Therapy;
