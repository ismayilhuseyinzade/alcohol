import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import BeverageOptions from '../../components/sections/BeverageOptions/BeverageOptions'
import CommentSection from '../../components/sections/CommentSection/CommentSection'
import FirstSection from '../../components/sections/FirstSections/FirstSection'
import ThirdSection from '../../components/sections/ThirdSection/ThirdSection'

const Home = () => {
  return (
    <div>
        <Header/>
        <FirstSection/>

        <ThirdSection/>
        <CommentSection/>
        <BeverageOptions/>
        <Footer/>
        
    </div>
  )
}

export default Home