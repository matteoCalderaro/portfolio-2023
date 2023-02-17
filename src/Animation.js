import { motion } from 'framer-motion';

const Animation = ({ children }) => {
  return (
    <motion.div
      className="motion-container"
      // initial={{ scaleX: 0, rotateX: 0 }}
      // animate={{ scaleX: 1, rotateX: [45, 0] }}
      // initial={{ y: 0, scaleX: 0 }}
      // animate={{ y: 10, scaleX: 1 }}
      initial={{ scaleX: 0, y: 0 }}
      animate={{ scaleX: 1, y: 0 }}
      // initial={{ scaleY: 0, x: 0 }}
      // animate={{ scaleY: 1, x: 0 }}
      // initial={{ y: 0 }}
      // animate={{ y: 20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};
export default Animation;
