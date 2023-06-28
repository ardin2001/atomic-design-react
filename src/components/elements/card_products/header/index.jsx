const CardHeader = ({ image }) => {
  return image == "" ? null : (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

export default CardHeader;
