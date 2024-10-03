import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../assets/bg.jpg'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center text-white" style={
      { backgroundImage: `url(${backgroundImage})
       ` }}>
      {/* Overlay for background image */}
      <div className="absolute inset-0  bg-[#00004d] opacity-70"></div>

      {/* Navbar with blue transparent background */}
      <div className="relative z-10  bg-opacity-20">
        <Navbar />
        <HeroSection />
      </div>
       
    </div>
      {/* <Navbar />
      <HeroSection /> */}
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
      
      </>

  )
}

export default Home