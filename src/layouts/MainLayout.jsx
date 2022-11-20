import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center"> */}
      <main className="container mx-auto md:grid mt-12 gap-10 p-5 items-center">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
