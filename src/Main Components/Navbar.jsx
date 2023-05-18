import { useState } from "react";

import { UserPlusIcon, FingerPrintIcon } from "@heroicons/react/24/outline";

import Nav from "./Sub Components/Navbar/Nav";
import DialogMobile from "./Sub Components/Navbar/DialogMobile";

const products = [
  {
    name: "Log in",
    description: "ready to write?",
    link: "/loginpageform",
    icon: FingerPrintIcon,
  },
  {
    name: "Sign Up",
    description: "Join with us",
    link: "/signuppageform",
    icon: UserPlusIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 min-h-fit sticky top-0 z-50">
      <Nav setMobileMenuOpen={setMobileMenuOpen} products={products} />
      <DialogMobile
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        classNames={classNames}
        products={products}
      />
    </header>
  );
}
