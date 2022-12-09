//import user from './src/user.json';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: '#010101',
    }}
    className="profile"
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
      className="description"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        className="avatar"
      />
      <p className="name">Petra Marica</p>
      <p className="tag">@pmarica</p>
      <p className="location">Salvador, Brasil</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">1000</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
      </li>
    </ul>
  </div>
);

//Profile.propTypes = {
//
//}
