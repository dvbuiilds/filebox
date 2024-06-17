import { Inter } from "next/font/google";
import { Navbar } from "@f-box/components/Navbar";
import { Sidebar, SidebarItem } from "@f-box/components";
import { MdOutlineBackup } from "react-icons/md";
import { CommonDisplay } from "@f-box/components/CommonDisplay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <section>
        <Navbar />
      </section>
      <section className="flex flex-row items-start overflow-hidden">
        <Sidebar>
          <SidebarItem
            label="Backed-Up Files"
            icon={<MdOutlineBackup />}
            isActive={true}
          />
        </Sidebar>
        <CommonDisplay />
      </section>
    </section>
  );
}
