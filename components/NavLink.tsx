// NextJS
import Link from "next/link";

export const NavLink = ({children, href}: {
  children: React.ReactNode,
  href: string,
}) => {
  return (
    <Link href={href} className="hover:font-bold">
      {children}
    </Link>
  )
};