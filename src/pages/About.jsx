import React from "react";
import { useTranslation } from "react-i18next";
import { FaHardHat, FaProjectDiagram, FaUsers } from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f8fafc] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("aboutTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("aboutDesc")}
          </p>
        </div>

        {/* 3 xizmat yoki ustunlik */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-blue-600 text-4xl mb-4">
              <FaHardHat />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t("feature1Title")}
            </h3>
            <p className="text-gray-600">{t("feature1Desc")}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-green-600 text-4xl mb-4">
              <FaProjectDiagram />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t("feature2Title")}
            </h3>
            <p className="text-gray-600">{t("feature2Desc")}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-purple-600 text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t("feature4Title")}
            </h3>
            <p className="text-gray-600">{t("feature4Desc")}</p>
          </div>
        </div>

        {/* Rasm va text bloki */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Our team"
            className="w-full rounded-xl shadow-xl"
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {t("aboutTeamTitle")}
            </h3>
            <p className="text-gray-600 mb-4">{t("aboutTeamDesc")}</p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
              {t("aboutHistoryTitle")}
            </h3>
            <p className="text-gray-600">{t("aboutHistoryDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
