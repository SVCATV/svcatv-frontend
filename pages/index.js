import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://svcatv.com">SVCATV FRONTEND!</a>
        </h1>

        <p className={styles.description}>
          The overall Objective is to build out these UI made by the UI/UX Team In the PNG UIUX folder of the attached svcatv-uiux folder{' '}
          <code className={styles.code}>Using NEXTJS</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className={styles.card}
          >
            <h3>Commit &rarr;</h3>
            <p>
              Instantly commit your contribution to the project repo on your branch and open PR.
            </p>
          </a>
        </div>
      </main>

      <div className={styles.card}>
        
        <img src="/landing-page-design.png" alt="The Landing Page UI" className={styles.image} />
      </div>

      <footer className={styles.footer}>
        <a
          href="https://join.slack.com/t/svcatv/shared_invite/zt-kojqbnf9-~p95yVC2~wqvfM__A08W3Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          SVCATV Frontend Team
        </a>
      </footer>
    </div>
  )
}
