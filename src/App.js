
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import VideoGallery from './Components/VideoGallery';
import PhotoGallery from './Components/PhotoGallery';
import Forums from './Components/Forums';
import FAQ from './Components/FAQ';


function App() {
  return (
    <div className='app h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about_us' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/video-gallery' element={<VideoGallery />} />
          <Route path='/photo-gallery' element={<PhotoGallery />} />
          <Route path='/forum' element={<Forums />} />
          <Route path='/FAQ' element={<FAQ />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
