import { useState, useEffect } from 'react'
import BaseLayout from "../../components/layouts/BaseLayout";
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import ReactPlayer from 'react-player'
import Zoom from 'react-reveal/Zoom';
import { NextSeo } from 'next-seo'
import InfiniteLoopLoader from "../../components/InfiniteLoopLoader";

const Blog = ({ blog }) => {
  const { API_URL } = process.env
  const router = useRouter();
  const { id } = router.query
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const SEO = {
    title: `${blog.titre}`,
    description: `${blog.subtitre}`,
  }

  return (
    <>
      {loading === false
        ? (
          <BaseLayout>
            <NextSeo {...SEO} />
            <div className="container blog">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <Zoom ssrFadeout>
                    <h1 className="display-4">{blog.titre}</h1>
                    <img className="card-img-top img-blog" src={`${API_URL}${blog.images[0].url}`} alt="" />
                    <br /> <hr />
                    <h2>{blog.subtitre}</h2>
                    <p className="lead">{blog.contenu}</p>
                    <h2>{blog.subtitre2}</h2>
                    <p className="lead">{blog.contenu2}</p>
                    <h2 className={blog.subtitre3 !== null && blog.subtitre3.length >= 80 ? "blog-citation " : ""}>{blog.subtitre3}</h2>
                    <p className="lead">{blog.contenu3}</p>
                    <h2>{blog.subtitre4}</h2>
                    <p className="lead">{blog.contenu4}</p>
                    <h2>{blog.subtitre5}</h2>
                    <p className="lead">{blog.contenu5}</p>
                    <h2>{blog.subtitre6}</h2>
                    <p className="lead">{blog.contenu6}</p>
                    <h2>{blog.subtitre7}</h2>
                    <p className="lead">{blog.contenu7}</p>
                    <h2>{blog.subtitre8}</h2>
                    <p className="lead">{blog.contenu8}</p>
                    <h2>{blog.subtitre9}</h2>
                    <p className="lead">{blog.contenu9}</p>
                    <h2>{blog.subtitre10}</h2>
                    <p className="lead">{blog.contenu10}</p>
                    <h2>{blog.subtitre11}</h2>
                    <p className="lead">{blog.contenu11}</p>
                    <h2>{blog.subtitre12}</h2>
                    <p className="lead">{blog.contenu12}</p>
                    <h2>{blog.subtitre13}</h2>
                    <p className="lead">{blog.contenu13}</p>
                    <h2>{blog.subtitre14}</h2>
                    <p className="lead">{blog.contenu14}</p>
                    <h2>{blog.subtitre15}</h2>
                    <p className="lead">{blog.contenu15}</p>
                    <h2>{blog.subtitre16}</h2>
                    <p className="lead">{blog.contenu16}</p>
                    <h2>{blog.subtitre17}</h2>
                    <p className="lead">{blog.contenu17}</p>
                    <h2>{blog.subtitre18}</h2>
                    <p className="lead">{blog.contenu18}</p>
                    <h2>{blog.subtitre19}</h2>
                    <p className="lead">{blog.contenu19}</p>
                    <h2>{blog.subtitre20}</h2>
                    <p className="lead">{blog.contenu20}</p>
                    <h2>{blog.subtitre21}</h2>
                    <p className="lead">{blog.contenu21}</p>
                    <h2>{blog.subtitre22}</h2>
                    <p className="lead">{blog.contenu22}</p>
                    <h2>{blog.subtitre23}</h2>
                    <p className="lead">{blog.contenu23}</p>
                    <h2>{blog.subtitre24}</h2>
                    <p className="lead">{blog.contenu24}</p>
                    <h2>{blog.subtitre25}</h2>
                    <p className="lead">{blog.contenu25}</p>
                    <h2>{blog.subtitre26}</h2>
                    <p className="lead">{blog.contenu26}</p>
                    <h2>{blog.subtitre27}</h2>
                    <p className="lead">{blog.contenu27}</p>
                    {blog.subtitre28 !== null ? <h2>{blog.subtitre28}</h2> : ""}
                    {blog.contenu28 !== null ? <p className="lead">{blog.contenu28}</p> : ""}
                    {blog.subtitre29 !== null ? <h2>{blog.subtitre29}</h2> : ""}
                    {blog.contenu29 !== null ? <p className="lead">{blog.contenu29}</p> : ""}
                    {blog.subtitre30 !== null ? <h2>{blog.subtitre30}</h2> : ""}
                    {blog.contenu30 !== null ? <p className="lead">{blog.contenu30}</p> : ""}
                    {blog.movie !== null
                      ?
                      <div className='player-wrapper'>
                        <ReactPlayer url={`${API_URL}${blog.movie.url}`} controls width='100%'
                          height='100%' /></div>
                      : ""}
                    <a href={blog.references} target="new"><p>{blog.references}</p></a>
                    <p>Date de publication : {blog.date}</p>
                    <p> Auteur : {blog.users[0].username}</p>
                  </Zoom>
                </div>
              </div>
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

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const { id } = context.query
  const res = await fetch(`${API_URL}/blog-pages/${id}`)
  const data = await res.json()

  return {
    props: {
      blog: data
    }
  }
}

export default Blog
