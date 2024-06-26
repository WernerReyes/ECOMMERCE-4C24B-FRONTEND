import React from "react";

function Footer() {
  return (
    <footer className="footer-section mt-5">
      <div className="container relative">
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                <img src="/images/logo.png" alt="logo" className="imgLogo" />
                <span>.</span>
              </a>
            </div>
            <p className="mb-4">
              En "De Buena Madera", ofrecemos muebles de alta calidad, diseñados
              para durar y embellecer tu hogar. Descubre piezas únicas
              elaboradas con los mejores materiales y un estilo inigualable.
              Transforma tus espacios con nuestro toque de elegancia y
              durabilidad.
            </p>
            <ul className="list-unstyled custom-social">
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-4">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Nosotros</a>
                  </li>
                  <li>
                    <a href="#">Servicios</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contactanos</a>
                  </li>
                </ul>
              </div>
              <div className="col-6  col-sm-6 col-md-4">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Soportet</a>
                  </li>
                  <li>
                    <a href="#">Base de conocimiento</a>
                  </li>
                  <li>
                    <a href="#">Chat en vivo</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Trabajo</a>
                  </li>
                  <li>
                    <a href="#">Nuestro equipo</a>
                  </li>
                  <li>
                    <a href="#">Liderazgo</a>
                  </li>
                  <li>
                    <a href="#">Politica de pricivacidad</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy;{" "}
                <script>document.write(new Date().getFullYear());</script>.
                Todos los derechos reservados. &mdash; Diseñado por{" "}
                <a href="https://untree.co">Tecsup - La buena madera</a>
               
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <a href="#">Terminos &amp; Condiciones</a>
                </li>
                <li>
                  <a href="#">Politicas y privacidad</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
