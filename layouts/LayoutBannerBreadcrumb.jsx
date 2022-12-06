import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Banner from "../components/Banner";
import DefaultLayout from "./Default";

const Container = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

export default function Layout({ bannerSrc, children }) {
  return (
    <DefaultLayout>
      <Banner src={bannerSrc} />
      <Container>
        <Breadcrumb />
        {children}
      </Container>
    </DefaultLayout>
  );
}

const styles = {
  container: { paddingRight: "12%", paddingLeft: "12%" },
};
