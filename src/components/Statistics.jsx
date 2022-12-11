import PropTypes from 'prop-types';
import css from '../styles/Statistics.module.css';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics_section}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statUl}>
        {stats.map(statsItem => (
          <li
            style={{ backgroundColor: randomColor() }}
            className={css.statLi}
            key={statsItem.id}
          >
            <span className={css.label}>{statsItem.label}</span>
            <span className={css.percentage}>{statsItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
