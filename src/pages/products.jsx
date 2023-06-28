import CardHeader from "../components/elements/card_products/header";
import CardFooter from "../components/elements/card_products/footer";
import CardBody from "../components/elements/card_products/body";
import CardProducts from "../components/fragments/cardProducts";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProducts header={<CardHeader />} body={<CardBody/>} footer={<CardFooter/>} />
      <CardProducts header={<CardHeader />} body={<CardBody/>} footer={<CardFooter/>} />
      <CardProducts body={<CardBody/>} footer={<CardFooter/>} />
      <CardProducts header={<CardHeader />} footer={<CardFooter/>} />
    </div>
  );
};

export default ProductsPage;