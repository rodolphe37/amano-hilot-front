import React, { useEffect, useState } from 'react';
import useBlogs from '../hooks/useBlogs'
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';

import { NextSeo } from 'next-seo'
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';

const Blogs = () => {
  const { API_URL } = process.env
  const [blogs, setBlogs] = useState([]);
  const { Blogs } = useBlogs(blogs);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  useEffect(() => {
    const getBlogs = async () => {
      const result = await axios.get(`${API_URL}/blog-pages`);

      setBlogs(result.data)
    }
    getBlogs();

  }, []);

  const SEO = {
    title: 'Cartes Blog Amano-Hilot',
    description: "Blog Amano-Hilot sous forme de Cartes d'articles",
  }

  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="container-blog">
              <Blogs blogs={blogs} />
            </div>
          </BaseLayout>
        ) : (
          <BaseLayout>
            <InfiniteLoopLoader />
          </BaseLayout>
        )
      }
    </>
  );
}

export default Blogs;
