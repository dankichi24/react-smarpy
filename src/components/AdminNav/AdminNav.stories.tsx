import type { Meta, StoryObj } from "@storybook/react-vite";

import Smarpy from "../../base/Smarpy";
import AdminNav from "./AdminNav";
import Admin from "../../layouts/Admin";
import AdminSidebar from "../../layouts/AdminSidebar";
import AdminMain from "../../layouts/AdminMain";
import AdminNavBrand from "../AdminNavBrand";
import AdminNavMenu from "../AdminNavMenu";
import AdminNavMenuItem from "../AdminNavMenuItem";
import AdminNavMenuItemBasic from "../AdminNavMenuItemBasic";
import AdminNavBrandCollapted from "../AdminNavBrandCollapted";
import AdminNavBrandBasic from "../AdminNavBrandBasic";
import AdminNavMenuItemCollapted from "../AdminNavMenuItemCollapted";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/AdminNav",
  component: AdminNav,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AdminNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <Admin>
        <AdminSidebar>
          <AdminNav {...props}>
            <AdminNavBrand>
              <AdminNavBrandCollapted>{"s"}</AdminNavBrandCollapted>
              <AdminNavBrandBasic>{"smarpy"}</AdminNavBrandBasic>
            </AdminNavBrand>
            <AdminNavMenu>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapted>{"M1"}</AdminNavMenuItemCollapted>
                <AdminNavMenuItemBasic>{"Menu 1"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapted>{"M2"}</AdminNavMenuItemCollapted>
                <AdminNavMenuItemBasic>{"Menu 2"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapted>{"M3"}</AdminNavMenuItemCollapted>
                <AdminNavMenuItemBasic>{"Menu 3"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapted>{"M4"}</AdminNavMenuItemCollapted>
                <AdminNavMenuItemBasic>{"Menu 4"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
            </AdminNavMenu>
          </AdminNav>
        </AdminSidebar>
        <AdminMain></AdminMain>
      </Admin>
    </Smarpy>
  ),
};

export const IsSidebarCollapted: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <Admin isSidebarCollapse={true}>
        <AdminSidebar>
          <AdminNav {...props}>
            <AdminNavBrand>
              <AdminNavBrandCollapted>{"s"}</AdminNavBrandCollapted>
              <AdminNavBrandBasic>{"smarpy"}</AdminNavBrandBasic>
            </AdminNavBrand>
            <AdminNavMenu>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapted>{"M1"}</AdminNavMenuItemCollapted>
                <AdminNavMenuItemBasic>{"Menu 1"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapted>{"M2"}</AdminNavMenuItemCollapted>
                <AdminNavMenuItemBasic>{"Menu 2"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapted>{"M3"}</AdminNavMenuItemCollapted>
                <AdminNavMenuItemBasic>{"Menu 3"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapted>{"M4"}</AdminNavMenuItemCollapted>
                <AdminNavMenuItemBasic>{"Menu 4"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
            </AdminNavMenu>
          </AdminNav>
        </AdminSidebar>
        <AdminMain></AdminMain>
      </Admin>
    </Smarpy>
  ),
};
