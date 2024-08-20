import React, { useEffect } from "react";
import type { MouseEventHandler } from "react";

import {
  FontColors,
  FontSizes,
  Headings,
  type WrapperProps,
} from "../components/@types";
import Text from "../components/Text";
import Link from "../components/Link";
import SvgIcon from "../components/SvgIcon";
import Button from "../components/Button";
import Page from "../components/Layout/Page";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Layout from "../components/Layout";
import PrintablePageBreak from "../components/PrintablePageBreak";

import * as styles from "./styles.module.scss";
import { FormattedMessage } from "react-intl";
import { useLocale } from "../intl/useLocale";
import { DEFAULT_LOCALE, Locales } from "../intl/constants/langs";
import { useNavigate } from "react-router-dom";

const NOW = new Date();
const BIRTHDATE = new Date("1987-05-17T03:00:00Z");
let age = NOW.getFullYear() - BIRTHDATE.getFullYear();

if (
  NOW.getMonth() < BIRTHDATE.getMonth() ||
  (NOW.getMonth() === BIRTHDATE.getMonth() &&
    NOW.getDate() < BIRTHDATE.getDate())
) {
  age--;
}

const HeadingSection = ({ children }: WrapperProps) => (
  <Heading size="lg" margin="lg">
    {children}
  </Heading>
);

const JobPlaceHeading = ({ children }: WrapperProps) => (
  <Heading size="md" margin="xs" weight="medium">
    {children}
  </Heading>
);

type JobPositionHeadingProps = {
  id: string;
  start: [string, string];
  end?: [string, string];
};
const JobPositionHeading = ({ id, start, end }: JobPositionHeadingProps) => (
  <Heading type="h2" size="sm" margin="xs" weight="medium" lineHeight="md">
    <Text weight="normal">
      <Text color="light">{[start[0]]}.</Text>
      <Text color="highlight">{[start[1]]}</Text>
      {end ? (
        <>
          {" "}
          – <Text color="light">{[end[0]]}.</Text>
          <Text color="highlight">{[end[1]]}</Text>
        </>
      ) : undefined}
    </Text>
    <br />
    <FormattedMessage id={id} />
  </Heading>
);

const h2PageProps = {
  type: Headings.H2,
  size: FontSizes.Md,
  color: FontColors.Highlight,
};

const MainPage = () => {
  const navigate = useNavigate();
  const locale = useLocale() || DEFAULT_LOCALE;

  useEffect(() => {
    document.body.setAttribute("data-loaded", "data-loaded");
    return () => {
      document.body.removeAttribute("data-loaded");
    };
  }, []);

  const handeLinkNavigation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    navigate(e.currentTarget.getAttribute("href") || "");
  };

  const print = () => {
    window.print();
  };

  return (
    <Layout>
      <header className={styles.header}>
        <nav className={styles["header__locales"]}>
          <Paragraph size="sm" color="light">
            <SvgIcon
              color="light"
              size="md"
              src="assets/icons/language.svg"
              className={styles["header__locales__icon"]}
            />{" "}
            <span className={styles["header__locales__options"]}>
              {locale === Locales.EnUs ? (
                <Text color="default">English</Text>
              ) : (
                <Link href="/" onClick={handeLinkNavigation}>
                  English
                </Link>
              )}{" "}
              |{" "}
              {locale === Locales.EsAr ? (
                <Text color="default">Español</Text>
              ) : (
                <Link href={`/${Locales.EsAr}`} onClick={handeLinkNavigation}>
                  Español
                </Link>
              )}
            </span>
          </Paragraph>
        </nav>
        <Heading margin="none">Leandro Cortese</Heading>
        <Heading type="h2" color="highlight">
          <FormattedMessage id="main.subtitle" />
        </Heading>
        <div className={styles["header__actions"]}>
          <Link
            href={`assets/leandro.cortese.${locale}.pdf`}
            target="_blank"
            size="sm"
            className={styles["header__actions__item"]}
          >
            <SvgIcon
              size="md"
              color="light"
              src="assets/icons/download-solid.svg"
            />{" "}
            <FormattedMessage id="label: download" />
          </Link>
          <Button
            styleType="link"
            size="sm"
            onClick={print}
            className={styles["header__actions__item"]}
          >
            <SvgIcon
              size="md"
              color="light"
              src="assets/icons/print-solid.svg"
            />{" "}
            <FormattedMessage id="label: print" />
          </Button>
        </div>
      </header>
      <Page className={styles.section}>
        <HeadingSection>
          <FormattedMessage id="title: personal data" />
        </HeadingSection>

        <Heading {...h2PageProps} margin="none">
          <FormattedMessage id="subtitle: locations" />
        </Heading>
        <Paragraph>
          Dina Huapi, Río Negro, Argentina
          <br />
          Castelar, Buenos Aires, Argentina
        </Paragraph>

        <Heading {...h2PageProps} margin="none">
          <FormattedMessage id="subtitle: age" />
        </Heading>
        <Paragraph>{age}</Paragraph>

        <Heading {...h2PageProps} margin="none">
          LinkedIn
        </Heading>
        <Paragraph>
          <Link
            href="https://www.linkedin.com/in/leandro-cortese"
            target="_blank"
          >
            linkedin.com/in/leandro-cortese
          </Link>
        </Paragraph>

        <Heading {...h2PageProps} margin="none">
          GitHub
        </Heading>
        <Paragraph>
          <Link href="https://github.com/lcortese" target="_blank">
            github.com/lcortese
          </Link>
        </Paragraph>

        <Heading {...h2PageProps} margin="none">
          E-mail
        </Heading>
        <Paragraph>
          <Link href="mailto:leandrocortese@gmail.com">
            leandrocortese@gmail.com
          </Link>
        </Paragraph>
      </Page>

      <PrintablePageBreak />

      <Page className={styles.section}>
        <HeadingSection>
          <FormattedMessage id="title: studies" />
        </HeadingSection>

        <Heading {...h2PageProps} margin="sm">
          <FormattedMessage id="subtitle: courses" />
        </Heading>

        <Paragraph>
          <FormattedMessage id="studies.courses.0.title" /> (2021)
          <br />
          <Text color="light">
            <FormattedMessage id="label: average" />: 99.45
          </Text>
        </Paragraph>

        <Heading {...h2PageProps} margin="sm">
          <FormattedMessage id="subtitle: associatedegree" />
        </Heading>
        <Paragraph>
          <FormattedMessage id="studies.associatedegree.0.title" /> (2005-2008)
          <br />
          <Text color="light">
            <FormattedMessage id="label: average" />: 8.64
          </Text>
        </Paragraph>

        <Heading {...h2PageProps} margin="sm">
          High School
        </Heading>
        <Paragraph margin="sm">
          <FormattedMessage id="studies.highschool.1.title" /> (2002-2004)
          <br />
          <Text color="light">
            <FormattedMessage id="label: average" />: 8.61
          </Text>
        </Paragraph>
        <Paragraph>
          <FormattedMessage id="studies.highschool.0.title" /> (2000-2001)
          <br />
          <Text color="light">
            <FormattedMessage id="label: average" />: 8.16
          </Text>
        </Paragraph>
      </Page>

      <Page className={styles.section}>
        <HeadingSection>
          <FormattedMessage id="title: technologies" />
        </HeadingSection>

        <ul className={styles.technologies}>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Object-oriented programming{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Component-oriented Programming{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>

          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            JavaScript{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Node.js{" "}
            <Text color="light">
              <FormattedMessage id="label: medium" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            C++{" "}
            <Text color="light">
              <FormattedMessage id="label: basic" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Phyton{" "}
            <Text color="light">
              <FormattedMessage id="label: basic" />
            </Text>
          </Text>

          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            MySQL{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            PostgreSQL{" "}
            <Text color="light">
              <FormattedMessage id="label: medium" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            MongoDB{" "}
            <Text color="light">
              <FormattedMessage id="label: medium" />
            </Text>
          </Text>

          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Angular{" "}
            <Text color="light">
              <FormattedMessage id="label: medium" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            React{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Vue{" "}
            <Text color="light">
              <FormattedMessage id="label: medium" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Next.Js{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Ionic{" "}
            <Text color="light">
              <FormattedMessage id="label: medium" />
            </Text>
          </Text>

          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            Express{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            NestJs{" "}
            <Text color="light">
              <FormattedMessage id="label: medium" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            API Rest{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>

          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            AWS{" "}
            <Text color="light">
              <FormattedMessage id="label: medium" />
            </Text>
          </Text>

          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            HTML (Semantic Markup){" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            CSS{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
          <Text
            element="li"
            color="highlight"
            size="md"
            lineHeight="md"
            margin="xs"
          >
            GIT{" "}
            <Text color="light">
              <FormattedMessage id="label: advanced" />
            </Text>
          </Text>
        </ul>
      </Page>

      <PrintablePageBreak />

      <Page className={styles.section}>
        <HeadingSection>
          <FormattedMessage id="title: job experiences" />
        </HeadingSection>

        <article className={styles["section__job-experience"]}>
          <JobPlaceHeading>AUNA Salud</JobPlaceHeading>

          <JobPositionHeading
            id="experience.auna.1.title"
            start={["01", "2024"]}
            end={["05", "2024"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.auna.1.description" />
          </Paragraph>

          <JobPositionHeading
            id="experience.auna.0.title"
            start={["05", "2023"]}
            end={["12", "2023"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.auna.0.description" />
          </Paragraph>
        </article>

        <article className={styles["section__job-experience"]}>
          <JobPlaceHeading>Karvi</JobPlaceHeading>

          <JobPositionHeading
            id="experience.karvi.0.title"
            start={["05", "2022"]}
            end={["03", "2023"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.karvi.0.description" />
          </Paragraph>
        </article>

        <article className={styles["section__job-experience"]}>
          <JobPlaceHeading>Yappa World Incorporated</JobPlaceHeading>

          <JobPositionHeading
            id="experience.yappa.0.title"
            start={["10", "2020"]}
            end={["03", "2022"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.yappa.0.description" />
          </Paragraph>
        </article>

        <article className={styles["section__job-experience"]}>
          <JobPlaceHeading>Medallia</JobPlaceHeading>

          <JobPositionHeading
            id="experience.medallia.0.title"
            start={["01", "2020"]}
            end={["09", "2020"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.medallia.0.description" />
          </Paragraph>
        </article>

        <article className={styles["section__job-experience"]}>
          <JobPlaceHeading>Elementum</JobPlaceHeading>

          <JobPositionHeading
            id="experience.elementum.1.title"
            start={["02", "2019"]}
            end={["12", "2019"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.elementum.1.description" />
          </Paragraph>

          <JobPositionHeading
            id="experience.elementum.0.title"
            start={["10", "2016"]}
            end={["01", "2019"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.elementum.0.description" />
          </Paragraph>
        </article>

        <article className={styles["section__job-experience"]}>
          <JobPlaceHeading>Truelogic</JobPlaceHeading>

          <JobPositionHeading
            id="experience.truelogic.2.title"
            start={["04", "2015"]}
            end={["09", "2016"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.truelogic.2.description" />
          </Paragraph>

          <JobPositionHeading
            id="experience.truelogic.1.title"
            start={["10", "2014"]}
            end={["03", "2015"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.truelogic.1.description" />
          </Paragraph>

          <JobPositionHeading
            id="experience.truelogic.0.title"
            start={["09", "2011"]}
            end={["09", "2014"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.truelogic.0.description" />
          </Paragraph>
        </article>

        <article className={styles["section__job-experience"]}>
          <JobPlaceHeading>Indietech (Freelance)</JobPlaceHeading>

          <JobPositionHeading
            id="experience.indietech.0.title"
            start={["05", "2010"]}
            end={["08", "2011"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.indietech.0.description" />
          </Paragraph>
        </article>

        <article className={styles["section__job-experience"]}>
          <JobPlaceHeading>Soluciones Uno</JobPlaceHeading>

          <JobPositionHeading
            id="experience.s1.2.title"
            start={["06", "2010"]}
            end={["08", "2011"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.s1.2.description" />
          </Paragraph>

          <JobPositionHeading
            id="experience.s1.1.title"
            start={["03", "2009"]}
            end={["05", "2010"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.s1.1.description" />
          </Paragraph>

          <JobPositionHeading
            id="experience.s1.0.title"
            start={["04", "2008"]}
            end={["02", "2009"]}
          />
          <Paragraph>
            <FormattedMessage id="experience.s1.0.description" />
          </Paragraph>
        </article>
      </Page>

      <Page className={styles.section}>
        <HeadingSection>
          <FormattedMessage id="title: other experiences" />
        </HeadingSection>

        <Heading {...h2PageProps} margin="xs">
          <FormattedMessage id="other-experience.2.title" />
        </Heading>
        <Paragraph>
          <FormattedMessage id="other-experience.2.description" />
        </Paragraph>

        <Heading {...h2PageProps} margin="xs">
          <FormattedMessage id="other-experience.1.title" />
        </Heading>
        <Paragraph>
          <FormattedMessage id="other-experience.1.description" />
        </Paragraph>

        <Heading {...h2PageProps} margin="xs">
          <FormattedMessage id="other-experience.0.title" />
        </Heading>
        <Paragraph>
          <FormattedMessage id="other-experience.0.description" />
        </Paragraph>
      </Page>

      <Page className={styles.section}>
        <HeadingSection>
          <FormattedMessage id="title: languages" />
        </HeadingSection>
        <Paragraph>
          <Text color="highlight">
            <FormattedMessage id="label: english" />
          </Text>{" "}
          <Text color="light">
            <FormattedMessage id="label: medium" />
          </Text>
        </Paragraph>
      </Page>
    </Layout>
  );
};

export default MainPage;
