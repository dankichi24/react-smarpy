import type { Meta, StoryObj } from "@storybook/react-vite";

import Paragraph from "./Paragraph";
import Smarpy from "../../base/Smarpy";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <Smarpy>
      <Paragraph {...props}>
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
      </Paragraph>
      <Paragraph {...props}>
        {"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </Paragraph>
    </Smarpy>
  ),
};
