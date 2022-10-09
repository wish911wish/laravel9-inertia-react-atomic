import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Txt, {InfoTxt, WarningTxt} from "./index";

type T = typeof Txt;
type Story = ComponentStoryObj<T>;

export default {
  component: Txt,
  args: { children: "テキストを表示" },
} as ComponentMeta<T>;

export const Default: Story = {};
export const DefaultSmall = () => <Txt size="s">テキストを表示</Txt>;
export const DefaultfMedium = () => <Txt size="m">テキストを表示</Txt>;
export const DefaultfLarge = () => <Txt size="l">テキストを表示</Txt>;
export const InfoSmall = () => <InfoTxt size="s">テキストを表示</InfoTxt>;
export const InfoMedium = () => <InfoTxt size="m">テキストを表示</InfoTxt>;
export const InfoLarge = () => <InfoTxt size="l">テキストを表示</InfoTxt>;
export const WarningSmall = () => <WarningTxt size="s">テキストを表示</WarningTxt>;
export const WarningMedium = () => <WarningTxt size="m">テキストを表示</WarningTxt>;
export const WarningLarge = () => <WarningTxt size="l">テキストを表示</WarningTxt>;
