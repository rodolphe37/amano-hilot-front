import React, { useState, useEffect } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Row } from 'reactstrap';
import { NextSeo } from 'next-seo';
import axios from 'axios';
import Link from 'next/link'

const ShortenContent = (text) => {
  return text.substr(0, 450) + '...'
}

const SearchPage = () => {
  const { API_URL } = process.env
  const [word, setWord] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filterDisplay, setFilterDisplay] = useState([blogs]);

  const SEO = {
    title: 'Recherchez un article dans le Blog Amano-Hilot',
    description: "Recherchez un article du Blog Amano-Hilot via les mots clés",
  }

  useEffect(() => {
    const getBlogs = async () => {
      const result = await axios.get(`${API_URL}/blog-pages`);

      setBlogs(result.data)
    }
    getBlogs(blogs);

  }, []);


  const handleChange = e => {
    let oldList = [];

    oldList = blogs.map(blogs => {
      return {
        titre: blogs.titre.toLowerCase(),
        id: blogs.id,
        img: blogs.images[0].url,
        contenu: blogs.contenu,
      };
    })

    if (setFilterDisplay.value !== "" && e !== "") {
      let newList = [];

      setWord(e);
      event.preventDefault();

      newList = oldList.filter(blogs => {
        return (
          blogs.id,
          blogs.titre.includes(word.toLocaleLowerCase()),
          blogs.contenu.includes(word.toLocaleLowerCase())
        )
      }
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(oldList);
    }
    event.preventDefault();
  };


  return (
    <React.Fragment>
      <NextSeo {...SEO} />
      <BaseLayout>
        <div className="container-results">
          <Zoom ssrFadeout>
            <div className="container">
              <span className="butt-select">
                <form className="card card-sm">
                  <div className="card-body row no-gutters align-items-center">
                    Filtre: <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Rechercher un sujet avec un mot clé" onChange={e => handleChange(e.target.value)} />
                  </div>
                </form>
              </span>
            </div>
            <section className="head">
              <div className="container">
                <h2 className="text-center"><span>Rechercher un article du blog!</span></h2>
              </div>
            </section>
          </Zoom>
          <Slide left ssrFadeout>
            <section className="search-box">
              <div className="container-fluid">
                <Row className="search-area">
                  <div className="col-md-12 listing-block">
                    <Fade cascade right ssrFadeout>
                      <React.Fragment>
                        <br />
                        {filterDisplay.reverse().map(blo => (
                          <div className="media shadow-drop-2-center " key={blo.id}>
                            {word !== '' && word !== null
                              ?
                              <Link href={`/blog/${blo.id}`} key={blo.id}>
                                <a key={blo.id}>
                                  <div className="media-body pl-3">
                                    <div className="img-search">
                                      <img className="d-flex align-self-center" src={`${API_URL}${blo.img}`} alt="Votre Recherche apparaitra ici !!!" />
                                    </div>
                                    <div className="price">{blo.titre} &nbsp;</div>
                                    <div className="stats text-focus-in">
                                      <span>{ShortenContent(blo.contenu)}</span>
                                    </div>
                                  </div>
                                </a>
                              </Link>
                              : ""
                            }
                          </div>
                        ))}
                      </React.Fragment>
                    </Fade>
                  </div>
                </Row>
              </div>
            </section>
          </Slide>
        </div>
      </BaseLayout>
    </React.Fragment>
  )
}

export default SearchPage
