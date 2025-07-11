import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Book-shop",
    year: "Mar2024",
    align: "right",
    image: "../../../public/images/Book-store.png",
    link: "https://book-store-e72a5.web.app",
  },
  {
    name: "Resturant-mangment",
    year: "Sept2024",
    align: "left",
    image: "../../../public/images/FoodBuzz.png",
    link: "https://restaurant-manag.web.app",
  },
  {
    name: "parcel-mangment",
    year: "Jan2023",
    align: "right",
    image: "../../../public/images/parcel.png",
    link: "https://parcel-management-44e15.web.app",
  },
  {
    name: "versity-project",
    year: "May2024",
    align: "left",
    image: "../../../public/images/versity.png",
    link: "https://vagabond-yoke.surge.sh",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
