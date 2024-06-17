import React from 'react';

function We_Help(){
    return (
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="images/img-grid-1.jpg" alt="Untree.co"></img>
                </div>
                <div className="grid grid-2">
                  <img src="images/img-grid-2.jpg" alt="Untree.co"></img>
                </div>
                <div className="grid grid-3">
                  <img src="images/img-grid-3.jpg" alt="Untree.co"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                Te ayudamos a hacer un diseño de interiores moderno
              </h2>
              <p>
                Transformamos tu hogar con un diseño de interiores moderno y
                funcional, adaptado a tu estilo único. Nuestro equipo experto
                está aquí para optimizar cada detalle y crear un ambiente
                contemporáneo y acogedor.
              </p>

              <ul className="list-unstyled custom-list my-4">
                <li>Experiencia y Profesionalismo</li>
                <li>Asesoramiento Profesional</li>
                <li>Optimización de Espacios</li>
                <li>Compromiso con la Calidad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default We_Help;