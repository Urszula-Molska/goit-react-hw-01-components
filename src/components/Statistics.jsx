import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const StatsList = stats.map(statsItem => (
    <li className="item" key={statsItem.id}>
      <span className="label">{statsItem.label}</span>
      <span className="percentage">{statsItem.percentage}</span>
    </li>
  ));

  return (
    <section className="statistics">
      {{ title }.length > 0 && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{StatsList}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
