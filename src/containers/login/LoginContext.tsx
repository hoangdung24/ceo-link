import {
  Accessor,
  ComponentProps,
  createContext,
  createSignal,
  ParentProps,
  useContext,
} from "solid-js";

export const LoginContext = createContext<{
  step: Accessor<number>;
  onChangeStep: (step: number) => void;
  onRegister: () => void;
}>({} as any);

export const LoginProvider = (props: ParentProps) => {
  const [step, setStep] = createSignal(1);

  return (
    <LoginContext.Provider
      value={{
        step,
        onChangeStep: setStep,
        onRegister: () => {
          setStep(3);
        },
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export function useLogin() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }

  return context;
}
