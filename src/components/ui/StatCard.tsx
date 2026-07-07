import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
  color?: string;
}

const colorMap: Record<string, { bg: string; border: string; glow: string; icon: string }> = {
  blue: {
    bg: 'from-blue-500/20 via-blue-500/10 to-transparent',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
    icon: 'text-blue-400',
  },
  cyan: {
    bg: 'from-cyan-500/20 via-cyan-500/10 to-transparent',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
    icon: 'text-cyan-400',
  },
  amber: {
    bg: 'from-amber-500/20 via-amber-500/10 to-transparent',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/20',
    icon: 'text-amber-400',
  },
  green: {
    bg: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/20',
    icon: 'text-emerald-400',
  },
};

export default function StatCard({ icon: Icon, value, label, index, color = 'blue' }: StatCardProps) {
  const colorStyle = colorMap[color] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl p-4 sm:p-5 overflow-hidden bg-gradient-to-br ${colorStyle.bg} backdrop-blur-xl border ${colorStyle.border} hover:border-white/20 transition-all duration-500`}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${colorStyle.glow} shadow-2xl`} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(${color === 'blue' ? '#3b82f6' : color === 'cyan' ? '#06b6d4' : color === 'amber' ? '#f59e0b' : '#10b981'} 1px, transparent 1px), linear-gradient(90deg, ${color === 'blue' ? '#3b82f6' : color === 'cyan' ? '#06b6d4' : color === 'amber' ? '#f59e0b' : '#10b981'} 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }} />

      <div className="relative flex items-center gap-3 sm:gap-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colorStyle.icon}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{value}</p>
          <p className="text-xs sm:text-sm text-gray-400 font-medium truncate">{label}</p>
        </div>
      </div>

      {/* Corner accent */}
      <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full ${colorStyle.border} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
    </motion.div>
  );
}
