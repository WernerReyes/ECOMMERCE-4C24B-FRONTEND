import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFurnitureStore } from "../../hooks";
import { AddAndRemoveFromCart } from "../../components";

const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState("");

  const { startLoadingFurnitureDetail, furnitureDetail, isLoading } =
    useFurnitureStore();
  
  useEffect(() => {
    startLoadingFurnitureDetail(productId);
  }, [productId]);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div className="col-md-9 col-sm-7 bg-light mb-4">
      <div className="sticker sticker-sale"></div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src={furnitureDetail.image}
            alt="Model"
            className="img-fluid mb-4 tamañoItemDetail"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-0">{furnitureDetail.name}</h2>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="price color-text">
              <span>S/. </span>
              {furnitureDetail.price}
            </div>
            <div className="stock">
              Stock: <strong>{furnitureDetail.stock}</strong>
            </div>
          </div>
          <hr />
          <div className="description">
            <p>{furnitureDetail.description}</p>
          </div>
          <hr />
          <div className="d-flex">
            <AddAndRemoveFromCart
              furnitureDetail={furnitureDetail}
              showAddButton
            />
          </div>
          <hr />
          <div className="d-flex">
            <div>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">☆</span>
            </div>
            <div className="stock">Calificaciones</div>
          </div>
          <hr />
          <div className="icons"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
