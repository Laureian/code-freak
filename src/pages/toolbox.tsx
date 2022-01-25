import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import {
  NoImage,
  PostFull,
  PostFullHeader,
  PostFullTitle,
  PostFullCustomExcerpt,
} from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const Toolset: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Toolbox</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">Toolbox</PostFullTitle>
              <PostFullCustomExcerpt className="post-full-custom-excerpt">
                poniżej znajdziesz listę narzędzi i sprzętu z którego korzystam na codzień
              </PostFullCustomExcerpt>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h2>Sprzęt</h2>
                <p>
                  <ul>
                    <li>
                      <strong>MacBook Pro 16 2019</strong> - i9, 16 GB DDR4
                    </li>
                    <li>
                      <strong>Dell U2718Q</strong> - monitor
                    </li>
                    <li>
                      <strong>LG 27UL850-W</strong> - monitor z Power Delivery
                    </li>
                    <li>
                      <strong>Synology DS920+</strong> - NAS
                    </li>
                    <li>
                      <strong>YubiKey 5C NFC</strong> - sprzętowe klucze U2F/FIDO 2
                    </li>
                  </ul>
                </p>
                <h2>Dokumentacja/notatki</h2>
                <p>
                  <ul>
                    <li>
                      <a href="https://whimsical.com/" rel="noreferrer" target="_blank">
                        <strong>Whimsical</strong>
                      </a>{' '}
                      - tworzenie diagramów stanu czy przepływów, dokumentowanie
                    </li>
                    <li>
                      <a href="https://www.notion.so/" rel="noreferrer" target="_blank">
                        <strong>Notion</strong>
                      </a>{' '}
                      - notatki na sterydach
                    </li>
                    <li>
                      <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
                        <strong>Figma</strong>
                      </a>{' '}
                      - tworzenie makiet i prototypów aplikacji
                    </li>
                  </ul>
                </p>
                <h2>Programowanie</h2>
                <p>
                  <ul>
                    <li>
                      <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank">
                        <strong>VS Code</strong>
                      </a>{' '}
                      - solidny darmowy edytor
                    </li>
                    <li>
                      <a
                        href="https://www.jetbrains.com/datagrip/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <strong>DataGrip</strong>
                      </a>{' '}
                      - IDE do pracy z bazami danych, współpracuje z wieloma silnikami, podpowiada
                      składnie, pozwala sprawnie zarządzać zapytaniami
                    </li>
                    <li>
                      <a href="https://insomnia.rest/" rel="noreferrer" target="_blank">
                        <strong>Insomnia</strong>
                      </a>{' '}
                      - obok Postmana jedno z najpopularniejszych narzędzi do pracy z Rest API
                    </li>
                    <li>
                      <a href="https://www.postman.com/" rel="noreferrer" target="_blank">
                        <strong>Postman</strong>
                      </a>{' '}
                      - testowanie, tworzenie zapytań, praca z wieloma środowiskami. Staram się
                      wybierać Insomnie kiedy to możliwe - ze względu na prostszy interfejs.
                    </li>
                    <li>
                      <a href="https://hyper.is/" rel="noreferrer" target="_blank">
                        <strong>Hyper</strong>
                      </a>{' '}
                      - nowoczesny terminal, zbudowany na frameworku electron - wspiera wtyczki
                    </li>
                  </ul>
                </p>
                <h2>Produktywność</h2>
                <p>
                  <ul>
                    <li>
                      <a
                        href="https://en.wikipedia.org/wiki/Calendar_(Apple)"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <strong>Apple Calendar</strong>
                      </a>{' '}
                      - zarządzanie kalendarzem i spotkaniami
                    </li>
                    <li>
                      <a
                        href="https://en.wikipedia.org/wiki/Apple_Mail"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <strong>Apple Mail</strong>
                      </a>{' '}
                      - zarządzanie pocztą. Próbowałem pracoważ z Shift czy Outlook ale domyślny
                      klient pocztowy Apple najbardziej przypadł mi do gustu.
                    </li>
                    <li>
                      <a href="https://todoist.com/" rel="noreferrer" target="_blank">
                        <strong>Todoist</strong>
                      </a>{' '}
                      - zarządzanie codziennymi zadaniami
                    </li>
                    <li>
                      <a
                        href="https://www.atlassian.com/software/jira"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <strong>Jira</strong>
                      </a>{' '}
                      - organizacja pracy na projektach
                    </li>
                    <li>
                      <a href="https://github.com/Laureian" rel="noreferrer" target="_blank">
                        <strong>GitHub</strong>
                      </a>{' '}
                      - miejsce do przechowywania kodu
                    </li>
                    <li>
                      <a href="https://1password.com/" rel="noreferrer" target="_blank">
                        <strong>1Password</strong>
                      </a>{' '}
                      - zarządzanie hasłami
                    </li>
                    <li>
                      <a href="https://endel.io/" rel="noreferrer" target="_blank">
                        <strong>Endel</strong>
                      </a>{' '}
                      - muzyka która pomaga mi się skupić
                    </li>
                  </ul>
                </p>
                <h2>Frameworki/Języki</h2>
                <p>
                  <ul>
                    <li>
                      <a href="https://typescriptlang.org/" rel="noreferrer" target="_blank">
                        <strong>Typescript</strong>
                      </a>{' '}
                      - JavaScript ze składnią dla typów.
                    </li>
                    <li>
                      <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
                        <strong>React</strong>
                      </a>{' '}
                      - świetna biblioteka do budowania rozwiązań frontendowych
                    </li>
                    <li>
                      <a href="https://emotion.sh/" rel="noreferrer" target="_blank">
                        <strong>Emotion</strong>
                      </a>{' '}
                      - CSS-in-JS
                    </li>
                    <li>
                      <a href="https://nestjs.com/" rel="noreferrer" target="_blank">
                        <strong>Nest</strong>
                      </a>{' '}
                      - framework Node.js do budowania rozwiązań server-side. Z pudełka posiada
                      wszystko co dla mnie potrzebne: TypeScript, Dependency Injection, walidację etc.
                    </li>
                  </ul>
                </p>
                <h2>Hosting</h2>
                <p>
                  <ul>
                    <li>
                      <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">
                        <strong>Netlify</strong>
                      </a>{' '}
                      - hosting prostych stron
                    </li>
                    <li>
                      <a href="https://retool.com/" rel="noreferrer" target="_blank">
                        <strong>Retool</strong>
                      </a>{' '}
                      - tworzenie aplikacji administracyjnych dla organizacji non-profit dla
                      której pomagam
                    </li>
                    <li>
                      <a href="https://strapi.io/" rel="noreferrer" target="_blank">
                        <strong>Strapi</strong>
                      </a>{' '}
                      - headless CMS - pozwala szybko stworzyć strukturę treści i udostępnia podstawowe
                      api i panel do zarządania nimi
                    </li>
                    <li>
                      <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">
                        <strong>Gatsby</strong>
                      </a>{' '}
                      - generowanie statycznych, szybkich stron z dobrym SEO
                    </li>
                    <li>
                      <a href="https://www.ovhcloud.com/" rel="noreferrer" target="_blank">
                        <strong>OVHcloud</strong>
                      </a>{' '}
                      - używam tylko i wyłącznie do zakupu domen
                    </li>
                    <li>
                      <a href="https://aws.amazon.com/" rel="noreferrer" target="_blank">
                        <strong>AWS</strong>
                      </a>{' '}
                      - używam w pracy do hostowania usług
                    </li>
                    <li>
                      <a href="https://azure.microsoft.com/" rel="noreferrer" target="_blank">
                        <strong>Microsoft Azure</strong>
                      </a>{' '}
                      - hostowanie usług dla organizacji non-profit dla której pomagam.
                      Mają świetne programy grantowe dla organizacji.
                    </li>
                  </ul>
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Toolset;
