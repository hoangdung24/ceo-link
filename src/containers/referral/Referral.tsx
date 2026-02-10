import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import { routes } from "~/config/routes";

const Referral = () => {
  return (
    <main id="referral" class="container flex flex-col gap-12 py-12">
      <div class="mx-auto flex max-w-[70%] flex-col gap-4 text-center">
        <h1 class="text-2xl font-bold uppercase">Chính sách Referral</h1>
        <p>
          Tại CEO Link, nền tảng tin rằng sự phát triển bền vững nhất đến từ niềm tin và
          sự kết nối của chính các hội viên. Chương trình Referral được thiết kế để tri ân
          những đóng góp của bạn trong việc mở rộng mạng lưới tinh hoa, giúp cộng đồng
          ngày càng vững mạnh và đẳng cấp hơn.
        </p>
      </div>
      <Condition />
    </main>
  );
};

const Condition = () => {
  const ranks = [
    { rank: "Startup Member", value: "20%" },
    { rank: "Gold Member", value: "30%" },
    { rank: "Platinum Member", value: "40%" },
  ];

  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-2">
        <div class="font-bold">1. Đối tượng áp dụng</div>
        <ul class="flex list-inside list-disc flex-col gap-1">
          <li>
            Tất cả hội viên CEO Link đang ở trạng thái{" "}
            <span class="font-bold">Active</span>.
          </li>
          <li>
            Áp dụng cho mọi hạng: <span class="font-bold">Startup – Gold – Platinum</span>
            .
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-2">
        <div class="font-bold">2. Định nghĩa Referral hợp lệ</div>
        <p>
          Để đảm bảo tính công bằng và chất lượng của mạng lưới, một hội viên mới được ghi
          nhận là Referral hợp lệ của bạn khi đáp ứng đầy đủ đồng thời 3 tiêu chí sau:
        </p>
        <ul class="flex list-inside list-disc flex-col gap-1">
          <li>
            Hội viên mới thực hiện đăng ký tài khoản thông qua{" "}
            <span class="font-bold">Referral Code hoặc Referral Link cá nhân</span> của
            bạn.
          </li>
          <li>
            Hội viên mới đã hoàn tất{" "}
            <span class="font-bold">thanh toán 100% phí thường niên</span> theo quy định
            của hạng hội viên tham gia.
          </li>
          <li>
            Hội viên mới duy trì trạng thái{" "}
            <span class="font-bold">Active tối thiểu 30 ngày</span> kể từ thời điểm kích
            hoạt tài khoản thành công.
          </li>
        </ul>
        <p class="mt-4 italic">
          <span class="font-bold">* Lưu ý</span>: CEO Link có quyền từ chối ghi nhận
          Referral nếu phát hiện các dấu hiệu gian lận hoặc đối tượng tham gia không phù
          hợp với tiêu chí và giá trị cốt lõi của cộng đồng.
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <div class="font-bold">3. Cơ chế thưởng – Referral Credit (RC)</div>
        <p>
          CEO Link ứng dụng hệ thống Referral Credit (RC) – đơn vị giá trị nội bộ dùng để
          tích lũy và đổi lấy các đặc quyền ưu tiên.
        </p>
        <ul class="flex list-inside list-disc flex-col gap-1">
          <li>
            <span class="font-bold">Tính chất:</span> RC được sử dụng để giảm/miễn phí
            thường niên, nâng hạng hoặc đổi đặc quyền; không có giá trị quy đổi thành tiền
            mặt.
          </li>
          <li>
            <span class="font-bold">Công thức tính:</span>
            <br />
            <p class="text-center font-bold">
              RC = % Referral x Phí thường niên của hội viên được giới thiệu
            </p>
            <div class="mx-auto mt-4 grid max-w-[500px] grid-cols-2 border-b border-r border-gray-200 [&>*]:border-l [&>*]:border-t [&>*]:border-gray-200 [&>*]:p-4">
              <div class="col-span-2 bg-gray-100 text-center font-bold">
                Tỷ lệ tích lũy theo hạng hội viên giới thiệu
              </div>
              <div class="bg-gray-100 font-bold">Hạng hội viên giới thiệu</div>
              <div class="bg-gray-100 text-center font-bold">% Referral (RC)</div>
              {ranks.map((el) => {
                return (
                  <>
                    <div class="">{el.rank}</div>
                    <div class="text-center">{el.value}</div>
                  </>
                );
              })}
            </div>
          </li>
        </ul>
      </div>

      <div class="self-center">
        <Button class="px-8 uppercase">
          <A href={routes.benefit.href}>Xem quyền lợi chi tiết</A>
        </Button>
      </div>
    </div>
  );
};

export default Referral;
