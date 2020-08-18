import BaseLayout from "../components/layouts/BaseLayout";
import { Container } from "reactstrap";
import { NextSeo } from 'next-seo';

const MentionsLegales = () => {

  const SEO = {
    title: 'Mentions Légales du site Amano-Hilot.fr',
    description: "Mentions légales, RGPD et cookies",
  }

  return (
    <BaseLayout>
      <NextSeo {...SEO} />
      <div className="w3-container w3-center " style={{ padding: "5px", marginTop: "20px" }}>
        <Container>
          <div className="mentions" style={{ padding: '10vh', borderBottom: "1px solid white", boxShadow: "1px 1px 8px black" }}>
            <h1 style={{ borderBottom: "1px solid #fd7e14", padding: "10px", textAlign: "center" }}>Mentions Légales</h1>
            <br />
            <h3>Amano'Hilot est la propriété de :<br /><br />Rodolphe AUGUSTO</h3>
            <p>41 bis Rue Victor Hugo <br />
            37230
            Luynes</p>
            <br />
            <p>SIREN      443 694 740</p>
            <br />
            <h3 style={{ borderBottom: "1px solid #fd7e14", padding: "10px", textTransform: "uppercase", fontSize: "26.2px" }}>Dispositions liées au code de la propriété intellectuelle</h3>
            <br />
            <p>Toute représentation ou reproduction intégrale ou partielle faite sans notre consentement est illicite. Il en est de même pour la traduction, l'adaptation ou la transformation, l'arrangement ou la reproduction par un art ou un procédé quelconque (hors conditions prévues par l'article L122-5 du code de la propriété intellectuelle). Loi "Informatique et libertés" n° 78-17 du 6 janvier 1978</p>
            <br />
            <h2 style={{ borderBottom: "1px solid #fd7e14", padding: "10px", textTransform: "uppercase", textAlign: "center" }}>RGPD</h2>
            <p>Aucunes données personnelles n'est collectées, de surcroit je ne stock aucunes informations vous concernant.</p>
            <p>L'usage de Cookie n'a de bût que pour votre expérience utilisateur.</p>
            <br />
            <h2 style={{ borderBottom: "1px solid #fd7e14", padding: "10px", textTransform: "uppercase", textAlign: "center" }}>Responsable de la publication</h2>
            <br />
            <p>Rodolphe Augusto</p>
            <br />
            <h3 style={{ borderBottom: "1px solid #fd7e14", padding: "10px", textTransform: "uppercase", textAlign: "center" }}>Hébergement</h3>
            <br />
            <p>OVH</p>
            <br />
            <h3 style={{ borderBottom: "1px solid #fd7e14", padding: "10px", textTransform: "uppercase", textAlign: "center" }}>Réalisation du site</h3>
            <br />
            <p>Réalisé avec <i className="fa fa-heart" /> par Rodolphe Augusto</p>
            <br />
            <h3 style={{ borderBottom: "1px solid #fd7e14", padding: "10px", textTransform: "uppercase", textAlign: "center" }}>Qu'est ce que les Cookies</h3>
            <br />
            <h5>Cookies et autres technologies de stockage</h5>
            <br />
            <p>Les cookies sont de petits textes qui servent à stocker des informations sur les navigateurs web.
            Les cookies sont notamment utilisés pour stocker et recevoir des informations sur des appareils comme les ordinateurs ou les téléphones.
            D’autres technologies, dont les données que nous stockons sur votre navigateur web ou sur votre appareil,
            sont utilisées dans des buts similaires.
            Toutes ces technologies sont designées par le terme « cookies ».
            </p>
            <br />
            <h3 style={{ borderBottom: "1px solid #fd7e14", padding: "10px", textTransform: "uppercase", textAlign: "center" }}>Pourquoi utilisons-nous des cookies ?</h3>
            <br />
            <b>Performances</b>
            <p>Les cookies nous servent à rendre votre utilisation du site aussi agréable que possible.</p>
            <br />
            <b>Fonctionnalités</b>
            <p>Nous utilisons des cookies pour les fonctionnalités basiques afin de vous garantir une bonne experience utilisateur.</p>
            <br />
            <b>Sécurité et intégrité du site</b>
            <p>Nous utilisons des cookies pour garantir la sécurité de notre site.</p>
            <br />
            <b>Nom du cookie et durée de vie</b>
            <p>Le cookie que nous utilisons sur ce site est nommé "amanoCookieSite", sa durée de vie n'est que de 1 jour. </p>
          </div>
        </Container>
      </div>
    </BaseLayout>

  )
}

export default MentionsLegales;
