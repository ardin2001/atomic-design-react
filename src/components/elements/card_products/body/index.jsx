const CardBody = ({ name, description }) => {
  return description == "" ? null : (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.length >= 20 ? name.substring(0, 20) + "..." : name}
        </h5>
        <p className="text-s text-white">
          {description.length >= 80 ? description.substring(0, 80) + "..." : description}
        </p>
      </a>
    </div>
  );
};
export default CardBody;
