import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import HempPage from './pages/HempPage'
import WaterPage from './pages/WaterPage'
import GardenPage from './pages/GardenPage'
import MushroomPage from './pages/MushroomPage'
import FruitTreePage from './pages/FruitTreePage'
import LabPage from './pages/LabPage'
import GreenhousePage from './pages/GreenhousePage'
import PropertyScanPage from './pages/PropertyScanPage'
import ProductsPage from './pages/ProductsPage'
import SoilPage from './pages/SoilPage'
import RaisedBedsPage from './pages/RaisedBedsPage'
import EncyclopediaPage from './pages/EncyclopediaPage'
import ArtisanFoodsPage from './pages/ArtisanFoodsPage'
import HealthPage from './pages/HealthPage'
import ShopPage from './pages/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hemp" element={<HempPage />} />
          <Route path="water" element={<WaterPage />} />
          <Route path="garden" element={<GardenPage />} />
          <Route path="mushrooms" element={<MushroomPage />} />
          <Route path="fruit-trees" element={<FruitTreePage />} />
          <Route path="lab" element={<LabPage />} />
          <Route path="greenhouse" element={<GreenhousePage />} />
          <Route path="property-scan" element={<PropertyScanPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="soil" element={<SoilPage />} />
          <Route path="raised-beds" element={<RaisedBedsPage />} />
          <Route path="encyclopedia" element={<EncyclopediaPage />} />
          <Route path="artisan-foods" element={<ArtisanFoodsPage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="*" element={
            <div className="max-w-3xl mx-auto px-6 py-32 text-center">
              <div className="text-8xl font-black text-emerald-500/20 mb-4">404</div>
              <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
              <p className="text-emerald-300/50 mb-8">This section of the farm doesn't exist yet.</p>
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-300 hover:bg-emerald-500/30 transition-all">Back to Overview</Link>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
