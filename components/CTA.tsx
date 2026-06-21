"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Laptop } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-medical-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-200"
        >
          {/* Background circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Prêt à transformer votre <br className="hidden md:block" /> expérience de santé ?
            </h2>
            <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto opacity-90">
              Que vous soyez un patient à la recherche de soins ou un professionnel souhaitant optimiser son cabinet, GasyDoc est là pour vous.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a
                href="https://wa.me/+261 34 70 481 76?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez-vous."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-medical-primary font-black rounded-2xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
                  <Calendar size={22} />
                  Prendre rendez-vous
                  <ArrowRight size={20} />
                </button>
              </a>
              <button className="flex items-center justify-center gap-3 px-10 py-5 bg-medical-dark text-white font-black rounded-2xl hover:bg-black transition-all hover:scale-105 active:scale-95 border border-blue-400/30">
                <Laptop size={22} />
                Demander une démo
              </button>
            </div>

            <p className="mt-10 text-sm font-medium text-blue-200">
              Essai gratuit de 30 jours pour les médecins • Sans engagement • Installation en 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
