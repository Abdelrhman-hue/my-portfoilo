import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'E-Commerce Platform',
    company: 'Full-Stack Project',
    location: 'MERN + Next.js',
    period: 'Featured',
    description:
      'A complete online store with product catalog, cart, checkout flow, authentication and an admin dashboard. Built with Next.js on the front end and a Node/Express + MongoDB API on the back end.',
    skills: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    links: [
      { label: 'Live Demo', href: 'https://e-commerce-six-eta-60.vercel.app' },
      { label: 'GitHub — Frontend', href: 'https://github.com/Abdelrhman-hue/E-commerce' },
      { label: 'GitHub — Backend', href: 'https://github.com/Abdelrhman-hue/Back-end' },
    ],
  },
  {
    title: 'Personal Portfolio',
    company: 'Design & Development',
    location: 'React · Framer Motion',
    period: 'Featured',
    description:
      'A minimal editorial-style portfolio to showcase projects and technical writing. Focused on typography, motion, and performance with a fully responsive layout.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    links: [],
  },
  {
    title: 'Admin Dashboard',
    company: 'Data & Analytics UI',
    location: 'React · Redux',
    period: 'Featured',
    description:
      'A modern admin dashboard for managing users, orders and analytics. Built with a component-driven architecture, Redux Toolkit for state and a clean, accessible UI.',
    skills: ['React', 'Redux Toolkit', 'TypeScript', 'Charts', 'REST API', 'Tailwind CSS'],
    links: [],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Projects</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          SELECTED<br />PROJECTS
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {exp.links && exp.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      {exp.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-white underline underline-offset-4 tracking-wide"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
