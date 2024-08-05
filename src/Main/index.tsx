import React from "react";
import Page from '../components/Layout/Page';
import Heading from "../components/Heading";

import * as styles from './styles.module.scss';

const Main = () => (
  <>
    <header className={styles.header}>
      <Heading>Leandro Cortese</Heading>
      <Heading type="h2" color="highlight">Software Tech Lead</Heading>
    </header>
    <Page>
      <p>Hola a jajaj todos Asssssd asdadasd  ssssssssssssssssssssssss ssssssssssss s dsadsasd aAAAAAAAAAAAAAA</p>
    </Page>
  </>
);

export default Main;
