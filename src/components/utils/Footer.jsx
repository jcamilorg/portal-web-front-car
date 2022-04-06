import React from "react";

export default function Footer() {
  return (
    <footer className="text-light fs-6">
      <div className="row justify-content-center bg-acua py-2">
        <div className="col-9">
          <h5>Corporación Autónoma Regional de Cundinamarca (CAR)</h5>
          <div className="row justify-content-center align-items-center  lh-sm">
            <div className="col-4 ">
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
            <div className="col-4 border-start ps-5">
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
            <div className="col-4 border-start ps-5">
              <p>
                <b>Suscríbase al boletín NewsCAR</b>
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
          </div>
        </div>
      </div>
      <div className="bg-dark-blue py-2 text-center">
        COPYRIGHT © 2020 CAR. Políticas de Privacidad y Condiciones de Uso.
      </div>
    </footer>
  );
}
