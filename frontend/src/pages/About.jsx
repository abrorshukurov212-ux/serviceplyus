import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import { aboutContent, siteInfo } from '../data/mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {aboutContent.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {aboutContent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src={aboutContent.image}
                alt="ServicePlyus professional ustalar"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Features List */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Bizning afzalliklarimiz
              </h2>
              <div className="space-y-4">
                {aboutContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nima uchun mijozlar bizni tanlaydi?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sifat, ishonchlilik va mijozlarga g'amxo'rlik - bizning asosiy tamoyillarimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qanday ishlash jarayoni?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oddiy va samarali - 4 bosqichda muammoni hal qilamiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Qo\'ng\'iroq',
                description: 'Bizga qo\'ng\'iroq qiling yoki onlayn ariza qoldiring'
              },
              {
                step: '02',
                title: 'Diagnostika',
                description: 'Usta kelib, katyolni tekshiradi va muammoni aniqlaydi'
              },
              {
                step: '03',
                title: 'Ta\'mirlash',
                description: 'Tezkor va sifatli ta\'mirlash ishlari bajariladi'
              },
              {
                step: '04',
                title: 'Kafolat',
                description: 'Barcha ishlarga 6 oylik kafolat beramiz'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-colors duration-300"
              >
                <div className="text-6xl font-bold text-blue-600/20 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Katyolni professional ustaga ishonib topshiring
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Toshkent bo'ylab tezkor xizmat, ishonchli ta'mirlash va kafolat
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={siteInfo.phoneLink}
              className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>Hozir qo'ng'iroq qilish</span>
            </a>
            
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white"
            >
              Onlayn ariza qoldirish
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
