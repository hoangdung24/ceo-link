import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Button } from "~/components/ui/button";
import { routes } from "~/config/routes";

const User = clientOnly(() => import("lucide-solid/icons/user"));
const Award = clientOnly(() => import("lucide-solid/icons/award"));
const RefreshCcw = clientOnly(() => import("lucide-solid/icons/refresh-ccw"));
const ShieldCheck = clientOnly(() => import("lucide-solid/icons/shield-check"));
const AlarmClockCheck = clientOnly(() => import("lucide-solid/icons/alarm-clock-check"));

const Service = () => {
  return (
    <main id="service" class="flex flex-col gap-12 pb-12">
      <Introduction />
      <div class="container flex flex-col gap-12">
        <Benefit />
        <Medical />
        <Elite />
        <Travel />
        <FinanceStrategy />
        <Lifestyle />
        <Legal />
      </div>
      <Promotion />
    </main>
  );
};

const Introduction = () => {
  const contents = [
    {
      icon: Award,
      title: "Đẳng cấp",
      description:
        "Chúng tôi cam kết mang đến những sản phẩm và dịch vụ chất lượng cao, trải nghiệm chuyên nghiệp, xứng tầm với cộng đồng doanh nhân và đối tác trong nước và toàn cầu.",
    },
    {
      icon: RefreshCcw,
      title: "Hiệu quả",
      description:
        "Tối ưu quy trình, tiết kiệm thời gian và chi phí, tập trung vào kết quả thực tế nhằm tạo ra giá trị bền vững cho khách hàng và doanh nghiệp.",
    },
    {
      icon: ShieldCheck,
      title: "An toàn",
      description:
        "Đặt yếu tố bảo mật, minh bạch và tuân thủ pháp luật lên hàng đầu, đảm bảo mọi hoạt động hợp tác và giao dịch đều đáng tin cậy.",
    },
    {
      icon: AlarmClockCheck,
      title: "Nhanh chóng",
      description:
        "Phản hồi kịp thời, xử lý linh hoạt và triển khai dịch vụ nhanh gọn để nắm bắt cơ hội kinh doanh trong môi trường luôn thay đổi.",
    },
  ];

  return (
    <div class="flex flex-col bg-primary py-8 text-white">
      <div class="container flex flex-col gap-12">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold">Dịch vụ và Kết nối</h1>
          <h3 class="text-lg font-medium">
            Bứt phá vị thế, Khai phóng hạ tầng đặc quyền
          </h3>
          <p>
            Vượt trên những kết nối thông thường, CEO Link mang đến một hệ sinh thái hạ
            tầng dịch vụ chuyên biệt, nơi mọi nhu cầu của nhà lãnh đạo được cá nhân hóa
            tuyệt đối qua đội ngũ trợ lý riêng 1-1. Từ mạng lưới giao thương toàn cầu đến
            các đặc quyền y tế, sân bay và tài chính VVIP, chúng tôi kiến tạo nền tảng để
            bạn làm chủ thời gian và tận hưởng cuộc sống xứng tầm.
          </p>
        </div>
        <div class="grid grid-cols-4 gap-8">
          {contents.map((el) => {
            return (
              <div class="flex flex-col items-center gap-2 text-center">
                <el.icon size={48} />
                <h4 class="text-lg font-bold">{el.title}</h4>
                <p>{el.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Benefit = () => {
  const contents = [
    {
      title: "Y tế (Trưởng / Phó khoa)",
      items: [
        ["Khám bệnh", "Ưu tiên", "Ưu tiên", "100% phí"],
        ["Chữa bệnh", "100% phí", "50% phí", "100% phí"],
        ["Cấp cứu", "100% phí", "50% phí", "100% phí"],
      ],
    },
    {
      title: "Sân bay",
      items: [
        ["An ninh", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Phòng chờ", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Đưa đón", "Cập nhật", "Cập nhật", "Cập nhật"],
      ],
    },
    {
      title: "Tài chính\nNgân hàng - Kế toán",
      items: [
        ["Tiền gửi", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Tiền vay", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Thẻ tín dụng", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Khai báo Thuế", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Tính lương", "Cập nhật", "Cập nhật", "Cập nhật"],
      ],
    },
    {
      title: "Mua sắm, thể thao, du lịch",
      items: [
        ["Siêu thị", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["TTTM", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Golf, Pickleball", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Khách sạn, nhà hàng", "Cập nhật", "Cập nhật", "Cập nhật"],
      ],
    },
    {
      title: "Nhân sự",
      items: [
        ["Tư vấn pháp lý", "Cập nhật", "Cập nhật", "Cập nhật"],
        ["Hỗ trợ lao động", "Cập nhật", "Cập nhật", "Cập nhật"],
      ],
    },
  ];

  return (
    <div class="flex flex-col justify-center gap-4 text-center">
      <h3 class="text-2xl font-bold">Quyền lợi chi tiết cho Hội viên CEO Link</h3>
      <p>
        Sự khác biệt giữa sở hữu và tận hưởng nằm ở những đặc quyền không dành cho số
        đông. Hãy cùng khám phá hệ thống quyền lợi được chuẩn hóa theo từng hạng cấp:
      </p>
      <div class="grid grid-cols-5 border-2 border-primary font-bold [&>div]:py-4">
        <div class="bg-primary text-white">Dịch vụ</div>
        <div class="bg-primary text-white">Hạng mục</div>
        <div class="bg-primary text-white">Gold</div>
        <div class="bg-primary text-white">Platinum</div>
        <div class="bg-primary text-white">Người thân</div>
        {contents.map((el, idx) => {
          return (
            <>
              {idx !== 0 && <div class="col-span-5 h-[2px] bg-primary !py-0" />}
              <div
                style={{
                  "grid-row": `span ${el.items.length}`,
                }}
                class="self-center"
              >
                {el.title}
              </div>
              {el.items.map((items) => {
                return (
                  <>
                    {items.map((el, idx) => {
                      return <div class={idx == 0 ? `col-start-2` : undefined}>{el}</div>;
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </div>
      <div class="grid grid-cols-5">
        <div class="col-start-3 px-1">
          <Button class="w-full">
            <A href={routes.registerMember.href}>Trở thành hội viên Gold</A>
          </Button>
        </div>
        <div class="px-1">
          <Button class="w-full">
            <A href={routes.registerMember.href}>Trở thành hội viên Platinum</A>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Medical = () => {
  const contents = [
    {
      title: "Kết nối trực tiếp đội ngũ Trưởng/Phó khoa",
      items: [
        {
          title: "Hội chẩn cùng chuyên gia",
          description:
            "Bạn được đặc cách kết nối và tham vấn trực tiếp với các Trưởng/Phó khoa tại những bệnh viện tuyến đầu.",
        },
        {
          title: "Hồ sơ sức khỏe cá nhân hóa",
          description:
            "Mọi phác đồ điều trị đều được hội đồng chuyên gia thẩm định, đảm bảo tính chính xác và hiệu quả tối ưu cho từng cá nhân.",
        },
      ],
    },
    {
      title: "Quy trình khám bệnh ưu tiên (Fast-track Health)",
      items: [
        {
          title: "Loại bỏ thời gian chờ đợi",
          description:
            "Toàn bộ quy trình từ đăng ký, xét nghiệm đến lấy kết quả đều được xử lý qua luồng ưu tiên riêng biệt.",
        },
        {
          title: "Đón tiếp riêng tư",
          description:
            "Trợ lý riêng sẽ điều phối lịch trình và hỗ trợ bạn trong suốt quá trình thăm khám tại phòng chờ riêng của bệnh viện.",
        },
      ],
    },
    {
      title: "Chữa bệnh & Cấp cứu 24/7",
      items: [
        {
          title: "Xử lý khẩn cấp",
          description:
            "Hotline y tế dành riêng cho hội viên Gold & Platinum luôn sẵn sàng kích hoạt các biện pháp hỗ trợ cấp cứu ngay lập tức với sự can thiệp của bác sĩ chuyên khoa.",
        },
        {
          title: "Tối ưu hóa chi phí",
          description:
            "Đặc quyền dành cho hạng Platinum cho phép bạn tiết kiệm tới 50% chi phí chữa bệnh và cấp cứu, giúp bạn an tâm tập trung vào quá trình phục hồi.",
        },
        {
          title: "Bảo vệ người thân",
          description:
            "Đặc quyền này được mở rộng cho gia đình, đảm bảo người thân của hội viên cũng nhận được sự chăm sóc từ các chuyên gia giỏi nhất với quy trình ưu tiên.",
        },
      ],
    },
  ];

  return (
    <div class="flex flex-col gap-8">
      <div class="mx-auto flex max-w-[70%] flex-col gap-4 text-center">
        <h3 class="text-2xl font-bold">Y TẾ VVIP - ĐẶC QUYỀN CHĂM SÓC TỪ TÂM</h3>
        <p>
          Tại CEO Link, chúng tôi hiểu rằng sức khỏe của nhà lãnh đạo chính là tài sản
          quan trọng nhất của doanh nghiệp. Vì vậy, hệ thống y tế VVIP không chỉ là một
          dịch vụ chăm sóc, mà là đặc quyền tiếp cận trực tiếp vào mạng lưới những chuyên
          gia y tế hàng đầu tại Việt Nam và quốc tế.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-8">
          {contents.map((el) => {
            return (
              <div class="flex flex-col gap-2">
                <h4 class="text-lg font-bold">{el.title}</h4>
                <ul class="list-inside list-disc">
                  {el.items.map((el) => {
                    return (
                      <li>
                        <span class="font-semibold">{el.title}: </span> {el.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <img src="/images/service-2.png" alt="Medical Service" />
        </div>
      </div>
    </div>
  );
};

const Elite = () => {
  const contents = [
    {
      image: User,
      name: "Ông Phạm Quang Vinh",
      position: "Phó khoa...",
    },
    {
      image: User,
      name: "Ông Vũ Quang Minh",
      position: "Trưởng khoa...",
    },
    {
      image: User,
      name: "Ông Vũ Quang Minh",
      position: "Bác sĩ CK...",
    },
  ];

  return (
    <div class="flex flex-col gap-8 border-2 border-primary p-12">
      <h3 class="text-center text-2xl font-bold">Đội ngũ bác sĩ, Chuyên gia đầu ngành</h3>
      <div class="grid grid-cols-3 gap-8">
        {contents.map((el) => {
          return (
            <div class="flex flex-col items-center gap-2">
              <div class="rounded-full bg-primary p-4">
                <el.image class="stroke-white" size={48} />
              </div>
              <h4 class="text-lg font-bold">{el.name}</h4>
              <p>{el.position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Travel = () => {
  const contents = [
    {
      title: "An ninh & Fast-track: Tối ưu từng nhịp di chuyển",
      items: [
        {
          title: "Lối đi riêng biệt",
          description:
            "Hội viên được ưu tiên làm thủ tục thông quan và kiểm tra an ninh qua lối đi riêng, bỏ qua mọi hàng dài chờ đợi.",
        },
        {
          title: "Hỗ trợ thủ tục hành chính",
          description:
            "Đội ngũ trợ lý sân bay chuyên nghiệp sẽ hỗ trợ xử lý các thủ tục ký gửi hành lý và giấy tờ cần thiết từ khi bạn vừa đặt chân đến sảnh.",
        },
      ],
    },
    {
      title: "Hệ thống Phòng chờ Lounge: Không gian của sự tĩnh tại",
      items: [
        {
          title: "Tiêu chuẩn VVIP",
          description:
            "Tận hưởng không gian làm việc và nghỉ ngơi tách biệt hoàn toàn với sự náo nhiệt của sân bay.",
        },
        {
          title: "Tiện ích tích hợp",
          description:
            "Được trang bị đầy đủ các dịch vụ từ ẩm thực tinh tế, internet tốc độ cao đến các tiện ích thư giãn cá nhân, đảm bảo sự riêng tư tuyệt đối để bạn chuẩn bị cho các cuộc họp quan trọng ngay trong hành trình.",
        },
      ],
    },
    {
      title: "Dịch vụ Đưa đón Chuyên biệt: Sự kết nối liền mạch",
      items: [
        {
          title: "Xe cao cấp tại sảnh",
          description:
            "Dịch vụ xe đưa đón hạng sang trực tiếp tiễn bạn đến tận cửa máy bay hoặc đón bạn tại sảnh chờ VIP ngay khi vừa hạ cánh.",
        },
        {
          title: "Kết nối không gián đoạn",
          description:
            "Mọi chuyến đi được điều phối nhịp nhàng với lộ trình tối ưu nhất, đảm bảo tính đúng giờ và sự an toàn tuyệt đối theo tiêu chuẩn VIP.",
        },
      ],
    },
  ];

  return (
    <div class="flex flex-col gap-8">
      <div class="mx-auto flex max-w-[70%] flex-col gap-4 text-center">
        <h3 class="text-2xl font-bold">TRAVEL PRIORITY - HÀNH TRÌNH KHÔNG RÀO CẢN</h3>
        <p>
          Thời gian là tài sản vô giá và cũng là đơn vị tiền tệ duy nhất mà một nhà lãnh
          đạo không thể in thêm. Tại CEO Link, chúng tôi loại bỏ mọi sự phiền toái thường
          nhật tại sân bay để mỗi hành trình của bạn không chỉ là di chuyển, mà là một
          trải nghiệm thư thái tuyệt đối, giúp bạn luôn ở trạng thái năng lượng cao nhất
          cho những thương vụ quan trọng.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div>
          <img src="/images/service-1.png" alt="Medical Service" />
        </div>
        <div class="flex flex-col gap-8">
          {contents.map((el) => {
            return (
              <div class="flex flex-col gap-2">
                <h4 class="text-lg font-bold">{el.title}</h4>
                <ul class="list-inside list-disc">
                  {el.items.map((el) => {
                    return (
                      <li>
                        <span class="font-semibold">{el.title}: </span> {el.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FinanceStrategy = () => {
  const contents = [
    {
      title: "Dịch vụ Ngân hàng Đặc quyền (Private Banking)",
      items: [
        {
          title: "Tối ưu hóa nguồn vốn",
          description:
            "Hội viên được tiếp cận các gói lãi suất tiền gửi ưu đãi và hạn mức vay linh hoạt, được thiết kế riêng cho mục tiêu mở rộng quy mô kinh doanh.",
        },
        {
          title: "Dòng thẻ tín dụng độc bản",
          description:
            "Sở hữu các dòng thẻ tín dụng hạng sang với hạn mức cao và các đặc quyền đi kèm từ hệ sinh thái VDG toàn cầu.",
        },
        {
          title: "Giao dịch ưu tiên",
          description:
            "Mọi nhu cầu tài chính cá nhân và doanh nghiệp đều được xử lý qua luồng ưu tiên tại các đối tác ngân hàng hàng đầu.",
        },
      ],
    },
    {
      title: "Kế toán & Thuế",
      items: [
        {
          title: "Khai báo thuế chuyên nghiệp",
          description:
            "Đội ngũ chuyên gia hỗ trợ rà soát và thực hiện khai báo thuế chính xác, đảm bảo tính tuân thủ và tối ưu hóa nghĩa vụ thuế cho doanh nghiệp.",
        },
        {
          title: "Tối ưu hóa hệ thống lương",
          description:
            "Giải pháp quản trị và tính toán lương (Payroll) hiện đại, giúp doanh nghiệp tiết kiệm nguồn lực nhân sự và đảm bảo sự minh bạch, bảo mật thông tin thu nhập.",
        },
        {
          title: "Cố vấn tài chính 1-1",
          description:
            "Trợ lý riêng kết nối bạn với các chuyên gia tài chính để phân tích và hoạch định chiến lược dòng tiền dài hạn.",
        },
      ],
    },
  ];

  return (
    <div class="flex flex-col gap-8">
      <div class="mx-auto flex max-w-[70%] flex-col gap-4 text-center">
        <h3 class="text-2xl font-bold">TÀI CHÍNH CHIẾN LƯỢC - QUẢN TRỊ VÀ TĂNG TRƯỞNG</h3>
        <p>
          CEO Link tin rằng quản trị tài chính hiệu quả là đòn bẩy quan trọng nhất để
          doanh nghiệp vươn tầm. Thông qua mạng lưới đối tác chiến lược là các định chế
          tài chính và đơn vị kiểm toán uy tín, chúng tôi mang đến hệ thống giải pháp tài
          chính toàn diện, giúp nhà lãnh đạo tối ưu hóa nguồn lực và giảm thiểu rủi ro vận
          hành.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-8">
          {contents.map((el) => {
            return (
              <div class="flex flex-col gap-2">
                <h4 class="text-lg font-bold">{el.title}</h4>
                <ul class="list-inside list-disc">
                  {el.items.map((el) => {
                    return (
                      <li>
                        <span class="font-semibold">{el.title}: </span> {el.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <img src="/images/service-1.png" alt="Medical Service" />
        </div>
      </div>
    </div>
  );
};

const Lifestyle = () => {
  const contents = [
    {
      title: "Thể thao Thượng lưu: Bản lĩnh trên mọi mặt trận",
      items: [
        {
          title: "Đặc quyền Golf & Pickleball",
          description:
            "Được ưu tiên đặt chỗ (booking) tại các câu lạc bộ Golf danh tiếng và hệ thống sân Pickleball chuyên nghiệp ngay cả trong những khung giờ cao điểm.",
        },
        {
          title: "Dịch vụ cao cấp",
          description:
            "Tận hưởng các tiện ích đi kèm chuẩn VVIP, giúp mỗi trận đấu không chỉ là thể thao mà còn là không gian giao lưu chiến lược với những đối tác cùng đẳng cấp.",
        },
      ],
    },
    {
      title: "Mua sắm & Du lịch: Đặc quyền chạm tới tinh hoa",
      items: [
        {
          title: "Mạng lưới TTTM & Siêu thị",
          description:
            "Tiếp cận các ưu đãi độc bản và quy trình phục vụ ưu tiên tại các trung tâm thương mại và hệ thống siêu thị trong mạng lưới đối tác của VDG.",
        },
        {
          title: "Nghỉ dưỡng 5 sao toàn cầu",
          description:
            "Đặc quyền tại các chuỗi khách sạn và nhà hàng 5 sao quốc tế, nơi mỗi bữa ăn Fine Dining hay mỗi kỳ nghỉ đều được cá nhân hóa để mang lại sự thăng hoa trong cảm xúc.",
        },
        {
          title: "Trợ lý Lifestyle 1-1",
          description:
            "Đội ngũ trợ lý riêng luôn sẵn sàng tư vấn và thiết kế các hành trình trải nghiệm độc bản theo yêu cầu riêng của hội viên.",
        },
      ],
    },
  ];

  return (
    <div class="flex flex-col gap-8">
      <div class="mx-auto flex max-w-[70%] flex-col gap-4 text-center">
        <h3 class="text-2xl font-bold">LIFESTYLE EXCLUSIVE - TẬN HƯỞNG ĐẲNG CẤP</h3>
        <p>
          Vị thế của nhà lãnh đạo không chỉ thể hiện qua những thành công trên thương
          trường mà còn được khẳng định qua cách họ tận hưởng cuộc sống. CEO Link mang đến
          một hệ sinh thái trải nghiệm tinh hoa, nơi mọi nhu cầu giải trí, mua sắm và nghỉ
          dưỡng đều được tinh tuyển để phản ánh đúng tầm vóc của bạn.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div>
          <img src="/images/service-1.png" alt="Medical Service" />
        </div>
        <div class="flex flex-col gap-8">
          {contents.map((el) => {
            return (
              <div class="flex flex-col gap-2">
                <h4 class="text-lg font-bold">{el.title}</h4>
                <ul class="list-inside list-disc">
                  {el.items.map((el) => {
                    return (
                      <li>
                        <span class="font-semibold">{el.title}: </span> {el.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Legal = () => {
  const contents = [
    {
      title: "Tư vấn Pháp lý Chiến lược: Minh bạch và An toàn",
      items: [
        {
          title: "Xử lý hồ sơ chuyên sâu",
          description:
            "Hỗ trợ rà soát hợp đồng, tư vấn các vấn đề về quản trị doanh nghiệp và giải quyết các tranh chấp pháp lý phát sinh trong quá trình vận hành.",
        },
        {
          title: "Kết nối chuyên gia",
          description:
            "Trợ lý riêng giúp bạn tiếp cận nhanh chóng với các luật sư và chuyên gia pháp lý đầu ngành để nhận được những giải pháp tối ưu và bảo mật nhất.",
        },
      ],
    },
    {
      title: "Hỗ trợ Lao động: Tối ưu hóa bộ máy nhân sự",
      items: [
        {
          title: "Chiến lược nhân sự bền vững",
          description:
            "Cung cấp các gói tư vấn về quan hệ lao động, giúp doanh nghiệp xây dựng môi trường làm việc chuyên nghiệp và tuân thủ đúng các quy định hiện hành.",
        },
        {
          title: "Quản trị rủi ro nhân lực",
          description:
            "Hỗ trợ giải quyết các vấn đề liên quan đến chính sách lao động, bảo hiểm và tối ưu hóa chi phí nhân sự cho doanh nghiệp.",
        },
      ],
    },
  ];

  return (
    <div class="flex flex-col gap-8">
      <div class="mx-auto flex max-w-[70%] flex-col gap-4 text-center">
        <h3 class="text-2xl font-bold">NHÂN SỰ & PHÁP LÝ VỮNG CHẮC CHO SỰ PHÁT TRIỂN</h3>
        <p>
          Một doanh nghiệp vươn tầm không thể thiếu một nền tảng quản trị nội bộ vững
          vàng. CEO Link cung cấp đội ngũ chuyên gia và cố vấn chiến lược để giúp bạn xử
          lý các vấn đề nội tại, từ đó giải phóng tâm trí nhà lãnh đạo khỏi những rủi ro
          pháp lý và nhân sự phức tạp.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-8">
          {contents.map((el) => {
            return (
              <div class="flex flex-col gap-2">
                <h4 class="text-lg font-bold">{el.title}</h4>
                <ul class="list-inside list-disc">
                  {el.items.map((el) => {
                    return (
                      <li>
                        <span class="font-semibold">{el.title}: </span> {el.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <img src="/images/service-1.png" alt="Medical Service" />
        </div>
      </div>
    </div>
  );
};

const Promotion = () => {
  return (
    <div class="bg-primary py-12">
      <div class="container mx-auto flex max-w-[60%] flex-col gap-4">
        <p class="text-center text-white">
          CEO Link được xây dựng để trở thành "điểm tựa" vững chắc, giúp nhà lãnh đạo mua
          lại thời gian và mở khóa những cánh cửa giao thương tiềm năng nhất. Dành 2 phút
          để lựa chọn lộ trình phù hợp và bắt đầu trải nghiệm hệ sinh thái kinh doanh
          riêng tư của chúng tôi.
        </p>
        <Button
          style="--primary: 0 0% 98%; --primary-foreground: 240 5.9% 10%;"
          class="self-center px-12 uppercase"
        >
          <A href={routes.registerMember.href}>Gia nhập hệ sinh thái CEO LINK</A>
        </Button>
      </div>
    </div>
  );
};

export default Service;
