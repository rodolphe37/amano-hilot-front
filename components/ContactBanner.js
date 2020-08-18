import react from 'react';
import { Container } from 'reactstrap';
import Link from 'next/link';

const ContactBanner = () => {

  return (
    <Container>
      <div role="alert" className="alert alert-info banner-info">
        <div className="field field--name-field-body field--type-text-long field--label-hidden field--item">
          <p>
            Contactez-moi via&ensp;
            <Link href="/contact#home">
              <a className="btn btn-primary text-white text-white-banner form-bottom-banner" style={{ fontWeight: 'bold', marginLeft: '25px' }} tabIndex="-1">&ensp;
              le formulaire de contact
              </a>
            </Link>


            <a className="btn btn-primary text-white text-white-banner" href="tel:+33659653495" tabIndex="-1" style={{ marginLeft: '25px' }}>
              <strong>par Téléphone</strong>
            </a>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default ContactBanner;
