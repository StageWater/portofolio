import React from 'react';

// 1. Data Dummy Terstruktur Sesuai Proyek Riil Kamu
const dummyProjects = [
  {
    id: 1,
    title: "Aplikasi Web Log Aktivitas",
    role: "Backend & Database Developer",
    description: "Mengembangkan aplikasi manajemen tugas harian berbasis web dengan fitur manajemen sesi pengguna (user session) secara modular dan penyimpanan data lokal yang aman.",
    techStack: ["Python", "Flask", "SQLite", "Tailwind CSS"],
    githubLink: "https://github.com/StageWater/web-portfolio", // Sesuaikan dengan repo kamu
    liveLink: "#", // Menggunakan # karena baru berjalan di lokal (tombol otomatis tersembunyi)
    image: "/images/backend-project.png"
  },
  {
    id: 2,
    title: "Sistem IoT Kontrol Lingkungan Pertanian Bawang",
    role: "IoT Developer",
    description: "Merancang purwarupa sistem otomasi dan monitoring suhu serta kelembaban udara lahan pertanian berbasis mikrokontroler secara real-time lewat integrasi mobile app.",
    techStack: ["ESP32", "DHT11", "Blynk Cloud", "C++"],
    githubLink: "https://github.com/StageWater/web-portfolio",
    liveLink: "#", // Menggunakan # karena berbasis hardware/mobile (tombol otomatis tersembunyi)
    image: "/images/iot-project.png"
  },
  {
    id: 3,
    title: "Desain Prototipe Portofolio Interaktif",
    role: "UI/UX Designer",
    description: "Perancangan antarmuka personal portofolio modern berorientasi pengguna (user-centric design) hasil studi kasus Workshop SIBARMATI menggunakan komponen sistem yang konsisten.",
    techStack: ["Figma", "Wireframing", "UI Design", "Prototyping"],
    githubLink: "#", 
    liveLink: "https://figma.com", // Ganti dengan link share prototype Figma kamu agar bisa diklik
    image: "/images/figma-project.png"
  },
  {
    id: 4,
    title: "Analisis Klasifikasi Data Konsumen (Churn Modelling)",
    role: "Data Analyst",
    description: "Melakukan eksplorasi, pra-pemrosesan data, dan rekayasa fitur pada dataset perilaku konsumen menggunakan algoritma supervised learning untuk memprediksi tingkat retensi secara akurat.",
    techStack: ["Python", "Machine Learning", "Data Analysis", "Excel"],
    githubLink: "https://github.com/StageWater/web-portfolio",
    liveLink: "#",
    image: "/images/data-project.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proyek Pilihan
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Kombinasi pengalaman praktis dalam rekayasa perangkat lunak, sistem tertanam (IoT), desain antarmuka, dan analisis data.
          </p>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative flex flex-col justify-between bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
            >
              <div>
                {/* Bagian Gambar Proyek */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback jika file gambar di folder public belum kamu isi
                      e.target.src = "public\\images\\default-project.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Bagian Konten Teks */}
                <div className="p-6">
                  {/* Badge Role */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-3">
                    {project.role}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed text-justify">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bagian Tech Stack & Tombol Aksi */}
              <div className="p-6 pt-0">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-0.5 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tombol Tautan (Conditional Rendering) */}
                <div className="flex items-center gap-4 border-t border-slate-800/80 pt-4">
                  {project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <span>Code (GitHub)</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}

                  {/* Tombol Live Preview Otomatis Tersembunyi Jika Bernilai "#" */}
                  {project.liveLink !== "#" && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                    >
                      <span>Live Preview</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}