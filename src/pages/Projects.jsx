import React from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    image: "/public/project1.png",
    titleKey: "project1Title",
    descKey: "project1Desc",
  },
  {
    id: 2,
    image: "/public/project2.png",
    titleKey: "project2Title",
    descKey: "project2Desc",
  },
  {
    id: 3,
    image: "/public/project3.png",
    titleKey: "project3Title",
    descKey: "project3Desc",
  },
  
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t("projectsTitle")}</h2>
          <p className="text-gray-600 mt-2">{t("projectsSubtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={proj.image} alt={t(proj.titleKey)} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{t(proj.titleKey)}</h3>
                <p className="text-gray-600">{t(proj.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
