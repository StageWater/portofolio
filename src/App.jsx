import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiSend } from 'react-icons/fi'
import { siteData, skillCategories, projects, experiences } from './data'

const SectionTitle = ({ number, title }) => (
  <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-slate-400">
    <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">0{number}</span>
    <span className="font-semibold text-slate-100">{title}</span>
  </div>
)

function App() {
  const projectsRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleScroll = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.2 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Kontak dari Portfolio')
    const body = encodeURIComponent(`Halo Syahrul,%0D%0A%0D%0ANama saya ${form.name}.%0D%0A${form.message}%0D%0A%0D%0ASilakan balas ke: ${form.email}`)
    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-surface text-slate-100">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradientRadial opacity-50 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
        <header className="mb-16 flex flex-col gap-6 rounded-[32px] border border-white/10 bg-surface2/80 p-8 shadow-glass backdrop-blur-xl reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Halo, saya Syahrul</p>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{siteData.name}</h1>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                {siteData.role} di {siteData.study}
                <span className="text-slate-300"> — {siteData.description}</span>
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={handleScroll}
                className="rounded-3xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
              >
                Lihat Proyek
              </button>
              <a
                href={`mailto:${siteData.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-700 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-indigo-500 hover:text-indigo-200"
              >
                <FiMail className="h-4 w-4" />
                Hubungi Saya
              </a>
            </div>
          </div>
        </header>

        <main className="space-y-20">
          <section className="grid gap-10 md:grid-cols-[1.25fr_0.85fr]">
            <div className="rounded-[32px] border border-white/10 bg-surface2/80 p-8 shadow-glass backdrop-blur-xl reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <SectionTitle number="1" title="Keahlian Teknis" />
              <div className="grid gap-5 sm:grid-cols-2">
                {skillCategories.map((category) => (
                  <div key={category.title} className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/10 p-5">
                    <h3 className="text-lg font-semibold text-slate-100">{category.title}</h3>
                    <div className="grid gap-3">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm transition hover:border-indigo-400 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-surface2/80 p-8 shadow-glass backdrop-blur-xl reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <SectionTitle number="2" title="Pengalaman & Kontak" />
              <div className="flex flex-col gap-5">
                {experiences.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/10 p-5">
                    <h3 className="font-semibold text-slate-100">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/10 p-6">
                <h3 className="text-lg font-semibold text-slate-100">Tetap terhubung</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Kirim pesan singkat atau hubungi via GitHub, LinkedIn, Instagram, atau email saya.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={siteData.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-3xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-3 text-sm text-indigo-200 transition hover:bg-indigo-500/20"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={siteData.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm text-emerald-200 transition hover:bg-emerald-400/20"
                  >
                    <FaLinkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={siteData.links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-3xl border border-pink-500/20 bg-pink-500/10 px-5 py-3 text-sm text-pink-200 transition hover:bg-pink-500/20"
                  >
                    <FaInstagram className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section ref={projectsRef} className="space-y-8 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <SectionTitle number="3" title="Proyek Pilihan" />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-[28px] border border-white/10 bg-slate-950/10 p-6 shadow-glass transition duration-500 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-surface2/90"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                      {project.accent}
                    </span>
                    <span className="text-xs text-slate-500 transition group-hover:text-slate-300">Project</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.role}</p>
                  <p className="mt-5 text-sm text-slate-400">Stack: {project.stack}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-surface2/80 p-8 shadow-glass backdrop-blur-xl reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <SectionTitle number="4" title="Form Kontak" />
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-100">Mari berkolaborasi</h2>
                <p className="max-w-xl leading-7 text-slate-300">
                  Silakan isi pesan Anda, lalu saya akan segera merespons lewat email. Saya terbuka untuk pengembangan web, prototyping IoT, serta proyek desain produk digital.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/10 p-6">
                <label className="block text-sm text-slate-300">
                  Nama
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Masukkan nama Anda"
                  />
                </label>
                <label className="block text-sm text-slate-300">
                  Email
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="email@domain.com"
                  />
                </label>
                <label className="block text-sm text-slate-300">
                  Pesan
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Apa yang ingin Anda bicarakan?"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-3xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
