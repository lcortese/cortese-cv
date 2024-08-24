import React from "react";
import type { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Header from "../../components/Layout/Header";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Link from "../../components/Link";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handeLinkNavigation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    navigate(e.currentTarget.getAttribute("href") || "");
  };

  return (
    <Layout>
      <Header>
        <Heading color="highlight">Page not found</Heading>
        <Paragraph>
          Looks like this page is no longer available. Please try returning to
          the{" "}
          <Link onClick={handeLinkNavigation} href="/">
            home page
          </Link>
          .
        </Paragraph>
      </Header>
    </Layout>
  );
};

export default NotFoundPage;
