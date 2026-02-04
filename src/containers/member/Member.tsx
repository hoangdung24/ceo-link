import { clientOnly } from "@solidjs/start";
import { Label } from "~/components/ui/label";
import { createUniqueId, For } from "solid-js";
import { Checkbox } from "~/components/ui/checkbox";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "~/components/ui/text-field";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemLabel,
} from "~/components/ui/radio-group";
import { parseDate } from "@ark-ui/solid";
import { Button } from "~/components/ui/button";

const DatePicker = clientOnly(() => import("~/components/user-defined/DatePicker"));

const Member = () => {
  return (
    <main id="member" class="container flex flex-col gap-12 py-12">
      <TopContent />
      <FormContent />
      <Button class="self-center px-12" size="lg">
        Gửi đăng ký hội viên cao cấp
      </Button>
    </main>
  );
};

const TopContent = () => {
  return (
    <div class="mx-auto flex max-w-[70%] flex-col items-center gap-2">
      <h3 class="text-2xl font-bold">Nâng tầm Vị thế cùng CEO Link Gold & Platinum</h3>
      <p class="text-center">
        Chỉ một bước để mở khóa hạ tầng đặc quyền và mạng lưới kết nối giao thương chuyên
        sâu dành riêng cho nhà lãnh đạo
      </p>
    </div>
  );
};

const FormContent = () => {
  return (
    <div class="flex flex-col gap-8">
      {[
        [<Header index={1} title="Hạng hội viên đăng ký" />, <Step1 />],
        [<Header index={2} title="Thông tin cơ bản" />, <Step2 />],
        [<Header index={3} title="Mục tiêu tham gia CEO Link" />, <Step3 />],
        [<Header index={4} title="Nhu cầu kết nối cụ thể" />, <Step4 />],
        [<Header index={5} title="Mức độ sẵn sàng hợp tác" />, <Step5 />],
      ].map((el) => {
        return (
          <div class="flex flex-col gap-4">
            {el[0]}
            {el[1]}
          </div>
        );
      })}
    </div>
  );
};

const Step1 = () => {
  const checkboxs = [
    { id: "terms1", label: "GOLD" },
    { id: "terms2", label: "PLATINUM" },
  ];

  return (
    <div class="flex items-center gap-4">
      {checkboxs.map((el) => {
        return (
          <div class="flex items-center gap-2">
            <Checkbox size="xl" id={el.id} />
            <Label for={`${el.id}-input`}>{el.label}</Label>
          </div>
        );
      })}
    </div>
  );
};

const Step2 = () => {
  const genders = [
    {
      label: "Nam",
      value: "Nam",
    },
    {
      label: "Nữ",
      value: "Nữ",
    },
    {
      label: "Khác",
      value: "Khác",
    },
  ];

  return (
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-bold">Thông tin cá nhân</h3>
      <div class="grid grid-cols-2 gap-2">
        <TextField readOnly defaultValue="Bùi">
          <TextFieldLabel for="lastName">Họ:</TextFieldLabel>
          <TextFieldInput type="text" id="lastName" placeholder="Họ" />
        </TextField>
        <TextField readOnly defaultValue="Giang">
          <TextFieldLabel for="firstName">Tên:</TextFieldLabel>
          <TextFieldInput type="text" id="firstName" placeholder="Tên" />
        </TextField>
      </div>
      <TextField readOnly defaultValue="Nam">
        <TextFieldLabel for="gender">Giới tính:</TextFieldLabel>
        <RadioGroup defaultValue="Nam" id="gender" class="flex gap-2">
          <For each={genders}>
            {(gender) => {
              return (
                <RadioGroupItem value={gender.value}>
                  <RadioGroupItemLabel>{gender.label}</RadioGroupItemLabel>
                </RadioGroupItem>
              );
            }}
          </For>
        </RadioGroup>
      </TextField>
      <TextField>
        <TextFieldLabel for="gender">Ngày sinh:</TextFieldLabel>
        <DatePicker defaultValue={[parseDate("1990-01-01")]} readOnly />
      </TextField>
      <TextField readOnly value={"0999 999 999"}>
        <TextFieldLabel for="phoneNumber">Số điện thoại:</TextFieldLabel>
        <TextFieldInput type="text" id="phoneNumber" placeholder="Số điện thoại" />
      </TextField>
      <TextField readOnly defaultValue="CEO Link">
        <TextFieldLabel for="email">
          Email <span class="text-sm italic">(doanh nghiệp)</span>:
        </TextFieldLabel>
        <TextFieldInput type="email" id="email" placeholder="Email" />
      </TextField>
      <TextField readOnly defaultValue="Giám đốc phát triển">
        <TextFieldLabel for="position">Chức danh:</TextFieldLabel>
        <TextFieldInput type="text" id="position" placeholder="Chức danh" />
      </TextField>
      <h3 class="text-lg font-bold">Thông tin doanh nghiệp</h3>

      <TextField readOnly defaultValue="Công ty cổ phần CEO Link">
        <TextFieldLabel for="businessName">Tên doanh nghiệp:</TextFieldLabel>
        <TextFieldInput type="text" id="businessName" placeholder="Tên doanh nghiệp" />
      </TextField>

      <TextField readOnly defaultValue="Công nghệ thông tin / Phần mềm">
        <TextFieldLabel for="businessIndustry">Ngành nghề kinh doanh:</TextFieldLabel>
        <TextFieldInput
          type="text"
          id="businessIndustry"
          placeholder="Ngành nghề kinh doanh"
        />
      </TextField>
      <TextField readOnly defaultValue="Startup (1-10 nhân sự)">
        <TextFieldLabel for="businessScale">Quy mô doanh nghiệp:</TextFieldLabel>
        <TextFieldInput
          type="text"
          id="businessScale"
          placeholder="Quy mô doanh nghiệp"
        />
      </TextField>
      <TextField readOnly defaultValue="Nội địa">
        <TextFieldLabel for="businessMarket">Thị trường hoạt động:</TextFieldLabel>
        <TextFieldInput
          type="text"
          id="businessMarket"
          placeholder="Thị trường hoạt động"
        />
      </TextField>
    </div>
  );
};

const Step3 = () => {
  const selects = [
    {
      label: "Tìm kiếm đối tác kinh doanh",
      subLabel: "Mở rộng chuỗi cung ứng hoặc kênh phân phối",
    },
    {
      label: "Tiếp cận nhà đầu tư",
      subLabel: "Tìm kiếm nguồn vốn và Mentor chiến lược cho dự án",
    },
    {
      label: "Mở rộng thị trường",
      subLabel: "Xúc tiến thương mại trong và ngoài nước",
    },
    {
      label: "Tìm kiếm nhà cung ứng",
      subLabel: "Tối ưu hóa chi phí và chất lượng đầu vào",
    },
    {
      label: "Xây dựng thương hiệu cá nhân",
      subLabel: "Khẳng định uy tín nhà lãnh đạo trong cộng đồng tinh hoa",
    },
    {
      label: "Khác (ghi rõ)",
      subLabel:
        "........................................................................",
    },
  ];

  const uniqId = createUniqueId();

  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <p>Để hệ thống AI Matching gợi ý đúng đối tác tiềm năng.</p>
        <p>Anh/chị vui lòng chọn các mục tiêu tham gia đúng phù hợp nhất:</p>
      </div>
      {selects.map((el, idx) => {
        return (
          <div class="flex items-center gap-2">
            <Checkbox size="xl" id={`${uniqId}-${idx.toString()}`} />
            <Label class="font-bold" for={`${uniqId}-${idx.toString()}-input`}>
              {el.label}: <span class="font-normal">{el.subLabel}</span>
            </Label>
          </div>
        );
      })}
    </div>
  );
};

const Step4 = () => {
  return (
    <div class="flex flex-col gap-2">
      <p>Mô tả chi tiết để được hỗ trợ nhanh nhất</p>
      <TextField>
        <TextFieldTextArea rows={5} placeholder="Nhập mô tả chi tiết tại đây" />
      </TextField>
    </div>
  );
};

const Step5 = () => {
  const selects = [
    {
      label: "Đang tìm hiểu",
      subLabel: "Cần thêm thông tin về thị trường và đối tác",
    },
    {
      label: "Có kế hoạch rõ ràng",
      subLabel: "Sẵn sàng triển khai trong 3 - 6 tháng tới",
    },
    {
      label: "Sẵn sàng giao dịch",
      subLabel: "Đã có dự án/thương vụ cụ thể cần kết nối ngay.",
    },
  ];

  const uniqId = createUniqueId();

  return (
    <div class="flex flex-col gap-4">
      <p>Giúp chúng tôi xác định mức độ ưu tiên xử lý yêu cầu của anh/chị:</p>

      {selects.map((el, idx) => {
        return (
          <div class="flex items-center gap-2">
            <Checkbox size="xl" id={`${uniqId}-${idx.toString()}`} />
            <Label class="font-bold" for={`${uniqId}-${idx.toString()}-input`}>
              {el.label}: <span class="font-normal">{el.subLabel}</span>
            </Label>
          </div>
        );
      })}

      <p class="font-bold italic">
        Mọi yêu cầu của anh/chị sẽ được bộ phận chuyên trách phản hồi và xử lý theo quy
        chuẩn VIP SOP
      </p>
    </div>
  );
};

type HeaderProps = {
  title: string;
  index: number;
};

const Header = (props: HeaderProps) => {
  return (
    <div class="flex items-center gap-4">
      <div class="flex size-12 items-center justify-center rounded-full bg-primary p-4 text-white">
        {props.index}
      </div>
      <h6 class="text-lg font-bold">{props.title}</h6>
    </div>
  );
};

export default Member;
