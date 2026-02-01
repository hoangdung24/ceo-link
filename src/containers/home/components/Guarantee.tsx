import { CountUp } from "countup.js";
import { onMount } from "solid-js";

export const Guarantee = () => {
  onMount(() => {
    const items = [
      { id: "leader-count", value: 10000 },
      { id: "verified-count", value: 100 },
      { id: "response-time", value: 5 },
    ];

    for (const item of items) {
      let el = new CountUp(item.id, item.value, {
        enableScrollSpy: true,
        duration: 5,
        scrollSpyDelay: 0.5,
        scrollSpyOnce: true,
      });

      if (!el.error) {
        el.start();
      }
    }
  });

  return (
    <div id="guarantee" class="flex flex-col gap-8">
      <div id="myTargetElement" />
      <div class="flex max-w-[70%] flex-col gap-2 self-center">
        <h3 class="text-center text-2xl font-bold">
          Vị thế được bảo chứng – Kết nối được định danh
        </h3>
        <p class="text-center">
          CEO Link tự hào đồng hành cùng các nhà lãnh đạo và các đơn vị hàng đầu để mang
          lại lộ trình đặc quyền không thể sao chép xuyên suốt cho hội viên
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4 text-white">
        <div class="flex aspect-video items-center justify-center bg-primary">
          <p class="text-xl font-bold">
            <span id="leader-count" />+ nhà lãnh đạo tinh hoa
          </p>
        </div>
        <div class="flex aspect-video items-center justify-center bg-primary">
          <p class="text-xl font-bold">
            <span id="verified-count" />% doanh nghiệp được xác thực
          </p>
        </div>
        <div class="flex aspect-video items-center justify-center bg-primary">
          <p class="text-xl font-bold">{`<${(<span id="response-time" />)} phút phản hồi đặc quyền`}</p>
        </div>
      </div>
    </div>
  );
};
