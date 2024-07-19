import { useParams } from "react-router-dom";

function ProductDetailsPage() {
    const params = useParams();
    return (
        <>
            <h1>The Product Details!</h1>
            <p>{params.productId}</p>
        </>
    );
}
export default ProductDetailsPage;