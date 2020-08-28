import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import '../styles/backgroundError500.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 18 + 200}px,${y / 10 + 200}px,0)`
const trans2 = (x, y) => `translate3d(${x / 28 + 205}px,${y / 28 - 210}px,0)`
const trans3 = (x, y) => `translate3d(${x / 16 - 250}px,${y / 16 - 200}px,0)`
const trans3b = (x, y) => `translate3d(${x / 24 - 210}px,${y / 6 - 250}px,0)`
const trans4 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`

const Error500 = () => {
  const { SITE_URL } = process.env
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [onClicked, setOnClicked] = useState(false);

  const HandleClicked = () => {
    if (onClicked === false) {
      setOnClicked(true)
    } else {
      setOnClicked(false)
    }
  }
  return (
    <React.Fragment>
      <div className="wrapper-error500">
        <img className="card1" src='../assets/images/error500/background.jpeg' alt="" style={{ width: "100%", position: 'absolute', maxHeight: '57vh' }} />
        <div className="section hero hero-error500">
          <div className="container-error500" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
            <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
            <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
            <animated.div className="card3b" style={{ transform: props.xy.interpolate(trans3b) }} />
            {onClicked === true ? (<animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />) : (<animated.div className="card4b" style={{ transform: props.xy.interpolate(trans4) }} />)}
          </div>
        </div>
        <hr style={{ backgroundColor: 'white' }} />
        <div className="section tree">
          <div className="form-group switch-error500">
            <span className="switch switch-sm">
              <input type="checkbox" className="switch" id="switch-sm" onClick={() => HandleClicked()} />
              <label style={{ color: 'black' }} htmlFor="switch-sm">{onClicked === false ? ('Légère barbe') : ('Barbe')}</label>
            </span>
          </div>
          <div className="container-error500">
            <div className="container content-error500 text-muted">
              <p><strong style={{ color: 'rgba(0, 0, 0, 0.5)', textTransform: 'uppercase' }}>On dirait que quelque chose s'est mal passé!!</strong></p>

              <p className="text-error500">Nous suivons ces erreurs automatiquement, mais si le problème persiste, n'hésitez pas à nous contacter.<br /> En attendant, essayez de rafraîchir la page de votre navigateur.</p>
              <br />

              <div id="suggestions" style={{ display: 'flex', fontWeight: 'bold' }}>
                <a className="text-p-error500" href={`/contact`}>Contact Support</a>&ensp; —&ensp;
                  <a className="text-p-error500" href={`/`}>Page d'accueil</a> &ensp;—&ensp;
                  <a className="text-p-error500" href="https://www.facebook.com/rodolphe.augusto.7" target="new">Page Facebook</a>
              </div>
              <br />
              <img className="img-error500" style={{ width: '10%', marginLeft: '26px', filter: 'grayscale(1)', opacity: '0.6' }} src="../assets/images/error500/logo-amano-hilot.png" alt="" />
            </div>
          </div>
          <div className="container-error500">

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Error500;
