const CardBody = ({ name,description }) => {
  return description == "" ? null : (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-s text-white">{description}</p>
      </a>
    </div>
  );
};
export default CardBody;
