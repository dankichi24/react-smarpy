import type { Meta, StoryObj } from "@storybook/react-vite";

import Checkbox from "./Checkbox";
import Smarpy from "../../base/Smarpy";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    text: {
      type: "string",
    }
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    id: "test",
    colorName: undefined,
  },
  render: (props) => (
    <Smarpy>
      <Checkbox {...props} />
    </Smarpy>
  ),
};
