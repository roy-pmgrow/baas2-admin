import adminApi from "apis/admin";
import Link from "next/link";
import { useEffect, useState } from "react";

const Menus = () => {
  const activeMenus = [
    "/web/mgr/MngCarBalance/mngCarDriveHistListForm",
    "/web/mgr/sys/mngUser",
    "/web/mgr/chger/mngRechargeFee",
  ];
  const [menus, setMenus] = useState([]);

  const getMenuList = async (userId) => {
    const { menuList } = await adminApi.getMenuList(userId);
    menuList = menuList.map((menu) => {
      const { menuLevel, path } = menu;
      if (menuLevel !== "1") {
        menu.path = `/web${path.replace(".do", "")}`;
      }
      return menu;
    });
    setMenus(menuList);
  };

  useEffect(() => {
    getMenuList("admin");
  }, []);

  return (
    <ul className="min-w-[12rem] space-y-[0.5rem] max-h-screen overflow-y-auto px-5 py-5">
      {menus.map(({ menuId, menuNm, menuLevel, path }) =>
        menuLevel === "1" ? (
          <div key={menuId}>
            <p dangerouslySetInnerHTML={{ __html: path }}></p>
            <li className={`ml-[${menuLevel}rem]`}>{menuNm}</li>
          </div>
        ) : activeMenus.includes(path) ? (
          <Link key={menuId} href={path}>
            <a>
              <li className={`ml-[2rem] mt-[0.5rem] text-green-500`}>{menuNm}</li>
            </a>
          </Link>
        ) : (
          <li key={menuId} className={`ml-[2rem]`}>
            {menuNm}
          </li>
        ),
      )}
    </ul>
  );
};

export default Menus;
