import { NavLink } from 'react-router';
import { HeaderNavLinks } from '../../enums/HeaderNavLinks';

export const Header = () => {
  const navLinksArray = Object.entries(HeaderNavLinks);

  return (
    <header className="flex px-10 justify-between items-center h-[90px] desktop:h-[97px] bg-black text-white">
      <button className="burger-menu"></button>

      <p className='lowercase font-[900] text-2xl'>Audiophile</p>

      <nav className='hidden'>
        <ul className="flex gap-nav-gap-space">
          {navLinksArray.map(link => {
            const [title, path] = link;

            return (
              <li key={title}>
                <NavLink to={path}>{title.toUpperCase()}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <button className="cart-icon"></button>
    </header>
  );
};
