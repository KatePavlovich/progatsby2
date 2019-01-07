import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Listing from "../components/listing";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Listing />
  </Layout>
);

export default IndexPage;
