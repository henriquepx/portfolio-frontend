import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Paintbrush, Code, Smartphone, Zap, User, Star } from "lucide-react";

export const projects = [
    {
      title: "UX/UI Design",
      description:
        "Foco em criar interfaces de usuário intuitivas e visualmente atraentes que não apenas encantam, mas também facilitam a navegação. Entendimento profundo de psicologia das cores, tipografia e hierarquia visual para garantir uma experiência que conecta com o público-alvo.",
      icon: Paintbrush,
    },
    {
      title: "Desenvolvimento Front-end",
      description:
        "Desenvolvimento de aplicativos web altamente interativos com uso das mais recentes tecnologias, como React e TypeScript. Habilidade em transformar designs em código limpo e eficiente, proporcionando experiências dinâmicas para o usuário.",
      icon: Code,
    },
    {
      title: "Design Responsivo",
      description:
        "Garantia de que todos os sites e aplicativos web funcionam perfeitamente em qualquer dispositivo, de desktops a smartphones. Uso de técnicas de layout flexível, imagens adaptáveis e media queries para garantir uma experiência de usuário consistente em qualquer tela.",
      icon: Smartphone,
    },
    {
      title: "Otimização de Desempenho",
      description:
        "Melhoria contínua do desempenho de sites, reduzindo tempos de carregamento e otimizando a entrega de recursos. Experiência com técnicas de lazy loading, minimização de scripts e imagens, e uso inteligente de cache para garantir uma experiência mais rápida para o usuário.",
      icon: Zap,
    },
    {
      title: "Acessibilidade Web",
      description:
        "Desenvolvimento de interfaces que seguem as melhores práticas de acessibilidade, garantindo que todos os usuários, incluindo aqueles com deficiências, possam navegar e interagir com os sites. Conhecimento em padrões como WCAG e técnicas para melhorar a usabilidade com leitores de tela e navegação por teclado.",
      icon: User,
    },
    {
      title: "Uso de Tecnologias Modernas",
      description:
        "Implementação de tecnologias e ferramentas de última geração para garantir que os projetos estejam sempre à frente. Inclui o uso de frameworks modernos, bibliotecas de animação, pré-processadores CSS, e integração com sistemas de build para oferecer soluções avançadas e escaláveis.",
      icon: Star,
    },
  ];

export const HoverEffect = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto my-42 px-2">
      <p className="mb-1.5 ml-4 text-sm font-mont text-neutral-300 uppercase">
        / Diferenciais
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {projects.map((project, idx) => {
          const IconComponent = project.icon;

          return (
            <motion.div
              key={project.title}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    className="absolute inset-0 h-full w-full bg-neutral-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-800/[0.2] border border-transparent group-hover:border-neutral-800 relative z-50">
                <div className="relative z-50">
                  <div className="p-2 flex items-center justify-between">
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-zinc-100 text-xl mr-2" />
                      <h4 className="text-zinc-100 font-bold tracking-wide">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
