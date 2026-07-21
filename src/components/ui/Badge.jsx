function Badge({ children }) {
  return (
    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-medium text-slate-200 hover:bg-blue-600 transition-colors duration-300">
      {children}
    </span>
  );
}

export default Badge;