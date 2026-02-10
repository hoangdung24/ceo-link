import { clientOnly } from "@solidjs/start";
import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import { routes } from "~/config/routes";

const Linkedin = clientOnly(() => import("lucide-solid/icons/linkedin"));
const Facebook = clientOnly(() => import("lucide-solid/icons/facebook"));

const ReferralDashboard = () => {
  return (
    <main id="referral-dashboard" class="container flex flex-col gap-12 py-12">
      <h1 class="text-center text-2xl font-bold uppercase">Quản lý Hội viên Referral</h1>
      <A
        href={routes.referralTerms.href}
        class="italic text-blue-500 underline underline-offset-4"
      >
        Quy định về thời hạn và kiểm soát Referral
      </A>
      <div class="grid grid-cols-[2fr_1fr] gap-4">
        <div class="col-span-2 text-center text-lg font-bold uppercase">Định danh</div>
        <div>
          <ul class="flex list-inside list-disc flex-col gap-2">
            <li>Mã định danh cá nhân (ID Code): CEOLINK_2026_XXXX</li>
            <li>
              Đường dẫn kết nối (Referral Link): https://ceolink.com/join?ref=ID_CUA_BAN
            </li>
            <li>
              Chia sẻ:
              <div class="ml-2 inline-flex gap-2">
                <Button size="icon">
                  <Linkedin />
                </Button>
                <Button size="icon">
                  <Facebook />
                </Button>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <Button class="uppercase">Sao chép mã định danh</Button>
          <Button class="uppercase">Sao chép link</Button>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="text-center text-lg font-bold uppercase">THỐNG KÊ HIỆU QUẢ</div>
        <ul class="flex list-inside list-disc flex-col gap-2">
          <li>Lượt Click:</li>
          <li>Đã đăng ký:</li>
          <li>Hội viên thành công:</li>
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <div class="text-center text-lg font-bold uppercase">VÍ REFERRAL CREDIT</div>
        <ul class="flex list-inside list-disc flex-col gap-2">
          <li>
            Số dư RC hiện tại: <span class="font-bold">X,XXX RC</span>
          </li>
          <li>Tỷ lệ tích lũy hiện tại:</li>
        </ul>
      </div>
    </main>
  );
};

export default ReferralDashboard;
