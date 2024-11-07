import { Metadata } from "next";
import styles from "../page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `승원이의 간단한 사이트`,
    description: `간단한 사이트인데 이게 수정 반영되는데 좀 걸리는거 같아요`,
    keywords: [
      "간단한",
      "web",
      "사이트",
      "search engine",
      "google",
      "SEO",
      "simple",
      "searchable",
      "승원",
      "검색테스트",
    ],
    openGraph: {
      title: `승원이의 간단한 사이트`,
      description: `간단한 사이트인데 이게 수정 반영되는데 좀 걸리는거 같아요`,
      url: "https://seo-test-pi.vercel.app",
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
      <header className={styles.header}>승원이의 간단한 사이트</header>

      <main className={styles.main}>
        <h1>첫번째 페이지입니다.</h1>
        <h2>
          <summary>
            빠르게 검색은 되는데 문제는 수정반영이 느린거 같아요
          </summary>
        </h2>
        <article>
          <ol>
            <li>내용을 좀더 줄여볼게요</li>

            <li>적은 내용을 입력하고 싶을수 있잖아요</li>
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
