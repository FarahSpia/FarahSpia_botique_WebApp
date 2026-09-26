import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
  return (
    <div dir="rtl" className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="w-full max-w-[1530px] mx-auto flex-1 border">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};