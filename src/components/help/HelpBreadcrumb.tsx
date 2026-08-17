import Image from "next/image";
import Link from "next/link";
import iconBreadcrumb from "@/assets/images/help/icon-breadcrumb.svg";
import "./helpSubpage.scss";

export type HelpBreadcrumbItem = {
  label: string;
  href?: string;
};

type HelpBreadcrumbProps = {
  items: HelpBreadcrumbItem[];
  ariaLabel?: string;
};

export default function HelpBreadcrumb({ items, ariaLabel = "Breadcrumb" }: HelpBreadcrumbProps) {
  return (
    <nav className="helpSubpageBreadcrumb" aria-label={ariaLabel}>
      <ol className="helpSubpageBreadcrumb__list">
        {items.flatMap((item, index) => {
          const elements = [
            <li key={`item-${index}`} className="helpSubpageBreadcrumb__item">
              {item.href ? (
                <Link href={item.href} className="helpSubpageBreadcrumb__link">
                  {item.label}
                </Link>
              ) : (
                <span className="helpSubpageBreadcrumb__current">{item.label}</span>
              )}
            </li>,
          ];

          if (index < items.length - 1) {
            elements.push(
              <li
                key={`sep-${index}`}
                className="helpSubpageBreadcrumb__separator"
                aria-hidden="true"
              >
                <Image src={iconBreadcrumb} alt="" width={14} height={14} />
              </li>,
            );
          }

          return elements;
        })}
      </ol>
    </nav>
  );
}
