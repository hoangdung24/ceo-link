import { createSignal } from "solid-js";
import { clientOnly } from "@solidjs/start";

import { cn } from "~/lib/utils";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { TextField, TextFieldInput } from "~/components/ui/text-field";

import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

const CircleCheck = clientOnly(() => import("lucide-solid/icons/circle-check"));

const BusinessCategory = () => {
  return (
    <main id="business-category">
      <Hero />
      <div class="container flex flex-col gap-12 py-12">
        <Filter />
        <BusinessList />
        <div class="self-center">
          <Pagination
            count={5}
            fixedItems
            itemComponent={(props) => (
              <PaginationItem page={props.page}>{props.page}</PaginationItem>
            )}
            ellipsisComponent={() => <PaginationEllipsis />}
          >
            <PaginationPrevious />
            <PaginationItems />
            <PaginationNext />
          </Pagination>
        </div>
      </div>
    </main>
  );
};

const Hero = () => {
  return (
    <section id="hero" class="relative h-96 overflow-hidden">
      <div class="h-96 w-full bg-[url(/images/business-background.png)] bg-cover bg-center" />
      <div class="absolute inset-0 bg-primary/50" />
      <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <div class="container">
          <div class="mx-auto flex max-w-[70%] flex-col gap-4 text-center text-white">
            <h1 class="text-2xl font-bold uppercase">DANH MỤC DOANH NGHIỆP</h1>
            <p>
              Khám phá mạng lưới doanh nghiệp chất lượng cao đã qua quy trình xác thực
              nghiêm ngặt, nơi mỗi hồ sơ không chỉ là thông tin mà là một tài sản chiến
              lược. CEO Link kiến tạo không gian để các nhà lãnh đạo thấu hiểu năng lực
              của đối tác, từ đó thiết lập những kết nối đúng người – đúng nhu cầu – đúng
              thời điểm nhằm bứt phá giá trị giao thương.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Filter = () => {
  const categories = [
    "Công nghệ thông tin / Phần mềm",
    "Bán lẻ / Thương mại điện tử",
    "Tài chính / Ngân hàng / Bảo hiểm",
    "Giáo dục / Đào tạo",
    "Y tế / Chăm sóc sức khỏe",
    "Bất động sản / Xây dựng",
    "Du lịch / Nhà hàng / Khách sạn",
    "Sản xuất / Công nghiệp nặng",
    "Nông nghiệp / Lâm nghiệp / Thủy sản",
    "Vận tải / Logistics / Kho bãi",
  ];

  const [selectedCategory, setSelectedCategory] = createSignal<string>("");

  return (
    <div class="flex flex-col gap-8">
      <div class="flex gap-4 overflow-hidden overflow-x-auto pb-2">
        {categories.map((el) => {
          return (
            <Button
              onClick={() => {
                if (selectedCategory() == el) {
                  setSelectedCategory("");
                  return;
                }

                setSelectedCategory(el);
              }}
              variant="outline"
              class={cn(
                selectedCategory() == el &&
                  "bg-primary text-white hover:bg-primary/90 hover:text-white"
              )}
            >
              {el}
            </Button>
          );
        })}
      </div>
      <div class="flex gap-4">
        <Select
          defaultValue="Sắp xếp theo thự hạng"
          options={["Sắp xếp theo thự hạng", "Sắp xếp theo đánh giá"]}
          placeholder="Chọn tiêu chí sắp xếp"
          itemComponent={(props) => (
            <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
          )}
        >
          <SelectTrigger class="w-60">
            <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
        <TextField class="w-60">
          <TextFieldInput placeholder="Tìm kiếm doanh nghiệp" />
        </TextField>
      </div>
    </div>
  );
};

const BusinessList = () => {
  const businesses = [
    {
      logo: "/images/logo/logo-3.png",
      name: "TechVina Electronics Solutions",
      field: "Điện tử & Bán dẫn",
      scale: "500+ nhân sự | 10.000 m² | Doanh thu >$20M",
      capacity: "Giao hàng đúng hạn 100% | Phản hồi ≤ 1h",
      description:
        "Với hơn 15 năm kinh nghiệm trong lĩnh vực công nghiệp phụ trợ, TechVina tự hào là đơn vị hàng đầu chuyên cung cấp giải pháp gia công mạch in (PCB) và lắp ráp linh kiện điện tử chính xác. Chúng tôi sở hữu hệ thống nhà xưởng hiện đại đạt tiêu chuẩn quốc tế, vận hành bởi đội ngũ kỹ sư lành nghề tận tâm với sự đổi mới và chất lượng vượt trội. Sản phẩm của TechVina hiện là mắt xích quan trọng trong chuỗi cung ứng của các tập đoàn đa quốc gia tại thị trường Âu Mỹ, khẳng định vị thế của doanh nghiệp Việt trên bản đồ công nghệ thế giới.",
      goal: "Tìm kiếm đối tác Logistics nội địa và đơn vị cung ứng vật liệu phụ trợ đạt chuẩn xanh (Eco-friendly).",
      target:
        "Doanh nghiệp Logistics chuyên nghiệp, có hệ thống kho bãi tại cụm cảng Hải Phòng.",
      time: "Dự kiến thẩm định và ký kết hợp đồng trong Quý 2/2026.",
    },
    {
      logo: "/images/logo/logo-4.png",
      name: "SkyAI Digital Transformation ",
      field: "Phần mềm & Trí tuệ nhân tạo (AI)",
      scale: "50+ kỹ sư | Thị trường: Việt Nam, Singapore",
      capacity: "Phản hồi ≤ 2h | 98% Khách hàng hài lòng | Đánh giá 4.9 ⭐",
      description:
        "SkyAI là doanh nghiệp tiên phong trong việc cung cấp các giải pháp chuyển đổi số thông minh, tập trung vào ứng dụng AI Vision để tự động hóa quy trình kiểm soát chất lượng (QC) cho các dây chuyền sản xuất quy mô lớn. Chúng tôi không chỉ bán phần mềm, mà mang đến một hệ sinh thái quản trị dữ liệu tập trung, giúp doanh nghiệp tối ưu hóa năng suất và giảm thiểu sai sót vận hành lên đến 40%. Với thế mạnh về R&D và sự am hiểu sâu sắc về đặc thù công nghiệp tại Đông Nam Á, SkyAI cam kết đồng hành cùng các nhà lãnh đạo trong hành trình số hóa thực chất và bền vững.",
      goal: "Gọi vốn Series A để mở rộng trung tâm R&D và tìm kiếm Mentor chiến lược có kinh nghiệm trong ngành sản xuất.",
      target:
        "Các nhà đầu tư cá nhân (Angel Investors) hoặc các Quỹ đầu tư mạo hiểm quan tâm đến giải pháp AI công nghiệp.",
      time: "Mong muốn hoàn tất vòng kết nối sơ bộ trong vòng 3 tháng tới.",
    },
  ];

  return (
    <div class="flex flex-col gap-8">
      {businesses.map((el) => {
        return (
          <div class="flex flex-col gap-4 border-2 border-primary p-8">
            <div class="flex items-center gap-2">
              <img class="w-48" src={el.logo} />
              <h3 class="text-2xl font-bold">{el.name}</h3>
              <CircleCheck class="text-yellow-400" size={32} />
            </div>
            <div class="grid grid-cols-[60%_1fr] gap-4">
              <ul class="flex list-inside list-disc flex-col gap-2">
                <li>
                  <span class="font-bold">Ngành: </span>
                  {el.field}
                </li>
                <li>
                  <span class="font-bold">Quy mô: </span>
                  {el.scale}
                </li>
                <li>
                  <span class="font-bold">Năng lực: </span>
                  {el.capacity}
                </li>
              </ul>
              <div class="grid grid-cols-2 gap-2">
                <Button>Xem hồ sơ năng lực</Button>
                <Button>Gửi yêu cầu kết nối</Button>
                <Button class="col-span-2">Yêu cầu trợ lý thiết lập cuộc hẹn</Button>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h6 class="font-bold">Mô tả doanh nghiệp</h6>
              <p>{el.description}</p>
            </div>
            <div class="flex flex-col gap-2">
              <h6 class="font-bold">Nhu cầu hợp tác chiến lược</h6>
              <ul class="flex list-inside list-disc flex-col gap-2">
                <li>
                  <span class="font-bold">Mục tiêu: </span>
                  {el.goal}
                </li>
                <li>
                  <span class="font-bold">Đối tượng: </span>
                  {el.target}
                </li>
                <li>
                  <span class="font-bold">Thời gian: </span>
                  {el.time}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BusinessCategory;
