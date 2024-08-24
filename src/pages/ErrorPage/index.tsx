import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Layout/Header";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Link from "../../components/Link";

const ErrorPage = () => (
  <Layout>
    <Header>
      <Heading color="highlight">Unexpected Error</Heading>
      <Paragraph>
        Something went wrong, please try again or contact{" "}
        <Link href="mailto:leandrocortese@gmail.com">
          leandrocortese@gmail.com
        </Link>
        .
      </Paragraph>
    </Header>
  </Layout>
);

export default ErrorPage;
