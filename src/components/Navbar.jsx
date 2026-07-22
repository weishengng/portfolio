function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <a href="#home" className="text-2xl font-bold text-blue-400">
          Wei
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;