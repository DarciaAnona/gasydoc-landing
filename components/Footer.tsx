"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Apple, Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-medical-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              <span className="text-2xl font-bold text-medical-dark tracking-tight">
                Gasy<span className="text-medical-primary">Doc</span>
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              La plateforme de santé N°1 à Madagascar. Nous facilitons l&apos;accès aux soins pour tous les Malgaches.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-medical-primary hover:border-medical-primary transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-medical-dark mb-8">Liens Rapides</h4>
            <ul className="space-y-4">
              {["À propos", "Nos services", "Comment ça marche", "Pour les médecins", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-500 hover:text-medical-primary transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-medical-dark mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-gray-500">
                <MapPin className="text-medical-primary shrink-0" size={20} />
                <span className="font-medium">En face de l&apos;Hôtel de Ville, Analakely, Antananarivo 101</span>
              </li>
              <li className="flex gap-4 text-gray-500">
                <Phone className="text-medical-primary shrink-0" size={20} />
                <span className="font-medium">+261 34 00 000 00</span>
              </li>
              <li className="flex gap-4 text-gray-500">
                <Mail className="text-medical-primary shrink-0" size={20} />
                <span className="font-medium">contact@gasydoc.mg</span>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-lg font-bold text-medical-dark mb-8">Télécharger l&apos;App</h4>
            <p className="text-gray-500 mb-6 font-medium">Accédez à votre santé partout, tout le temps.</p>
            <div className="space-y-4">
              <button className="w-full bg-medical-dark text-white p-4 rounded-2xl flex items-center gap-4 hover:bg-black transition-all">
                <Apple size={30} />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase opacity-60">Disponible sur</p>
                  <p className="text-lg font-bold leading-tight">App Store</p>
                </div>
              </button>
              <button className="w-full bg-medical-dark text-white p-4 rounded-2xl flex items-center gap-4 hover:bg-black transition-all">
                <Play fill="currentColor" size={30} />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase opacity-60">Disponible sur</p>
                  <p className="text-lg font-bold leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} GasyDoc. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-medical-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-medical-primary transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-medical-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
