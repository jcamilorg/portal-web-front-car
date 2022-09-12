import React from "react";
import Layout from "../../layouts/LayoutBannerBreadcrumb";
import TitleCar from "../../utils/TitleCar";
import CardPopUp from "../../utils/CardPopUp";
import { HrGreen } from "../../utils/HrCAR";

const InfoPopUp = ({ title, children }) => (
  <div style={{ width: "600px" }}>
    <h4 className="text-acua fw-bold">{title}</h4>
    <HrGreen />
    <div className="fs-responsive-m">{children}</div>
  </div>
);

const Mision = () => (
  <InfoPopUp title="Misión">
    Ejercer como máxima autoridad ambiental en su jurisdicción, ejecutando
    políticas, planes, programas y proyectos ambientales, a través de la
    construcción de tejido social, para contribuir al desarrollo sostenible y
    armónico de la región.
  </InfoPopUp>
);

const Vision = () => (
  <InfoPopUp title="Visión">
    La Corporación Autónoma Regional de Cundinamarca (CAR) en el 2023 habrá
    incidido en la consolidación de un modelo regional viable, prospero,
    incluyente, equitativo y sostenible a través de una cultura ambiental
    responsable.
  </InfoPopUp>
);

const CodigoEtica = () => (
  <InfoPopUp title="Código de ética">
    La Dirección de la Corporación, atendiendo los mandatos de la Constitución
    Política, las Leyes 99 de 1993 y 489 de 1998 y en ejecución de los
    lineamientos gerenciales que demanda una administración pública moderna y
    participativa, y con el objeto de reducir la posibilidad de Valores y
    principios ocurrencia de conductas que rayan en la ilegalidad y la
    corrupción por parte de los servidores de la entidad, nos propusimos con la
    participación de la Comunidad CAR, identificar los valores personales y
    corporativos que permitirán formular el <b>Decálogo de Valores</b>, para
    conformar con ellos el Código de Ética institucional.
  </InfoPopUp>
);

const Decalogo = () => (
  <InfoPopUp title="Decálogo de Valores">
    <div className="fs-responsive-m">
      A partir de hoy me comprometo a ejercer mis funciones observando los
      principios de la CAR y a vivenciar en todos mis actos los valores
      identificados y aceptados por todos los miembros de la familia CAR, así:
      <br />
      <br />
      <ol>
        <li className="fw-bold">
          <p className="fw-normal">
            El énfasis en mi tarea diaria está en procurar la preservación y
            aprovechamiento sostenible del agua, el aire, la tierra, los
            animales y las plantas.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            El alcance de los objetivos institucionales depende del compromiso y
            responsabilidad del trabajo en grupo y de mi formación y
            actualización laboral.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            Entender que a través del privilegio diario de nuestro trabajo en la
            CAR, podemos alcanzar nuestra realización personal, en lo familiar,
            lo social, lo laboral y lo económico.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            Hacer lo que corresponda para el cumplimiento de las metas con la
            calidad y oportunidad requerida.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            Con respeto, equidad y justicia con mis compañeros, usuarios y
            conmigo mismo, soy eficiente y eficaz en el cumplimiento de las
            metas de la CAR.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            Como servidor público debo tener presente que mis actuaciones sean
            coherentes con la misión de la CAR y visibles ante la comunidad.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            Al ser leales con la misión, visión, principios y valores de la CAR,
            con la comunidad, mis compañeros y la preservación del medio
            ambiente.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            A participar activa, responsable, profesional y eficientemente como
            persona y servidor público en la ejecución de los planes de acción
            de la CAR.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            Saber reconocer el error y proponerse no volverlo a cometer.
          </p>
        </li>
        <li className="fw-bold">
          <p className="fw-normal">
            Comprender que con una férrea disciplina es factible formar un
            carácter triunfador.
          </p>
        </li>
      </ol>
    </div>
  </InfoPopUp>
);

const Principios = () => (
  <InfoPopUp title="Código de ética">
    <p>
      En la CAR nuestro principio rector es conservar la vida. Se integran a
      este principio los siguientes:
    </p>
    <h4 className="text-acua fw-bold">Honestidad:</h4>
    <p>
      En la CAR, honestidad es la claridad, honradez y coherencia en el actuar,
      consistente con los propósitos de la Corporación.
    </p>
    <h4 className="text-acua fw-bold">Justicia:</h4>
    <p>
      En la CAR, justicia es dar a cada cual lo que le corresponde y pertenece
      dentro del marco de la Constitución y la Ley, en donde prima el interés
      colectivo sobre el particular.
    </p>
    <h4 className="text-acua fw-bold">Respeto:</h4>
    <p>
      En la CAR, respeto es el reconocimiento de la diferencia para construir
      Territorio.
    </p>
  </InfoPopUp>
);

export default function AcercaDeNosotros({ children }) {
  return (
    <Layout
      bannerSrc={
        "http://sgccontratos.car.gov.co:8082/getImg/%7Bname%7D/%7Bmimetype%7D?name=Acerca_de_nosotros_MonAug22121501COT2022.png&mimetype=image/png"
      }
    >
      <TitleCar>
        <b>Misión</b> y visión
      </TitleCar>
      <div className="row py-5 my-5 px-5">
        <div className="col-6">
          <CardPopUp
            title="Misión"
            description="Conócela aquí"
            iconSrc="./bullseye.svg"
          >
            <Mision />
          </CardPopUp>
        </div>
        <div className="col-6">
          <CardPopUp
            title="Visión"
            description="Conócela aquí"
            iconSrc="./telescope.svg"
          >
            <Vision />
          </CardPopUp>
        </div>
      </div>

      <TitleCar>
        <b>Valores</b> y Principios
      </TitleCar>
      <div className="row pt-5 mt-5 px-5">
        <div className="col-4">
          <CardPopUp
            title="Código de ética"
            description="Conócelo aquí"
            iconSrc="./badget.png"
          >
            <CodigoEtica />
          </CardPopUp>
        </div>
        <div className="col-4">
          <CardPopUp
            title="Decálogo de valores"
            description="Conócelo aquí"
            iconSrc="./hands.svg"
          >
            <Decalogo />
          </CardPopUp>
        </div>
        <div className="col-4">
          <CardPopUp
            title="Principios"
            description="Conócelos aquí"
            iconSrc="./ligthbullheart.svg"
          >
            <Principios />
          </CardPopUp>
        </div>
      </div>
    </Layout>
  );
}
