import Navbar from "@/component/Navbar";
import { montserrat } from "../layout";

export default function authLayout({children}) {

  return (
      <div className={`${montserrat.className}`}>
        <Navbar/>
        {children}
      </div>
    )
  }

