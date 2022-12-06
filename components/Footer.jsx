import Image from "./Image";

let year = new Date();
year = year.getFullYear();
export default function Footer() {
  return (
    <footer className="text-light fs-responsive-s">
      <div className="row justify-content-center bg-acua pt-2">
        <div className="col-9">
          <h5 className="pt-2 pb-3">
            Corporación Autónoma Regional de Cundinamarca (CAR)
          </h5>
          <div className="row justify-content-center align-items-center  ">
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
              <Image
                classNameDiv="col-9"
                src={"/assets/logos/./logo_car_letra_blanca.svg"}
                alt="Logo CAR"
              />
              <div className="col-6 py-3">
                <Image
                  src={"/assets/img/footer/footerSGS.svg"}
                  alt="Estandares SGS"
                />
              </div>
              <div className="row col-12">
                <span className="col-4 px-0">
                  <b>Nuestras redes</b>
                </span>
                <a
                  href="https://www.facebook.com/CAR.Cundi/"
                  className="col-2 px-1 footer-link"
                >
                  <img
                    className="img-fluid"
                    src={"/assets/logos/./footer_facebook.svg"}
                    alt="colombia"
                  />
                </a>
                <a
                  href="https://www.instagram.com/car_cundi/"
                  className="col-2 px-1 footer-link"
                >
                  <img
                    className="img-fluid "
                    src={"/assets/logos/./footer_Instagram.svg"}
                    alt="colombia"
                  />
                </a>
                <a
                  href="https://twitter.com/CAR_Cundi"
                  className="col-2 px-1 footer-link"
                >
                  <img
                    className=" img-fluid "
                    src={"/assets/logos/./footer_twitter.svg"}
                    alt="colombia"
                  />
                </a>
                <a
                  href="https://www.youtube.com/c/Corporaci%C3%B3nAut%C3%B3nomaRegionaldeCundinamarca"
                  className="col-2 px-1 footer-link"
                >
                  <img
                    className=" img-fluid "
                    src={"/assets/logos/./footer_Youtube.svg"}
                    alt="colombia"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-acua-dark justify-content-center">
          <div className="row col-9 justify-content-between align-items-center">
            <div className="col-2 py-2">
              <Image
                classNameDiv="w-25 border-end pe-1 d-inline-block"
                src={"/assets/img/footer/footerCo.svg"}
                alt="Co"
              />
              <Image
                classNameDiv="w-75 d-inline-block"
                src={"/assets/img/footer/footerGov.svg"}
                alt="Colombia"
              />
            </div>
            <div className="col-3 py-2 text-end">
              <a
                href="https://www.gov.co/"
                className="text-decoration-none text-white"
              >
                <b>Conoce GOV.CO aquí</b>
              </a>
            </div>
          </div>
        </div>
        <div className="py-2 text-center">
          COPYRIGHT © {year} CAR. Políticas de Privacidad y Condiciones de Uso.
        </div>
      </div>
    </footer>
  );
}
