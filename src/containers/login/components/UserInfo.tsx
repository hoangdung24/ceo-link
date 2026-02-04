import { clientOnly } from "@solidjs/start";
import { children, ComponentProps, createSignal, For } from "solid-js";
import { Button } from "~/components/ui/button";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemLabel,
} from "~/components/ui/radio-group";

import { TextField, TextFieldInput, TextFieldLabel } from "~/components/ui/text-field";

import { formatPhoneNumber } from "~/lib/formatter";
import { useLogin } from "../LoginContext";

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

  const context = useLogin();

  const onNext = () => {
    context.onChangeStep(2);
  };

  return (
    <div class="flex flex-col gap-4">
      <div class="grid grid-cols-2 gap-2">
        <TextField>
          <TextFieldLabel for="lastName">Họ:</TextFieldLabel>
          <TextFieldInput type="text" id="lastName" placeholder="Họ" />
        </TextField>
        <TextField>
          <TextFieldLabel for="firstName">Tên:</TextFieldLabel>
          <TextFieldInput type="text" id="firstName" placeholder="Tên" />
        </TextField>
      </div>
      <TextField>
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
        <DatePicker
          onValueChange={(props) => {
            console.log("🚀 ~ UserInfo ~ props:", props.value);
          }}
        />
      </TextField>
      <TextField
        onChange={(value) => {
          setPhoneNumber("");
          setPhoneNumber(formatPhoneNumber(value));
        }}
        value={phoneNumber()}
      >
        <TextFieldLabel for="phoneNumber">Số điện thoại:</TextFieldLabel>
        <TextFieldInput type="text" id="phoneNumber" placeholder="Số điện thoại" />
      </TextField>
      <TextField>
        <TextFieldLabel for="email">
          Email <span class="text-sm italic">(doanh nghiệp)</span>:
        </TextFieldLabel>
        <TextFieldInput type="email" id="email" placeholder="Email" />
      </TextField>
      <TextField>
        <TextFieldLabel for="position">Chức danh:</TextFieldLabel>
        <TextFieldInput type="text" id="position" placeholder="Chức danh" />
      </TextField>
      <div class="grid grid-cols-2 gap-2">
        <Button disabled>Quay lại</Button>
        <Button onClick={onNext}>Tiếp tục</Button>
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
