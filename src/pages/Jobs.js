import Animation from '../Animation';
import Carousel from '../components/Carousel';
import data from '../data/data.json';

const Jobs = ({ openModal, setModalContent, setIsVisible, setStyle }) => {
  const sortedProjects = data.projects.sort((a, b) => a.id - b.id);
  return (
    <Animation>
      <div className="jobs-container">
        <h2 className="heading-secondary u-margin-bottom-small">Progetti</h2>
        <p className="paragraph u-margin-bottom-medium">
          Tanta pratica, perchè solo learning by doing ti consente di toccare
          con mano, comprendere e poi finalmente gestire la complessita del
          programma&nbsp;.&nbsp;.&nbsp;.
        </p>
        <Carousel
          certificates={sortedProjects}
          openModal={openModal}
          setModalContent={setModalContent}
          setIsVisible={setIsVisible}
          setStyle={setStyle}
        />
      </div>
    </Animation>
  );
};
export default Jobs;
