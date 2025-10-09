import type { Meta, StoryObj } from "@storybook/react-vite";

import Gingham from "./Gingham";
import Smarpy from "../../base/Smarpy";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Gingham",
  component: Gingham,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Gingham>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: "gray",
  },
  render: (props) => (
    <Smarpy>
      <Gingham {...props} style={{ aspectRatio: "16/9", width: "100%" }}>
        <span>{"Plain"}</span>
      </Gingham>
    </Smarpy>
  ),
};
