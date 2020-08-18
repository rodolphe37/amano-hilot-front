import React, { useEffect, useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link'
import axios from 'axios';
import { UncontrolledCollapse, Card } from 'reactstrap';
import ReactPlayer from 'react-player'
import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';
import { NextSeo } from 'next-seo'
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';



const BlogsPage = () => {
  const { API_URL } = process.env
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  // const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const getBlogs = async () => {
      const result = await axios.get(`${API_URL}/blog-pages`);

      setBlogs(result.data)
    }
    getBlogs();

  }, []);


  const SEO = {
    title: 'Blog Amano-Hilot',
    description: "Blog Amano-Hilot sous forme de liste d'articles",
  }

  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <main role="main" className="container blogsArticles">
              <Link href="/rechercher">
                <a className="btn btn-lg btn-light shadow-drop-2-center search-but" style={{ position: 'absolute', fontWeight: 'bold', right: '40%' }} type="submit">Chercher par mots clés</a>
              </Link>
              <br />
              <br />
              <Zoom ssrFadeout>
                <div className="row" style={{ borderTop: '1px solid white' }}>
                  <div className="col-8 blog-main" data-tooltip="Les articles sont listés par défaut du plus récent au plus ancien, cliquez pour inverser l'ordre d'apparition... &#xa; &#xa; A chaque click vous inverserez l'ordre."
                    data-tooltip-location="bottom">
                    <br />
                    <Link href="/blogsPage">
                      <a>
                        <h3 className="pb-4 mb-4 font-italic" >
                          <span className="text-blogPage" style={{ textTransform: 'initial' }}><button className="btn btn-primary text-white text-white-banner" style={{ fontWeight: 'bold', minWidth: '217px' }}>Cliquez pour inverser l'ordre des articles</button></span>
                        </h3>
                      </a>
                    </Link>
                  </div>
                  {blogs.reverse().map(bl => (
                    <React.Fragment key={bl.id}>
                      <div className="col-md-8 blog-main">
                        <div className="blog-post" id={bl.id}>
                          <Zoom ssrFadeout>
                            <small className="text-white" style={{ fontWeight: 'bold' }}>Date de publication : {bl.date}</small>
                            <h1 className="blog-post-title">{bl.titre}</h1>
                            <Link href={`/blog/${bl.id}`}>
                              <a><img className="card-img-top img-blog" src={`${API_URL}${bl.images[0].url}`} alt="" /></a>
                            </Link>
                            <Zoom left>
                              <h2>{bl.subtitre}</h2>
                            </Zoom>
                            <span className="body-button-blog" id="toggler" style={{ width: '25%', marginBottom: 20 }}>
                              <a className="components-button-blog">
                                <span className="particle-button"></span>
                                <span className="particle-button"></span>
                                <span className="particle-button"></span>
                                <span className="particle-button"></span>
                                <p className="read-more"> Cliquez ici</p>
                              </a>
                            </span>
                            <UncontrolledCollapse toggler="#toggler">
                              <Card className="blog-card list-blog">
                                <hr />
                                <p>{bl.contenu}</p>
                                <blockquote>
                                  <h3>{bl.subtitre2}</h3>
                                </blockquote>
                                <p>{bl.contenu2}</p>
                                <h3 className={bl.subtitre3 !== null && bl.subtitre3.length >= 80 ? "cb cbl" : ""}>
                                  {bl.subtitre3}
                                </h3>
                                <p>{bl.contenu3}</p>
                                <h3>{bl.subtitre4}</h3>
                                <p>{bl.contenu4}</p>
                                <h3>{bl.subtitre5}</h3>
                                <p>{bl.contenu5}</p>
                                <h3>{bl.subtitre6}</h3>
                                <p>{bl.contenu6}</p>
                                <h3>{bl.subtitre7}</h3>
                                <p>{bl.contenu7}</p>
                                <h3>{bl.subtitre8}</h3>
                                <p>{bl.contenu8}</p>
                                <h3>{bl.subtitre9}</h3>
                                <p>{bl.contenu9}</p>
                                <h3>{bl.subtitre10}</h3>
                                <p>{bl.contenu10}</p>
                                <h2>{bl.subtitre11}</h2>
                                <p>{bl.contenu11}</p>
                                <h2>{bl.subtitre12}</h2>
                                <p>{bl.contenu12}</p>
                                <h2>{bl.subtitre13}</h2>
                                <p>{bl.contenu13}</p>
                                <h2>{bl.subtitre14}</h2>
                                <p>{bl.contenu14}</p>
                                <h2>{bl.subtitre15}</h2>
                                <p>{bl.contenu15}</p>
                                <h2>{bl.subtitre16}</h2>
                                <p>{bl.contenu16}</p>
                                <h2>{bl.subtitre17}</h2>
                                <p>{bl.contenu17}</p>
                                <h2>{bl.subtitre18}</h2>
                                <p>{bl.contenu18}</p>
                                <h2>{bl.subtitre19}</h2>
                                <p>{bl.contenu19}</p>
                                <h2>{bl.subtitre20}</h2>
                                <p>{bl.contenu20}</p>
                                <h2>{bl.subtitre21}</h2>
                                <p>{bl.contenu21}</p>
                                <h2>{bl.subtitre22}</h2>
                                <p>{bl.contenu22}</p>
                                <h2>{bl.subtitre23}</h2>
                                <p>{bl.contenu23}</p>
                                <h2>{bl.subtitre24}</h2>
                                <p>{bl.contenu24}</p>
                                <h2>{bl.subtitre25}</h2>
                                <p>{bl.contenu25}</p>
                                <h2>{bl.subtitre26}</h2>
                                <p>{bl.contenu26}</p>
                                <h2>{bl.subtitre27}</h2>
                                <p>{bl.contenu27}</p>
                                <h2>{bl.subtitre28}</h2>
                                <p>{bl.contenu28}</p>
                                <h2>{bl.subtitre29}</h2>
                                <p>{bl.contenu29}</p>
                                <h2>{bl.subtitre30}</h2>
                                <p>{bl.contenu30}</p>
                                {bl.movie !== null ? <div className='player-wrapper-blogPage'><ReactPlayer url={`${API_URL}${bl.movie.url}`} controls width='100%' height='100%' /></div> : ""}
                                <hr />
                              </Card>
                            </UncontrolledCollapse>
                          </Zoom>
                        </div>
                      </div>
                      <Zoom right ssrFadeout>
                        <aside className="col-md-4 blog-sidebar">
                          <br />
                          <br />
                          <div className="p-4 mb-3 bg-light rounded">
                            <h4 className="font-italic">Auteur : {bl.users[0].username}</h4>
                            <ol className="list-unstyled">
                              <li><a href="#">GitHub</a></li>
                              <li><a href="#">InstaGram</a></li>
                              <li><a href="#">Facebook</a></li>
                            </ol>
                            <h4 className="font-italic">Sources : </h4>
                            <div className="mb-0">
                              <ul>
                                <li><a href={bl.references} target="new"><p>{bl.references === null ? "" : "Sources"}</p></a></li>
                              </ul>
                            </div>
                          </div>
                        </aside>
                      </Zoom>
                    </React.Fragment>
                  ))}
                </div>
              </Zoom>
              <style jsx>{`
        .col-8.blog-main {
          max-width: 37%;
          margin-top: -25px;
          margin-bottom: -45px;
        }
        @media (max-width: 1024px) {
          .search-but {
            font-size: 12px
          }
        }
        `}</style>
            </main>
          </BaseLayout>
        ) : (
          <BaseLayout>
            <InfiniteLoopLoader />
          </BaseLayout>
        )}
    </>

  )
}
export default BlogsPage;
