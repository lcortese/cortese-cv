import React from "react";

import Page from '../components/Layout/Page';
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

import * as styles from './styles.module.scss';

const Main = () => (
  <>
    <header className={styles.header}>
      <Heading>Leandro Cortese</Heading>
      <Heading type="h2" color="highlight">Software Tech Lead</Heading>
    </header>
    <Page>
      <Heading type="h4" color="highlight">Birth Date</Heading>
      <Paragraph>05.17.1987</Paragraph>
      
      <Heading type="h4" color="highlight">Hometown</Heading>
      <Paragraph>Bariloche, Río Negro.</Paragraph>

      <Heading type="h4" color="highlight">Address</Heading>
      <Paragraph>535 Limay Avenue st, Dina Huapi 8402 Argentina</Paragraph>

      <Heading type="h4" color="highlight">Phone Number</Heading>
      <Paragraph>1537888286</Paragraph>

      <Heading type="h4" color="highlight">E-mail</Heading>
      <Paragraph>leandrocortese@gmail.com</Paragraph>
    </Page>
  </>
);

export default Main;
