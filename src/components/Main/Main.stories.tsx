import type { Meta, StoryObj } from "@storybook/react-vite";

import Main from "./Main";
import Smarpy from "../../base/Smarpy";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Main",
  component: Main,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <Smarpy>
      <Main {...props}>
        <span>{"Plain"}</span>
      </Main>
    </Smarpy>
  ),
};
