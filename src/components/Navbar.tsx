import { useEffect, useState } from "react";
import { IconArrowUpRight } from "./icons";

const LINKS = [
  { href: "#features", label: "Tính năng" },
  { href: "#how-it-works", label: "Cách hoạt động" },
  { href: "#so-sanh", label: "So sánh" },
  { href: "#specs", label: "Thông số" },
  { href: "#faq", label: "Hỏi đáp" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".snap-container") || window;
    const onScroll = () => {
      const scrollY =
        container instanceof Window
          ? container.scrollY
          : (container as HTMLElement).scrollTop;
      setScrolled(scrollY > 20);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-xs"
          : "border-b border-slate-200/40 bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-8">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-transform group-hover:scale-105">
              <img
                src="/logo-ant.jpg"
                alt="Robot An"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 leading-tight">
                Robot An
              </span>
              <span className="text-[10px] font-medium text-slate-500">
                Bảo Vệ Thông Minh
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs sm:text-sm font-semibold text-slate-600 transition-colors hover:text-orange-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            onClick={(e) => handleNavClick(e, "#cta")}
            className="group inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md shadow-orange-600/20 transition-all hover:bg-orange-500 hover:shadow-orange-600/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Đặt hàng trước</span>
            <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
