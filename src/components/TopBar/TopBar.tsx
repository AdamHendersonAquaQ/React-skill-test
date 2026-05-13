import styles from './TopBar.module.css';

type Props = {
  company?: string;
  period?: string;
};

export function TopBar({ company = 'StartupCo', period = 'Q4 2024' }: Props) {
  return (
    <header className={styles.banner}>
      <div className={styles.company}>{company}</div>

      <div className={styles.logoCenter}>
        <div className={styles.logo}>
          <span className={styles.logoText}>TANDE</span>
          <span className={styles.logoHighlight}>M</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.selectors}>
          <select className={styles.select} defaultValue={company}>
            <option>StartupCo</option>
            <option>Acme Corp</option>
            <option>TechCorp</option>
          </select>
          <select className={styles.select} defaultValue={period}>
            <option>Q4 2024</option>
            <option>Q3 2024</option>
            <option>Q2 2024</option>
          </select>
        </div>
        <div className={styles.keyStats}>
          <div className={styles.keyStatItem}>
            <span className={styles.keyStatLabel}>Incorporated</span>
            <span className={styles.keyStatValue}>12 Jun 2018</span>
          </div>
          <div className={styles.keyStatItem}>
            <span className={styles.keyStatLabel}>FY End</span>
            <span className={styles.keyStatValue}>31 March</span>
          </div>
          <div className={styles.keyStatItem}>
            <span className={styles.keyStatLabel}>Tax Deadline</span>
            <span className={styles.keyStatValue}>31 Dec 2025</span>
          </div>
        </div>
      </div>
    </header>
  );
}
