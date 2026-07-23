"use client";

import { motion } from "framer-motion";
import { Play, Clock, ChevronRight } from "lucide-react";

const videos = [
  {
    title: "Comprendre le diabète : prévention et gestion au quotidien",
    category: "Nutrition & Diabète",
    duration: "12:45",
    thumbnail:
      "https://images.unsplash.com/photo-1505751172107-57322a307321?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://cdn.truefilesize.com/mp4/sample-5mb.mp4",
  },
  {
    title: "Les gestes de premiers secours que tout le monde devrait connaître",
    category: "Urgence",
    duration: "08:20",
    thumbnail:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://cdn.truefilesize.com/mp4/sample-10mb.mp4",
  },
  {
    title: "Santé maternelle : préparer son accouchement sereinement",
    category: "Gynécologie",
    duration: "15:10",
    thumbnail:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://cdn.truefilesize.com/mp4/sample-30mb.mp4",
  },
  {
    title:
      "Comprenez les symptômes, les traitements et les moyens de prévention.",
    category: "Maladies infectieuses",
    duration: "10:30",
    thumbnail:
      "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://cdn.truefilesize.com/mp4/sample-5mb.mp4",
  },
];

const VideosSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
              Médiathèque
            </h2>

            <h3 className="text-4xl md:text-5xl font-extrabold text-medical-dark leading-tight">
              Informez-vous sur{" "}
              <span className="text-medical-primary">
                votre santé
              </span>
            </h3>
          </div>

          <button onClick={() => alert("C'est tout pour le moment")}
           className="flex items-center gap-2 text-medical-primary font-bold hover:gap-3 transition-all px-6 py-3 bg-blue-50 rounded-xl">
            Voir toutes les vidéos
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >

              {/* Video Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg bg-black">

                <video
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Content */}
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-medical-primary text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                  {video.category}
                </span>

                <h4 className="text-lg font-bold text-medical-dark leading-snug group-hover:text-medical-primary transition-colors line-clamp-2">
                  {video.title}
                </h4>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default VideosSection;