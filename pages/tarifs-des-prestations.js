import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import ContactBanner from '../components/ContactBanner';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import BubbleAnimation from '../components/BubbleAnimation';

const PrestationPrices = () => {

  const SEO = {
    title: 'Tarifs des prestations',
    description: "Voici les tarifs de mes différentes prestations : Il y a les soins d'une part, puis les Stages et formations d'autres part.",
  }

  return (
    <React.Fragment>
      <BaseLayout>
        <NextSeo {...SEO} />
        <div className="wrapper-prestations">
          <div className="section hero">
            <BubbleAnimation />
            <div className="container-prestations">
              <h1 className="title-prestations">Voici les tarifs de mes différentes prestations :</h1>
              <div className="subheader">Il y a les soins d'une part, puis les Stages et formations d'autres part.</div>
            </div>
          </div>
          <hr style={{ backgroundColor: 'white' }} />
          <div className="section tree">
            <div className="container-prestations">
              <div className="row row-tarifs">
                <div className="col">
                  <div className=" card card-prestations">
                    <div className="card-body card-prestations-body">
                      <h5 className="card-title card-prestations-title">Soins Thérapeutiques</h5>
                      <h6 className="card-subtitle card-prestations-subtitle mb-2 text-muted">Tous les soins que je propose...</h6>
                      <p className="card-text card-prestations-text">Il y a les soins Hilot Massage, Rééquilibrage energétique avec acquisition de pierre réharmonisante, les analyses géobiologiques, ainsi que la Lithothérapie.</p>
                      <a href="#soins" className="card-prestations-link">Lien vers les Tarifs</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-prestations">
                    <div className="card-body card-prestations-body">
                      <h5 className="card-title card-prestations-title">Stage et Formations</h5>
                      <h6 className="card-subtitle card-prestations-subtitle mb-2 text-muted">Mes stages et formations proposés...</h6>
                      <p className="card-prestations-text" id="soins">Il y a les stages et formations Hilot, Lithothérapie et Lapidaire.</p>
                      <a href="#formations" className="card-prestations-link">Lien vers les Tarifs</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-prestations" >
                <div className="col-prestations">
                  <div className="card card-prestations">
                    <div className="card-body card-prestations-body">
                      <h5 className="card-title card-prestations-title">Soins, Durées et Prix !</h5>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Soins</th>
                            <th scope="col">Durées</th>
                            <th scope="col">Prix</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td><Link href="/therapy/1"><a>Hilot Massage</a></Link></td>
                            <td>20\40 min</td>
                            <td>50€</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td><Link href="/therapy/1"><a>Rééquilibrage</a></Link></td>
                            <td>30\60 min</td>
                            <td>50€</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td><Link href="/therapy/2"><a>Analyses géobiologique</a></Link></td>
                            <td>1h env.</td>
                            <td>180€</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td><Link href="/therapy/4"><a>Lithothérapie</a></Link></td>
                            <td>Selon la pierre</td>
                            <td id="formations">25\250€</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-prestations">
                  <div className="card card-prestations">
                    <div className="card-body card-prestations-body">
                      <h5 className="card-title card-prestations-title">Stages, Durées et Prix</h5>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Stages</th>
                            <th scope="col">Durées</th>
                            <th scope="col">Prix</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td><Link href="/formation/stage-hilot#home"><a>Stage Hilot</a></Link></td>
                            <td>4h</td>
                            <td>150€</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td><Link href="/formation/formation-hilot#home"><a>Formation Hilot</a></Link></td>
                            <td>3 jours</td>
                            <td>500€</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td><Link href="/formation/stage-lapidaire#home"><a>Stage Lapidaire</a></Link></td>
                            <td>4h</td>
                            <td>100€</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td><Link href="/formation/stage-lithotherapie#home"><a>Stage Lithothérapie</a></Link></td>
                            <td>4h</td>
                            <td>150€</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-prestations">
              <div className="row-contact">
                <ContactBanner />
              </div>
            </div>
          </div>
          <hr style={{ backgroundColor: 'white' }} />
        </div>
      </BaseLayout>
    </React.Fragment>
  )
}

export default PrestationPrices;
