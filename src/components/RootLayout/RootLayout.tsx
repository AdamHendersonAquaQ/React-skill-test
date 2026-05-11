import { Outlet } from 'react-router-dom';
import { TopBar } from '../TopBar/TopBar';
import styles from './RootLayout.module.css';

export function RootLayout() {
  return (
    <div className={styles['shell']}>
      <TopBar />
      <main className={styles['main']}>
        <Outlet />
      </main>
    </div>
  );
}
