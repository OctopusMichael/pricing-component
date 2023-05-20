import data from "../json/data.json";
import { motion } from "framer-motion";

interface Props {
  isActive?: boolean | undefined;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cards: React.FC<Props> = ({ isActive }) => {
  return (
    <>
      <main>
        {data &&
          data.map((element, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                key={index}
                className={element.card}
              >
                <h1>{element.name}</h1>
                <div className="price">
                  <span>$</span>
                  <h2>
                    {isActive
                      ? `${element.price_monthly}`
                      : `${element.price_annual}`}
                  </h2>
                </div>
                <hr />
                <h3> {element.storage}</h3>
                <hr />
                <h3> {element.users_allowed}</h3>
                <hr />
                <h3> {element.send_limit} </h3>
                <hr />

                <button className={element.button}>learn More</button>
              </motion.div>
            );
          })}
      </main>
    </>
  );
};

export default Cards;
