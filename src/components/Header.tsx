import { motion } from "framer-motion";

interface Props {
  isActive?: boolean | undefined;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ isActive, setIsActive }) => {
  const handleToggle = () => {
    if (setIsActive) {
      setIsActive(!isActive);
    }
  };
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, ease: "easeIn" },
      }}
    >
      <h1>Our Pricing</h1>
      <div className="section-toggle">
        <h2>Annually</h2>
        <div onClick={handleToggle} className="toggle">
          <div
            className={isActive ? "circle-toggle" : "circle-toggle active"}
          />
        </div>
        <h2>Monthly</h2>
      </div>
    </motion.header>
  );
};

export default Header;
