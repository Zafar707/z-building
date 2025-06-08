import React from "react";
import { useTranslation } from "react-i18next";
import { FaTools, FaDraftingCompass, FaCogs, FaRegHandshake } from "react-icons/fa";

const services = [
  {
    icon: <FaTools className="text-4xl text-blue-600" />,
    titleKey: "service1Title",
    descKey: "service1Desc",
  },
  {
    icon: <FaDraftingCompass className="text-4xl text-green-600" />,
    titleKey: "service2Title",
    descKey: "service2Desc",
  },
  {
    icon: <FaCogs className="text-4xl text-purple-600" />,
    titleKey: "service3Title",
    descKey: "service3Desc",
  },
  {
    icon: <FaRegHandshake className="text-4xl text-yellow-600" />,
    titleKey: "service4Title",
    descKey: "service4Desc",
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("servicesTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
