import React from "react";

import {
  FontColors,
  FontSizes,
  Headings,
  type WrapperProps,
} from "../components/@types";
import Text from "../components/Text";
import Page from "../components/Layout/Page";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

import * as styles from "./styles.module.scss";

const H1Page = ({ children }: WrapperProps) => (
  <Heading size="lg" margin="lg">
    {children}
  </Heading>
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
      <Heading margin="none" type="h2" color="highlight">
        Software Tech Lead
      </Heading>
    </header>
    <Page className={styles.section}>
      <H1Page>Personal Data</H1Page>

      <Heading {...h2PageProps} margin="none">
        Birth Date
      </Heading>
      <Paragraph>05.17.1987</Paragraph>

      <Heading {...h2PageProps} margin="none">
        Hometown
      </Heading>
      <Paragraph>Bariloche, Río Negro.</Paragraph>

      <Heading {...h2PageProps} margin="none">
        Address
      </Heading>
      <Paragraph>535 Limay Avenue st, Dina Huapi 8402 Argentina</Paragraph>

      <Heading {...h2PageProps} margin="none">
        Phone Number
      </Heading>
      <Paragraph>1537888286</Paragraph>

      <Heading {...h2PageProps} margin="none">
        E-mail
      </Heading>
      <Paragraph>leandrocortese@gmail.com</Paragraph>
    </Page>

    <Page className={styles.section}>
      <H1Page>Studies</H1Page>

      <Heading {...h2PageProps} margin="sm">
        Courses
      </Heading>
      <Paragraph>
        UTN FRSN – 3d Print, technologies and Materials (2021)
        <br />
        <Text color="light">Average: 99.45</Text>
      </Paragraph>

      <Heading {...h2PageProps} margin="sm">
        College
      </Heading>
      <Paragraph>
        Da Vinci School – Multimedia Design (2005-2008)
        <br />
        <Text color="light">Average: 8.64</Text>
      </Paragraph>

      <Heading {...h2PageProps} margin="sm">
        High School
      </Heading>
      <Paragraph margin="sm">
        Don Bosco – Economic and Enterprise Management (2002-2004)
        <br />
        <Text color="light">Average: 8.61</Text>
      </Paragraph>
      <Paragraph>
        Escuela Cooperativa Técnica los Andes - Automation Engineering
        (2000-2001)
        <br />
        <Text color="light">Average: 8.16</Text>
      </Paragraph>
    </Page>

    <Page className={styles.section}>
      <H1Page>Technologies</H1Page>

      <ul className={styles.technologies}>
        <Text element="li" color="highlight" size="md">
          Object-oriented programming <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          Component-oriented Programming <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          JavaScript <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          ActionScript <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          PHP <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          Node.js <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          API Rest architecture <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          MySQL <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          MongoDB <Text color="light">Medium</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          Angular <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          React <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          Next.Js <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          Vue <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          Express <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          Laravel <Text color="light">Medium</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          GIT <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          Semantic Markup <Text color="light">Advanced</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          AWS <Text color="light">Medium</Text>
        </Text>
        <Text element="li" color="highlight" size="md">
          NestJs <Text color="light">Medium</Text>
        </Text>
      </ul>
    </Page>

    <Page className={styles.section}>
      <H1Page>Job Experiences</H1Page>

      <article className={styles["section__job-experience"]}>
        <Heading size="md" margin="xs">
          <Text color="light">05.</Text>
          <Text color="highlight">2023</Text> – <Text color="light">06.</Text>
          <Text color="highlight">2024</Text>: AUNA Salud
        </Heading>

        <Heading type="h2" size="sm" margin="xs" weight="medium">
          Tech Lead: <Text color="light">05.2023</Text> –{" "}
          <Text color="light">12.2023</Text>
          <br />
          Engineer Manager: <Text color="light">01.2024</Text> –{" "}
          <Text color="light">06.2024</Text>
        </Heading>

        <Paragraph>
          This company represented a great challenge, as I was hired along with
          other technical leaders to structure the engineering department. Since
          this company belongs to the healthcare sector and had only worked with
          providers up to that point, its system was becoming overly complex.
          After several months and a lot of effort, we managed to establish the
          teams and workflows.
        </Paragraph>

        <Paragraph>
          By the end of the year, the company suggested promoting me to the
          position of Engineering Manager of the &quot;Agendamiento
          Multisede&quot; team, a product intended for the patient appointment
          booking system.
        </Paragraph>
      </article>

      <article className={styles["section__job-experience"]}>
        <Heading size="md" margin="xs">
          <Text color="light">05.</Text>
          <Text color="highlight">2022</Text> – <Text color="light">05.</Text>
          <Text color="highlight">2023</Text>: Karvi
        </Heading>

        <Heading type="h2" size="sm" margin="xs" weight="medium">
          Frontend Tech Lead
        </Heading>

        <Paragraph>
          This company is an interesting project that combines important pieces:
          a big public site with a lot of publications, SEO optimizations, large
          traffic, and an intranet where the dealers create publications that
          will be published on Karvi and other portals. For this position, I was
          able to apply a lot of knowledge acquired during my career, making me
          stronger as a developer and lead of a team, with whom we achieved
          outstanding results. I am very proud of our work.
        </Paragraph>
      </article>

      <article className={styles["section__job-experience"]}>
        <Heading size="md" margin="xs">
          <Text color="light">11.</Text>
          <Text color="highlight">2020</Text> – <Text color="light">03.</Text>
          <Text color="highlight">2022</Text>: Yappa
        </Heading>

        <Heading type="h2" size="sm" margin="xs" weight="medium">
          Full Stack software engineer
        </Heading>

        <Paragraph>
          This startup presented me with a lot of technical challenges. After
          many years, I had the opportunity to work again on projects related to
          audio and video, which are very enjoyable areas for me, where I was
          able to take advantage of my knowledge in multimedia (audio recording,
          video compression, etc.). Here, I was able to take on backend tasks
          again after many years. It was a good experience to feel like a Full
          Stack developer.
        </Paragraph>
      </article>

      <article className={styles["section__job-experience"]}>
        <Heading size="md" margin="xs">
          <Text color="light">02.</Text>
          <Text color="highlight">2020</Text> – <Text color="light">10.</Text>
          <Text color="highlight">2020</Text>: Medallia
        </Heading>

        <Heading type="h2" size="sm" margin="xs" weight="medium">
          Front end Developer
        </Heading>

        <Paragraph>
          In this company, I learned how to organize the job between a lot of
          teams and objectives. However, the technical challenges were not
          attractive to me, so I decided to seek new opportunities after a few
          months.
        </Paragraph>
      </article>

      <article className={styles["section__job-experience"]}>
        <Heading size="md" margin="xs">
          <Text color="light">10.</Text>
          <Text color="highlight">2016</Text> – <Text color="light">01.</Text>
          <Text color="highlight">2020</Text>: Elementum
        </Heading>

        <Heading type="h2" size="sm" margin="xs" weight="medium">
          Full stack software engineer II
        </Heading>

        <Paragraph>
          This is a startup company located in Mountain View, but large for the
          Argentine market. So I had to learn many formal procedures in a short
          time. For me, it was an important period to enhance my professional
          profile and gave me the opportunity to expand other skills more
          related to architecture instead of coding. In this job, I was promoted
          to Software Engineer level 2. At that point, I felt a chapter in my
          career had closed. After careful thought, I decided to pursue new
          goals.
        </Paragraph>
      </article>

      <article className={styles["section__job-experience"]}>
        <Heading size="md" margin="xs">
          <Text color="light">09.</Text>
          <Text color="highlight">2011</Text> – <Text color="light">09.</Text>
          <Text color="highlight">2016</Text>: Truelogic
        </Heading>

        <Heading type="h2" size="sm" margin="xs" weight="medium">
          Front end Tech Lead
        </Heading>

        <Paragraph>
          I started working on fast web projects using common PHP frameworks
          like Drupal or WordPress. I worked on several sites dedicated to the
          Emmy Awards using those technologies. However, in 2012, I moved to the
          frontend team to start a new web application for &quot;Turn&quot; a
          company specialized in ad distribution. We migrated the old frontend
          app to the most recent technologies of the time: Angular and
          Bootstrap. After two years working with that customer, I was promoted
          to Tech Lead. During my last year at the company, I was assigned a new
          customer: Elementum, software related to supply chain management.
          After eight months, the company decided to establish a big team in
          Argentina, so I accepted the job offer.
        </Paragraph>
      </article>

      <article className={styles["section__job-experience"]}>
        <Heading size="md" margin="xs">
          <Text color="light">05.</Text>
          <Text color="highlight">2010</Text> – <Text color="light">08.</Text>
          <Text color="highlight">2011</Text>: Indietech (Freelance)
        </Heading>

        <Heading type="h2" size="sm" margin="xs" weight="medium">
          Front end developer
        </Heading>

        <Paragraph>
          Indietech is a small-medium company dedicated to commercial sites. I
          was contacted to develop new interactive sites using JavaScript/jQuery
          with the objective of deprecating the old Flash sites of their
          customers. I was also dedicated to making responsive HTML markups for
          several projects. I decided to leave this job to work full time in my
          new job.
        </Paragraph>
      </article>

      <article className={styles["section__job-experience"]}>
        <Heading size="md" margin="xs">
          <Text color="light">04.</Text>
          <Text color="highlight">2008</Text> – <Text color="light">08.</Text>
          <Text color="highlight">2011</Text>: Soluciones Uno
        </Heading>

        <Heading type="h2" size="sm" margin="xs" weight="medium">
          Production Lead
        </Heading>

        <Paragraph>
          This was my first formal job. Soluciones Uno was an Argentine
          small-medium enterprise that provided an integral e-commerce service
          to different customers. Basically, it was a service that started from
          the corporate design and ended with the e-commerce website
          development. During the first period, I was integrated into the design
          team, but a couple of months later, I was promoted to the development
          team, first to make HTML markups, and later for PHP development and DB
          design based on MySQL. During my last year, I was leading a small
          development team of six people. I left the job to seek a bigger
          company.
        </Paragraph>
      </article>
    </Page>

    <Page className={styles.section}>
      <H1Page>Other Experiences</H1Page>

      <Heading {...h2PageProps} margin="xs">
        3D Printing
      </Heading>
      <Paragraph>
        During 2019, I started in this field and I am learning more every day.
        At the moment, I have built three printers, but I am sure that I have a
        lot more to learn.
      </Paragraph>

      <Heading {...h2PageProps} margin="xs">
        Photography
      </Heading>
      <Paragraph>
        I am an amateur photographer. I dedicate much of my free time to
        perfecting my knowledge about photography. I have taken some courses and
        spent a lot of money on equipment!
      </Paragraph>

      <Heading {...h2PageProps} margin="xs">
        Design, audio and video
      </Heading>
      <Paragraph>
        While my primary profession is something else, I developed a passion for
        web development during my final years of college. I always strive to
        apply my design knowledge, particularly in areas like HTML semantics and
        complex topics such as video compression.
      </Paragraph>
    </Page>

    <Page className={styles.section}>
      <H1Page>Languages</H1Page>
      <Paragraph>
        <Text color="highlight">English</Text> <Text color="light">Medium</Text>
      </Paragraph>
    </Page>
  </>
);

export default Main;
