import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppShell>
      <PageHeader title={`Entreprise #${params.id}`} description="Vue 360°: candidatures, contacts, interactions, docs" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>Notes stratégiques, saisonnalité de recrutement, why this firm.</Card>
        <Card>Historique complet des interactions et warm intros.</Card>
      </div>
    </AppShell>
  );
}
