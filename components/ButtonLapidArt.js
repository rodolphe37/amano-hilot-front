import React, { useState } from 'react';
import { UncontrolledCollapse, Card } from 'reactstrap';

const ButtonLapidArt = () => {
  const [cliked, setCliked] = useState(false)

  const handleCkichedLogo = () => {
    if (cliked === false) {
      return setCliked(true)
    } else {
      return setCliked(false)
    }
  }

  return (
    <div className="opt">
      <div className={cliked === false ? "button-lapidart opt" : "button-lapidart opt toggled"} id="toggler" onClick={handleCkichedLogo} style={{ position: 'absolute', zIndex: '45', border: '1px solid purple', display: 'flex', width: '10%', marginTop: '-26vh', right: '25px', cursor: 'pointer' }}>
        <a style={{ textAlign: 'center' }}>
          <img className={cliked === false ? "slide-in-blurred-top" : "slide-in-blurred-top toggled-effect"} style={{ width: '68%', marginTop: '-2px' }} src="assets/images/logo-lapid-art.png" alt="logo lapid'art" />
          <p className="slide-in-blurred-top" style={{ fontSize: '8px', color: 'white', fontWeight: 'bold', marginTop: '-11px' }}>Page Facebook Lapid'Art</p>
        </a>
      </div>
      <br />
      <br />
      <br />
      <UncontrolledCollapse toggler="#toggler" style={{ maxWidth: '33.333333%', marginTop: '-80px', marginLeft: '20px', marginRight: "16px" }}>
        <Card style={{ background: 'white', width: '100%', boxShadow: '1px 1px 8px black', height: '88.9%' }}>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLapidArt-173291856624985%2F&tabs=timeline&width=400&height=675&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=186337162730559" width="400" height="670" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
        </Card>
      </UncontrolledCollapse>
    </div>
  )
}

export default ButtonLapidArt;
