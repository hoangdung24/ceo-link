import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Button } from "~/components/ui/button";
import { routes } from "~/config/routes";

const CircleCheck = clientOnly(() => import("lucide-solid/icons/circle-check"));

const SuccessfulRegistration = () => {
  return (
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-1">
        <CircleCheck class="text-green-600" />
        <h3 class="text-2xl font-bold text-green-600">Đăng ký thành công!</h3>
      </div>
      <p>Cảm ơn bạn đã đăng ký. Vui lòng kiểm tra email của bạn để xác nhận</p>
      <div class="bg-gray-200 p-4">
        <p class="mb-2 font-bold">Thông tin đơn đăng ký:</p>
        <ul class="flex list-inside list-disc flex-col gap-2">
          <li>Công ty: Gilmore and Preston Inc</li>
          <li>Ngành nghề: Điện tử</li>
          <li>Email: voxyqic@mailinator.com</li>
          <li>Quốc gia: Việt Nam</li>
          <li>Điện thoại: +1 (159) 162-7408</li>
        </ul>
      </div>
      <Button>
        <A href={routes.home.href}>Quay lại trang chủ</A>
      </Button>
    </div>
  );
};

export default SuccessfulRegistration;
