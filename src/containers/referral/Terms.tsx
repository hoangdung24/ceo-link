const ReferralTerms = () => {
  return (
    <main id="referral-terms" class="container flex flex-col gap-12 py-12">
      <div class="mx-auto flex max-w-[70%] flex-col gap-4 text-center">
        <h1 class="text-center text-2xl font-bold uppercase">
          Quy định về thời hạn và kiểm soát referral
        </h1>
        <p>
          Để đảm bảo chương trình Referral vận hành công bằng và bền vững, CEO Link áp
          dụng các quy định nghiêm ngặt về việc quản lý tín dụng Referral Credit (RC) và
          kiểm soát các hành vi trục lợi.
        </p>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="font-bold">1. Thời hạn sử dụng Referral Credit (RC)</div>
          <ul class="flex list-inside list-disc flex-col gap-1">
            <li>
              <span class="font-bold">Hiệu lực của RC:</span> Tín dụng RC có thời hạn sử
              dụng trong vòng 24 tháng kể từ ngày được ghi nhận vào tài khoản của hội
              viên.
            </li>
            <li>
              <span class="font-bold">Hết hạn:</span> Nếu không được sử dụng để đổi các
              đặc quyền hoặc khấu trừ phí thường niên trong thời hạn này, giá trị RC sẽ tự
              động hết hiệu lực và không được khôi phục.
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-bold">2. Kiểm soát lạm dụng và Tính hợp lệ</div>
          <ul class="flex list-inside list-disc flex-col gap-1">
            <li>
              <span class="font-bold">
                Chính sách Chống tự giới thiệu (Self-referral):
              </span>{" "}
              Chương trình không áp dụng cho các trường hợp hội viên tự giới thiệu chính
              mình thông qua các tài khoản khác nhau hoặc các hành vi tạo tài khoản ảo để
              trục lợi chính sách.
            </li>
            <li>
              <span class="font-bold">Hủy bỏ Referral:</span> Trong trường hợp hội viên
              mới (người được giới thiệu) rời bỏ hệ thống hoặc yêu cầu hoàn phí trong vòng
              30 ngày đầu tiên kể từ khi kích hoạt, toàn bộ giá trị RC tương ứng sẽ bị hủy
              bỏ khỏi tài khoản của người giới thiệu.
            </li>
            <li>
              <span class="font-bold">Kiểm tra định kỳ:</span> Ban quản trị (Admin) có
              toàn quyền rà soát, kiểm tra các trường hợp Referral có dấu hiệu bất thường
              và từ chối ghi nhận nếu phát hiện vi phạm tiêu chí chất lượng cộng đồng.
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-bold">3. Hạn mức khấu trừ phí thường niên</div>
          <ul class="flex list-inside list-disc flex-col gap-1">
            <li>
              <span class="font-bold">Trần lợi ích năm:</span> Tổng giá trị RC được quy
              đổi để giảm phí thường niên cho mỗi hội viên giới thiệu trong 1 năm sẽ không
              vượt quá 40% phí thường niên của chính hội viên đó.
            </li>
            <li>
              <span class="font-bold">Tích lũy vượt mức:</span> Các giá trị RC dư thừa
              (vượt quá 40% phí thường niên) sẽ được tích lũy để sử dụng cho mục đích nâng
              hạng hội viên hoặc đổi lấy các đặc quyền mở rộng theo quy định.
            </li>
            <li>
              <span class="font-bold">Cộng dồn thời hạn:</span> RC có thể được sử dụng để
              gia hạn phí thường niên với tổng thời gian cộng dồn tối đa là 24 tháng.
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <div class="font-bold">4. Quyền thay đổi và Điều chỉnh</div>
          <ul class="flex list-inside list-disc flex-col gap-1">
            <li>
              <span class="font-bold">Điều chỉnh chính sách:</span> CEO Link giữ quyền
              điều chỉnh, thay đổi hoặc chấm dứt các điều khoản của chương trình Referral
              tại bất kỳ thời điểm nào để đảm bảo chất lượng mạng lưới và phù hợp với
              chiến lược phát triển của tập đoàn.
            </li>
            <li>
              <span class="font-bold">Thông báo:</span> Mọi thay đổi về chính sách sẽ được
              thông báo chính thức đến hội viên thông qua Dashboard quản lý hoặc các kênh
              thông tin chính thức của hệ thống.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ReferralTerms;
