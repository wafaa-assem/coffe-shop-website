import { motion } from "framer-motion";
import coffee1Image from "../../assets/coffee1.png";
import coffee2Image from "../../assets/coffee3.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: coffee1Image,
      title: `Black Coffee`,
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 2,
      img: coffee2Image,
      title: `Hot Coffee`,
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 3,
      img: coffee1Image,
      title: `Cold Coffee`,
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  ];
  const containerVariants = {
    hidden: {
      // opacity: 0,
    },
    visible: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delay: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        ease: "easeInOut",
        stifness: 150,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-12 w-full">
      <div className="container space-y-7">
        {/* header section */}
        <div className="text-center max-w-lg mx-auto space-y-5">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stifness: 150,
              damping: 20,
              delay: 0.2,
            }}
            className="font-bold text-4xl text-lightGray"
          >
            Fresh and <span className="text-primary">Tasty coffee</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stifness: 150,
              damping: 20,
              delay: 0.6,
            }}
            className="text-sm opacity-45"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
            dolorem fuga.
          </motion.p>
        </div>
        {/* content section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          className="grid sm:grid-cols-2 md:grid-cols-3"
        >
          {servicesData.map((item) => (
            <motion.div
              variants={cardVariants}
              key={item.id}
              className="text-center space-y-5"
            >
              <div>
                <img
                  src={item.img}
                  className="img-shadow2 max-w-xs mx-auto hover:scale-110 duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-primary text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="text-darkGray">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
