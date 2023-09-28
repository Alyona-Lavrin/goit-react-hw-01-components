import css from "./Statistics.module.css"

const Statistics = props => (
<section className={css.statistics}>
  <h2 className={css.title}>{props.title}</h2>

  <ul className={css.statList}>
    <li className={css.item}>
      <span className={css.label}>{props.stats[0].label}</span>
      <span className={css.percentage}>{props.stats[0].percentage}%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{props.stats[1].label}</span>
      <span className={css.percentage}>{props.stats[1].percentage}%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{props.stats[2].label}</span>
      <span className={css.percentage}>{props.stats[2].percentage}%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{props.stats[3].label}</span>
      <span className={css.percentage}>{props.stats[3].percentage}%</span>
    </li>
  </ul>
</section>
);

export default Statistics