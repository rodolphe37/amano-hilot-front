import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useBlogs from '../hooks/useBlogs'

const ShortenTitle = (text) => {
  return text.substr(0, 20) + '...'
}

const Shorten = (text) => {
  return text.substr(0, 80) + '...'
}

const ContentFeaturesBlogs = () => {
  const { API_URL } = process.env
  const [blogs, setBlogs] = useState([]);
  const { Blogs } = useBlogs(blogs);

  useEffect(() => {
    const getBlogs = async () => {
      const result = await axios.get(`${API_URL}/blog-pages`);
      setBlogs([result.data])
    }
    getBlogs();

  }, []);


  return (
    <div>
      {blogs.map(bl => (
        <div className="row mb-2" key={bl[0].id}>
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{bl[7].category[0].titre}</strong>
                <h3 className="mb-0">{ShortenTitle(bl[7].titre)}</h3>
                <div className="mb-1 text-muted">{bl[7].date}</div>
                <p className="card-text mb-auto">{Shorten(bl[7].contenu)}</p>
                <a href="#" className="stretched-link">Lire l'article</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src={`${API_URL}${bl[7].images[0].formats.small.url}`} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">{bl[5].category[0].titre}</strong>
                <h3 className="mb-0">{ShortenTitle(bl[5].titre)}</h3>
                <div className="mb-1 text-muted">{bl[5].date}</div>
                <p className="card-text mb-auto">{Shorten(bl[5].contenu)}</p>
                <a href="#" className="stretched-link">Lire l'article</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src={`${API_URL}${bl[5].images[0].formats.small.url}`} alt="" />
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default ContentFeaturesBlogs;
