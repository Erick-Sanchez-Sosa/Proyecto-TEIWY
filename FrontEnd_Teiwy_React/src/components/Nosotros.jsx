import React, { useEffect } from 'react';

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros XDXDXD</h1>
        <p>Somos TEIWY un grupo de ingenieros</p>
    </div>
  )
}

export default Nosotros;