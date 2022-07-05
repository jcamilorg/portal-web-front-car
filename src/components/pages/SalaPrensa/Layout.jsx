import React from "react";
import Breadcrumb from "../../utils/Breadcrumb";
import Banner from "../../utils/Banner";

const Container = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

export default function Layout({ bannerSrc, children }) {
  return (
    <>
      <Banner src={bannerSrc} />
      <Container>
        <Breadcrumb />
        {children}
      </Container>
    </>
  );
}

const styles = {
  container: { paddingRight: "12%", paddingLeft: "12%" },
};
