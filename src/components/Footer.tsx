const COLUMNS = [
  {
    title: "Sản phẩm",
    links: [
      { label: "Tính năng cốt lõi", href: "#features" },
      { label: "Cơ chế hoạt động", href: "#how-it-works" },
      { label: "So sánh khác biệt", href: "#so-sanh" },
      { label: "Thông số kỹ thuật", href: "#specs" },
      { label: "Câu hỏi thường gặp", href: "#faq" },
    ],
  },
  {
    title: "Giải pháp",
    links: [
      { label: "Người cao tuổi sống một mình", href: "#features" },
      { label: "Người có tiền sử bệnh tim mạch", href: "#features" },
      { label: "Người suy giảm trí nhớ (Alzheimer)", href: "#features" },
      { label: "Ứng dụng gia đình kết nối 24/7", href: "#features" },
    ],
  },
  {
    title: "Hỗ trợ & Bảo hành",
    links: [
      { label: "Chính sách bảo hành 1 đổi 1", href: "#faq" },
      { label: "Hướng dẫn cài đặt ban đầu", href: "#faq" },
      { label: "Hỗ trợ kỹ thuật 24/7", href: "#cta" },
      { label: "Liên hệ tư vấn dự án", href: "#cta" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="relative border-t border-slate-200/80 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
                <img
                  src="/logo-ant.jpg"
                  alt="Robot An"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Robot An
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Robot đồng hành và bảo vệ người thân toàn diện — định vị 4G GNSS đa hệ kết hợp cảm biến quán tính IMU 6 trục và trí tuệ nhân tạo phát hiện té ngã tức thì.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-xl px-3 py-2 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hệ thống bảo vệ chủ động thế hệ mới</span>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-orange-600"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Robot An. Dự án công nghệ hỗ trợ y tế & chăm sóc người cao tuổi.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#top" className="hover:text-slate-900 transition-colors">Về đầu trang ↑</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-slate-900 transition-colors">Chính sách bảo mật</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-900 transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
