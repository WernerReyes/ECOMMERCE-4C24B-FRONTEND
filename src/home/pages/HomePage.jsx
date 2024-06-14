import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Hero_home from "./Hero_home"
import Producto_section from "./Product_section"
import Why_choose from "./Why_choose"
import We_Help from "./We_Help"
import Popular from "./Popular"


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero_home />
            <Producto_section />
            <Why_choose />
            <We_Help />
            <Popular />
            <Footer />
        </div>
    )
}

export default HomePage