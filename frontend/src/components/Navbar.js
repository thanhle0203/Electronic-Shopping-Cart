import './Navbar.css';
import 

const Navbar = () => {
  return (
    <nav className='navbar' >
      {/* logo */}
      <div className='navbar_logo'>
        <h2>Electronic Shopping Cart</h2>
      </div>

      {/* links */}
        <ul className='navbar_links'>
          <li>
            <Link to="/cart">
              
            </Link>
          </li>
        </ul>
      {/* hamburger menu */}
    </nav>
  )
}

export default Navbar;