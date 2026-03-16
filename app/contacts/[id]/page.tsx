import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function ContactDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppShell>
      <PageHeader title={`Contact #${params.id}`} description="Préparer coffee chat, historique, templates et prochaine action" />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">Historique d'interactions + notes contextuelles + scoring réactivité.</Card>
        <Card>Relances automatiques et checklist post-entretien.</Card>
      </div>
    </AppShell>
  );
}
