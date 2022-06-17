import styles from './alert.module.css';
import cn from 'classnames'; // classnames is a simple library that allows for easy class name toggling based on a boolean condition

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}