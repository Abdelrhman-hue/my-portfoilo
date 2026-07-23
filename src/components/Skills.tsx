import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiGithub,
  SiFramer,
  SiFigma,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

type Skill = { name: string; icon: IconType; color: string }

const skills: Skill[] = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#8CC84B' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'REST APIs', icon: SiPostman, color: '#FF6C37' },
  { name: 'Git & GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'Figma to Code', icon: SiFigma, color: '#F24E1E' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          TECH<br />STACK
        </motion.h2>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-gray-800 pb-4 flex items-center gap-4 hover:border-gray-500 transition-colors"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-2xl md:text-3xl shrink-0"
                style={{ color: skill.color }}
              >
                <Icon />
              </motion.span>
              <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
