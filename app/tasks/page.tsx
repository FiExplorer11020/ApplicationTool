import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function TasksPage() {
  return (
    <AppShell>
      <PageHeader title="Execution Engine" description="Toutes les actions de recherche orchestrées" cta="Nouvelle tâche" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>À faire aujourd'hui</Card>
        <Card>En retard</Card>
        <Card>Planifiées cette semaine</Card>
      </div>
    </AppShell>
  );
}
