import { JSX } from "solid-js";

export const Feature = () => {
  const features = [
    {
      title: "Đặc quyền",
      description:
        "Cung cấp quyền truy cập có kiểm soát vào mạng lưới lãnh đạo SME, Startup và các tập đoàn lớn được tuyển chọn khắt khe",
    },
    {
      title: "Ưu tiên",
      description:
        "Tối ưu hóa quỹ thời gian quý báu của nhà lãnh đạo thông qua hạ tầng dịch vụ Hàng không, Y tế và Lifestyle đẳng cấp quốc tế",
    },
    {
      title: "Bảo mật",
      description: `Vận hành trên nền tảng số bảo mật, đảm bảo mọi thông tin doanh nghiệp và lịch sử kết nối được bảo vệ tuyệt đối`,
    },
  ];

  const style: JSX.CSSProperties = {
    "clip-path": "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
  };

  return (
    <section id="feature" class="flex flex-col gap-8">
      <div class="flex max-w-[80%] flex-col self-center">
        <h3 class="text-center text-2xl font-bold">
          CEO Link không cung cấp 'quyền lợi' đơn thuần, cung cấp Khả năng tiếp cận và Cơ
          hội kết nối thực chất
        </h3>
        <p class="text-center">
          Vượt xa giới hạn của một công cụ định danh thông thường, thẻ hội viên CEO Link
          là chìa khóa mở cánh cửa bước vào Hệ sinh thái kinh doanh riêng tư (Private
          Business Ecosystem) – nơi các giá trị vô hình của niềm tin được chuyển hóa thành
          những cơ hội giao thương thực chất
        </p>
      </div>
      <div class="grid w-[80%] grid-cols-3 place-content-center gap-8 self-center">
        {features.map((el) => {
          return (
            <div class="flex w-60 flex-col items-center justify-center gap-4">
              <div
                class="flex h-20 w-full items-center justify-center bg-primary text-lg font-bold uppercase text-white"
                style={style}
              >
                {el.title}
              </div>
              <p class="text-center">{el.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
