import Image from "next/image";

export default function AProposPage() {
  return (
    <div className="bg-white text-gray-900">

      <section className="max-w-6xl mx-auto px-6 md:px-20 py-24">

        {/* HEADER (descendu) */}
        <div className="text-center mt-10 mb-32 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            GasyDOC
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            L’écosystème numérique de santé de Madagascar
          </p>
        </div>

        {/* 1 - VISION */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-40 space-y-6">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-600">
              Notre Vision
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Construire le premier écosystème numérique de santé de Madagascar, où chaque citoyen peut accéder facilement à des soins de qualité, où chaque professionnel de santé est valorisé, et où chaque établissement dispose des outils nécessaires pour améliorer la prise en charge des patients grâce au numérique.

            </p>

            <p className="text-gray-700 leading-relaxed">
              Nous aspirons à faire de GasyDOC la plateforme de référence qui relie patients, professionnels, établissements de santé et partenaires, afin de contribuer durablement à un système de santé plus accessible, plus performant et plus humain.

            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80"
              alt="Vision"
              width={420}
              height={280}
              className="rounded-xl object-cover w-[420px] h-[280px]"
            />
          </div>

        </div>

        {/* 2 - MISSION */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-40 space-y-12">

          <div className="flex justify-center md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80"
              alt="Mission"
              width={420}
              height={280}
              className="rounded-xl object-cover w-[420px] h-[280px]"
            />
          </div>

          <div className="space-y-6 md:order-2">
            <h2 className="text-3xl font-bold text-green-600">
              Notre Mission
            </h2>

            <p className="text-gray-700">
              Faciliter le parcours de santé des patients et la digitalisation des structures médicales.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-12">
              <li>Améliorer l'accès aux soins</li>
              <li>Optimiser les consultations</li>
              <li>Faciliter la prise de rendez-vous</li>
              <li>Valoriser les professionnels de santé</li>
              <li>Renforcer la qualité des données médicales</li>
              <li>Promouvoir la prévention</li>
              <li>Créer un réseau national de confiance entre les différents acteurs de la santé</li>
            </ul>
          </div>

        </div>

        {/* 3 - NATURE */}
        <div className="grid md:grid-cols-2 gap-20 items-center ">

          <div className="space-y-8">

            <h2 className="text-3xl font-bold text-purple-600">
              Nature de la Plateforme
            </h2>

            <div className="space-y-8 text-gray-700">

              <div className="space-y-3">
                <h3 className="font-semibold">GasyDOC est :</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>un référentiel national des professionnels</li>
                  <li>un référentiel des établissements de santé</li>
                  <li>une plateforme de rendez-vous</li>
                  <li>une plateforme de gestion et de partage d'informations médicales autorisées</li>
                  <li>une plateforme de coordination des parcours de soins</li>
                  <li>une plateforme de services numériques de santé</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">GasyDOC n’est pas :</h3>
                <ul className="list-disc list-inside space-y-1 text-red-500">
                  <li>un hôpital</li>
                  <li>une clinique</li>
                  <li>un cabinet médical</li>
                  <li>un laboratoire d'analyses médicales</li>
                  <li>un établissement de santé</li>
                  <li>un fournisseur d'actes médicaux</li>
                </ul>
              </div>

            </div>

            <p className="text-sm text-gray-500 pt-4">
              Les actes médicaux restent sous la responsabilité des professionnels de santé.
            </p>

          </div>

          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
              alt="Plateforme"
              width={420}
              height={280}
              className="rounded-xl object-cover w-[420px] h-[280px]"
            />
          </div>

        </div>

      </section>
    </div>
  );
}