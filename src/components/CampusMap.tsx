import { motion } from 'framer-motion';
import { MapPin, Search, Building2, BookOpen, FlaskConical, Car, Coffee, Home } from 'lucide-react';

const buildings = [
  { icon: Home, name: 'Hostel Block', status: 'Active', devices: 234, color: '#2563EB' },
  { icon: BookOpen, name: 'Central Library', status: 'Active', devices: 89, color: '#38BDF8' },
  { icon: FlaskConical, name: 'Research Labs', status: 'Alert', devices: 156, color: '#F59E0B' },
  { icon: Building2, name: 'Academic Block', status: 'Active', devices: 312, color: '#06B6D4' },
  { icon: Car, name: 'Parking Facility', status: 'Active', devices: 67, color: '#8B5CF6' },
  { icon: Coffee, name: 'Cafeteria', status: 'Active', devices: 45, color: '#10B981' },
];

export default function CampusMap() {
  return (
    <section id="campus" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Interactive Map
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore <span className="gradient-text">Campus Buildings</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Navigate through our smart campus and discover real-time insights about each facility.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-2 neon-border overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Campus Aerial View"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A]/80 via-transparent to-[#050B1A]/30" />

                {buildings.slice(0, 4).map((building, idx) => {
                  const positions = [
                    { top: '20%', left: '30%' },
                    { top: '40%', left: '60%' },
                    { top: '60%', left: '25%' },
                    { top: '75%', left: '70%' },
                  ];
                  return (
                    <motion.div
                      key={building.name}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="absolute"
                      style={positions[idx]}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 rounded-full bg-primary/80 backdrop-blur-sm border-2 border-white flex items-center justify-center cursor-pointer"
                        style={{ backgroundColor: `${building.color}CC` }}
                      >
                        <building.icon className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>
                  );
                })}

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white text-sm font-medium"
                  >
                    <Search className="w-4 h-4" />
                    Search Campus
                  </motion.button>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {buildings.map((building, index) => (
              <motion.div
                key={building.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-5 cursor-pointer group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${building.color}10 0%, transparent 100%)`,
                  }}
                />

                <div className="relative flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${building.color}30 0%, ${building.color}10 100%)`,
                    }}
                  >
                    <building.icon className="w-5 h-5" style={{ color: building.color }} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm truncate">{building.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{building.devices} devices</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: building.status === 'Alert' ? '#F59E0B' : '#10B981',
                        }}
                      />
                      <span className="text-xs text-gray-400">{building.status}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
