import { User } from "lucide-react"

const Header = () => {
  return (
      <nav className="w-full h-15 flex items-center justify-between px-5">
        <div>
          Logo
        </div>
        <ul className="flex justify-around gap-5">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
        <div>
          <User size={35}/>
        </div>
      </nav>
  )
}

export default Header
