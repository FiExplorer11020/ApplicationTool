"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Building2, ChartNoAxesCombined, ClipboardList, ContactRound, Files, LayoutDashboard, MessageCircle, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/applications", label: "Candidatures", icon: BriefcaseBusiness },
  { href: "/companies", label: "Entreprises", icon: Building2 },
  { href: "/contacts", label: "Contacts", icon: ContactRound },
  { href: "/interactions", label: "Interactions", icon: MessageCircle },
  { href: "/tasks", label: "Tâches", icon: ClipboardList },
  { href: "/documents", label: "Documents", icon: Files },
  { href: "/templates", label: "Templates", icon: Sparkles },
  { href: "/analytics", label: "Analytics", icon: ChartNoAxesCombined },
  { href: "/settings", label: "Paramètres", icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[240px_1fr]">
      <aside className="border-r border-slate-200 bg-white p-4">
        <div className="mb-6 text-lg font-semibold">Internship Hunt OS</div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={cn("flex items-center gap-2 rounded-md px-3 py-2 text-sm", pathname.startsWith(item.href) ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-100")}>
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
