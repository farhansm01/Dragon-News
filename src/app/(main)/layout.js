import BreakingNews from "@/component/BreakingNews";

const { default: Header } = require("@/component/Header");
const { default: Navbar } = require("@/component/Navbar");

const mainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BreakingNews/>
      <Navbar />
      {children}
    </>
  );
};

export default mainLayout;
