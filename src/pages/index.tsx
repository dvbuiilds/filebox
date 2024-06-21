// COMPONENTS
import { Navbar } from "@f-box/components/Navbar";
import { Sidebar, SidebarItem } from "@f-box/components";
import { CommonDisplay } from "@f-box/components/CommonDisplay";

// ICONS
import { MdOutlineBackup } from "react-icons/md";

export default function Home() {
  return (
    <section className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-grow overflow-hidden">
        <Sidebar>
          <SidebarItem
            label="Backed-Up Files"
            icon={<MdOutlineBackup />}
            isActive={true}
          />
        </Sidebar>
        <CommonDisplay />
      </div>
    </section>
  );
}
