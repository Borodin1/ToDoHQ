import { Link} from "react-router-dom";
import { links } from "./mock";
import { useNavbar } from './useNavbar';

export const Navbar: React.FC = () => {
const {location,user,handleLogout} = useNavbar()
  return (
    <div className="bg-[#FF6767] min-h-screen w-[365px] text-white p-6 mt-14 rounded-[8px]">
      <div className="mb-6">
        <h2 className="text-[16px] font-bold">{`${user?.firstName} ${user?.lastName}`}</h2>
        <p className="text-xs opacity-80">{user?.email}</p>
      </div>

      <nav className="flex flex-col">
        <ul className="flex flex-col gap-5">
          {links.map(({ id, name, icon: Icon, path }) => {
            const isActive = location.pathname === path;

            return (
              <li
                key={id}
                className={`flex items-center gap-3 last:mt-32 p-3 ${
                  isActive ? " bg-white text-[#FF6767] rounded-2xl" : ""
                }`}>
                {path ? (
                  <Link
                    to={path}
                    className={`flex items-center gap-3 hover:opacity-80`}>
                    <Icon className={`${isActive ? "text-[#FF6767]" : " "}`} />
                    <span>{name}</span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 cursor-pointer"
                  onClick={handleLogout}>
                    <Icon className={`${isActive ? "fill-[#FF6767]" : " "}`} />
                    <span>{name}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
