import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <AppShell>
      <PageHeader title="Paramètres" description="Profil, préférences de rappel, sécurité" />
      <Card>Configuration utilisateur + préférences de productivité.</Card>
    </AppShell>
  );
}
