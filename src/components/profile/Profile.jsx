import css from './Profile.module.css';
import user from './user.json';

const props = {
  avatar: user.avatar,
  username: user.username,
  tag: user.tag,
  location: user.location,
  stats: user.stats,
};

export function Profile() {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={props.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.userName}>{props.username}</p>
        <p className={css.userTag}>@{props.tag}</p>
        <p className={css.userLocation}>{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItemFollovers}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{props.stats.followers}</span>
        </li>
        <li className={css.statsItemViews}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{props.stats.views}</span>
        </li>
        <li className={css.statsItemLikes}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
