import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function WeekPage() {
  return (
    <AppShell>
      <PageHeader title="Cette semaine" description="Planification hebdomadaire et suivi exécution" />
      <Card>Objectifs + output hebdo + bottlenecks.</Card>
    </AppShell>
  );
}
