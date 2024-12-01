import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
const Navbar = ({ setclick }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, type: "spring" }}
      className="absolute left-0 top-0 w-full pt-10 z-[9999]"
    >
      <div className="container">
        <div className="text-white flex justify-between items-center">
          {/* logo */}
          <div className="text-2xl">
            <h1>
              <span className="text-primary">Coders</span> Coffee.
            </h1>
          </div>
          {/* hamburger menu */}
          <div>
            <GiHamburgerMenu
              onClick={() => setclick((prev) => !prev)}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
