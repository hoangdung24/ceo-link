import { A } from "@solidjs/router";
import { Button } from "./ui/button";
import { routes } from "~/config/routes";

const ReferralBanner = () => {
  return (
    <section id="hero" class="relative h-96 overflow-hidden">
      <div class="h-96 w-full bg-[url(/images/referral-banner.png)] bg-cover bg-center" />
      <div class="absolute inset-0 bg-primary/50" />
      <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <div class="container">
          <div class="flex max-w-[70%] flex-col gap-2 text-white">
            <h1 class="text-4xl font-bold">Referral – Giới thiệu Hội viên</h1>
            <h3 class="text-2xl font-bold">Chia sẻ vị thế - Kết nối thành công</h3>
            <p>
              Biến mạng lưới quan hệ của bạn thành những đặc quyền giá trị cùng cộng đồng
              CEO Link
            </p>
            <Button
              style="--primary: 0 0% 98%; --primary-foreground: 240 5.9% 10%;"
              class="self-start px-12"
            >
              <A href={routes.referral.href}>Khám phá chương trình Referral</A>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralBanner;
