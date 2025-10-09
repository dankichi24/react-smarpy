import type { Meta, StoryObj } from "@storybook/react-vite";

import Admin from "./Admin";
import Smarpy from "../../base/Smarpy";
import AdminSidebar from "../AdminSidebar";
import AdminMain from "../AdminMain";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layouts/Admin",
  component: Admin,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Admin>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <Admin {...props}>
        <AdminSidebar
          back={{ color: { default: { name: "blue", lightness: 500 } } }}
        >
          {"AdminSidebar"}
        </AdminSidebar>
        <AdminMain>{"AdminMain"}</AdminMain>
      </Admin>
    </Smarpy>
  ),
};
