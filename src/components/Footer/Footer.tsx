import { NavLink } from 'react-router';
import { HeaderNavLinks } from '../../enums/HeaderNavLinks';
import facebook_icon from '../../assets/shared/desktop/icon-facebook.svg';
import twitter_icon from '../../assets/shared/desktop/icon-twitter.svg';
import instagram_icon from '../../assets/shared/desktop/icon-instagram.svg';

export const Footer = () => {
  const navLinksArray = Object.entries(HeaderNavLinks);

  return (
    <footer className="relative bg-black text-white flex-column-center gap-[48px] pt-[52px] pb-[38px] px-[24px] bottom-0">
      <div className="orange-line"></div>

      <p className="lowercase font-[900] text-2xl">Audiophile</p>

      <nav className="">
        <ul className="flex-column-center gap-[16px] ">
          {navLinksArray.map(link => {
            const [title, path] = link;

            return (
              <li className="sub-title text-white-true" key={title}>
                <NavLink to={path}>{title.toUpperCase()}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className="text-center opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p className="font-bold opacity-50">
        Copyright 2021. All Rights Reserved
      </p>

      <div className="flex gap-4">
        <button>
          <img src={facebook_icon} alt="facebook" />
        </button>

        <button>
          <img src={twitter_icon} alt="twitter" />
        </button>

        <button>
          <img src={instagram_icon} alt="instagram" />
        </button>
      </div>
    </footer>
  );
};
