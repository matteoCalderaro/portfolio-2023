/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useRef } from 'react';
//import { FaTimes, FaBars } from 'react-icons/fa';
//import { UitMultiply } from '@iconscout/react-unicons-thinline';
import { UilTimes } from '@iconscout/react-unicons';
//import logos from '../Logos.svg';
import { useWindowSize } from './../components/useWindowSize';

const Modal = ({ content, style, setStyle }) => {
  //console.log(style);
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollTo(0, 0);
  }, [style]);
  const [width, height] = useWindowSize();
  return (
    <div className={style}>
      {/* <div style={{ fontSize: '1rem' }}>
        Width: {width} Height: {height}
      </div> */}
      <div className="modal-outer-container">
        <div className="modal-outer-header">
          <h2 className="title">{content.title}</h2>

          <button
            className="btn-close"
            onClick={() => {
              setStyle('modal-container hide--right');
            }}
          >
            <UilTimes size="40" className="btn-modal btn-close__icon" />
          </button>
        </div>
        <div className="modal-inner-container " ref={myRef}>
          <div className="grid-content">
            <div className="header-inner">
              <div className="header-inner__title-container">
                <h2 className="header-inner__subtitle">{content.subtitle}</h2>
                {content.location && (
                  <>
                    <span>&mdash;</span>
                    <span className="header-inner__location">
                      <em>{content.location}</em>
                    </span>
                  </>
                )}
              </div>

              {content.dates?.map((date, i) => (
                <span className="header-inner__dates" key={i}>
                  <span className="header-inner__dates__key">
                    {Object.keys(date)}&nbsp;&nbsp;
                  </span>
                  <span className="header-inner__dates__value">
                    {Object.values(date)}
                  </span>
                </span>
              ))}
            </div>

            <div className="labels">
              {content.labels?.map((label, i) => (
                <span className="labels__label" key={i}>
                  {/* {Object.keys(label)} &mdash;  */}
                  {Object.values(label)}
                </span>
              ))}
            </div>

            {content.link ? (
              <a href={content.link} className="link" target="_blank">
                <img
                  src={content.file}
                  className="link__img"
                  alt={content.file.substring(4)}
                />
              </a>
            ) : (
              <img
                src={content.file}
                className="img"
                alt={content.file.substring(4)}
              />
            )}

            <div className="text">
              {content.text}
              <ul className="text__list">
                {content.list?.map((item, i) => (
                  <li key={i}>
                    {/* {Object.keys(label)} &mdash;  */}
                    {Object.values(item)}
                  </li>
                ))}
              </ul>
            </div>

            {content.link && (
              <a
                href={content.link}
                target="_blank"
                className="btn-link-color btn-modal"
              >
                Vai al sito
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
