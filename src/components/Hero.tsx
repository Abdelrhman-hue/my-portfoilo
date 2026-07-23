import { motion } from 'framer-motion'
import portrait from '@/assets/abdelrahman.png.asset.json'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-32 lg:pt-0 pb-24 lg:pb-0">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-xs sm:text-sm text-gray-500 tracking-[0.3em] uppercase mb-6"
          >
            Full-Stack Developer — Egypt
          </motion.span>

          <h1 className="font-display leading-[0.85] tracking-tighter text-[16vw] sm:text-[13vw] lg:text-[10vw]">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="block text-white"
            >
              ABDELRAHMAN
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="block text-white"
            >
              ATTIA.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="block text-gray-500"
            >
              BUILDS THE WEB.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-sm sm:text-base text-white/70 max-w-xl leading-relaxed"
          >
            MERN Stack &amp; Next.js developer crafting fast, elegant, and
            production-ready web applications with TypeScript, React, and Node.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="px-6 py-3 text-sm tracking-widest uppercase bg-white text-black hover:bg-gray-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm tracking-widest uppercase border border-gray-700 text-white hover:border-white transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.1, ease: 'easeOut' }}
          className="lg:col-span-5 order-1 lg:order-2 relative"
        >
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 via-transparent to-white/5 blur-2xl" />
              <img
                src={portrait.url}
                alt="Abdelrahman Attia"
                className="relative w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />
            </motion.div>
            <div className="mt-4 flex justify-between text-[10px] tracking-[0.3em] text-gray-500 uppercase">
              <span>Cairo — EG</span>
              <span>Est. 2020</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/10 py-4 hidden md:block">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-16 text-sm tracking-[0.3em] uppercase text-gray-500"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              <span>React</span><span>·</span>
              <span>Next.js</span><span>·</span>
              <span>TypeScript</span><span>·</span>
              <span>Node.js</span><span>·</span>
              <span>Express</span><span>·</span>
              <span>MongoDB</span><span>·</span>
              <span>Tailwind</span><span>·</span>
              <span>Redux</span><span>·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
