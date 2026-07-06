import { motion } from 'framer-motion';
import {
  Building2, Cpu, AlertTriangle, CheckCircle, Brain, Zap,
  TrendingUp, TrendingDown, Activity
} from 'lucide-react';
import ProgressChart from './ui/ProgressChart';

const dashboardCards = [
  { icon: Building2, value: '45', label: 'Total Buildings', trend: '+2', positive: true, color: '#2563EB' },
  { icon: Cpu, value: '2,534', label: 'Active Sensors', trend: '+156', positive: true, color: '#38BDF8' },
  { icon: AlertTriangle, value: '12', label: 'Open Complaints', trend: '-3', positive: true, color: '#F59E0B' },
  { icon: CheckCircle, value: '847', label: 'Completed Repairs', trend: '+28', positive: true, color: '#10B981' },
];

export default function MaintenanceDashboard() {
  return (
    <section id="maintenance" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-secondary text-sm font-medium mb-4"
          >
            Real-time Monitoring
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Maintenance <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Monitor campus health metrics and track maintenance activities in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {dashboardCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${card.color}20 0%, ${card.color}10 100%)`,
                  }}
                >
                  <card.icon className="w-6 h-6" style={{ color: card.color }} />
                </div>
                <div
                  className={`flex items-center gap-1 text-xs font-medium ${
                    card.positive ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {card.positive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {card.trend}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{card.value}</h3>
              <p className="text-sm text-gray-400">{card.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">AI Predictions</h4>
                <p className="text-xs text-gray-400">Next 30 days forecast</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'HVAC Maintenance', percent: 78, color: '#8B5CF6' },
                { label: 'Electrical Systems', percent: 92, color: '#2563EB' },
                { label: 'Plumbing', percent: 65, color: '#38BDF8' },
                { label: 'Elevators', percent: 88, color: '#06B6D4' },
              ].map((item, idx) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-white font-medium">{item.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">System Health</h4>
                <p className="text-xs text-gray-400">Overall performance</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <ProgressChart percentage={94} label="Uptime" color="#10B981" />
              <ProgressChart percentage={87} label="Efficiency" color="#38BDF8" />
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Campus Health Score</span>
                <span className="text-lg font-bold text-green-400">A+</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Energy Usage</h4>
                <p className="text-xs text-gray-400">This month</p>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-4xl font-bold text-white">2,847<span className="text-lg text-gray-400"> kWh</span></h3>
              <p className="text-sm text-green-400 mt-1">12% less than last month</p>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Lighting', value: '34%', color: '#F59E0B' },
                { label: 'HVAC', value: '45%', color: '#2563EB' },
                { label: 'Equipment', value: '21%', color: '#10B981' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-300">{item.label}</span>
                  </div>
                  <span className="text-sm font-medium text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
