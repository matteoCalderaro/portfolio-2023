import Animation from '../Animation';
import Carousel from '../components/Carousel';
import data from '../data/data.json';
import HeadingCombo from './../components/HeadingCombo';
import { useState } from 'react';

const Certificates = ({
  openModal,
  setModalContent,
  stopToCount,
  counter,
  setIsVisible,
  setStyle,
}) => {
  const [certificates, setCertificates] = useState(
    data.certificates.filter((c) => c.topic === 'development')
  );
  const sortedCertificates = certificates.sort((a, b) => a.id - b.id);
  // const sortedCertificates = certificates.sort((a, b) =>
  //   Object.values(a.dates[1] - Object.values(b.dates[1]))
  // );

  const [topic, setTopic] = useState('development');

  const handleDevelopment = () => {
    setTopic('development');
    setCertificates(data.certificates.filter((c) => c.topic === 'development'));
  };
  const handleMarketing = () => {
    setTopic('marketing');
    setCertificates(data.certificates.filter((c) => c.topic === 'marketing'));
  };

  return (
    <Animation>
      <div className="certificates-container">
        <HeadingCombo counter={counter} stopToCount={stopToCount} />

        {/* radio button  */}
        <div className="form__group u-margin-bottom-medium">
          <div className="form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              id="small"
              name="size"
              checked={topic === 'development'}
              value={topic === 'development'}
              onChange={handleDevelopment}
            />
            <label htmlFor="small" className="form__radio-label">
              <span className="form__radio-button"></span>
              <span>Sviluppo</span>
            </label>
          </div>
          <div className="form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              id="large"
              name="size"
              value={topic === 'marketing'}
              onChange={handleMarketing}
            />
            <label htmlFor="large" className="form__radio-label">
              <span className="form__radio-button"></span>
              <span>Marketing</span>
            </label>
          </div>
        </div>

        {/* radio button  */}
        {topic === 'development' ? (
          <p className="paragraph u-margin-bottom-medium">
            Curioso di imparare cose nuove e rimanere aggiornato in perfetto
            stile lifelong learning mi rivolgo a varie fonti che spaziano
            dall'università al libero professionista ma si caratterizzano tutte
            per eguale qualità e autorevolezza&nbsp;.&nbsp;.&nbsp;.
          </p>
        ) : (
          <p className="paragraph u-margin-bottom-medium">
            La mia esperienza nel web inizia con il marketing, dal
            posizionamento organico con i primi corsi SEO e di content strategy
            per poi arrivare al tracking e alla digital analytics, spinta che ha
            aperto la strada allo sviluppo&nbsp;.&nbsp;.&nbsp;.
          </p>
        )}

        <Carousel
          certificates={sortedCertificates}
          openModal={openModal}
          setModalContent={setModalContent}
          setIsVisible={setIsVisible}
          setStyle={setStyle}
        />
      </div>
    </Animation>
  );
};
export default Certificates;
