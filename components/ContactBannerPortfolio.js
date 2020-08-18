import react from 'react';
import { Container } from 'reactstrap';
import Link from 'next/link';

const ContactBannerPortfolio = () => {

  return (
    <Container>
      <div role="alert" className="alert alert-info banner-info">
        <div className="field field--name-field-body field--type-text-long field--label-hidden field--item contact-port">
          <p className="desc-contactBanner">Contactez-moi via&ensp;</p>
          <Link href="/contact#home">
            <a className="btn btn-primary text-white text-white-banner form-banner" style={{ fontWeight: 'bold' }} tabIndex="-1">&ensp;
            le formulaire de contact
              </a>
          </Link>
          <p className="desc-contactBanner desc-2">&ensp;ou{''}&ensp;</p>
          <a className="btn btn-primary text-white text-white-banner tel-banner" href="tel:+33659653495" tabIndex="-1">
            <strong>par Téléphone</strong>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default ContactBannerPortfolio;
