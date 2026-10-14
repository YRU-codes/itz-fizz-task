import { User } from "lucide-react";

const Header = () => {
  return (
    <nav className="w-full h-15 flex items-center justify-between px-10">
      <div className="cursor-pointer">
        <h2 className="font-bold text-xl text-gray-600 uppercase tracking-tighter transition-all hover:scale-105 duration-300">
          Itz<span className="text-cyan-400 text-2xl">.</span>fizz
        </h2>
      </div>
      <ul className="flex justify-around items-center gap-8">
        <li className="cursor-pointer transition-all hover:text-[#3f3a45] hover:scale-110 duration-300">
          Home
        </li>
        <li className="cursor-pointer transition-all hover:text-[#3f3a45] hover:scale-110 duration-300">
          Products
        </li>
        <li className="cursor-pointer transition-all hover:text-[#3f3a45] hover:scale-110 duration-300">
          About
        </li>
      </ul>
      <div>
        <User
          size={35}
          className="cursor-pointer transition-all hover:text-[#3f3a45] hover:scale-105"
        />
      </div>
    </nav>
  );
};

export default Header;
