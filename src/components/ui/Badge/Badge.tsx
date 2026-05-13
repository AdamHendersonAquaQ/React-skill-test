import { clsx } from 'clsx';
import styles from './Badge.module.css';

type Variant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'accent';

type Props = {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

export function Badge({ variant = 'neutral', children, className }: Props) {
  return (
    <span className={clsx(styles.badge, styles[variant], className)}>
      {children}
    </span>
  );
}
