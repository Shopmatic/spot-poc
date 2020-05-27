import React, { Fragment } from "react";
import Header from "../about/Header";
import Review from "../about/Review";
import Contacts from "../about/Contacts";
import Details from "../about/Details";
import GoBack from "../common/GoBack";

export default function About() {
  return (
    <Fragment>
      <GoBack />
      <Header />
      <Review />
      <Contacts />
      <hr style={{ marginTop: "1rem", opacity: 0.2 }}></hr>
      <Details />
    </Fragment>
  );
}
