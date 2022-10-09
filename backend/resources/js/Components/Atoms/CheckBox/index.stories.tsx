import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Checkbox from "./index";

type T = typeof Checkbox;
type Story = ComponentStoryObj<T>;

export default {
  component: Checkbox,
} as ComponentMeta<T>;

export const Default: Story = {};
