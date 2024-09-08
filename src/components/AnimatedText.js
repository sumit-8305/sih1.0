import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedTextSection = () => {
  const text = [
    "We believe that if you improve your health, you can improve every other aspect of your life.",
    "But mainstream medicine hasn’t helped many of us do that. It ignores red flags, reacts too late, and misses the full picture.",
    "Our vision of the future is a completely different way of looking at health. A system where proactive health is the norm. Where it’s easy to slow aging and prevent disease. Where our food and environments are default healthy and toxin free. Where everyone is able to reach their peak potential.",
    "It’s time to unleash your inner Superpower."
  ];

  // Memoize paragraphs to avoid recalculating
  const paragraphs = useMemo(() => text, [text]);
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const paragraphCount = useTransform(scrollYProgress, [0, 1], [0, paragraphs.length * 2]);

  useEffect(() => {
    const unsubscribe = paragraphCount.onChange((latest) => {
      setVisibleParagraphs(Math.floor(latest));
    });
    return unsubscribe;
  }, [paragraphCount]);

  return (
    <div ref={sectionRef} className="h-[400vh]">
      <div className="sticky top-0 mt-52 mb-36 min-h-screen flex flex-col justify-center items-center">
        <div className="font-sans-3xl mx-4 mb-6 max-w-[450px] text-center lg:font-sans-2xl">
          <h1 className="text-5xl">For people who want more</h1>
        </div>
        <div className="font-sans-xl text-center text-[#5a5a5a] flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-xl my-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: index < visibleParagraphs ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        {visibleParagraphs >= paragraphs.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <button className="
    font-mono-sm
      relative inline-flex
      items-center
      justify-center
      px-8
      py-4

       bg-[#f65f2b] text-white pl-8 pr-8 pt-2 pb-2 rounded-sm transition duration-300 shadow-lg hover:shadow-[0_0_20px_#f65f2b]">
              Join Us
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnimatedTextSection;
