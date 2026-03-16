import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function TodayPage() {
  return (
    <AppShell>
      <PageHeader title="Aujourd'hui" description="Vue focus: relances, deadlines, tâches critiques" />
      <Card>Priorités du jour auto-groupées.</Card>
    </AppShell>
  );
}
