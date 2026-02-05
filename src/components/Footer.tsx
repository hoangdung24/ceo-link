import { A } from "@solidjs/router";
import { routes } from "~/config/routes";

export default function Footer() {
  const infrastructureSection = {
    title: "Hạ tầng Priority:",
    items: [
      "Di chuyển & Sân bay (Fast-track, Lounge)",
      "Sức khỏe VVIP (Khám sức khỏe, Bác sĩ riêng)",
      "Lifestyle & Golf (Resort, Fine Dining)",
    ],
  };

  const b2bSection = {
    title: "B2B Connection Hub:",
    items: [
      "Niêm yết doanh nghiệp (Showcase)",
      "AI Matching đối tác",
      "Xúc tiến quốc tế",
    ],
  };

  const infoSection = [routes.about, routes.serviceAndConnection, routes.exclusive];

  const policies = [routes.termsOfUse, routes.privacyPolicy, routes.operatingRegulations];

  return (
    <footer class="bg-primary py-8 text-white">
      <div class="container flex flex-col gap-4">
        <img src="/images/logo-footer.png" class="w-60" />
        <div class="grid grid-cols-3 gap-16">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl font-bold">Your Network, Your Success</h3>
              <p>
                Bạn đang là Thành viên? Khám phá đặc quyền Gold & Platinum Lựa chọn hạng
                thẻ phù hợp để mở khóa toàn bộ khả năng tiếp cận mạng lưới doanh nghiệp và
                hưởng các đặc quyền ưu tiên dành riêng cho bạn. Nền tảng kết nối, xúc tiến
                và hợp tác chuyên sâu dành cho lãnh đạo doanh nghiệp, giúp kết nối đúng
                người, đúng nhu cầu và đúng thời điểm ngay trong một hệ sinh thái kinh
                doanh riêng tư
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-y-4">
              <h3 class="text-2xl font-bold">{infrastructureSection.title}</h3>
              <ul class="flex list-inside list-disc flex-col gap-y-2">
                {infrastructureSection.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>

            <div class="flex flex-col gap-y-4">
              <h3 class="text-2xl font-bold">{b2bSection.title}</h3>
              <ul class="flex list-inside list-disc flex-col gap-y-2">
                {b2bSection.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div class="flex flex-col gap-y-2">
              Bản quyền thuộc về CEO Link © {new Date().getFullYear()}
              <ul class="flex flex-col gap-y-1">
                {policies.map((el) => (
                  <li class="underline underline-offset-4">
                    <A href={el.href}>{el.label}</A>
                  </li>
                ))}
              </ul>
            </div>
            <div class="flex flex-col gap-y-2">
              <p>Số giấy chứng nhận đăng ký doanh nghiệp: 0300588569.</p>
              <p>
                Cấp lần đầu ngày: .../.../2026. Nơi cấp: Sở Tài chính Thành phố Hồ Chí
                Minh
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <img src="/images/government-1.png" />
              <img src="/images/government-2.png" />
            </div>
          </div>
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl font-bold">VIP Concierge 24/7:</h3>
              <ul class="flex list-inside list-disc flex-col gap-2">
                <li>
                  <a href="tel:0999999999">Hotline: 099 999 9999</a>
                </li>
                <li>
                  <a href="mailto:ceolink@gmail.com">Email: ceolink@gmail.com</a>
                </li>
                <li>{"Thời gian phản hồi < 5 phút"}</li>
              </ul>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl font-bold">Thông tin</h3>
              <ul class="flex list-inside list-disc flex-col gap-2">
                {infoSection.map((el) => (
                  <li>
                    <A href={el.href} class="hover:underline">
                      {el.label}
                    </A>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
