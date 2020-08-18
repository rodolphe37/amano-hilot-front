import React, { useState, useEffect } from 'react';
import '../styles/SearchPageStyle.css'
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import { Row } from 'reactstrap';
import Link from 'next/link'
import useBlogs from '../hooks/useBlogs'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

const SearchFilter = ({ blog }) => {
  const { API_URL } = process.env
  const [word, setWord] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filterDisplay, setFilterDisplay] = useState([blogs]);
  const { Blogs } = useBlogs(blogs);


  useEffect(() => {
    const getBlogs = async () => {
      const result = await axios.get(`${API_URL}/blog-pages`);

      setBlogs(result.data)
    }
    getBlogs();

  }, [Blogs]);


  const handleChange = e => {
    let oldList = blogs.map(blogs => {
      return {
        titre: blogs.titre.toLowerCase()
      };
    })

    if (e !== "") {
      let newList = [];

      setWord(e);
      event.preventDefault();

      newList = oldList.filter(bl => bl.titre.includes(word.toLocaleLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(blogs)
    }
    event.preventDefault();
  };

  return (console.log(blogs),
    <div>
      <div className="container-results">
        <div className="container">
          {/*<SearchBar />*/}
        </div>
        <Zoom ssrFadeout>
          <section className="head">
            <div className="container">
              <h2 className="text-center"><span>Rechercher un article ou un/des mot(s) clé(s)!</span></h2>
            </div>
          </section>
        </Zoom>
        <section className="search-box">
          <div className="container-fluid">
            <Row className="search-area">
              <div className="col-md-12 listing-block">
                <Fade cascade ssrFadeout>
                  filter: <input ref="autocomplete" className="search-input" onChange={e => handleChange(e.target.value)} />
                  {filterDisplay.map(bl => (
                    <div className="media" key={bl.id}>
                      <Link href={`/blog/${bl.id}`}>
                        <a>
                          <div className="media-body pl-3">
                            <img className="d-flex align-self-start" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Generic placeholder image" />
                            <div className="price">{bl.titre} &nbsp;</div>
                            <div className="stats">
                              <span>{bl.subtitre}</span>
                            </div>
                          </div></a>
                      </Link>
                    </div>
                  ))}
                </Fade>
              </div>
            </Row>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SearchFilter;

