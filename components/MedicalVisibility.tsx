"use client";

import { motion } from "framer-motion";
import { Check, Play, Star } from "lucide-react";
import Image from "next/image";

const advantages = [
  "Visibilité accrue auprès des nouveaux patients",
  "Gestion simplifiée des rendez-vous et des annulations",
  "Réduction de 75% du temps administratif",
  "Dossier Patient Informatisé (DPI) sécurisé",
  "Téléconsultation intégrée nativement",
];

const MedicalVisibility = () => {
  return (
    <section className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-medical-dark mb-8 leading-tight">
              Optimisez votre <span className="text-medical-primary">visibilité médicale</span> à Madagascar
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Rejoignez le premier réseau de santé digital à Madagascar et transformez la gestion de votre cabinet tout en offrant une meilleure expérience à vos patients.
            </p>

            <div className="space-y-4 mb-10">
              {advantages.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-medical-secondary rounded-full flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-medical-dark text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95">
              Inscrire mon cabinet
            </button>
          </motion.div>

          {/* Right: Video & Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Video Card */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                alt="Doctor working"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-medical-dark/20 group-hover:bg-medical-dark/10 transition-colors" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-medical-primary shadow-xl">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>
              </div>

              {/* Float Info */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-3xl border border-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200"
                      alt="Dr. Rakoto"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-medical-dark">Dr. Rakotoarivelo</h5>
                    <p className="text-sm text-gray-500 font-medium">Chirurgien Dentiste, Tana</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic text-sm line-clamp-2">
                  &quot;Depuis que j&apos;utilise GasyDoc, mon cabinet est beaucoup mieux organisé et j&apos;ai réduit mes rendez-vous non honorés de moitié.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MedicalVisibility;
