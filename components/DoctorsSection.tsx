"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Users,
  Calendar,
  TrendingUp,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Plus
} from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Patients", value: "1,284", icon: <Users size={18} />, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Consultations", value: "482", icon: <Activity size={18} />, color: "text-green-600", bg: "bg-green-50" },
  { label: "Revenu Mensuel", value: "8.4M Ar", icon: <TrendingUp size={18} />, color: "text-orange-600", bg: "bg-orange-50" },
];

const DoctorsSection = () => {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Dashboard Visual (Left) */}
          <div className="relative order-2 lg:order-1">
            {/* Main Dashboard Window */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] shadow-2xl border border-gray-800/20 overflow-hidden"
            >
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden sm:flex w-20 flex-col items-center py-8 gap-8 border-r border-gray-100">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">G</div>
                  <div className="flex flex-col gap-6 text-gray-400">
                    <Calendar size={22} className="text-blue-600" />
                    <Users size={22} />
                    <MessageSquare size={22} />
                    <Activity size={22} />
                    <div className="mt-20 flex flex-col gap-6">
                      <Settings size={22} />
                      <Bell size={22} />
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Tableau de Bord</h4>
                      <p className="text-sm text-gray-500">Bienvenue, Dr. Tahina</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm w-40" placeholder="Chercher..." />
                      </div>
                      <button className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
                        <Plus size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {stats.map((stat, i) => (
                      <div key={i} className="p-4 bg-white border border-gray-50 shadow-sm rounded-2xl">
                        <div className={`w-8 h-8 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                          {stat.icon}
                        </div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">{stat.label}</p>
                        <p className="text-lg font-black text-gray-900">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart/Agenda Mock */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Rendez-vous du jour</span>
                      <span className="text-xs text-blue-600 font-bold">Voir tout</span>
                    </div>
                    {[1, 2].map((_, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                          {i === 0 ? "ML" : "JA"}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{i === 0 ? "Mialy Lalao" : "Jean Aimé"}</p>
                          <p className="text-xs text-gray-500">Consultation Générale • 14:30</p>
                        </div>
                        <div className="ml-auto px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-green-600 shadow-sm border border-green-100">
                          Confirmé
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Phone Mock Overlay */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -right-12 -bottom-10 w-48 sm:w-64 z-30 hidden sm:block"
            >
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                   <Image
                    src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=600"
                    alt="Mobile interface"
                    width={300}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Content (Right) */}
          <div className="order-1 lg:order-2">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Pour les professionnels</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Gérez votre cabinet en <span className="text-blue-500">toute simplicité</span>
            </h3>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Une interface complète et intuitive pour suivre vos patients, organiser vos consultations et optimiser votre temps. Conçu spécifiquement pour les besoins des médecins malgaches.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <h5 className="text-white font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" /> Agenda Intelligent
                </h5>
                <p className="text-sm text-gray-500">Synchronisez vos rendez-vous et évitez les doublons automatiquement.</p>
              </div>
              <div className="space-y-4">
                <h5 className="text-white font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" /> Facturation Facile
                </h5>
                <p className="text-sm text-gray-500">Générez vos factures et suivez vos revenus en temps réel.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all active:scale-95">
                Demander une démo
              </button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-gray-700 overflow-hidden">
                       <Image
                        src={`https://i.pravatar.cc/150?img=${i+10}`}
                        alt="User"
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-medium">Rejoint par +150 <br/>cabinets ce mois-ci</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
