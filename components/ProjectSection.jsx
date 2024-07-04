"use client";
import { motion, useInView } from "framer-motion";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Weather-App",
    description: "A weather app using HTML, CSS and JavaScript using the OpenWeatherMap API.",
    image: "/images/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/github-rnjn/Weather-App",
    previewUrl: "https://github-rnjn.github.io/Weather-App/",
  },
  {
    id: 2,
    title: "Calca-Calcualator",
    description: "A calculator made using HTML, CSS and JavaScript.",
    image: "/images/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/github-rnjn/Calca-Calculator",
    previewUrl: "https://github-rnjn.github.io/Calca-Calculator/",
  },
  {
    id: 3,
    title: "Todo App",
    description: "A Todo App Using HTML, CSS and JavaScript.",
    image: "/images/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/github-rnjn/Todo-App",
    previewUrl: "https://github-rnjn.github.io/Todo-App/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;