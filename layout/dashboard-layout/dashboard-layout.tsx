import Sidebar from "@components/sidebar/sidebar";
import useLogout from "@hooks/useLogout";
import useStore, { userDataAtom } from "@hooks/useStore";

export default function DashboardLayout({ children }: any) {
  return (
    <div
      className={`header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed`}
    >
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <Sidebar />
          <div className="wrapper d-flex flex-column flex-row-fluid">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
