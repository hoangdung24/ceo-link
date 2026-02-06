import { ComponentProps } from "solid-js";
import { MetaProvider as _MetaProvider, Title, Meta } from "@solidjs/meta";

const MetaProvider = (props: ComponentProps<any>) => {
  const defaultTitle = "CEO Link | Hệ sinh thái kinh doanh riêng tư & Đặc quyền lãnh đạo";
  const defaultDescription =
    "CEO Link - Hệ sinh thái kết nối 10.000+ lãnh đạo xác thực. Kết nối đúng người – đúng nhu cầu – đúng thời điểm với hạ tầng đặc quyền ưu tiên và bảo mật tuyệt đối. Nâng cấp ngay để bứt phá vị thế doanh nghiệp của bạn!";

  return (
    <_MetaProvider>
      <Title>{defaultTitle}</Title>
      <Meta name="description" content={defaultDescription} />

      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={defaultTitle} />
      <Meta property="og:description" content={defaultDescription} />
      <Meta
        property="og:image"
        content={`https://ceo-link.vercel.app/images/meta-background.jpg`}
      />
      <Meta property="og:url" content="https://ceo-link.vercel.app/" />

      {props.children}
    </_MetaProvider>
  );
};

export default MetaProvider;
