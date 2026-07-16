function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-16 text-center">

      {subtitle && (
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-bold text-white">
        {children}
      </h2>

    </div>
  );
}

export default SectionTitle;