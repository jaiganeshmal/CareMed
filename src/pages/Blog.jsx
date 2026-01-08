import React, { useEffect } from 'react'
import BlogHero from '../components/BlogHero'
import NewProductLaunches from '../components/NewProductLaunches'
import MedicalEvents from '../components/MedicalEvents'
import TestimonialsSection from '../components/TestimonialsSection'
import Industry from '../components/Industry'

const Blog = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <>
            <BlogHero />
            <NewProductLaunches />
            <MedicalEvents />
            <TestimonialsSection />
            <Industry />
        </>
    )
}

export default Blog