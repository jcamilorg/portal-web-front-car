import React from "react";
import Link from "next/link";

//Link diseñado para que se puede usar indepnediente si se utiliza dirección de las paginas para evitar recargar
// Como tambien cuando se usan dirreciones externas

const LinkGeneral = ({ href = "", children }) => {
  const isAnchor =
    href.includes("https://") ||
    href.includes("http://") ||
    href.includes("www.");

  const className = "text-decoration-none ";

  const linkGeneral = isAnchor ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    <Link className={className} href={href}>
      {children}
    </Link>
  );

  return <>{linkGeneral}</>;
};

export default LinkGeneral;
