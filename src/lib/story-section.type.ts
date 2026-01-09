export interface StorySection {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  badges?: string[];
  steps?: string[];
  stats?: { label: string; value: string }[];
  cta?: { label: string; href: string };
  highlight?: string;
  theme?: "light" | "dark";
}
