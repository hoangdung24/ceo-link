import { createMemo, createSignal, onMount, JSX } from "solid-js";
import { cn } from "~/lib/utils";

export const Exclusive = () => {
  let firstDiv: HTMLDivElement | undefined;

  const [extraHeight, setExtraHeight] = createSignal(200);
  const [offset, setOffset] = createSignal(-40);

  const expansion = 32;

  const exclusives = [
    {
      title: "Travel Priority",
      description:
        "Ưu tiên đặt chỗ và nâng hạng dịch vụ hàng không, khách sạn và nghỉ dưỡng cao cấp trên toàn cầu",
    },
    {
      title: "Healthcare VVIP",
      description:
        "Ưu tiên đặt chỗ và nâng hạng dịch vụ hàng không, khách sạn và nghỉ dưỡng cao cấp trên toàn cầu",
    },
    {
      title: "Lifestyle Exclusive",
      description:
        "Ưu tiên đặt chỗ và nâng hạng dịch vụ hàng không, khách sạn và nghỉ dưỡng cao cấp trên toàn cầu",
    },
    {
      title: "B2B Connection",
      description:
        "Ưu tiên đặt chỗ và nâng hạng dịch vụ hàng không, khách sạn và nghỉ dưỡng cao cấp trên toàn cầu",
    },
  ];

  onMount(() => {
    if (firstDiv == undefined) return;

    const height = firstDiv.getBoundingClientRect().width;

    const originalWidth = (height * 100) / (100 + expansion);

    setExtraHeight(height * 0.65);
    setOffset((originalWidth * (expansion / 2)) / 100);
  });

  const containerStyle = createMemo(() => {
    return {
      translate: `-${offset()}px`,
    } as JSX.CSSProperties;
  });

  const itemStyle = {
    "clip-path": "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    width: `calc(${100 + expansion}%)`,
  };

  return (
    <div id="exclusive" class="mx-auto flex w-[80%] flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <h3 class="text-2xl font-bold">Hạ tầng đặc quyền, dẫn lối thành công</h3>
        <p>
          CEO Link không cung cấp 'quyền lợi' đơn thuần, cung cấp Khả năng tiếp cận và Cơ
          hội kết nối thực chất, toàn diện
        </p>
      </div>
      <div class="grid w-full grid-cols-4" style={containerStyle()}>
        {exclusives.map((el, idx) => {
          return (
            <div class="relative aspect-square w-full">
              <div
                ref={idx == 0 ? (ref) => (firstDiv = ref) : undefined}
                class={cn(
                  `group absolute flex aspect-square items-center justify-center bg-primary text-white`,
                  idx % 2 == 1 ? "translate-y-1/2" : null
                )}
                style={itemStyle}
              >
                <div class="relative w-full">
                  <h6 class="text-center font-bold">{el.title}</h6>
                  <div class="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 bg-primary text-center opacity-0 transition group-hover:opacity-100">
                    <p>{el.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          height: `${extraHeight()}px`,
        }}
      />
    </div>
  );
};
