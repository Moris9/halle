import {useEffect, useState} from "react";
import Navbar from "../components/navbar/index.jsx";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer/Footer.jsx";
import {useMediaQuery} from "react-responsive";
export default function Admin({children , currentRoute}) {
    const [open, setOpen] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: 400 });
    const closeSidebar = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (isMobile) {
            closeSidebar();
        }
    }, [isMobile]);

    const openSidebar=()=>{
        setOpen(!open);
    }

  return (
      <div className="flex h-full w-full" dir="rtl">
          <Sidebar open={open} onClose={closeSidebar} />
          {/* Navbar & Main Content */}
          <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
              {/* Main Content */}
              <main
                  className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:mr-[313px]`}
              >
                  {/* Routes */}
                  <div className="h-full">
                      <Navbar
                          onOpenSidenav={openSidebar}
                          logoText={"خدمت از ما"}
                          brandText={currentRoute}
                      />
                      <main className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2 mt-10">{children}</main>
                      <div className="p-3">
                          <Footer />
                      </div>
                  </div>
              </main>
          </div>
      </div>
  );
}
