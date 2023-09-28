import css from "./Statistics.module.css"

const getRundomColor = () => {
  return Math.random().toString(16).substr(-6)
}

const Statistics = props => (
  <section className={css.statistics}>
    <h2 className={css.title}>{props.title}</h2>

    <ul className={css.statList}>
      {props.stats.map((item, index) => {
        return (
          <li className={css.item} style={{'backgroundColor': "#" + getRundomColor()}}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        )
      })}
    </ul>
  </section>
);

export default Statistics