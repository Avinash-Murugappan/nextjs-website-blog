import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block pr-6 py-2 transition",
          isActive
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400"
        )}
      >
        {children}
        {/* {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )} */}
      </Link>
    </li>
  );
}

type Props = {
  links: { href: string; label: string }[];
  className?: string;
};

export default function DesktopNavigation({
  links,
  className,
}: Props): JSX.Element {
  let router = useRouter();
  return (
    <nav className={className}>
      <ul className="flex text-sm font-medium text-zinc-800 backdrop-blur dark:text-zinc-200">
        {links.map(({ href, label }, index) => (
          <NavItem key={index} href={href}>
            {label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
