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
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
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

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>O blogu</title>
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
              <PostFullTitle className="post-full-title">O blogu</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  Siemka! Jestem Maciek Andrzejczuk - obecnie programista full stack. Swoją przygodę
                  z kodowaniem zacząłem od fascynasji jeszcze w szkole podstawowej polską sceną
                  phreakerską. Gdzieś w sieci przeczytałem, że żeby zacząć przygodę z phreakingiem
                  muszę znać się na programowaniu i nie wiele myśląc zacząłem naukę Turbo Pascala. W
                  międzyczasie ceny usług telekomunikacyjnych spadły na tyle, że phreaking przestał
                  się opłacać, a dla mnie samo programowanie okazało się ciekawsze niż próby
                  oszukiwania automatów telefonicznych. W gimnazjum zacząłem naukę c++, a w trakcie
                  studiów zacząłem pracę jako programista C#. Kilka lat temu zacząłem przesiadkę
                  na TypeScript, a moja przygoda z programowaniem trwa do dziś.
                </p>
                <p>
                  Witam Cię na blogu którego tematyka poświęcona jest programowaniu. Ze względu na
                  moje zainteresowania znajdziesz tutaj artykuły o technologiach takich jak
                  JavaScript, TypeScript, Node.js, PostgreSQL czy Git. Oprócz tematów stricte
                  technicznych postaram się również skupić na rozwiązywaniu powszechnych problemów
                  za pomocą wzorców projektowych czy stosowaniu odpowiedniej architektury. Plany mam
                  ambitne, mam też jednak świadomość, że ciężko mi będzie przy natłoku pracy skupić
                  się zarówno na pracy zawodowej jak i na prowadzeniu bloga w związku z tym na
                  początek chciałbym w sobie wyrobić nawyk wrzucania nowych materiałów co dwa
                  tygodnie.
                </p>
                <p>
                  No dobrze spytasz więc czym ten blog różnił się będzie od innych których w sieci
                  znaleźć można wiele? Ciężko w dzisiejszych czasach tworzyć treści wyjątkowe. Nie
                  znaczy to jednak, że nie da się tworzyć treści wartościowych. Na tym zamierzam
                  oprzeć idee tego bloga. Nie chcę od pierwszego dnia prowadzenia strony na siłę się
                  wyróżniać, wolę dbać o to, żeby wpisy treści były jak najlepiej i rzetelniej
                  przygotowane. Mam również nadzieję, że z czasem moje artykuły będą coraz ciekawsze
                  i będę przyciągały większą rzeszę czytelników. Podobno najtrudniejszy jest
                  pierwszy krok...
                </p>
              </div>
              <div className="footnotes">Zapraszam!</div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
