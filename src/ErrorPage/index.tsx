import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Link from "../components/Link";

import * as styles from "../MainPage/styles.module.scss";

const ErrorPage = () => (
  <Layout>
    <header className={styles.header}>
      <Heading color="highlight">Unexpected Error</Heading>
      <Paragraph>
        Something went wrong, please try again or contact{" "}
        <Link href="mailto:leandrocortese@gmail.com">
          leandrocortese@gmail.com
        </Link>
        .
      </Paragraph>
    </header>
  </Layout>
);

export default ErrorPage;
