import { clsx } from 'clsx';
import styles from './Input.module.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, id, className, ...rest }: Props) {
  return (
    <div className={clsx(styles.wrapper, error && styles.error)}>
      {label && <label className={styles.label} htmlFor={id}>{label}</label>}
      <input id={id} className={clsx(styles.input, className)} {...rest} />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
