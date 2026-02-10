import { A } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { routes } from "~/config/routes";

const Benefit = () => {
  return (
    <main id="benefit" class="container flex flex-col gap-12 py-12">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h1 class="text-center text-2xl font-bold uppercase">Quyền lợi chi tiết</h1>
          <p>
            Tại CEO Link, mỗi đóng góp vào việc mở rộng cộng đồng của bạn đều được ghi
            nhận bằng Referral Credit (RC) – đơn vị giá trị dùng để kích hoạt các tầng đặc
            quyền khác nhau. Dưới đây là 3 nhóm giá trị lớn mà hội viên sẽ nhận được:
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-bold">1. Miễn/Giảm phí thường niên</div>
          <p>
            Đây là giải pháp giúp hội viên tối ưu hóa chi phí duy trì hệ thống thông qua
            các đóng góp kết nối chất lượng.
          </p>
          <ul class="flex list-inside list-disc flex-col gap-1">
            <li>
              <span class="font-bold">Giảm phí trực tiếp:</span> Sử dụng RC để khấu trừ
              vào phí thường niên của năm tiếp theo (mức khấu trừ tối đa 40% phí/năm).
            </li>
            <li>
              <span class="font-bold">Đặc quyền Miễn phí 100%:</span>
              Khi số dư RC {">"} 100% giá trị phí thường niên (tích lũy từ nhiều giới
              thiệu thành công), hội viên được miễn phí hoàn toàn 100% phí của năm kế
              tiếp.
            </li>
            <li>
              <span class="font-bold">Tích lũy dài hạn:</span>
              Tín dụng RC có thời hạn sử dụng lên đến 24 tháng và được phép cộng dồn thời
              hạn phí thường niên tối đa lên đến 2 năm.
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-bold">2. Lộ trình thăng hạng Hội viên</div>
          <p>
            CEO Link thiết lập Fast-track giúp bạn nâng tầm vị thế trong hệ thống dựa trên
            uy tín kết nối, bỏ qua một số tiêu chí xét duyệt định kỳ thông thường.
          </p>
          <div class="grid grid-cols-3 border-b border-r border-gray-200 [&>*:nth-child(3n+1)]:font-bold [&>*]:border-l [&>*]:border-t [&>*]:border-gray-200 [&>*]:p-4">
            <div class="bg-gray-100 font-bold">Lộ trình thăng hạng</div>
            <div class="bg-gray-100 font-bold">Điều kiện cần đạt</div>
            <div class="bg-gray-100 font-bold">Đặc quyền đi kèm</div>
            <div>{"Startup -> Gold"}</div>
            <div>{">= Referral hợp lệ + RC đạt ngưỡng"}</div>
            <div>{"Mở khóa đầy đủ hạ tầng, đặc quyền cơ bản"}</div>
            <div>{"Gold -> Platinum"}</div>
            <div>{"3 - 4 Referral hợp lệ + RC đạt ngưỡng"}</div>
            <div>{"Tiếp cận dịch vụ VVIP & Trợ lý riêng 1-1"}</div>
            <div>{"Platinum (Giữ hạng)"}</div>
            <div>
              Duy trì ít nhất <span class="font-bold">01 Referral/năm</span>
            </div>
            <div>{"Bảo lưu vị thế cao nhất, không cần xét duyệt lại doanh thu"}</div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-bold">3. Đặc quyền mở rộng</div>
          <p>
            Bên cạnh giá trị tài chính, CEO Link chú trọng vào việc nâng cao uy tín cá
            nhân và thương hiệu doanh nghiệp của Người kết nối.
          </p>
          <ul class="flex list-inside list-disc flex-col gap-1">
            <li>
              Nhận Badge danh dự "CEO Connector" hoặc "Community Builder" trên hồ sơ cá
              nhân và được ghi danh trong "Trusted Referrer List" (Danh sách người giới
              thiệu uy tín).
            </li>
            <li>
              Nhận vé mời tham dự các sự kiện kín, các buổi Roundtable thảo luận chiến
              lược chỉ dành riêng cho các lãnh đạo có đóng góp lớn cho cộng đồng
            </li>
            <li>
              Được hệ thống AI và đội ngũ trợ lý ưu tiên ghép nối (Matchmaking) với các
              đối tác mục tiêu theo yêu cầu riêng.
            </li>
            <li>
              Ưu tiên xuất hiện với vai trò diễn giả hoặc chủ trì các chủ đề chuyên môn
              trong các buổi hội thảo/webinar do CEO Link tổ chức.
            </li>
            <li>
              Highlight doanh nghiệp và câu chuyện thành công của hội viên trên hệ thống
              Website, Fanpage và Newsletter chính thức của CEO Link.
            </li>
          </ul>
        </div>
        <div class="self-center">
          <Dialog>
            <DialogTrigger class="px-8 uppercase" as={Button<"button">}>
              Đăng ký trở thành người kết nối
            </DialogTrigger>
            <DialogContent class="max-w-2xl">
              <div class="flex flex-col justify-center gap-4 text-center">
                <h3 class="text-lg font-bold">
                  Chúc mừng bạn đã trở thành Người kết nối của CEO Link!
                </h3>
                <p>
                  Hệ thống đã kích hoạt Mã định danh (ID Code) và Công cụ kết nối dành
                  riêng cho bạn. Hãy bắt đầu hành trình đồng kiến tạo cộng đồng doanh nhân
                  chất lượng ngay hôm nay.
                </p>
                <Button class="self-center px-8 uppercase">
                  <A href={routes.referralDashboard.href}>Đi đến trang quản lý</A>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
};

export default Benefit;
