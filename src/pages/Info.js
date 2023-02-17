import Animation from '../Animation';

import {
  PhoneIcon,
  FolderArrowDownIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const Info = () => {
  return (
    <Animation>
      <h2 className="heading-secondary u-margin-bottom-small">info</h2>

      <div className="info-container">
        <div className="personal-info">
          <div className="item">
            <div className="item__icon">
              <PhoneIcon />
            </div>
            <a href="tel:3407649157" className="item__phone">
              +39 340 7649157
            </a>
          </div>
          <div className="item">
            <div className="item__icon">
              <MapPinIcon />
            </div>
            <div className="item__text">
              via delle Busatte 32, 3069 Nago - Torbole
            </div>
          </div>
          <div className="item">
            <div className="item__icon">
              <EnvelopeOpenIcon />
            </div>
            <div className="item__text">matteocalderaro@gmail.com</div>
          </div>
          <a
            className="item cv"
            href="https://drive.google.com/file/d/1uuqFacHPokjFBNYgK8P_JXZLOaTz27Q-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item__icon">
              <FolderArrowDownIcon className="cv__icon" />
            </div>
            <div className="item__link cv__link">scarica il CV</div>
          </a>
        </div>

        <form name="contact" method="post" className="form-container">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            className="info__name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="info__email"
          ></input>
          <textarea
            name="message"
            placeholder="Messaggio"
            required
            className="info__message"
          ></textarea>

          <button type="submit" className="btn-color info__button">
            Invia
          </button>
        </form>
      </div>
    </Animation>
  );
};
export default Info;
