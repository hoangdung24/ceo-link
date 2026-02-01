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

  const infoSection = [routes.about, routes.member, routes.service, routes.connection];

  return (
    <footer class="bg-primary py-8 text-white">
      <div class="container">
        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-2 flex flex-col gap-4">
            <img src="/images/logo.png" class="w-20" />
            <p class="font-bold">Your Network, Your Success</p>
            <p>
              Bạn đang là Thành viên? Khám phá đặc quyền Gold & Platinum Lựa chọn hạng thẻ
              phù hợp để mở khóa toàn bộ khả năng tiếp cận mạng lưới doanh nghiệp và hưởng
              các đặc quyền ưu tiên dành riêng cho bạn. Nền tảng kết nối, xúc tiến và hợp
              tác chuyên sâu dành cho lãnh đạo doanh nghiệp, giúp kết nối đúng người, đúng
              nhu cầu và đúng thời điểm ngay trong một hệ sinh thái kinh doanh riêng tư
            </p>

            <div class="flex flex-col gap-y-4">
              <p class="font-bold">{infrastructureSection.title}</p>
              <ul class="flex list-inside list-disc flex-col gap-y-2">
                {infrastructureSection.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>

            <div class="flex flex-col gap-y-4">
              <p class="font-bold">{b2bSection.title}</p>
              <ul class="flex list-inside list-disc flex-col gap-y-2">
                {b2bSection.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-2xl font-bold">Thông tin</h3>
            <ul class="flex flex-col gap-2">
              {infoSection.map((el) => (
                <li>
                  <A href={el.href} class="hover:underline">
                    {el.label}
                  </A>
                </li>
              ))}
            </ul>
          </div>
          <div class="flex flex-col gap-y-8">
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl font-bold">VIP Concierge 24/7:</h3>
              <ul class="flex list-inside list-disc flex-col gap-2">
                <li>
                  <a href="tel:0999999999">Hotline: 099 999 9999</a>
                </li>
                <li>
                  <a href="mailto:ceolink@gmail.com">Email: ceolink@gmail.com</a>
                </li>
              </ul>
            </div>
            <div class="flex flex-col gap-4">
              <h3 class="text-2xl font-bold">Cam kết dịch vụ:</h3>
              <ul class="flex list-inside list-disc flex-col gap-2">
                <li>{"Thời gian phản hồi < 5 phút"}</li>
                <li>Quy chuẩn vận hành VIP SOP</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
