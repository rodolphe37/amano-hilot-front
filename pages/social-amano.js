import React, { useState, useEffect } from 'react';
import { FacebookProvider, Group } from 'react-facebook';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import InfiniteLoopLoader from '../components/InfiniteLoopLoader';

const SocialAmano = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500)
  }, [])

  return (
    <React.Fragment>
      {loading === false
        ? (
          <BaseLayout>
            <Container>
              <h1 className="display-3" style={{ textAlign: 'center', fontSize: "38px" }}>Mes pages et groupe Facebook Amano'Hilot</h1>
              <div className="jumbotron jumbotron-fluid">
                <div className="container-social" style={{ marginLeft: '10%' }}>
                  <FacebookProvider appId="186337162730559">
                    <div className="row">
                      <div className="col-sm-4" style={{ marginRight: "15px" }}>
                        <Slide right cascade>
                          <h2 style={{ color: "black", textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>Le groupe Médecines alternatives</h2>
                          <Group
                            href="https://www.facebook.com/groups/514696705564184/"
                            width="300"
                            showSocialContext={true}
                            showMetaData={true}
                            skin="light"
                          />
                        </Slide>
                        <hr />
                        <Slide left cascade>
                          <h2 style={{ color: "black", textAlign: 'center', fontSize: '13px', fontWeight: 'bold' }}>La page Global Peace Meditation France</h2>
                          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGlobal-Peace-Meditation-France-1464888733760507%2F&tabs=timeline&width=300&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=186337162730559" width="300" height="550" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Slide>
                      </div>
                      <Slide cascade bottom>
                        <div className="col-sm-4">
                          <h2 style={{ color: "black", textAlign: 'center', fontSize: '15px', fontWeight: 'bold' }}>La page Amano'Hilot</h2>
                          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Famanohilot%2F&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=186337162730559" width="500" height="900" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                      </Slide>
                    </div>
                    <div className="row">
                      <div className="col-sm-4" style={{ marginRight: "15px" }}>
                      </div>
                      <div className="col-sm-4">
                      </div>
                    </div>
                  </FacebookProvider>
                </div>
              </div>
            </Container>
          </BaseLayout>
        ) : (
          <BaseLayout>
            <InfiniteLoopLoader />
          </BaseLayout>
        )
      }
    </React.Fragment>
  )
}

export default SocialAmano;
