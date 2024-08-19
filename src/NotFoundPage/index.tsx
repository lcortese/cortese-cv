import React from "react";
import type { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Link from "../components/Link";

import * as styles from "../MainPage/styles.module.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHome: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    navigate(e.currentTarget.getAttribute("href") || "");
  };

  return (
    <Layout>
      <header className={styles.header}>
        <Heading color="highlight">Page not found</Heading>
        <Paragraph>
          Looks like this page is no longer available. Please try returning to
          the{" "}
          <Link onClick={goToHome} href="/">
            home page
          </Link>
          .
        </Paragraph>
      </header>
    </Layout>
  );
};

export default NotFoundPage;
