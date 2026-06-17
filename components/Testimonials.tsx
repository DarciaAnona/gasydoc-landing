"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mialy Razafindrakoto",
    role: "Patiente",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200",
    quote: "GasyDoc a totalement changé ma façon de consulter. Je ne perds plus des heures à essayer de joindre un cabinet par téléphone.",
    rating: 5,
  },
  {
    name: "Dr. Hervé Andria",
    role: "Pédiatre",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
    quote: "La plateforme est intuitive et me permet de me concentrer sur mes patients plutôt que sur l'administratif.",
    rating: 5,
  },
  {
    name: "Jean-Claude Bakary",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "Le rappel par SMS est génial. J'ai pu trouver un dentiste disponible le jour même pour une urgence à Tana.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-50/50 rounded-full -z-10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Témoignages</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-medical-dark mb-6">
            Ils nous font <span className="text-medical-primary">confiance</span>
          </h3>
          <p className="text-lg text-gray-600">
            Découvrez les retours d&apos;expérience des patients et des professionnels de santé qui utilisent notre plateforme au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl shadow-blue-900/5 flex flex-col hover:border-medical-primary transition-colors group"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-2 text-blue-50 -z-10" size={60} />
                <p className="text-gray-700 leading-relaxed font-medium relative">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              <div className="mt-auto flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-medical-dark">{item.name}</h5>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
