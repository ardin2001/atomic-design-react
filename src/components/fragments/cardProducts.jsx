const CardProducts = (props) => {
  const { header, body, footer } = props;
  return (
    <div className="w-full max-w-sm bg-slate-700 border border-gray-200 rounded-lg shadow">
      {header}
      {body}
      {footer}
    </div>
  );
};

export default CardProducts;
