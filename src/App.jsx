import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const COLORS = [
  { key: 'white', name: 'White (Natural)', hex: '#F5F5F5', text: '#111111', accent: '#e11d48' },
  { key: 'black', name: 'Black (Void)', hex: '#0a0a0a', text: '#f5f5f5', accent: '#ef4444' },
  { key: 'red', name: 'Limited Red', hex: '#b91c1c', text: '#fff', accent: '#fca5a5' },
]

const STORAGES = [
  { key: '128', label: '128 GB' },
  { key: '256', label: '256 GB' },
  { key: '512', label: '512 GB' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-black/10 bg-white/80 px-4 py-2 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="audiowide-regular tracking-widest text-sm">NOTHING</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a className="text-black/70 hover:text-black transition-colors" href="#features">Caractéristiques</a>
            <a className="text-black/70 hover:text-black transition-colors" href="#config">Configurateur</a>
            <a className="text-black/70 hover:text-black transition-colors" href="#faq">FAQ</a>
            <a className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white hover:bg-red-600 transition-colors">
              Précommander <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden rounded-full p-2 hover:bg-black/5 transition-colors">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="md:hidden mt-2 overflow-hidden rounded-2xl border border-black/10 bg-white/90 backdrop-blur-md">
              <div className="flex flex-col p-4 text-sm">
                <a onClick={() => setOpen(false)} className="py-2 text-black/80" href="#features">Caractéristiques</a>
                <a onClick={() => setOpen(false)} className="py-2 text-black/80" href="#config">Configurateur</a>
                <a onClick={() => setOpen(false)} className="py-2 text-black/80" href="#faq">FAQ</a>
                <a className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2 text-white hover:bg-red-600 transition-colors">
                  Précommander <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* subtle white gradient overlay to keep 80% white vibe while letting Spline show through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-2xl">
          <p className="audiowide-regular tracking-widest text-xs text-black/70">NOTHING PHONE (3)</p>
          <h1 className="source-code-title mt-4 text-5xl sm:text-6xl md:text-7xl leading-tight text-black">
            Minimalisme.
            <span className="text-red-600"> Puissance.</span>
            <br /> Transparence.
          </h1>
          <p className="mt-6 max-w-xl text-black/70">Un téléphone conçu pour disparaître. Une expérience pensée pour apparaître. Des interactions nettes, des lignes pures et une performance sans compromis.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#config" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white hover:bg-red-600 transition-colors">Configurer maintenant <ChevronRight className="h-4 w-4" /></a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-black hover:border-red-500/40 hover:text-red-600 transition-colors">Découvrir</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PhoneRender({ color }) {
  // stylized phone with animated glow and color accent
  const c = COLORS.find(c => c.key === color) || COLORS[0]
  return (
    <motion.div key={color} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative mx-auto aspect-[9/18] w-full max-w-sm">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-white/50 via-red-200/30 to-white/50 blur-2xl" />
      <div className="relative h-full rounded-[2rem] border border-black/10 bg-white/80 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
        {/* camera island */}
        <div className="absolute left-4 top-4 h-20 w-20 rounded-3xl border border-black/10 bg-black/5" />
        <div className="absolute left-8 top-8 h-10 w-10 rounded-full border border-black/20 bg-black/10" />
        <div className="absolute left-14 top-14 h-8 w-8 rounded-full border border-black/20 bg-black/10" />
        {/* glyph light accent */}
        <div className="absolute inset-6 rounded-[1.5rem] border border-black/10" />
        <motion.div animate={{ boxShadow: [`0 0 0 0 rgba(0,0,0,0)`, `0 0 40px 0 ${c.accent}66`, `0 0 0 0 rgba(0,0,0,0)`] }} transition={{ duration: 3.6, repeat: Infinity }} className="absolute right-6 top-1/3 h-24 w-2 rounded-full" style={{ background: c.accent }} />
        {/* back color */}
        <div className="absolute inset-0 rounded-[2rem]" style={{ background: c.hex, mixBlendMode: 'multiply' }} />
        {/* logo */}
        <div className="absolute bottom-6 left-0 right-0 mx-auto w-full px-8">
          <div className="flex items-center justify-between">
            <span className="audiowide-regular tracking-[0.35em] text-sm" style={{ color: c.text }}>NOTHING</span>
            <span className="h-2 w-2 rounded-full" style={{ background: c.text }} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Configurator() {
  const [color, setColor] = useState('white')
  const [storage, setStorage] = useState('256')

  const price = useMemo(() => {
    const base = 699
    const delta = storage === '128' ? 0 : storage === '256' ? 80 : 180
    return base + delta
  }, [storage])

  const c = COLORS.find(c => c.key === color) || COLORS[0]

  return (
    <section id="config" className="relative z-10 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_40%),radial-gradient(circle_at_80%_0,rgba(255,0,0,0.06),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.06),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-red-600" />
          <p className="audiowide-regular tracking-widest text-xs text-black/70">CONFIGURATEUR</p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur-md">
              <PhoneRender color={color} />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="source-code-title text-3xl sm:text-4xl text-black">Nothing Phone (3)</h2>
            <p className="text-black/70">Choisissez votre finition et votre capacité de stockage. Animations fluides, palette blanche 80%, noir et une touche de rouge pour les détails.</p>

            <div>
              <p className="mb-3 text-sm text-black/60">Couleur</p>
              <div className="flex flex-wrap gap-3">
                {COLORS.map((item) => (
                  <button key={item.key} onClick={() => setColor(item.key)} className={`group relative flex items-center gap-3 rounded-2xl border px-3 py-2 transition-all ${color === item.key ? 'border-red-500/50 bg-white' : 'border-black/10 bg-white/70 hover:border-black/20'}`}>
                    <span className="h-6 w-6 rounded-full border border-black/10" style={{ background: item.hex }} />
                    <span className="text-sm text-black/80">{item.name}</span>
                    {color === item.key && <span className="absolute -inset-[1px] -z-10 rounded-2xl ring-2 ring-red-500/30" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm text-black/60">Stockage</p>
              <div className="flex flex-wrap gap-3">
                {STORAGES.map((s) => (
                  <button key={s.key} onClick={() => setStorage(s.key)} className={`rounded-2xl border px-4 py-2 text-sm transition-all ${storage === s.key ? 'border-red-500/50 bg-white text-red-600' : 'border-black/10 bg-white/70 hover:border-black/20 text-black/80'}`}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-black/60">À partir de</span>
                <span className="source-code-title text-3xl">{price}€</span>
              </div>
              <a className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white hover:bg-red-600 transition-colors" href="#">Ajouter au panier <ChevronRight className="h-4 w-4" /></a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { t: 'Écran 120Hz', d: 'OLED 6.7" net et lumineux' },
                { t: 'Caméra 50MP', d: 'Détails nets, nuit maîtrisée' },
                { t: 'Glyph 2.0', d: 'Interactions lumineuses utiles' },
                { t: 'Batterie 5000 mAh', d: 'Jusqu’à 2 jours d’autonomie' },
              ].map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-black/10 bg-white/60 p-4 text-sm">
                  <p className="font-medium text-black">{f.t}</p>
                  <p className="text-black/70">{f.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/10 bg-white/80">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-black/60">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="audiowide-regular tracking-widest">NOTHING</p>
          <p>© {new Date().getFullYear()} Nothing Technology Limited. Toutes marques citées appartiennent à leurs propriétaires.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Configurator />
      <Footer />
    </div>
  )
}
