import CardHeader from "../components/elements/card_products/header";
import CardFooter from "../components/elements/card_products/footer";
import CardBody from "../components/elements/card_products/body";
import CardProducts from "../components/fragments/cardProducts";

const datasets = [
  {
    id :1,
    image: "/images/img1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse nemo voluptates numquam cupiditate! Repellendus, aliquid.",
    price: 700000,
  },
  {
    id :2,
    image: "/images/img1.jpg",
    description:
      "",
    price: 900000,
  },
  {
    id :3,
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse nemo voluptates numquam cupiditate! Repellendus, aliquid.",
    price: 300000,
  },
];
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {datasets.map((dataset) => {
        return (
          <CardProducts key={dataset.id}>
            <CardHeader image={dataset.image} />
            <CardBody description={dataset.description} />
            <CardFooter price={dataset.price} />
          </CardProducts>
        );
      })}
    </div>
  );
};

export default ProductsPage;
