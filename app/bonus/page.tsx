import { Metadata } from "next";
import styles from "../page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `뽀나스 페이지입니다.`,
    description: `이 페이지 설명이 좀 길어야 좋다고 하더라구요. 검색엔진 구글 서치콘솔 사이트 간단한 구조입니다.`,
    keywords: [
      "간단한",
      "web",
      "사이트",
      "search engine",
      "google",
      "SEO",
      "simple",
      "searchable",
      "검색테스트",
    ],
    openGraph: {
      title: `뽀나스 페이지입니다.`,
      description: `이 페이지 설명이 좀 길어야 좋다고 하더라구요. 검색엔진 구글 서치콘솔 사이트 간단한 구조입니다.`,
      url: "https://seo-test-pi.vercel.app/bonus",
      type: "website",
      locale: "ko_KR",
      images: [
        {
          url: "https://seo-test-pi.vercel.app/thumnail.webp",
          width: 840,
          height: 600,
          alt: "Seungwon simple site thumnail",
        },
      ],
    },
  };
}

const About = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>뽀나스 페이지입니다</header>

      <main className={styles.main}>
        <h1>두번째 페이지입니다.</h1>
        <h2>
          <summary>메인 페이지가 아니면 색인 생성에 박한걸까요?</summary>
        </h2>
        <article>
          <img
            src="/thumnail.webp"
            alt="Seungwon simple site thumnail"
            width={420}
            height={300}
          />
          <ol>
            <li>내용을 더더 줄여볼게요 대신 이번에 사진이 있어요</li>
          </ol>
        </article>

        <div>
          <h3>키워드</h3>
          <h3>간단한 사이트</h3>
          <h3>검색</h3>
          <h3>검색엔진</h3>
          <h3>구글</h3>
          <h3>SEO</h3>
          <h3>가장 간단한</h3>
          <h3>검색이 되게</h3>
        </div>

        <div className={styles.ctas}></div>
      </main>
      <footer className={styles.footer}>
        <div>만든이 : Seungwon</div>
      </footer>
    </div>
  );
};

export default About;
