import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import CheckBox from "./index";

type T = typeof CheckBox;
type Story = ComponentStoryObj<T>;

export default {
  component: CheckBox,
} as ComponentMeta<T>;

export const Default: Story = {};
