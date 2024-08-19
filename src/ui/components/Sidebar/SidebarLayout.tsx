import { SideBarLayoutProps } from "../../interfaces";
import { Sidebar } from "./SideBar";



export const SidebarLayout = ({ children }: SideBarLayoutProps) => {
  return (
    <section className="w-full">
      <div className="px-4 md:container md:mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="
            col-span-2
            xs:hidden
            sm:hidden
            md:col-span-2
            md:block 
            lg:block 
            2xl:block">
            <Sidebar />
          </div>
          <div className="
                col-span-12
                md:col-span-9
                lg:col-span-9 
                xl:col-span-9 
                2xl:col-span-9
                pt-10"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
