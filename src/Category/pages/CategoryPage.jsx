import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CategoryService } from "../../services/categoryService";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import ProductSection from "./ProductSection";

const CategoryPage = () => {
    const location = useLocation();
    const categoryService = new CategoryService();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const categoryId = location.pathname.split("/").pop(); // Obtén el ID de la categoría desde la URL

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await categoryService.getCategories();
                setCategories(categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
    const fetchProductsByCategory = async () => {
        try {
            const products = await categoryService.getProductsByCategory(categoryId);
            setProducts(products);
        } catch (error) {
            console.error(`Error fetching products for category ${categoryId}:`, error);
            setProducts([]); // Opcional: Limpia la lista de productos en caso de error
        }
    };

    if (categoryId) {
        fetchProductsByCategory();
    }
}, [categoryId]);


    // Encuentra la categoría seleccionada
    const selectedCategory = categories.find(cat => cat.category_id.toString() === categoryId);

    return (
        <div>
            <Navbar />
            <Hero categoryName={selectedCategory ? selectedCategory.name : ""} />
            <ProductSection products={products} />
            <Footer />
        </div>
    );
};

export default CategoryPage;
