import re

with open('src/components/HeroSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Old scroll hint block
old_scroll = """      {/* Scroll Hint - Bottom of first slide */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-8 h-8 text-antique-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
        <p className="font-marathi text-warm-cream/70 text-xs mt-1">खाली स्क्रोल करा</p>
      </motion.div>"""

# New scroll hint block
new_scroll = """      {/* Scroll Hint - Bottom of first slide */}
      <motion.div 
        className="absolute bottom-12 left-0 right-0 z-30 flex flex-col items-center pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="relative flex flex-col items-center">
          <motion.div 
            className="absolute inset-0 w-14 h-14 -top-1 -left-1 rounded-full bg-antique-gold/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <svg className="w-10 h-10 text-antique-gold drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
        <motion.p 
          className="font-marathi text-warm-cream/90 text-sm mt-3 bg-deep-wine/40 backdrop-blur-sm px-3 py-1 rounded-full border border-antique-gold/30"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          खाली स्क्रोल करा
        </motion.p>
      </motion.div>"""

content = content.replace(old_scroll, new_scroll)

with open('src/components/HeroSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Scroll hint updated successfully!')
