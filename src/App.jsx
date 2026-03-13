import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
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

function App() {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
