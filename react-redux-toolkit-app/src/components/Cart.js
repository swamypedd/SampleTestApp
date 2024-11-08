import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-md-12"
      style={{ marginBottom: "10px" }}
    >
      <Card key={product.id} style={{ width: "18rem" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
}
