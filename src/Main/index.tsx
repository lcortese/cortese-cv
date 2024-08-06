import React from "react";

import { FontColors, FontSizes, Headings, type WrapperProps } from "../components/@types";
import Text from '../components/Text';
import Page from '../components/Layout/Page';
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

import * as styles from './styles.module.scss';

const H1Page = ({ children }: WrapperProps) => (
  <Heading size="lg" margin="lg">{children}</Heading>
);

const h2PageProps = {
  type: Headings.H2,
  size: FontSizes.Md,
  color: FontColors.Highlight,
};

const Main = () => (
  <>
    <header className={styles.header}>
      <Heading margin="none">Leandro Cortese</Heading>
      <Heading margin="none" type="h2" color="highlight">Software Tech Lead</Heading>
    </header>
    <Page className={styles.section}>
      <H1Page>Personal Data</H1Page>

      <Heading {...h2PageProps} margin="none">Birth Date</Heading>
      <Paragraph>05.17.1987</Paragraph>
      
      <Heading {...h2PageProps} margin="none">Hometown</Heading>
      <Paragraph>Bariloche, Río Negro.</Paragraph>

      <Heading {...h2PageProps} margin="none">Address</Heading>
      <Paragraph>535 Limay Avenue st, Dina Huapi 8402 Argentina</Paragraph>

      <Heading {...h2PageProps} margin="none">Phone Number</Heading>
      <Paragraph>1537888286</Paragraph>

      <Heading {...h2PageProps} margin="none">E-mail</Heading>
      <Paragraph>leandrocortese@gmail.com</Paragraph>
    </Page>

    <Page className={styles.section}>
      <H1Page>Studies</H1Page>

      <Heading {...h2PageProps} margin="sm">Courses</Heading>
      <Paragraph>
        UTN FRSN – 3d Print, technologies and Materials (2021)<br/>
        <Text color="light">Average: 99.45</Text>
      </Paragraph>
      
      <Heading {...h2PageProps} margin="sm">College</Heading>
      <Paragraph>Da Vinci School – Multimedia Design (2005-2008)<br/>
        <Text color="light">Average: 8.64</Text>
      </Paragraph>

      <Heading {...h2PageProps} margin="sm">High School</Heading>
      <Paragraph margin="sm">Don Bosco – Economic and Enterprise Management (2002-2004)<br/>
        <Text color="light">Average: 8.61</Text>
      </Paragraph>
      <Paragraph>Escuela Cooperativa Técnica los Andes - Automation Engineering (2000-2001)<br/>
        <Text color="light">Average: 8.16</Text>
      </Paragraph>
    </Page>

    <Page className={styles.section}>
      <H1Page>Technologies</H1Page>

      <ul className={styles.technologies}>
        <li>
          <Text color="highlight">Object-oriented programming</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">Component-oriented Programming</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">JavaScript</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">ActionScript</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">PHP</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">Node.js</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">API Rest architecture</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">MySQL</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">MongoDB</Text> <Text color="light">Medium</Text>
        </li>
        <li>
          <Text color="highlight">Angular</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">React</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">Next.Js</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">Vue</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">Express</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">Laravel</Text> <Text color="light">Medium</Text>
        </li>
        <li>
          <Text color="highlight">GIT</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">Semantic Markup</Text> <Text color="light">Advanced</Text>
        </li>
        <li>
          <Text color="highlight">AWS</Text> <Text color="light">Medium</Text>
        </li>
        <li>
          <Text color="highlight">NestJs</Text> <Text color="light">Medium</Text>
        </li>
      </ul>
    </Page>
  </>
);

export default Main;
