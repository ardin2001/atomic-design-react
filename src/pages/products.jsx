import CardHeader from "../components/elements/card_products/header";
import CardFooter from "../components/elements/card_products/footer";
import CardBody from "../components/elements/card_products/body";
import CardProducts from "../components/fragments/cardProducts";

const datasets = [
  {
    id :1,
    name : "Sepatu Adidas",
    image: "/images/img1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse nemo voluptates numquam cupiditate! Repellendus, aliquid.",
    price: 700000,
  },
  {
    id :2,
    name : "Sepatu Nevada",
    image: "/images/img1.jpg",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse nemo voluptates numquam cupiditate! Repellendus, aliquid.",
    price: 900000,
  },
  {
    id :3,
    name : "Sepatu Ventella",
    image: "/images/img1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse nemo voluptates numquam cupiditate! Repellendus, aliquid.",
    price: 300000,
  },
];

const ProductsPage = () => {
  const popUp = (name="Ardin") => {
    alert("Welcome " + name);
  };
  return (
    <div className="flex justify-center p-5 w-1/2">
      {datasets.map((dataset) => {
        return (
          <CardProducts key={dataset.id}>
            <CardHeader image={dataset.image} />
            <CardBody name={dataset.name} description={dataset.description} />
            <CardFooter price={dataset.price} popUp={popUp} />
          </CardProducts>
        );
      })}
    </div>
  );
};

export default ProductsPage;
