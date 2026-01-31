import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.home.testimonial1Name,
      role: t.home.testimonial1Role,
      text: t.home.testimonial1Text,
      avatar: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(t.home.testimonial1Name) + '&background=2563eb&color=fff&size=128'
    },
    {
      name: t.home.testimonial2Name,
      role: t.home.testimonial2Role,
      text: t.home.testimonial2Text,
      avatar: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(t.home.testimonial2Name) + '&background=f97316&color=fff&size=128'
    },
    {
      name: t.home.testimonial3Name,
      role: t.home.testimonial3Role,
      text: t.home.testimonial3Text,
      avatar: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(t.home.testimonial3Name) + '&background=2563eb&color=fff&size=128'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.home.testimonialsTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.home.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
