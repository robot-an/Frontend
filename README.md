# An Bot — Landing Page

Trang giới thiệu sản phẩm cho **Robot "An"** — thiết bị đồng hành và bảo vệ người cao
tuổi / người mất trí nhớ, định vị bằng 4G LBS kết hợp cảm biến quán tính (IMU).

Lấy cảm hứng bố cục từ dòng shot "AIR" trên Dribbble (hero sản phẩm 3D làm trung tâm thị
giác, thẻ thông số nổi quanh sản phẩm), phối màu lấy cảm hứng từ linh vật cam của FPT
Education (trắng/cam, thân thiện, tin cậy), và khối 3D dựa trên hình dáng thật của phần
cứng (Fusion 360 — xem `hardware/An Bot`).

## Bản brief thiết kế (đã "nâng cấp" từ yêu cầu gốc)

> Thiết kế và dựng một landing page 3D, đẳng cấp sản phẩm công nghệ cao cấp, cho robot
> đồng hành **"An"**.
>
> **Đối tượng đọc:** người thân/con cái (người ra quyết định mua) của người cao tuổi
> hoặc người mất trí nhớ — cần cảm giác **tin cậy, an tâm, chuyên nghiệp, gần gũi**,
> không lạnh lùng kiểu "phòng thí nghiệm", không màu mè trẻ con.
>
> **Ngôn ngữ thị giác:**
> - Nền trắng ấm (`paper` gần trắng), điểm nhấn chủ đạo là **cam thương hiệu**
>   (`orange-600`/`orange-500` — đúng màu vỏ nhựa thật của robot và tông của linh vật
>   FPT Education), trạng thái "đang hoạt động" dùng xanh ngọc `emerald-500/600`
>   (chấm pulse). Một dải xanh dương (`blue`) chỉ còn giữ lại làm chi tiết nhỏ trên vành
>   camera của robot — nhại lại điểm nhấn xanh trên ăng-ten của linh vật.
> - Typography hai tầng: **Space Grotesk** (display, tiêu đề — geometric, có chất
>   "hardware/tech") + **Inter** (nội dung, dễ đọc) + **JetBrains Mono** cho các đoạn
>   dữ liệu/log (thông số, toạ độ GPS) để gợi cảm giác "thiết bị thật, có firmware thật".
>   Riêng khối "nhật ký hệ thống" trong phần Thông số vẫn giữ nền tối như một ô "terminal"
>   thật — điểm tương phản có chủ đích trên nền sáng, không đảo màu toàn trang.
> - Bố cục kiểu "AIR" trên Dribbble: khối 3D sản phẩm làm trung tâm thị giác của Hero,
>   xung quanh là các thẻ nổi (card kính nhẹ trên nền trắng) neo các chỉ số quan trọng
>   (kết nối, định vị, pin) thay vì liệt kê bằng bullet thông thường.
>
> **Khối 3D:** không import thẳng file CAD (nặng, không tối ưu cho web). Thay vào đó,
> diễn giải lại hình khối đặc trưng của phần cứng thật — đầu tròn, camera/visor đen bóng
> thụt vào, thân bo tròn đứng trên hai chân dạng nĩa, có mảng "bụng" trắng gợi nhắc linh
> vật FPT — bằng hình khối nguyên thuỷ dựng trực tiếp trong Three.js, nhẹ, dễ tuỳ biến
> màu/vật liệu theo thương hiệu.
>
> **Hiệu ứng mở màn (hero intro):** không đổ hết chữ ra cùng lúc. Khi trang tải xong,
> robot bắt đầu ở góc nghiêng ~60°, tự xoay vào vị trí chính diện theo easing có độ
> "nảy" nhẹ (`easeOutBack`) trong khoảng 1.3s; ngay khi robot xoay gần xong, phần chữ
> (nhãn hiệu, tên "An", mô tả, nút CTA, chỉ số nổi) mới lần lượt xuất hiện theo trình tự
> cách nhau ~0.12s — cảm giác như một cú "product reveal" thay vì trang web tĩnh bung hết
> nội dung ngay lập tức. Sau khi mở màn xong, robot chuyển sang phản ứng nhẹ theo con trỏ
> chuột (parallax) và bồng bềnh tự nhiên (idle animation). Xem `src/lib/intro.ts` — hằng
> số thời gian dùng chung giữa scene 3D (`RobotModel.tsx`) và trình tự chữ (`Hero.tsx`).
>
> **Nội dung phải bám sát phần cứng thật** (không bịa thông số): định vị đa vệ tinh
> GNSS NEO-8M (GPS/GLONASS/Galileo/BeiDou), IMU 6 trục MPU6050 (phát hiện té ngã/rung
> lắc), vi điều khiển ESP32 lõi kép 240MHz, mic MEMS + loa khuếch đại số cho trợ lý
> giọng nói, module 4G LTE cho định vị LBS độc lập Wi-Fi. Các hạng mục chưa hoàn thiện
> (màn hình tròn, kết nối 4G) được gắn nhãn "Đang phát triển" / "Lộ trình phát triển" —
> trung thực với trạng thái dự án thay vì quảng cáo quá đà.
>
> **Chuẩn kỹ thuật khi build:** Toàn bộ nội dung quan trọng (tiêu đề, mô tả, CTA) phải
> là DOM/text thật — không "vẽ chữ" trong canvas 3D — để đảm bảo SEO, khả năng truy cập
> và để trang vẫn đọc được nếu WebGL không khởi tạo được. Scene 3D phải code-split
> (tải sau, không chặn First Contentful Paint) và không được để một phụ thuộc mạng
> (HDR environment map) làm "trắng" toàn bộ khối 3D nếu tải chậm/lỗi.

## Vì sao chọn stack này

| Lựa chọn | Lý do |
|---|---|
| **Vite + React + TypeScript** | Landing page thuần trình diễn, không cần SSR/routing phức tạp của Next.js — Vite cho dev-loop nhanh hơn và bundle gọn hơn cho đúng nhu cầu này. |
| **Tailwind CSS v4** | Thiết kế theo token (màu, spacing, font) ngay trong CSS (`@theme`), khớp tự nhiên với bảng màu `slate/orange/emerald` đã có sẵn trong palette mặc định. |
| **React Three Fiber + drei** | Cách chuẩn của hệ sinh thái React để dựng scene Three.js khai báo, tái sử dụng được (Float, Sparkles, ContactShadows, Environment) thay vì viết Three.js thuần bằng tay. |
| **@react-three/postprocessing** | Bloom/vignette cho đúng chất "AIR" — hào quang quanh chi tiết phát sáng của robot. |
| **Framer Motion** | Hiệu ứng xuất hiện khi cuộn (`whileInView`) mượt, khai báo, nhẹ hơn nhiều so với tự viết IntersectionObserver. |
| **Lenis** | Smooth scroll quán tính — cảm giác "cao cấp" đặc trưng của các trang sản phẩm công nghệ, tự tắt khi người dùng bật `prefers-reduced-motion`. |

## Cấu trúc

```
web/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── RobotModel.tsx   # Robot dựng thủ công từ primitive, xoay mở màn + parallax
│   │   │   └── RobotScene.tsx   # Canvas, ánh sáng, particles, bloom
│   │   ├── Hero.tsx             # Tiêu đề, CTA, khối 3D + thẻ chỉ số nổi — trình tự reveal
│   │   ├── Features.tsx         # 6 tính năng cốt lõi
│   │   ├── HowItWorks.tsx       # 4 bước hoạt động
│   │   ├── Specs.tsx            # Thông số kỹ thuật thật từ hardware/
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   └── icons.tsx            # Icon SVG tự viết (không phụ thuộc icon library)
│   ├── lib/
│   │   ├── useLenis.ts
│   │   └── intro.ts             # Hằng số thời gian dùng chung cho hiệu ứng mở màn
│   └── index.css                # Design tokens (Tailwind v4 @theme)
```

## Chạy dự án

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build production vào dist/
```

## Đã kiểm thử

- Build production sạch (`tsc -b && vite build`), có code-splitting scene 3D riêng khỏi
  bundle chính (~112KB gzip cho trang, ~277KB gzip cho chunk 3D tải sau).
- Đã chụp màn hình kiểm tra ở khổ desktop và mobile (~390px), xác nhận không có
  horizontal overflow và khối 3D vẫn hiển thị đúng ở khổ hẹp.
