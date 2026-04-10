interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Дизельный двигатель</div>
        <nav className="hidden md:flex gap-6">
          {[
            { href: "#engine-core", label: "КШМ" },
            { href: "#valvetrain", label: "ГРМ" },
            { href: "#circulation", label: "Охлаждение" },
            { href: "#accessories", label: "Навесное" },
            { href: "#quiz", label: "Тест" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}