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
