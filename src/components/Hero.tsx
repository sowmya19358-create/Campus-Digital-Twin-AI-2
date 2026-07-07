import { motion } from 'framer-motion';
import { Building2, Cpu, AlertTriangle, Gauge, Sparkles, MapPin, AlertCircle, Wifi, Activity, Zap } from 'lucide-react';
import StatCard from './ui/StatCard';

const stats = [
  { icon: Building2, value: '45+', label: 'Buildings', color: 'blue' },
  { icon: Cpu, value: '2.5K', label: 'IoT Devices', color: 'cyan' },
  { icon: AlertTriangle, value: '12', label: 'Active Alerts', color: 'amber' },
  { icon: Gauge, value: '94%', label: 'Health Score', color: 'green' },
];

// Holographic Campus Building Component
function HolographicBuilding({ delay = 0, x, y, height, width, className = '' }: {
  delay?: number;
  x: number;
  y: number;
  height: number;
  width: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
      style={{ left: `${x}%`, bottom: `${y}%` }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2 + delay, repeat: Infinity, delay }}
        className="relative"
      >
        {/* Building body */}
        <div
          className="relative bg-gradient-to-t from-cyan-500/30 via-blue-500/20 to-transparent backdrop-blur-sm border border-cyan-400/30 rounded-t-sm"
          style={{ height: `${height}px`, width: `${width}px` }}
        >
          {/* Windows grid */}
          <div className="absolute inset-1 grid grid-cols-3 gap-0.5 p-1">
            {[...Array(Math.floor(height / 12))].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 1.5 + (i % 3) * 0.2, repeat: Infinity, delay: delay + i * 0.05 }}
                className="bg-cyan-400/60 rounded-sm"
              />
            ))}
          </div>

          {/* Top glow */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 blur-sm" />
        </div>

        {/* Reflection */}
        <div
          className="absolute top-full left-0 right-0 bg-gradient-to-b from-cyan-500/20 to-transparent"
          style={{ height: `${height * 0.3}px`, transform: 'scaleY(-1)', opacity: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

// Floating Data Point Component
function DataPoint({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{ duration: 3, repeat: Infinity, delay }}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative">
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
        <div className="absolute inset-0 w-2 h-2 rounded-full bg-cyan-400 blur-sm animate-ping" />
        <div className="absolute -inset-2 rounded-full bg-cyan-400/10" />
      </div>
    </motion.div>
  );
}

// Connection Line Component
function ConnectionLine({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ delay, duration: 1 }}
      className="absolute inset-0"
    >
      <svg className="w-full h-full" style={{ filter: 'blur(0.5px)' }}>
        <motion.path
          d="M 80 60 Q 120 80 160 50"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          animate={{ strokeDashoffset: [100, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          strokeDasharray="4 4"
        />
        <motion.path
          d="M 100 100 Q 150 120 200 90"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-[#030810]" />

        {/* High-quality campus image */}
        <img
          src="https://images.pexels.com/photos/289738/pexels-photo-289738.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Smart University Campus"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />

        {/* Premium dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030810] via-[#050B1A]/95 to-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030810] via-transparent to-[#030810]/50" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030810_70%)]" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary orb */}
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[100px] bg-gradient-to-r from-blue-600/40 via-cyan-500/30 to-transparent"
        />

        {/* Secondary orb */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-[80px] bg-gradient-to-l from-cyan-500/35 via-blue-500/25 to-transparent"
        />

        {/* Accent orb */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[120px] bg-gradient-radial from-cyan-500/10 via-blue-600/5 to-transparent"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i * 0.5) * 30, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              background: i % 3 === 0
                ? 'linear-gradient(135deg, #38BDF8, #06B6D4)'
                : i % 3 === 1
                ? 'linear-gradient(135deg, #2563EB, #38BDF8)'
                : 'linear-gradient(135deg, #2563EB, #06B6D4)',
              boxShadow: '0 0 10px currentColor',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-32 sm:pb-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 blur-sm" />
              </motion.div>
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent tracking-wider uppercase">
                AI Powered Smart Campus
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 tracking-tight"
            >
              <span className="text-white">Smart Campus</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                  Digital Twin
                </span>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-gray-300/90 mb-4 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the future of smart campus management with AI-powered maintenance,
              interactive digital mapping, real-time monitoring, predictive maintenance,
              and intelligent analytics.
            </motion.p>

            {/* Institution Credit */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-full" />
              <span className="text-sm text-gray-400/80 font-medium">
                Developed for Dadi Institute of Engineering And Technology
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary Button */}
              <motion.a
                href="#campus"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 rounded-xl font-semibold text-sm sm:text-base overflow-hidden inline-flex items-center justify-center gap-2.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
                <MapPin className="w-4 h-4 relative z-10" />
                <span className="relative z-10 text-white">Explore Campus</span>
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 rounded-xl font-semibold text-sm sm:text-base overflow-hidden inline-flex items-center justify-center gap-2.5"
              >
                <div className="absolute inset-0 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-cyan-500/10" />
                <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-cyan-500/20 to-blue-500/20 -z-10" />
                <AlertCircle className="w-4 h-4 relative z-10 text-cyan-400 group-hover:text-white transition-colors" />
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">Report an Issue</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Holographic Campus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Main Card Container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glass Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Outer glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-2xl opacity-50" />

                {/* Card background */}
                <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] sm:border-white/[0.1] rounded-2xl sm:rounded-3xl overflow-hidden">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent" />

                  {/* Holographic border animation */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl" style={{
                      background: 'linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.5), transparent)',
                      animation: 'shimmer 3s infinite',
                      backgroundSize: '200% 100%',
                    }} />
                  </div>

                  {/* Inner content */}
                  <div className="relative p-4 sm:p-6 lg:p-8">
                    {/* Holographic 3D Campus Illustration */}
                    <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#030810] via-[#050B1A] to-[#0a1020] border border-white/5">
                      {/* Ground plane */}
                      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-blue-900/20 via-cyan-900/10 to-transparent">
                        <div className="absolute inset-0 opacity-30" style={{
                          backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)',
                          backgroundSize: '30px 30px',
                          perspective: '500px',
                          transform: 'rotateX(60deg)',
                          transformOrigin: 'bottom',
                        }} />
                      </div>

                      {/* Buildings */}
                      <HolographicBuilding delay={0.1} x={10} y={20} height={80} width={35} />
                      <HolographicBuilding delay={0.2} x={25} y={25} height={60} width={30} />
                      <HolographicBuilding delay={0.3} x={45} y={15} height={100} width={40} className="z-10" />
                      <HolographicBuilding delay={0.4} x={65} y={22} height={70} width={35} />
                      <HolographicBuilding delay={0.5} x={80} y={28} height={50} width={25} />

                      {/* Data points */}
                      <DataPoint delay={0} x={20} y={30} />
                      <DataPoint delay={0.5} x={50} y={20} />
                      <DataPoint delay={1} x={75} y={35} />
                      <DataPoint delay={1.5} x={35} y={45} />
                      <DataPoint delay={2} x={60} y={15} />

                      {/* Connection lines */}
                      <ConnectionLine delay={0.3} />
                      <ConnectionLine delay={0.6} />

                      {/* WiFi signal icon */}
                      <motion.div
                        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6"
                      >
                        <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400/50" />
                      </motion.div>

                      {/* Activity indicator */}
                      <motion.div
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2"
                      >
                        <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400/50" />
                        <span className="text-xs font-mono text-cyan-400/50">LIVE</span>
                      </motion.div>

                      {/* Central hologram glow */}
                      <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl"
                      />

                      {/* Scan line effect */}
                      <motion.div
                        animate={{ y: ['0%', '200%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                      />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6">
                      {stats.map((stat, index) => (
                        <StatCard key={stat.label} {...stat} index={index} />
                      ))}
                    </div>
                  </div>

                  {/* Bottom glow */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-radial from-cyan-500/20 to-transparent blur-2xl" />
                </div>
              </div>

              {/* Floating action indicators */}
              <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Ambient glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -inset-8 sm:-inset-12 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-blue-500/15 blur-3xl -z-20"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2 bg-white/5 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* CSS for animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
