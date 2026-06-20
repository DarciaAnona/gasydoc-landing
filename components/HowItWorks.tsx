"use client";

import { motion } from "framer-motion";
import { Search, CalendarDays, ClipboardCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Recherchez un médecin",
    description: "Trouvez facilement le médecin ou le cabinet dont vous avez besoin selon votre localisation et la spécialité recherchée.",
    icon: <Search className="w-8 h-8" />,
    color: "bg-blue-100 text-medical-primary",
  },
  {
    id: "02",
    title: "Choisissez un créneau",
    description: "Consultez les disponibilités en temps réel et réservez votre rendez-vous en quelques clics, sans attente téléphonique.",
    icon: <CalendarDays className="w-8 h-8" />,
    color: "bg-green-100 text-medical-secondary",
  },
  {
    id: "03",
    title: "Gérez votre santé",
    description: "Recevez des rappels, accédez à vos ordonnances numériques et suivez votre historique médical en toute sécurité.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    color: "bg-orange-100 text-medical-accent",
  },
];

const HowItWorks = () => {
  return (
    <section id="comment-ca-marche" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Fonctionnement</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-medical-dark mb-6">
            Votre santé en 3 étapes simples
          </h3>
          <p className="text-lg text-gray-600">
            Une plateforme pour être intuitive et rapide pour tous les patients à Madagascar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white p-10 rounded-[32px] border border-gray-50 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {step.icon}
                </div>
                <span className="text-6xl font-black text-gray-50 transition-colors group-hover:text-blue-50">
                  {step.id}
                </span>
              </div>

              <h4 className="text-2xl font-bold text-medical-dark mb-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-medical-primary font-bold cursor-pointer group/link">
                <span>En savoir plus</span>
                <div className="w-6 h-0.5 bg-medical-primary transform scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
