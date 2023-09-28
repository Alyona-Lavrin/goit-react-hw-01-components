import css from './FriendListItem.module.css'

const FriendListItem = props => (
    <li className={css.item}>
        {props.isOnline && <span className={css.online}></span>}
        {!props.isOnline && <span className={css.offline}></span>}
        <img className={css.avatar} src={props.avatar} alt={props.name} />
        <span>{props.name}</span>
    </li>
)

export default FriendListItem