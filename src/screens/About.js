import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <h1 className="font-bold text-5xl w-screen flex justify-center mt-10">
        Get to know me
      </h1>
      <h2 className=" text-lg font-light  mx-32 mt-5">
        I am a full time{" "}
        <span className=" text-teal-500">Application Developer</span> currently
        working at <span className=" text-teal-500"> Avesta Company</span>, I
        work with <span className="text-teal-500">Native IOS</span> and{" "}
        <span className="text-teal-500">Flutter</span>. I also make{" "}
        <span className="text-teal-500">backend applications</span> with{" "}
        <span className=" text-teal-500">ASP.NET</span> framework.
        <br />I have a bachelors degree in software engineering
      </h2>
    </motion.main>
  );
};
export default About;
