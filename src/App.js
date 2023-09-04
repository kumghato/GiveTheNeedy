
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
import SignUp from './Components/SignUp';
import ForumThread from './Components/ForumThread';
import Privacypolicy from './Components/Privacypolicy';
import TermsCondition from './Components/TermsCondition';
import ResetPassword from './Components/ResetPassword';
import ForgotPassword from './Components/ForgotPassword';
import MyPost from './Components/MyPost';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';


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
          <Route path='/forum/thread/:id' element={<ForumThread />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/privacy_policy' element={<Privacypolicy />} />
          <Route path='/terms&conditions' element={<TermsCondition />} />
          <Route path='/register' element={<SignUp />} />
          <Route path="//forgot-password" element={<ForgotPassword />} />
          <Route path="/reset/password/:id/:token" element={<ResetPassword />} />
          <Route path="/my/profile" element={<Profile />} />
          <Route path="/edit_profile/:id" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
