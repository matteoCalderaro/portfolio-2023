/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

const HeadingCombo = ({ counter, stopToCount }) => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);
  //const [plus, setPlus] = useState('');
  const intervalID = useRef(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShow(true);
      setVisible(!visible);
    }, 4000);
    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    intervalID.current = setInterval(() => {
      // if (value < 700 && !counter) {
      if (value < 700) {
        console.log('Set Interval');
        setValue((value) => value + 1);
      } else {
        console.log('Clear Interval');
        clearInterval(intervalID.current);
        stopToCount(700);
        //setPlus('+');
        intervalID.current = null;
      }
    }, 3);

    return () => clearInterval(intervalID.current);
  }, [value]);

  return (
    <div className="heading-combo u-margin-bottom-small">
      <h2 className="heading-secondary">
        <span>Corsi </span>
        {/* inline rotator */}
        <span className="words-wrapper">
          {show ? (
            <>
              <b className={visible ? 'is-hidden' : 'is-visible'}>
                sviluppo web
              </b>
              <b className={!visible ? 'is-hidden' : 'is-visible'}>Marketing</b>
            </>
          ) : (
            <span className="initial">sviluppo web</span>
          )}
        </span>
        {/* inline rotator */}
      </h2>
      <span className="counter__number">{value ? value : counter}</span>
      {/* <span className="counter__plus"> {plus}</span> */}
      <h2 className="counter__default">ore di studio</h2>
    </div>
  );
};
export default HeadingCombo;
