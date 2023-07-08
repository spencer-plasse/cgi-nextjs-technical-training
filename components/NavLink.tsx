// Next.js
import Link from "next/link";

/**
 * Component wrapping the Next.js `Link` component with custom formatting.
 * 
 * @param props Dictionary of component props
 * @param props.children Child components contained under this `NavLink` component
 * @param props.href String URL that the `NavLink` component should open when clicked
 * 
 * @returns Wrapped Next.js `Link` component with custom hover formatting
 */
export default function NavLink(props: {
  children: React.ReactNode,
  href: string,
}) {
  return (
    <Link href={props.href} className="hover:font-bold">
      {props.children}
    </Link>
  )
};