const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-slate-700 border border-gray-200 rounded-lg shadow">
      {children}
    </div>
  );
};

export default CardProducts;
