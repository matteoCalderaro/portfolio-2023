import Animation from '../Animation';
// import images from '../data/images.json';
import logos from '../Logos.svg';
//import { NavLink } from 'react-router-dom';

const Profile = () => {
  const iconName = [
    'react',
    'laravel',
    'javaScript',
    'html',
    'css',
    'node',
    'sass',
  ];
  return (
    <>
      <Animation>
        <div className="profile-container">
          <div className="profile">
            <figure className="profile__shape">
              <img
                src="img/matteo-headshot-removebg.png"
                alt="Matteo Calderaro profile"
                className="profile__img"
              />
            </figure>
            <div className="profile__text">
              <h3
                className="heading-tertiary u-margin-bottom-small"
                style={{ color: 'yellow' }}
              >
                MI PRESENTO
              </h3>
              <p className="paragraph">
                Ho scoperto il web dal basso, inserendo foto in un CMS pur non
                sapendo cosa fosse un tag HTML. Le circostanze mi hanno
                avvicinato a Google Analytics e con l'occasione ho visto i primi
                script JS. Un giorno ho deciso, e grazie ad un bootcamp ho mosso
                i primi passi con i linguaggi di programmazione per poi correre
                con il framework Laravel. Da autodidatta ho affrontato
                l'ecosistema javascript con React e Node.js. Ho realizzato
                questo sito in React per presentarvi la mia preparazione e
                alcuni progetti&nbsp;.&nbsp;.&nbsp;.
              </p>
            </div>
          </div>
          {/* <div className="clearfix">
            <div className="btn">
              <NavLink to="/info" className="btn__text">
                contattami
              </NavLink>
            </div>
          </div> */}
          <div className="logos">
            {iconName.map((icon, index) => (
              <div className="logo" key={index}>
                <svg>
                  <use href={`${logos}#icon-${iconName[index]}`} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </Animation>
    </>
  );
};

export default Profile;
