function Button({
  href,
  children,
  className = "",
  download = false,
  variant = "primary",
}) {
  const isExternal = href?.startsWith("http");
  const isPdf = href?.endsWith(".pdf");

  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20",

    outline:
      "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  };

  return (
    <a
      href={href}
      download={download}
      target={isExternal || isPdf ? "_blank" : undefined}
      rel={isExternal || isPdf ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;