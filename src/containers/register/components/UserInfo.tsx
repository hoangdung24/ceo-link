import { clientOnly } from "@solidjs/start";
import { children, ComponentProps, createSignal, For, Suspense } from "solid-js";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemLabel,
} from "~/components/ui/radio-group";

import { TextField, TextFieldInput, TextFieldLabel } from "~/components/ui/text-field";

import { formatPhoneNumber } from "~/lib/formatter";

const DatePicker = clientOnly(() => import("~/components/user-defined/DatePicker"));

const UserInfo = () => {
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

  const [phoneNumber, setPhoneNumber] = createSignal("");

  return (
    <div class="border">
      <div class="bg-primary p-4 text-white">
        <h3 class="uppercase">Thông tin cá nhân</h3>
      </div>
      <div class="flex flex-col gap-4 p-4">
        <TextField>
          <FormItem>
            <TextFieldLabel class="" for="fullName">
              Họ và tên:
            </TextFieldLabel>
            <TextFieldInput type="text" id="fullName" placeholder="Họ và tên" />
          </FormItem>
        </TextField>
        <div class="grid grid-cols-2 items-center gap-4">
          <TextField>
            <FormItem>
              <TextFieldLabel for="gender">Giới tính:</TextFieldLabel>
              <RadioGroup defaultValue="Nam" id="gender">
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
            </FormItem>
          </TextField>
          <TextField>
            <FormItem>
              <TextFieldLabel for="gender">Ngày sinh:</TextFieldLabel>
              <DatePicker
                onValueChange={(props) => {
                  console.log("🚀 ~ UserInfo ~ props:", props.value);
                }}
              />
            </FormItem>
          </TextField>
        </div>
        <TextField
          onChange={(value) => {
            setPhoneNumber("");
            setPhoneNumber(formatPhoneNumber(value));
          }}
          value={phoneNumber()}
        >
          <FormItem>
            <TextFieldLabel class="" for="phoneNumber">
              Số điện thoại:
            </TextFieldLabel>
            <TextFieldInput type="text" id="phoneNumber" placeholder="Số điện thoại" />
          </FormItem>
        </TextField>
        <TextField>
          <FormItem>
            <div class="flex flex-col gap-1">
              <TextFieldLabel class="" for="email">
                Email:
              </TextFieldLabel>
              <p class="text-sm italic">(Email doanh nghiệp)</p>
            </div>
            <TextFieldInput type="email" id="email" placeholder="Email" />
          </FormItem>
        </TextField>
        <TextField>
          <FormItem>
            <TextFieldLabel class="" for="position">
              Chức danh:
            </TextFieldLabel>
            <TextFieldInput type="text" id="position" placeholder="Chức danh" />
          </FormItem>
        </TextField>
      </div>
    </div>
  );
};

const FormItem = (props: ComponentProps<any>) => {
  const resolved = children(() => props.children);

  return (
    <div class="grid grid-cols-[150px_1fr] items-center gap-2">
      {resolved.toArray().map((el, idx) => {
        return el;
      })}
    </div>
  );

  // return <div class="grid grid-cols-3">{props.children}</div>;
};

export default UserInfo;
