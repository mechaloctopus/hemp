import { motion } from 'framer-motion'
import {
  ScanLine, Camera, Cpu, Map, Layers, Eye, CheckCircle2, ArrowRight
} from 'lucide-react'

export default function PropertyScanPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-800/30 border border-indigo-600/30 rounded-full text-sm text-indigo-300 mb-6">
          <ScanLine className="w-4 h-4" />
          Aerial Mapping & 3D Reconstruction
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            3D Property Scan
          </span>
        </h1>
        <p className="text-lg text-indigo-200/50 max-w-3xl">
          Using aerial drone photography and NeRF (Neural Radiance Fields) technology to create a photorealistic 3D model of the entire 1-acre property for planning, visualization, and documentation.
        </p>
      </motion.div>

      {/* What is NeRF */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Cpu className="w-7 h-7 text-indigo-400" />
          <span className="text-white">What is NeRF Scanning?</span>
        </h2>
        <div className="p-6 bg-indigo-900/15 border border-indigo-700/20 rounded-2xl">
          <div className="text-sm text-indigo-200/60 space-y-3">
            <p><strong className="text-white">NeRF (Neural Radiance Fields)</strong> is an AI-powered 3D reconstruction technique that takes hundreds of 2D photos from different angles and synthesizes a photorealistic 3D model you can fly through, rotate, and measure.</p>
            <p><strong className="text-white">How it works:</strong> A drone flies a planned grid pattern over the property, capturing overlapping photos at multiple altitudes and angles. These images are fed into NeRF software which uses neural networks to learn the 3D geometry, lighting, and texture of the entire scene.</p>
            <p><strong className="text-white">The result:</strong> A navigable 3D model of the full acre — every tree, building, fence, garden bed, and terrain feature captured in photorealistic detail. This becomes the master reference for all farm planning.</p>
          </div>
        </div>
      </motion.div>

      {/* Workflow */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Camera className="w-7 h-7 text-indigo-400" />
          <span className="text-white">Scanning Workflow</span>
        </h2>
        <div className="space-y-3">
          {[
            { step: '1. Flight Planning', desc: 'Use DJI Ground Station or Litchi for automated grid pattern. 200–300 ft altitude for overview, 50–80 ft for detail passes. 80%+ photo overlap.', tools: 'DJI Mini/Air series drone, flight planning app' },
            { step: '2. Photo Capture', desc: 'Fly 3–5 passes: nadir (straight down), oblique (45° angles), low-altitude detail. Capture 500–2000+ photos covering every angle of the property.', tools: 'Drone camera (12–48MP), 4K video for supplementary data' },
            { step: '3. NeRF Processing', desc: 'Feed photos into NeRF software. GPU-accelerated neural network learns 3D scene representation. Processing time: 1–8 hours depending on dataset size and hardware.', tools: 'Nerfstudio, Luma AI, Polycam, or COLMAP + Instant-NGP' },
            { step: '4. Model Export', desc: 'Export as point cloud, mesh, or interactive viewer. Can generate orthomosaic (top-down map), elevation model, and volumetric 3D model.', tools: 'Exported as .ply, .obj, .splat, or web viewer' },
            { step: '5. Farm Planning Overlay', desc: 'Overlay planned garden beds, hemp field, greenhouse location, irrigation lines, and walking paths onto the 3D model. Annotate zones.', tools: 'Blender, QGIS, or web-based annotation' },
            { step: '6. Seasonal Re-scans', desc: 'Re-scan quarterly to document growth, changes, and seasonal progression. Build a time-series archive of the property transformation.', tools: 'Same workflow, same flight paths for consistency' },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-indigo-900/10 border border-indigo-700/12 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-800/30 flex items-center justify-center shrink-0 text-indigo-400 font-bold text-sm">{i + 1}</div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{item.step.replace(/^\d+\.\s/, '')}</h4>
                  <p className="text-sm text-indigo-200/50 mb-1">{item.desc}</p>
                  <p className="text-xs text-indigo-400/40"><strong>Tools:</strong> {item.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Use Cases */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Map className="w-7 h-7 text-indigo-400" />
          <span className="text-white">Planning Applications</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: 'Zone Mapping', desc: 'Identify sun exposure patterns, wind corridors, drainage slopes, and microclimates across the property.' },
            { title: 'Garden Bed Layout', desc: 'Precisely place raised beds, in-ground plots, and paths using exact measurements from the 3D model.' },
            { title: 'Hemp Field Planning', desc: 'Map the ¼ acre hemp plot with GPS coordinates for USDA lot reporting and FSA crop acreage documentation.' },
            { title: 'Irrigation Design', desc: 'Plan drip lines, sprinkler zones, and the RO tank → pump → garden delivery system.' },
            { title: 'Greenhouse Siting', desc: 'Optimize greenhouse placement for maximum winter sun exposure based on shadow analysis.' },
            { title: 'Documentation', desc: 'Before/after documentation for each season. Progress tracking. Investor or partner presentations.' },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-indigo-900/10 border border-indigo-700/12 rounded-xl">
              <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-indigo-200/40">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Software Options */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Layers className="w-7 h-7 text-indigo-400" />
          <span className="text-white">NeRF Software Options</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name: 'Nerfstudio', type: 'Open Source', desc: 'Industry-standard NeRF framework. Requires NVIDIA GPU. Most flexible and highest quality.', url: 'nerfstudio.github.io' },
            { name: 'Luma AI', type: 'Cloud / Free Tier', desc: 'Upload photos, get 3D model back. Easy to use. Good for quick results without local GPU.', url: 'lumalabs.ai' },
            { name: 'Polycam', type: 'Mobile App', desc: 'iPhone/Android app with NeRF and photogrammetry modes. Great for supplemental ground-level scans.', url: 'poly.cam' },
            { name: '3D Gaussian Splatting', type: 'Open Source', desc: 'Next-gen NeRF alternative. Faster rendering, real-time viewing. State of the art 2024+.', url: 'github.com/graphdeco-inria/gaussian-splatting' },
          ].map((sw, i) => (
            <div key={i} className="p-4 bg-indigo-900/10 border border-indigo-700/12 rounded-xl">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-white text-sm">{sw.name}</h4>
                <span className="text-xs px-2 py-0.5 bg-indigo-800/30 text-indigo-300 rounded-full">{sw.type}</span>
              </div>
              <p className="text-xs text-indigo-200/40 mb-1">{sw.desc}</p>
              <p className="text-xs text-indigo-400/40">{sw.url}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
