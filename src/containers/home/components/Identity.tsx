import { clientOnly } from "@solidjs/start";
import { createSignal, Index } from "solid-js";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";

const Cable = clientOnly(() => import("lucide-solid/icons/cable"));
const Funnel = clientOnly(() => import("lucide-solid/icons/funnel"));
const IdCard = clientOnly(() => import("lucide-solid/icons/id-card"));

export const Identity = () => {
  const tabs = [
    { label: "Startup", value: "startup" },
    { label: "Doanh nghiệp SME", value: "sme" },
    { label: "Doanh nghiệp / Tổ chức lớn", value: "large" },
  ];

  const tabContents = [
    {
      value: "startup",
      description: `Startup của bạn sở hữu một sản phẩm đột phá, nhưng cánh cửa bước vào những tập đoàn lớn luôn đóng chặt bởi rào cản về sự bảo chứng uy tín. CEO Link hiểu rằng niềm tin chính là loại vốn quý nhất của người khởi nghiệp, hệ thống cung cấp một tấm "hộ chiếu quyền lực", giúp bạn xây dựng lòng tin tuyệt đối ngay từ giây phút đầu tiên bước vào bàn đàm phán.`,
      subItems: [
        {
          Icon: IdCard,
          title: "Định danh vị thế",
          description: `Sở hữu hồ sơ doanh nghiệp "Verified" (đã xác thực) để xây dựng lòng tin ngay lập tức khi bước vào bàn đàm phán`,
        },
        {
          Icon: Cable,
          title: "Cửa ngõ tiếp cận",
          description: `Niêm yết năng lực doanh nghiệp và sản phẩm cốt lõi trực tiếp trước mắt mạng lưới 10.000 CEO và nhà đầu tư`,
        },
        {
          Icon: Funnel,
          title: "Tạo phễu thăng tiến",
          description: `Tham gia cộng đồng lãnh đạo được tuyển chọn để tìm kiếm Mentor, đối tác chiến lược và cơ hội gọi vốn thực chất.`,
        },
      ],
    },
    {
      value: "sme",
      description: `Startup của bạn sở hữu một sản phẩm đột phá, nhưng cánh cửa bước vào những tập đoàn lớn luôn đóng chặt bởi rào cản về sự bảo chứng uy tín. CEO Link hiểu rằng niềm tin chính là loại vốn quý nhất của người khởi nghiệp, hệ thống cung cấp một tấm "hộ chiếu quyền lực", giúp bạn xây dựng lòng tin tuyệt đối ngay từ giây phút đầu tiên bước vào bàn đàm phán.`,
      subItems: [
        {
          Icon: IdCard,
          title: "Định danh vị thế",
          description: `Sở hữu hồ sơ doanh nghiệp "Verified" (đã xác thực) để xây dựng lòng tin ngay lập tức khi bước vào bàn đàm phán`,
        },
        {
          Icon: Cable,
          title: "Cửa ngõ tiếp cận",
          description: `Niêm yết năng lực doanh nghiệp và sản phẩm cốt lõi trực tiếp trước mắt mạng lưới 10.000 CEO và nhà đầu tư`,
        },
        {
          Icon: Funnel,
          title: "Tạo phễu thăng tiến",
          description: `Tham gia cộng đồng lãnh đạo được tuyển chọn để tìm kiếm Mentor, đối tác chiến lược và cơ hội gọi vốn thực chất.`,
        },
      ],
    },
    {
      value: "large",
      description: `Startup của bạn sở hữu một sản phẩm đột phá, nhưng cánh cửa bước vào những tập đoàn lớn luôn đóng chặt bởi rào cản về sự bảo chứng uy tín. CEO Link hiểu rằng niềm tin chính là loại vốn quý nhất của người khởi nghiệp, hệ thống cung cấp một tấm "hộ chiếu quyền lực", giúp bạn xây dựng lòng tin tuyệt đối ngay từ giây phút đầu tiên bước vào bàn đàm phán.`,
      subItems: [
        {
          Icon: IdCard,
          title: "Định danh vị thế",
          description: `Sở hữu hồ sơ doanh nghiệp "Verified" (đã xác thực) để xây dựng lòng tin ngay lập tức khi bước vào bàn đàm phán`,
        },
        {
          Icon: Cable,
          title: "Cửa ngõ tiếp cận",
          description: `Niêm yết năng lực doanh nghiệp và sản phẩm cốt lõi trực tiếp trước mắt mạng lưới 10.000 CEO và nhà đầu tư`,
        },
        {
          Icon: Funnel,
          title: "Tạo phễu thăng tiến",
          description: `Tham gia cộng đồng lãnh đạo được tuyển chọn để tìm kiếm Mentor, đối tác chiến lược và cơ hội gọi vốn thực chất.`,
        },
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = createSignal("startup");

  return (
    <div id="identity" class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <h3 class="text-lg font-bold">Bạn là</h3>
        <div class="flex gap-2">
          <Index each={tabs}>
            {(tab, _) => {
              return (
                <Button
                  onClick={() => setSelectedTab(tab().value)}
                  class={cn(selectedTab() === tab().value ? null : "bg-primary/50")}
                >
                  {tab().label}
                </Button>
              );
            }}
          </Index>
        </div>
      </div>
      <Tabs value={selectedTab()} onChange={setSelectedTab}>
        <Index each={tabContents}>
          {(tabContent, _) => {
            return (
              <TabsContent value={tabContent().value}>
                <div class="border-2 border-primary px-8 py-4">
                  <div class="flex flex-col gap-4">
                    <p>{tabContent().description}</p>
                    <div class="grid grid-cols-3 place-content-center gap-8">
                      {tabContent().subItems.map((subItem) => {
                        return (
                          <div class="mx-auto flex max-w-[80%] flex-col items-center gap-4 self-center">
                            <div class="rounded-full bg-primary p-4">
                              <subItem.Icon class="text-white" size={48} />
                            </div>
                            <h6 class="font-bold">{subItem.title}</h6>
                            <p class="text-center">{subItem.description}</p>
                          </div>
                        );
                      })}

                      <div class=""></div>
                      <div class=""></div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          }}
        </Index>
      </Tabs>
    </div>
  );
};
