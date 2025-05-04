"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Container from "./max-w-container/Container";
import MobileNav from "@/components/shared/MobileNav";
import DropdownMenu from "../navBar/DropdownMenu";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "@/Hook/useCart";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

// Types
interface NavItem {
  label: string;
  href?: string;
  icon: string;
  subItems?: SubItem[];
}
interface SubItem {
  label: string;
  href: string;
  icon: string;
}

// Nav items
const allNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: "🏡" },
  { label: "Shop", href: "/marketplace", icon: "🛒" },
  {
    label: "Resources",
    icon: "▼",
    subItems: [
      { label: "Guides & Tutorials", href: "/resources/guides", icon: "📚" },
      { label: "Government Schemes", href: "/resources/schemes", icon: "🏛️" },
    ],
  },
  {
    label: "Tools",
    icon: "▼",
    subItems: [
      {
        label: "Pest/Disease Detector",
        href: "/tools/pest-detector",
        icon: "🐞",
      },
    ],
  },
  {
    label: "Community",
    icon: "▼",
    subItems: [
      { label: "Farmer Forum", href: "/community/forum", icon: "🗣️" },
      { label: "Local Events", href: "/community/events", icon: "📅" },
      { label: "Cooperative Groups", href: "/community/groups", icon: "👥" },
    ],
  },
  // { label: "Farmers", href: "/farmer", icon: "👨‍🌾" },
  { label: "Services", href: "/services", icon: "🛠️" },
  { label: "Contact", href: "/contact", icon: "☎️" },
];

// NavItems Component
const NavItems = ({
  isMobile = false,
  role,
}: {
  isMobile?: boolean;
  role?: string;
}) => {
  const filteredNavItems = allNavItems.filter((item) => {
    if (["Resources", "Tools", "Community"].includes(item.label)) {
      return role === "farmer";
    }
    return true;
  });

  return (
    <ul
      className={isMobile ? "space-y-4" : "lg:flex hidden gap-6 items-center"}
    >
      {filteredNavItems.map((item) =>
        item.subItems ? (
          <li key={item.label}>
            <DropdownMenu item={item} />
          </li>
        ) : (
          <li key={item.href}>
            <Link
              href={item.href!}
              className="text-white lg:text-[#0D401C] hover:text-[#F8C32C] transition-colors flex items-center gap-1"
            >
              {item.icon} {item.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

// AuthSection Component
const AuthSection = () => {
  const { data: session } = useSession();
  const { data: cartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  const displayName =
    session?.user?.firstName && session?.user?.lastName
      ? `${session.user.firstName} ${session.user.lastName}`
      : session?.user?.name || "User";

  return (
    <div>
      <div className="flex gap-1 md:gap-4">
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="relative"
        >
          {session ? (
            <button className="focus:outline-none">
              {session.user?.image ? (
                <div className="relative">
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <span className="absolute bottom-0 bg-green-800 text-white rounded-full right-0">
                    <IoIosArrowDown />
                  </span>
                </div>
              ) : (
                <div className="w-[44px] h-[44px] bg-gray-300 rounded-full flex items-center justify-center text-[#0D401C]">
                  {displayName[0]}
                </div>
              )}
            </button>
          ) : (
            <button>
              <div>
                <CgProfile size={44} />
                <span className="absolute bottom-0 bg-green-800 text-white rounded-full right-0">
                  <IoIosArrowDown />
                </span>
              </div>
            </button>
          )}
          {isOpen && (
            <div className="absolute right-0 w-48 bg-white shadow-lg rounded-md py-2 z-10 border border-gray-200">
              {session ? (
                <>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-[#0D401C] hover:bg-[#F8C32C] hover:text-white transition-all duration-300 font-semibold"
                    href="/profile"
                  >
                    My Profile
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-[#0D401C] hover:bg-[#F8C32C] hover:text-white transition-all duration-300 font-semibold"
                    href="/myOrder"
                  >
                    My Orders
                  </Link>
                  {session.user.role === "farmer" && (
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/dashboard"
                      className="block px-4 py-2 text-[#0D401C] hover:bg-[#F8C32C] hover:text-white transition-all duration-300 font-semibold"
                    >
                      Dashboard 📊
                    </Link>
                  )}

                  {session.user.role === "admin" && (
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/adminDashboard"
                      className="block px-4 py-2 text-[#0D401C] hover:bg-[#F8C32C] hover:text-white transition-all duration-300 font-semibold"
                    >
                      Admin Dashboard 🛠️
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-[#0D401C] hover:bg-[#F8C32C] hover:text-white transition-all duration-300 font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/login"
                    className="w-full text-left px-4 py-2 text-[#0D401C] hover:bg-[#F8C32C] hover:text-white transition-all duration-300 font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/register"
                    className="w-full text-left px-4 py-2 text-[#0D401C] hover:bg-[#F8C32C] hover:text-white transition-all duration-300 font-semibold"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <Link
            href={"/cart"}
            className="size-11 hover:bg-[#165728] hover:text-white transition-all duration-300 cursor-pointer flex justify-center items-center border rounded-full"
          >
            <TiShoppingCart size={20} />
          </Link>
          <div className="bg-[#F8C32C] size-5 flex justify-center items-center text-sm rounded-full text-green-900 absolute -top-1 -right-1">
            <span>{cartItem?.totalQuantity || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isDashboardPage =
    pathname.startsWith("/dashboard") || pathname.startsWith("/adminDashboard");

  return (
    <nav
      className={`${
        isDashboardPage ? "border-b" : "shadow-md"
      } z-50 top-0 sticky bg-white`}
    >
      <Container
        className={`px-5 relative ${isDashboardPage ? "py-2" : "py-4"}`}
      >
        <div className="flex justify-between items-center">
          <div
            className={`${
              isDashboardPage ? "lg:hidden" : ""
            } flex items-center`}
          >
            <div className="hidden lg:block">
              <Link
                href={"/"}
                className={`${
                  isDashboardPage ? "hidden" : ""
                } flex items-center`}
              >
                <Image src="/logo.png" alt="Logo" width={150} height={50} />
              </Link>
            </div>
            <MobileNav
              links={<NavItems isMobile role={session?.user?.role} />}
            />
          </div>
          <NavItems role={session?.user?.role} />
          <AuthSection />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
