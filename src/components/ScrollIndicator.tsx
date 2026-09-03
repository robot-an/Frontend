import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "top", label: "Trang chủ" },
  { id: "features", label: "Tính năng" },
  { id: "how-it-works", label: "Cách hoạt động" },
  { id: "so-sanh", label: "So sánh" },
  { id: "specs", label: "Thông số" },
  { id: "faq", label: "Hỏi đáp" },
  { id: "cta", label: "Đặt hàng" },
];

export function ScrollIndicator() {
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop + container.clientHeight / 2;
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(sec.id);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5 bg-white/70 backdrop-blur-md p-2 rounded-full border border-slate-200/80 shadow-md">
      {SECTIONS.map((sec) => {
        const isActive = activeId === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            aria-label={sec.label}
          >
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-7 opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white shadow-sm">
              {sec.label}
            </span>

            {/* Indicator Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-5 w-2 bg-orange-600 shadow-xs shadow-orange-500/50"
                  : "h-2 w-2 bg-slate-300 group-hover:bg-slate-500"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
