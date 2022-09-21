import Cartwidget from "./Cartwidget";

export const NavBar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">
              Centro de bebidas
            </a>
          </div>
          <div className="flex-none">
            <Cartwidget />
          </div>
        </div>
      </div>
    </>
  );
};
