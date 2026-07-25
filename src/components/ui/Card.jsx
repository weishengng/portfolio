function Card({ children, className = "" }) {
  return (
    <div
      className={`h-full bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;