import { motion } from "framer-motion";
import portrait from "@/assets/Gemini_Generated_Image_vs7prpvs7prpvs7p.png";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            About
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <div className="relative overflow-hidden group">
              <img
                src={portrait}
                alt="Abdelrahman Attia"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />
            </div>
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              Abdelrahman Attia — Cairo / Egypt
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm a Full-Stack Developer based in Egypt, focused on the MERN
              stack and Next.js. I love building fast, accessible interfaces
              backed by clean, well-typed APIs — from the database layer all the
              way up to pixel-perfect components.
            </p>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "I BUILD
            <br />
            <span className="text-white underline underline-offset-2 mb-4">
              END-TO-END
            </span>
            <br />
            WEB PRODUCTS —<br />
            FRONT AND BACK."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            MERN · NEXT.JS · TYPESCRIPT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              On the front end I work with React, Next.js, TypeScript, Redux and
              Tailwind CSS to build modern, responsive interfaces with
              thoughtful motion and interaction design.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <div className="border border-gray-800 p-8 lg:p-10 bg-[#0d0d0d]">
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">
                Frontend
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "PHP",
                  "Next.js",
                  "TypeScript",
                  "Redux",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm text-gray-300 border border-gray-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <div className="border border-gray-800 p-8 lg:p-10 bg-[#0d0d0d]">
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">
                Backend
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST APIs",
                  "Authentication",
                  "Git & GitHub",
                  "PostgraSQL",
                  "Docker",
                  "PHP Laravel",
                  "Python Django",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm text-gray-300 border border-gray-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              On the back end I build APIs and services with Node.js, Express
              and MongoDB — always shipping features that are secure, scalable,
              and easy to maintain. Always learning, always iterating.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
