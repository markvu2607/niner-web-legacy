import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export const footerMenu = [
  {
    title: "Company",
    items: [
      {
        title: "About us",
        href: "/about-us",
      },
      {
        title: "Careers",
        href: "/careers",
      },
      {
        title: "Terms",
        href: "/terms",
      },
      {
        title: "Privacy",
        href: "/privacy",
      },
      {
        title: "Interest Based Ads",
        href: "/interest-based-ads",
      },
      {
        title: "Ad Preferences",
        href: "/ad-preferences",
      },
      {
        title: "Help",
        href: "/help",
      },
    ],
  },
  {
    title: "Work with us",
    items: [
      {
        title: "Authors",
        href: "/authors",
      },
      {
        title: "Advertise",
        href: "/advertise",
      },
      {
        title: "Authors & ads blog",
        href: "/authors-ads-blog",
      },
      {
        title: "API",
        href: "/api",
      },
    ],
  },
];

export const connections = [
  {
    Icon: TwitterLogoIcon,
    href: "twitter",
  },
  {
    Icon: GitHubLogoIcon,
    href: "github",
  },
  {
    Icon: LinkedInLogoIcon,
    href: "linkedin",
  },
];
