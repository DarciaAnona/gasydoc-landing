import Image from "next/image";
import { ArrowRight, Heart, Users, Globe, Mail, Phone } from "lucide-react";

export default function AProposPage() {
  return (
    <div className="bg-white text-gray-900 pt-20">

      {/* HERO */}
      <header className="bg-white from-blue-50 via-white to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 pt-6 md:pt-8 pb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-medical-dark">
            À propos de GasyDOC
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            L’écosystème numérique de santé à Madagascar — connecter patients, professionnels et
            établissements pour un parcours de soin plus simple, rapide et sécurisé.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-medical-primary text-white font-semibold rounded-full shadow-lg hover:opacity-95 transition"
            >
              Nous contacter <ArrowRight size={18} />
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 text-medical-dark font-semibold rounded-full shadow-sm hover:shadow-md transition"
            >
              Retour à l’accueil
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-5 rounded-2xl shadow-sm border">
              <div className="flex items-center gap-4">
                <Users className="text-medical-primary" />
                <div>
                  <p className="text-2xl font-bold">+500</p>
                  <p className="text-sm text-gray-500">Médecins</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border">
              <div className="flex items-center gap-4">
                <Globe className="text-medical-secondary" />
                <div>
                  <p className="text-2xl font-bold">Nationwide</p>
                  <p className="text-sm text-gray-500">Couverture Madagascar</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border">
              <div className="flex items-center gap-4">
                <Heart className="text-medical-accent" />
                <div>
                  <p className="text-2xl font-bold">Sûr</p>
                  <p className="text-sm text-gray-500">Confidentialité & conformité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-medical-dark mb-3">Notre Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4 max-w-xl">
              Construire un système de santé plus accessible et plus humain grâce au numérique. Chaque
              patient trouve les soins adaptés et les professionnels disposent d'outils pour améliorer la prise en charge.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-3">• Accessibilité renforcée</li>
              <li className="flex items-center gap-3">• Professionnels valorisés</li>
              <li className="flex items-center gap-3">• Données patients sécurisées</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80"
              alt="Vision"
              width={1200}
              height={800}
              className="w-full h-56 object-cover sm:h-64 lg:h-72"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1 flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
              alt="Mission"
              width={1200}
              height={800}
              className="w-full h-56 object-cover sm:h-64 lg:h-72"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-medical-dark mb-3">Notre Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4 max-w-lg">
              Faciliter le parcours de santé et accélérer la digitalisation des structures médicales
              pour une prise en charge plus efficace et coordonnée.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col">
                <h4 className="font-semibold mb-1">Rendez-vous facile</h4>
                <p className="text-sm text-gray-600">Prise de rendez-vous simple et rapide.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col">
                <h4 className="font-semibold mb-1">Dossiers centralisés</h4>
                <p className="text-sm text-gray-600">Historique médical sécurisé et partagé.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col">
                <h4 className="font-semibold mb-1">Outils établissement</h4>
                <p className="text-sm text-gray-600">Gestion simplifiée des patients et ressources.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col">
                <h4 className="font-semibold mb-1">Prévention</h4>
                <p className="text-sm text-gray-600">Campagnes et information pour la population.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nature de la plateforme */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Ce que nous sommes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">GasyDOC est :</p>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-medical-primary mt-1">•</div>
                  <div>
                    <div className="font-semibold">Référentiel national</div>
                    <div className="text-sm text-gray-600">Professionnels et établissements</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-medical-primary mt-1">•</div>
                  <div>
                    <div className="font-semibold">Prise de rendez-vous</div>
                    <div className="text-sm text-gray-600">Interface simple pour patients et cliniques</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-medical-primary mt-1">•</div>
                  <div>
                    <div className="font-semibold">Gestion médicale</div>
                    <div className="text-sm text-gray-600">Dossiers et coordination des soins</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">GasyDOC n’est pas :</p>
              <ul className="list-disc list-inside space-y-2 text-red-600">
                <li>un établissement médical</li>
                <li>un fournisseur d'actes médicaux</li>
              </ul>
              <p className="text-sm text-gray-500">Les actes médicaux restent sous la responsabilité des professionnels de santé.</p>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-inner">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold">Contactez-nous</h4>
              <p className="text-gray-600">Partenariats, démos ou questions générales — réponse rapide.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <a href="tel:+261347048176" className="px-4 py-2 bg-medical-primary text-white rounded-full font-semibold flex items-center gap-2">
                <Phone size={16} /> Appeler
              </a>
              <a href="mailto:contact@gasydoc.mg?subject=Contact%20depuis%20A-propos&body=Bonjour%2C%0A%0AJ'aimerais%20en%20savoir%20plus%20sur..." className="px-4 py-2 bg-white border rounded-full flex items-center gap-2">
                <Mail size={16} /> Envoyer un e-mail
              </a>
              <a href="https://wa.me/261347048176" target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-50 text-medical-secondary rounded-full border">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}