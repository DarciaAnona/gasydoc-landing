"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Users, Hospital } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Villes couvertes", value: "12", icon: <Globe size={20} /> },
  { label: "Partenaires", value: "450+", icon: <Hospital size={20} /> },
  { label: "Patients actifs", value: "25k+", icon: <Users size={20} /> },
];

const NetworkSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Visual (Left) */}
          <div className="relative">
            {/* More detailed SVG Madagascar Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] max-w-[450px] mx-auto"
            >
              <svg viewBox="0 0 400 700" className="w-full h-full fill-blue-800/30 stroke-blue-400/50 stroke-2">
                {/* Madagascar more detailed path */}
                <path d="M228,21 C224,19 218,22 216,27 C214,32 213,38 211,43 C208,52 199,63 193,71 C187,79 178,85 174,93 C170,101 169,111 168,120 C167,135 172,150 171,165 C170,180 162,192 158,206 C154,220 152,234 150,248 C148,262 143,275 141,289 C139,303 138,318 138,332 C138,346 142,360 144,374 C146,388 147,402 147,416 C147,430 144,444 142,458 C140,472 135,486 135,500 C135,514 139,528 143,541 C147,554 154,566 161,577 C168,588 178,596 188,604 C198,612 211,617 222,612 C233,607 240,594 245,582 C250,570 252,557 253,543 C254,529 252,515 251,501 C250,487 250,473 252,459 C254,445 258,431 262,417 C266,403 268,389 270,375 C272,361 274,346 274,332 C274,318 272,304 270,290 C268,276 265,262 263,248 C261,234 260,220 260,206 C260,192 262,178 263,164 C264,150 264,136 263,122 C262,108 257,94 252,81 C247,68 241,56 238,43 C235,30 232,23 228,21 Z" />

                {/* Pulse Markers - Re-adjusted for new path scale */}
                <circle cx="195" cy="120" r="6" className="fill-blue-400 animate-pulse" />
                <circle cx="195" cy="120" r="12" className="stroke-blue-400 fill-none animate-ping opacity-50" />

                <circle cx="230" cy="350" r="6" className="fill-blue-400 animate-pulse" />
                <circle cx="230" cy="350" r="12" className="stroke-blue-400 fill-none animate-ping opacity-50" />

                <circle cx="180" cy="550" r="6" className="fill-blue-400 animate-pulse" />
                <circle cx="180" cy="550" r="12" className="stroke-blue-400 fill-none animate-ping opacity-50" />
              </svg>

              {/* Floating city badges */}
              <div className="absolute top-[15%] left-[5%] bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"><MapPin size={16} /></div>
                <span className="text-sm font-bold">Antananarivo</span>
              </div>
              <div className="absolute top-[45%] right-[0%] bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center"><MapPin size={16} /></div>
                <span className="text-sm font-bold">Toamasina</span>
              </div>
              <div className="absolute bottom-[20%] left-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center"><MapPin size={16} /></div>
                <span className="text-sm font-bold">Tuléar</span>
              </div>
            </motion.div>
          </div>

          {/* Content (Right) */}
          <div  id="reseau">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Notre Réseau</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Présent sur tout <br/>le <span className="text-blue-400">territoire Malagasy</span>
            </h3>
            <p className="text-lg text-blue-100/70 mb-12 leading-relaxed">
              Nous construisons le plus grand réseau de santé numérique à Madagascar pour garantir un accès aux soins de qualité, même dans les zones les plus reculées.
            </p>

            <div className="grid sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-colors"
                >
                  <div className="text-blue-400 mb-4">{stat.icon}</div>
                  <p className="text-3xl font-black mb-1">{stat.value}</p>
                  <p className="text-xs text-blue-100/50 font-bold uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-400/10 border border-blue-400/20 rounded-[2.5rem]">
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-gray-700 overflow-hidden relative">
                        <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="User" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-blue-900 bg-blue-500 flex items-center justify-center text-[10px] font-bold">
                      +12k
                    </div>
                  </div>
                  <p className="text-sm font-medium text-blue-100">Plus de 12 000 patients nous ont rejoint le mois dernier.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
