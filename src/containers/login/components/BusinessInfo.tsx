import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { TextField, TextFieldInput, TextFieldLabel } from "~/components/ui/text-field";
import { useLogin } from "../LoginContext";

const BusinessInfo = () => {
  const context = useLogin();

  const onFinish = () => {
    context.onRegister();
  };

  const onBack = () => {
    context.onChangeStep(1);
  };

  return (
    <div class="flex flex-col gap-4">
      <TextField>
        <TextFieldLabel for="businessName">Tên doanh nghiệp:</TextFieldLabel>
        <TextFieldInput type="text" id="businessName" placeholder="Tên doanh nghiệp" />
      </TextField>
      <TextField>
        <TextFieldLabel for="businessIndustry">Ngành nghề kinh doanh:</TextFieldLabel>
        <Select
          options={[
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
          ]}
          placeholder="Chọn ngành nghề kinh doanh"
          itemComponent={(props) => (
            <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
          )}
        >
          <SelectTrigger aria-label="Business Industry">
            <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
      </TextField>
      <TextField>
        <TextFieldLabel for="businessScale">Quy mô doanh nghiệp:</TextFieldLabel>
        <Select
          options={[
            "Startup (1-10 nhân sự)",
            "Nhỏ (11-50 nhân sự)",
            "Vừa (51-200 nhân sự)",
            "Lớn (201-500 nhân sự)",
            "Rất lớn (trên 500 nhân sự)",
          ]}
          placeholder="Chọn quy mô doanh nghiệp"
          itemComponent={(props) => (
            <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
          )}
        >
          <SelectTrigger aria-label="Business Scale">
            <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
      </TextField>
      <TextField>
        <TextFieldLabel for="businessMarket">Thị trường hoạt động:</TextFieldLabel>
        <Select
          options={["Nội địa", "Quốc tế", "Cả nội địa và quốc tế"]}
          placeholder="Chọn thị trường hoạt động"
          itemComponent={(props) => (
            <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
          )}
        >
          <SelectTrigger aria-label="Business Market">
            <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
      </TextField>
      <div class="grid grid-cols-2 gap-2">
        <Button onClick={onBack}>Quay lại</Button>
        <Button onClick={onFinish}>Hoàn tất đăng ký</Button>
      </div>
    </div>
  );
};

export default BusinessInfo;
