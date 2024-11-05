import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>Seungwon simple site</header>

      <main className={styles.main}>
        <h1>세상에서 가장 간단한 사이트입니다</h1>
        <h2>
          <summary>일단 빠르게 검색이 되게하는게 목표에요.</summary>
        </h2>
        <article>
          <ol>
            <li>이게 메인페이지에요.</li>
            <li>아무 기능이 없습니다.</li>
            <li>얼마나 빠르게 검색엔진에 올라갈지 궁금합니다.</li>
            <li>
              너무 내용이 빈약하면 잘 안올라간다고해서 내용을 좀 채워줍니다.
            </li>
            <li>첫번째 시도라서 사진은 넣지 않겠습니다. </li>
          </ol>
        </article>

        <div>
          <h3>개발</h3>
          <h3>웹사이트</h3>
          <h3>테스트</h3>
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
}
