import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useWindowSize } from './../components/useWindowSize';
import Modal from './../components/Modal';
import { useState, useEffect } from 'react';

const SharedLayout = ({ content, style, isVisible, setStyle }) => {
  const [width, height] = useWindowSize();
  const [pointer, setPointer] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [checked, setChecked] = useState(false);

  const moveNavbar = () => {
    setShowNavbar(!showNavbar);
    setChecked(!checked);
    setPointer(true);
  };

  useEffect(() => {
    setPointer(true);
    setShowNavbar(false);
    setChecked(false);
  }, [width]);

  return (
    <div
      className="main-container"
      style={{ pointerEvents: pointer ? 'all' : 'none' }}
    >
      {/* <div style={{ fontSize: '1rem' }}>
        Width: {width} Height: {height}
      </div> */}
      <Navbar
        setPointer={setPointer}
        pointer={pointer}
        moveNavbar={moveNavbar}
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
        checked={checked}
        setChecked={setChecked}
      />
      <Outlet />
      {isVisible && (
        <Modal content={content} style={style} setStyle={setStyle} />
      )}
    </div>
  );
};
export default SharedLayout;
