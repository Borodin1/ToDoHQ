import { Link } from "react-router-dom";
import { links } from "./mock";
import { useNavbar } from "./useNavbar";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { location, user, handleLogout, toggleMenu, isOpen } = useNavbar();

  const renderLinks = () => (
    <ul className="flex flex-col gap-5">
      {links.map(({ id, name, icon: Icon, path }) => {
        const isActive = location.pathname === path;

        return (
          <li
            key={id}
            className={`flex items-center gap-3 p-3 ${
              isActive ? "dark:bg-[#2C2C3E] bg-white text-[#FF6767] rounded-2xl" : ""
            }`}
          >
            {path ? (
              <Link
                to={path}
                onClick={() => isOpen && toggleMenu()}
                className="flex items-center gap-3 hover:opacity-80"
              >
                <Icon className={isActive ? "text-[#FF6767]" : ""} />
                <span className="max-sm:hidden">{name}</span>
              </Link>
            ) : (
              <div
                onClick={() => {
                  handleLogout();
                  if (isOpen) toggleMenu();
                }}
                className="flex items-center gap-3 cursor-pointer mt-10"
              >
                <Icon className={isActive ? "dark:fill-[#FF6A6A] fill-[#FF6767]" : ""} />
                <span className="max-sm:hidden">{name}</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="sm:hidden fixed top-4 left-4 z-50 bg-[#FF6767] text-white p-2 rounded"
        >
          ☰
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/30 z-30 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration:0.4,ease:'easeInOut' }}
              className="fixed top-25 left-0 z-40 bg-[#FF6767] min-h-screen w-[250px] max-sm:w-[100px] text-white p-6 rounded-r-lg sm:hidden"
            >
              <div className="mb-6">
                <h2 className="text-[16px] font-bold max-sm:hidden">{`${user?.firstName} ${user?.lastName}`}</h2>
                <p className="text-xs opacity-80 max-sm:hidden">{user?.email}</p>
              </div>
              <nav>{renderLinks()}</nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="hidden sm:block dark:bg-[#1E1E2F] bg-[#FF6767] min-h-screen w-[250px] text-white p-6 rounded-lg mt-5" >
        <div className="mb-6">
          <h2 className="text-[16px] font-bold">{`${user?.firstName} ${user?.lastName}`}</h2>
          <p className="text-xs opacity-80">{user?.email}</p>
        </div>
        <nav>{renderLinks()}</nav>
      </div>
    </>
  );
};
