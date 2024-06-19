import { useEffect, useState } from "react";
import { useFurnitureStore } from "../../hooks";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../routes";


const { DETAILPRODUCT } = publicRoutes;

const ProductImage = () => {
  const { furniture, startLoadingFurniture, furnitureDetail, isLoading } =
    useFurnitureStore();
  const [mostSend, setMostSend] = useState([]);

  useEffect(() => {
    startLoadingFurniture();
  }, []);

  useEffect(() => {
    const mostSend = furniture
      .slice(0, 4)
      .filter((item) => item.id !== furnitureDetail.id);
    setMostSend(mostSend);
  }, [furniture, furnitureDetail]);

  return (
    <div className="col-md-3 col-sm-5 mb-4 mt-4">
      <h4 className="mb-4">LOS MÁS VENDIDOS</h4>
      <div className="product-list">
        {!isLoading &&
          mostSend.map((item) => (
            <div key={item.id}>
            <div className="row product-item mb-2">
              <Link to={`${DETAILPRODUCT}/${item.id}`} className="col-4">
                <img
                  src={item.image}
                  alt="Product Image 1"
                  className="img-fluid"
                />
              </Link>
              <div className="col-8">
                <p className="p-0 mb-0">{item.name.toUpperCase()}</p>
                <i className="text-danger text-danger ">S/.{item.price}</i>
              </div>
            </div>
            <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImage;
