import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Hero_home from "./Hero_home"
import Producto_section from "./Product_section"
import Why_choose from "./Why_choose"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero_home />
            <Producto_section />
            <Why_choose />
            <Footer />
        </div>
    )
}

export default HomePage