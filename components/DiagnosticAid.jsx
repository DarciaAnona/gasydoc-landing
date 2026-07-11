"use client";
import React, { useState } from 'react';
import { Brain, AlertCircle, Info, Search, Zap } from 'lucide-react';
import { diseaseReference } from '../src/db/diseaseReference';

const DiagnosticAid = ({ initialSymptoms = "" }) => {
  const [localSymptoms, setLocalSymptoms] = useState(initialSymptoms);

  const getSuggestions = () => {
  if (!localSymptoms) return [];

  const search = localSymptoms.toLowerCase().trim();

  return diseaseReference.map((disease) => {

    let score = 0;
    const matchedKeywords = [];

    // 1 - Recherche directe du nom de la maladie
    if (disease.nom.toLowerCase().includes(search)) {
      score += 10;
    }

    // 2 - Recherche par code CIM
    if (disease.code.toLowerCase().includes(search)) {
      score += 8;
    }

    // 3 - Recherche par catégorie
    if (disease.categorie.toLowerCase().includes(search)) {
      score += 5;
    }

    // 4 - Recherche des symptômes
    disease.keywords.forEach((keyword) => {
      if (search.includes(keyword.toLowerCase())) {
        score += 2;
        matchedKeywords.push(keyword);
      }
    });


    // 5 - Recherche dans la description complète des symptômes
    if (disease.symptoms.toLowerCase().includes(search)) {
      score += 4;
    }


    // Calcul confiance
    const confidence = Math.min(score * 10, 100);


    return {
      ...disease,
      matchedKeywords,
      confidence
    };

  })
  .filter((disease) => disease.confidence > 0)
  .sort((a, b) => b.confidence - a.confidence);
};

  const suggestions = getSuggestions();

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 h-[750px] max-h-[85vh] bg-white p-6 rounded-3xl shadow-2xl border-t-8 border-purple-600 animate-fade-in flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-purple-50 p-4 rounded-2xl text-purple-600 shadow-sm border border-purple-100">
            <Brain size={26} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight leading-none mb-1">Moteur Aide Diagnostic</h2>
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-widest italic flex items-center gap-1">
              <Zap size={12} className="text-purple-500" /> Référentiel CIM-10 / MADA v2.0
            </p>
          </div>
        </div>
        {suggestions.length > 0 && (
          <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase animate-pulse shadow-lg shadow-purple-200">
            {suggestions.length} MATCHES
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-purple-600 transition-colors" size={20} />
          <input
            type="text"
            value={localSymptoms}
            onChange={(e) => setLocalSymptoms(e.target.value)}
            className="w-full p-4 pl-12 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-purple-500 focus:bg-white outline-hidden font-bold text-gray-800 transition-all"
            placeholder="Symptômes (ex: fièvre, toux...)"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide min-h-0">
        {!localSymptoms ? (
          <div className="text-center py-16 bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-100 flex flex-col items-center">
            <Brain className="text-gray-200 mb-4 opacity-30" size={64} />
            <p className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.2em] leading-loose">
              En attente d'analyse probabiliste<br/>Saisissez des symptômes cliniques
            </p>
          </div>
        ) : suggestions.length === 0 ? (
          <div className="text-center py-16 bg-red-50/30 rounded-3xl border-2 border-dashed border-red-100">
            <AlertCircle className="mx-auto text-red-200 mb-4" size={48} />
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Aucune pathologie détectée</p>
          </div>
        ) : (
          suggestions.map((s) => (
            <div key={s.id} className="p-6 border-2 border-gray-50 rounded-3xl hover:border-purple-200 transition-all bg-white shadow-sm group">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-black text-gray-800 group-hover:text-purple-600 transition-colors">{s.nom}</h3>
                  <p className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md inline-block mt-1 font-mono">{s.code}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-black text-purple-600 leading-none">{s.confidence}%</span>
                  <span className="text-[8px] font-black text-gray-300 uppercase tracking-tighter">Probabilité</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[8px] font-black text-gray-400 uppercase mb-1">Critères Cliniques CIM-10</p>
                  <p className="text-[11px] font-bold text-gray-600 leading-relaxed italic">“{s.symptoms}”</p>
                </div>

                <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-100">
                  <p className="text-[8px] font-black text-purple-400 uppercase mb-1">Indications Prédictives</p>
                  <p className="text-[11px] font-black text-purple-900">{s.probabilities}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {s.matchedKeywords.map((k, j) => (
                  <span key={j} className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[9px] font-black uppercase flex items-center gap-1">
                    <Zap size={10} /> {k}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 shrink-0">
        <Info className="text-amber-600 shrink-0" size={20} />
        <p className="text-[9px] font-bold text-amber-800 leading-normal">
          <span className="block font-black uppercase mb-0.5 underline">Expertise Médicale requise</span>
          Cet outil assiste le raisonnement clinique. Le médecin est seul juge de la prescription.
        </p>
      </div>
    </div>
  );
};

export default DiagnosticAid;
