import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Heading, HeadingUnderlined, HeadingOutlined } from './index'

type T = typeof Heading
type Story = ComponentStoryObj<T>

export default {
  component: Heading,
  args: { children: 'テキストを表示' },
} as ComponentMeta<T>

export const Default: Story = {}
export const DefaultLevel1 = () => <Heading level={1}>見出しレベル1</Heading>
export const DefaultLevel2 = () => <Heading level={2}>見出しレベル2</Heading>
export const DefaultLevel3 = () => <Heading level={3}>見出しレベル3</Heading>
export const DefaultLevel4 = () => <Heading level={4}>見出しレベル4</Heading>
export const DefaultLevel5 = () => <Heading level={5}>見出しレベル5</Heading>
export const DefaultLevel6 = () => <Heading level={6}>見出しレベル6</Heading>
export const UnderlinedLevel1 = () => <HeadingUnderlined level={1}>見出しレベル1下線付き</HeadingUnderlined>
export const OutlinedLevel1 = () => (
  <div style={{ backgroundColor: 'black' }}>
    <HeadingOutlined level={1}>白抜きレベル1下線付き</HeadingOutlined>
  </div>
)
