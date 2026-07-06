import { motion } from 'framer-motion';
import { BarChart, LineChart, PieChart, TrendingUp, Clock, Users } from 'lucide-react';

const barData = [65, 80, 45, 90, 70, 85, 60];
const lineData = [30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95];
const pieData = [
  { label: 'Preventive', value: 45, color: '#2563EB' },
  { label: 'Corrective', value: 25, color: '#38BDF8' },
  { label: 'Predictive', value: 30, color: '#06B6D4' },
];

export default function Analytics() {
  return (
    <section id="dashboard" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
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
            Data Insights
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Analytics <span className="gradient-text">& Reports</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive analytics and insights to optimize campus operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: TrendingUp, label: 'Performance', value: '94.5%', change: '+2.3%' },
            { icon: Clock, label: 'Response Time', value: '1.2h', change: '-15min' },
            { icon: Users, label: 'Active Users', value: '342', change: '+28' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-sm text-gray-400">{item.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{item.value}</span>
                <span className="text-xs text-green-400">{item.change}</span>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-xl p-5 bg-gradient-to-br from-green-500/20 to-green-500/5"
          >
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Campus Health</p>
              <p className="text-4xl font-bold text-green-400">A+</p>
              <p className="text-xs text-green-300 mt-1">Excellent</p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <BarChart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Weekly Requests</h4>
                <p className="text-xs text-gray-400">Last 7 days</p>
              </div>
            </div>

            <div className="flex items-end justify-between h-40 px-2">
              {barData.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="w-8 rounded-t-md"
                  style={{
                    background: `linear-gradient(180deg, #2563EB ${value}%, #38BDF8 100%)`,
                    opacity: 0.8,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500 px-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <span key={day}>{day}</span>
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
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Efficiency Trend</h4>
                <p className="text-xs text-gray-400">Past 12 months</p>
              </div>
            </div>

            <div className="relative h-40">
              <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  d={`M 0 ${100 - lineData[0]} ${lineData.map((v, i) => `L ${(i / (lineData.length - 1)) * 300} ${100 - v}`).join(' ')}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="0"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  d={`M 0 ${100 - lineData[0]} ${lineData.map((v, i) => `L ${(i / (lineData.length - 1)) * 300} ${100 - v}`).join(' ')}`}
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
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
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Maintenance Types</h4>
                <p className="text-xs text-gray-400">Distribution</p>
              </div>
            </div>

            <div className="flex items-center justify-center h-36">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {pieData.map((item, index) => {
                    const offset = pieData.slice(0, index).reduce((acc, cur) => acc + cur.value, 0);
                    const circumference = 2 * Math.PI * 40;
                    const strokeDashoffset = circumference - (item.value / 100) * circumference;
                    const rotation = (offset / 100) * 360;

                    return (
                      <circle
                        key={item.label}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="20"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform={`rotate(${rotation} 50 50)`}
                        style={{
                          transformOrigin: 'center',
                        }}
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">847</p>
                    <p className="text-xs text-gray-400">Total</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
