import {
  Folder,
  Home,
  LayoutDashboardIcon,
  WalletCardsIcon,
} from "lucide-react";

export const WorkspaceMenu = [
  {
    name: "Beranda",
    icon: Home,
    path: "/workspace",
  },
  {
    name: "Proyek",
    icon: Folder,
    path: "/workspace/projects",
  },
  {
    name: "Template",
    icon: LayoutDashboardIcon,
    path: "/workspace/templates",
  },
  {
    name: "Pembayaran",
    icon: WalletCardsIcon,
    path: "/workspace/billing",
  },
];

export const canvasSizeOptions = [
  {
    name: "Instagram Post",
    width: 500,
    height: 500,
    icon: "/instagram.png",
  },
  {
    name: "Instagram Story",
    width: 473,
    height: 700,
    icon: "/instagram-2.png",
  },
  {
    name: "YouTube Thumbnail",
    width: 700,
    height: 394,
    icon: "/youtube.png",
  },
  {
    name: "YouTube Banner",
    width: 700,
    height: 394,
    icon: "/youtube-2.png",
  },
  {
    name: "YouTube Post",
    width: 500,
    height: 500,
    icon: "/youtube-3.png",
  },
  {
    name: "PowerPoint Slide",
    width: 700,
    height: 394,
    icon: "/ppt.png",
  },
  {
    name: "Flyer (A4)",
    width: 508,
    height: 700,
    icon: "/circle.png",
  },
  {
    name: "Facebook Post",
    width: 700,
    height: 368,
    icon: "/facebook.png",
  },
  {
    name: "Twitter Post",
    width: 700,
    height: 394,
    icon: "/twitter.png",
  },
  {
    name: "LinkedIn Post",
    width: 700,
    height: 366,
    icon: "/linkedin.png",
  },
  {
    name: "Pinterest Pin",
    width: 467,
    height: 700,
    icon: "/pinterest.png",
  },
];
