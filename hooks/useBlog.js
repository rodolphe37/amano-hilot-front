
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import FizzyButton from '../components/FizzyButton'

import Zoom from 'react-reveal/Zoom';


const Shorten = (text) => {
  return text.substr(0, 260) + '...'
}
const ShortenTitle = (text) => {
  return text.substr(0, 70) + '...'
}

const useBlog = () => {
  const { API_URL } = process.env
  const [blog, setBlog] = useState([]);


  useEffect(() => {
    const getBlog = async () => {
      const result = await axios.get(`${API_URL}/blog-pages`);

      setBlog([result.data])
    }
    getBlog();

  }, []);

  return (
    <main className="blog-first" role="main">
      <div className="container blog-contain">
        <div className="row blog-row">
          {blog.map(blo => (
            <React.Fragment key={blo[0].id}>
              <Zoom ssrFadeout>
                <div key={blo[0].id} className="col-md-4 blog-features">
                  <h2 className="featurette-p">{ShortenTitle(blo[14].titre)}</h2>
                  <Link href={`/blog/${blo[14].id}`}>
                    <img className="card-img-top img-blog" src={`${API_URL}${blo[14].images[0].url}`} alt="" />
                  </Link>
                  <p className="featurette-p">{Shorten(blo[14].contenu)}</p>
                  <Link href={`/blog/${blo[14].id}`}>
                    <div className="featurette-p"><a className="button-effect" role="button"><FizzyButton /></a></div>
                  </Link>
                </div>
                <div className="col-md-4 blog-features">
                  <h2 className="featurette-p">{ShortenTitle(blo[8].titre)}</h2>
                  <Link href={`/blog/${blo[8].id}`}>
                    <img className="card-img-top img-blog" src={`${API_URL}${blo[8].images[0].url}`} alt="" />
                  </Link>
                  <p className="featurette-p">{Shorten(blo[8].contenu)}</p>
                  <Link href={`/blog/${blo[8].id}`}>
                    <div className="featurette-p"><a className="button-effect" role="button"><FizzyButton /></a></div>
                  </Link>
                </div>
                <div className="col-md-4 blog-features">
                  <h2 className="featurette-p">{ShortenTitle(blo[12].titre)}</h2>
                  <Link href={`/blog/${blo[12].id}`}>
                    <img className="card-img-top img-blog" src={`${API_URL}${blo[12].images[0].url}`} alt="" />
                  </Link>
                  <p className="featurette-p">{Shorten(blo[12].contenu)}</p>
                  <Link href={`/blog/${blo[12].id}`}>
                    <div className="featurette-p"><a className="button-effect" role="button"><FizzyButton /></a></div>
                  </Link>
                </div>
              </Zoom>
            </React.Fragment>
          ))}
        </div>
        <hr />
      </div>
    </main>
  )
}

export default useBlog;
