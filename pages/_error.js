// pages/_error.js
import React from 'react'
import Error500 from '../components/Error500'
import Error404 from '../pages/404'

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? <Error500 />
        : <Error404 />}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
