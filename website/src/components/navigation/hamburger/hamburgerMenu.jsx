import { useState } from "react";
import { MenuIcon } from "../../../icons/menu";
import Text from "../../text/text.jsx";

export const HamburgerMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        aria-expanded={isOpen ? "true" : "false"}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={`cursor-pointer font-family-primary flex gap-2 h-full justify-center items-center transition-all hover:bg-green-400 px-inline-padding ${isOpen ? "bg-green-400" : ""}`}
        onClick={toggleMenu}
      >
        Meny
        <MenuIcon />
      </button>

      <nav
        aria-hidden={isOpen ? "false" : "true"}
        className={`absolute z-50 right-0 top-20 size-dvw justify-end flex gap-4 bg-gradient-to-r from-green-400/40 to-green-700/50 ${isOpen ? "block" : "hidden"}`}
      >
        <menu className="w-full max-w-162 bg-white py-8 border-t border-green-700/50">
          {items.map((item, key) => (
            <li
              className="group flex px-inline-padding flex-col after:border-b after:border-b-gray-300"
              key={key}
            >
              <a
                {...(item.openInNewTab
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                href={item.slug}
                className="p-4 hover:underline focus:underline transition-all w-full"
              >
                <Text as="span" className="block">
                  {item.label}
                </Text>
              </a>
            </li>
          ))}
        </menu>
      </nav>
    </>
  );
};
