const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-1/4 bg-slate-700 border border-gray-200 rounded-lg shadow">
      {children}
    </div>
  );
};

export default CardProducts;
