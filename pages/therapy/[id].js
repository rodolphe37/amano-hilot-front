import BaseLayout from "../../components/layouts/BaseLayout";
import fetch from 'isomorphic-unfetch';
import Zoom from 'react-reveal/Zoom';
import { NextSeo } from 'next-seo'
import ContactBanner from "../../components/ContactBanner";
import { Container, Row } from "reactstrap";
import InfiniteLoopLoader from "../../components/InfiniteLoopLoader";
import { useState, useEffect } from 'react'


const Thera = ({ thera }) => {
  const { API_URL } = process.env
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const SEO = {
    title: `${thera.titre}`,
    description: `${thera.subtitre}`,
  }

  return (
    <>
      {loading === false ? (<BaseLayout>
        <NextSeo {...SEO} />
        <div className="container thera">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <Zoom ssrFadeout>
                <h1 className="display-4">{thera.titre}</h1>
                <h2>{thera.subtitre}</h2>
                <img className="card-img-top img-thera" src={`${API_URL}${thera.image.url}`} alt="" />
                <p className="lead">{thera.description}</p>
                <h2>{thera.subtitre2}</h2>
                <p className="lead">{thera.description2}</p>
                <h2>{thera.subtitre3}</h2>
                <p className="lead">{thera.description3}</p>
                <p>{thera.liste}</p>
                <p>Date de publication : {thera.date}</p>
              </Zoom>
            </div>
          </div>
          <Container className="banner-article">
            <Row className="content-banner">
              <ContactBanner />
            </Row>
          </Container>
        </div>
      </BaseLayout>) : (<BaseLayout><InfiniteLoopLoader /></BaseLayout>)}
    </>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env
  const { id } = context.query
  const res = await fetch(`${API_URL}/pages/${id}`)
  const data = await res.json()

  return {
    props: {
      thera: data
    }
  }
}

export default Thera
