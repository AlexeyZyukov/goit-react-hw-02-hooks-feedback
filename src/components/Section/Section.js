import PropTypes from 'prop-types';
import styles from './section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
