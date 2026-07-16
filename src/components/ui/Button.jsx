function Button({
  children,
  href,
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-blue-500 hover:bg-blue-500 text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;