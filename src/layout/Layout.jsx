import React from 'react'
import Header from '../components/shared/header/Header'
import Footer from '../components/shared/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout