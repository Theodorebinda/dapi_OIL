import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ActivityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: string;
  rowSpan?: string;
}
