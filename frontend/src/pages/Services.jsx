import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Wrench, Settings, CheckCircle, Tool, Phone, ChevronRight } from 'lucide-react';
import { services, siteInfo } from '../data/mock';

const Services = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Search': return Search;
      case 'Wrench': return Wrench;
      case 'Settings': return Settings;
      case 'CheckCircle': return CheckCircle;
      case 'Tool': return Tool;
      default: return Wrench;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bizning xizmatlarimiz
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Katyol ta'mirlash va texnik xizmatning barcha turlarini professional darajada amalga oshiramiz
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = getIcon(service.icon);
              
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    {/* Image */}
                    <div className="md:col-span-2 h-64 md:h-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-8">
                      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <a
                        href={siteInfo.phoneLink}
                        className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                      >
                        <span>Hozir buyurtma qilish</span>
                        <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Includes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Xizmatlarimiz nimalarni o'z ichiga oladi?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Har bir xizmat to'liq va professional darajada amalga oshiriladi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Bepul diagnostika',
                description: 'Katyolni to\'liq tekshirish va muammoni aniqlash',
                icon: '🔍'
              },
              {
                title: 'Tezkor xizmat',
                description: 'Arizangizga 1 soat ichida javob va tezkor ta\'mirlash',
                icon: '⚡'
              },
              {
                title: 'Asl ehtiyot qismlar',
                description: 'Faqat sertifikatlangan va original qismlar ishlatamiz',
                icon: '✓'
              },
              {
                title: 'Professional ustalar',
                description: '10+ yillik tajribaga ega malakali mutaxassislar',
                icon: '👨‍🔧'
              },
              {
                title: 'Kafolat xizmati',
                description: 'Barcha ta\'mirlash ishlariga 6 oylik kafolat',
                icon: '🛡️'
              },
              {
                title: 'Qulay narxlar',
                description: 'Bozordagi eng maqbul va adolatli narxlar',
                icon: '💰'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Xizmat narxlari
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aniq narxlar diagnostikadan keyin aniqlanadi. Diagnostika bepul!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  O'rtacha narxlar
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Diagnostika</span>
                    <span className="font-bold text-blue-600">Bepul</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Tozalash va sozlash</span>
                    <span className="font-bold text-gray-900">300,000 so'mdan</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Kichik ta'mirlash</span>
                    <span className="font-bold text-gray-900">400,000 so'mdan</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Katta ta'mirlash</span>
                    <span className="font-bold text-gray-900">700,000 so'mdan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Aniq narxni bilib oling
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Har bir holat individual. Bepul diagnostikadan so'ng aniq narx va ish hajmini aytamiz.
                </p>
                <a
                  href={siteInfo.phoneLink}
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hozir qo'ng'iroq qilish</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Katyolni bugun ta'mirlang!
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Qo'ng'iroq qiling va bepul diagnostika oling
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={siteInfo.phoneLink}
              className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>{siteInfo.phone}</span>
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

export default Services;
