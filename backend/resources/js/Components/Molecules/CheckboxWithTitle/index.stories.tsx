import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import CheckboxWithTitle from "./index";

type T = typeof CheckboxWithTitle;
type Story = ComponentStoryObj<T>;

export const argsData: ComponentPropsWithoutRef<T> = {
  labelProps: { children: <>お名前</> },
  checkboxProps: {}
};

export default {
  component: CheckboxWithTitle,
  args: argsData,
  excludeStories: /.*Data$/,
} as ComponentMeta<T>;

export const Default: Story = {};

export const HasError: Story = {
  args: { error: "入力エラーがあります" },
};
