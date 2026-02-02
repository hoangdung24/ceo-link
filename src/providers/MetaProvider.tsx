import { ComponentProps } from "solid-js";
import { MetaProvider as _MetaProvider, Title, Meta } from "@solidjs/meta";

const MetaProvider = (props: ComponentProps<any>) => {
  return (
    <_MetaProvider>
      <Title>CEO Link | Hệ sinh thái kinh doanh riêng tư & Đặc quyền lãnh đạo</Title>
      <Meta
        name="description"
        content={`CEO Link - Hệ sinh thái kết nối 10.000+ lãnh đạo xác thực. Kết nối đúng người – đúng nhu cầu – đúng thời điểm với hạ tầng đặc quyền ưu tiên và bảo mật tuyệt đối. Nâng cấp ngay để bứt phá vị thế doanh nghiệp của bạn!`}
      />
      {props.children}
    </_MetaProvider>
  );
};

export default MetaProvider;
