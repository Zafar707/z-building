import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-white" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{t("contactTitle")}</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder={t("contactName")}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder={t("contactEmail")}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder={t("contactMessage")}
              rows="5"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              {t("contactSend")}
            </button>
          </form>
        </div>

        {/* Yandex Map */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Yandex Map"
            src="https://yandex.uz/map-widget/v1/-/CCUj5IFBdA"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
