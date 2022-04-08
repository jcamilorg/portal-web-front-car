// Importacion de las imagenes
const images = require.context("../../assets/img/", true);
const logos = require.context("../../assets/logos/", true);

export default function Footer() {
  return (
    <footer className="text-light fs-6">
      <div className="row justify-content-center bg-acua-dark pt-2">
        <div className="col-9">
          <h5 className="pt-2 pb-3">
            Corporación Autónoma Regional de Cundinamarca (CAR)
          </h5>
          <div className="row justify-content-center align-items-center  lh-sm">
            <div className="col-12 col-lg-4 ">
              <p>
                Calle 24 (Av. Esperanza) # 60 - 50,
                <br />
                Centro Empresarial Gran Estación,
                <br />
                costado Esfera - Pisos 6 y 7 <br />
                (Bogotá, D.C. - Colombia).
                <br />
                <br />
                <b>Horario de atención:</b>
                <br />
                Lunes a Viernes 8:00 a.m. a 5:00 p.m.
                <br /> Jornada continua
              </p>
            </div>
            <div className="col-12 col-lg-4 border-start ps-5">
              <p>
                <b>Contáctenos</b>
                <br />
                En Bogotá: +57(1) 580 11 11
                <br />
                Línea Gratuita: 01 8000 915 317 - 01 8000 913606
                <br />
                Línea Anticorrupción: 01-800-0912667
                <br />
                <br />
                <b>Correo:</b> sau@car.gov.co
                <br />
                <b>Notificaciones judiciales:</b>
                <br />
                buzonjudicial@car.gov.co
              </p>
            </div>
            <div className="row col-12 col-lg-4 border-start ps-5">
              <p>
                <b>Suscríbase al boletín NewsCAR</b>
              </p>
              <div className="col-3">
                <img
                  className="img-fluid"
                  src={images("./footer/footerCo.png")}
                  alt="colombia"
                />
              </div>
              <div className="col-9 border-start">
                <img
                  className="img-fluid"
                  src={images("./footer/footerGov.png")}
                  alt="colombia"
                />
              </div>
              <div className="col-6 py-3">
                <img
                  className="img-fluid"
                  src={images("./footer/footerSGS.png")}
                  alt="colombia"
                />
              </div>
              <div className="row col-12">
                <span className="col-4 px-0 ">
                  <b>Nuestras redes</b>
                </span>
                <img
                  className="col-2 img-fluid  px-1"
                  src={logos("./footer_facebook.svg")}
                  alt="colombia"
                />
                <img
                  className="col-2 img-fluid px-1"
                  src={logos("./footer_Instagram.svg")}
                  alt="colombia"
                />
                <img
                  className="col-2 img-fluid px-1"
                  src={logos("./footer_twitter.svg")}
                  alt="colombia"
                />
                <img
                  className="col-2 img-fluid px-1"
                  src={logos("./footer_Youtube.svg")}
                  alt="colombia"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark-blue py-2 mt-3 text-center">
          COPYRIGHT © 2020 CAR. Políticas de Privacidad y Condiciones de Uso.
        </div>
      </div>
    </footer>
  );
}
