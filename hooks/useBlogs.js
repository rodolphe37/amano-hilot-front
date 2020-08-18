import React from "react";
import Link from 'next/link';
import FizzyButton from '../components/FizzyButton'
import Zoom from 'react-reveal/Zoom';

const Shorten = (text) => {
  return text.substr(0, 260) + '...'
}

const useBlogs = (blogs) => {
  const { API_URL } = process.env


  const Blogs = () => (
    <div className="row">
      {blogs.reverse().map(bl => (
        <Zoom right cascade ssrFadeout>
          <div key={bl.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <Link href={`/blog/${bl.id}`}>
                <a><img className="card-img-top img-blog" src={`${API_URL}${bl.images[0].url}`} alt="" /></a>
              </Link>
              <div className="card-body blog-card">
                <div className="card-title">
                  <h1>{bl.titre}</h1>
                </div>
                <p className="card-text">{Shorten(bl.contenu)}</p>
              </div>
              <Link href={`/blog/${bl.id}`}>
                <div><a className="button-effect" role="button"><FizzyButton /></a></div>
              </Link>
              <div className="card-footer bg-success">
                <small className="text-muted">{bl.date}</small>
                <small className="text-muted2">Auteur : {bl.users[0].username}</small>
              </div>
            </div>
          </div>
        </Zoom>

      ))}
    </div>
  )
  return {
    Blogs
  }
}

export default useBlogs;

