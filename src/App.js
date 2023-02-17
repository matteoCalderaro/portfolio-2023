import Certificates from './pages/Certificates';
import { Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Info from './pages/Info';
import './sass/main.css';
import SharedLayout from './pages/SharedLayout';
import { useState } from 'react';
//import Animation from './Animation';
import AnimationOpen from './AnimationOpen';
//import { MyComponent } from './components/MyComponent';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState('');
  const [style, setStyle] = useState('hide--right');
  const [counter, setCounter] = useState(null);
  console.log(isVisible);
  console.log(style);
  const stopToCount = (value) => {
    setCounter(value);
  };

  const setModalContent = (content) => {
    setContent(content);
  };

  return (
    <>
      <AnimationOpen>
        {/* <MyComponent /> */}
        <Routes>
          <Route
            path="/"
            element={
              <SharedLayout
                isVisible={isVisible}
                content={content}
                style={style}
                setStyle={setStyle}
              />
            }
          >
            <Route path="/" element={<Profile />} />
            <Route
              path="corsi"
              element={
                <Certificates
                  setModalContent={setModalContent}
                  counter={counter}
                  stopToCount={stopToCount}
                  setIsVisible={setIsVisible}
                  setStyle={setStyle}
                />
              }
            />
            <Route
              path="progetti"
              element={
                <Jobs
                  setModalContent={setModalContent}
                  setIsVisible={setIsVisible}
                  setStyle={setStyle}
                />
              }
            />
            <Route path="info" element={<Info />} />
          </Route>
        </Routes>
      </AnimationOpen>
    </>
  );
};

export default App;
