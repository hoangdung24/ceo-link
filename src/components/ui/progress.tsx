import type { Component, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as ProgressPrimitive from "@kobalte/core/progress";

import { Label } from "~/components/ui/label";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const progressVariants = cva("", {
  variants: {
    size: {
      default: "h-2",
      lg: "h-4",
      xl: "h-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type ProgressRootProps<T extends ValidComponent = "div"> =
  ProgressPrimitive.ProgressRootProps<T> & {
    children?: JSX.Element;
    size?: "default" | "lg" | "xl";
  };

const Progress = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ProgressRootProps<T>>
) => {
  const [local, others] = splitProps(props as ProgressRootProps, ["children", "size"]);
  return (
    <ProgressPrimitive.Root {...others}>
      {local.children}
      <ProgressPrimitive.Track
        class={cn(
          "relative h-2 w-full overflow-hidden bg-secondary",
          progressVariants({ size: local.size })
        )}
      >
        <ProgressPrimitive.Fill class="h-full w-[var(--kb-progress-fill-width)] flex-1 bg-primary transition-all" />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
};

const ProgressLabel: Component<ProgressPrimitive.ProgressLabelProps> = (props) => {
  return <ProgressPrimitive.Label as={Label} {...props} />;
};

const ProgressValueLabel: Component<ProgressPrimitive.ProgressValueLabelProps> = (
  props
) => {
  return <ProgressPrimitive.ValueLabel as={Label} {...props} />;
};

export { Progress, ProgressLabel, ProgressValueLabel };
