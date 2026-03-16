import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppShell>
      <PageHeader title={`Candidature #${params.id}`} description="Pipeline, entretiens, documents, relances" />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">Kanban statut, notes, pièces jointes, étapes d'entretien.</Card>
        <Card>Tâches auto: relance, deadline proche, stale stage.</Card>
      </div>
    </AppShell>
  );
}
