import React from 'react';

function Why_choose(){
    return (
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Por qué elegirnos</h2>
              <p>
                Ofrecemos calidad inigualable, diseños exclusivos y precios
                competitivos. Nuestro equipo brinda atención personalizada para
                encontrar los muebles perfectos para ti.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/truck.svg"
                        alt="Images"
                        className="imf-fluid"
                      ></img>
                    </div>
                    <h3>Envío rápido &amp; y gratuito</h3>
                    <p>
                      Envío rápido y gratuito en todos nuestros productos,
                      garantizando comodidad y ahorro.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/bag.svg"
                        alt="Images"
                        className="imf-fluid"
                      ></img>
                    </div>
                    <h3>Fácil de comprar</h3>
                    <p>
                      Fácil de comprar, con un proceso de compra rápido y sin
                      complicaciones.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/support.svg"
                        alt="Images"
                        className="imf-fluid"
                      ></img>
                    </div>
                    <h3>Soporte 24/7</h3>
                    <p>
                      Asistencia siempre que lo necesites, garantizando una
                      experiencia sin contratiempos.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/return.svg"
                        alt="Images"
                        className="imf-fluid"
                      ></img>
                    </div>
                    <h3>Devoluciones sin problemas</h3>
                    <p>
                      Devoluciones fáciles y sin complicaciones, para tu total
                      tranquilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="images/why-choose-us-img.jpg"
                  alt="Images"
                  className="img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Why_choose;