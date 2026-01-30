import Link from "next/link";
import "./BreadCrumbs.css";

export interface BreadCrumbItem {
  label: string;
  href: string;
}

interface BreadCrumbsProps {
  items: BreadCrumbItem[];
}

export default function BreadCrumbs({ items }: BreadCrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol data-br-inline="gutter:size2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href}>
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
