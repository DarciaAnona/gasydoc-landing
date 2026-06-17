"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ShieldCheck, ArrowRight, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-70 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-medical-secondary animate-pulse" />
              <span className="text-sm font-semibold text-medical-dark">Le futur de la santé à Madagascar</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-medical-dark leading-tight mb-6">
              Simplifiez votre parcours de <span className="text-medical-primary">santé</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Prenez rendez-vous en ligne avec les meilleurs spécialistes, gérez vos dossiers médicaux et consultez à distance, le tout sur une plateforme sécurisée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-medical-primary text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 group">
                Prendre rendez-vous
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-medical-dark border-2 border-gray-100 font-bold rounded-2xl hover:border-medical-primary transition-all active:scale-95">
                Découvrir nos services
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-medical-primary rounded-lg">
                  <Calendar size={20} />
                </div>
                <span className="text-sm font-bold text-gray-700">Rendez-vous 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 text-medical-secondary rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-bold text-gray-700">Sécurité 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 text-medical-accent rounded-lg">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-sm font-bold text-gray-700">Praticiens certifiés</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative z-20 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                alt="Medical Dashboard"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Mobile Mockup */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-10 -left-10 z-30 w-48 md:w-64 bg-white rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-900 hidden sm:block"
            >
              <div className="bg-gray-100 rounded-[2rem] overflow-hidden aspect-[9/19]">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600"
                  alt="Mobile Medical App"
                  width={300}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute top-1/4 -right-6 z-30 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-medical-accent">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-medical-dark">+500</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Médecins actifs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
