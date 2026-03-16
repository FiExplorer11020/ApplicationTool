import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function InteractionsPage() {
  return (
    <AppShell>
      <PageHeader title="Interactions & Follow-ups" description="Log omnicanal + next action en un seul flux" cta="Nouvelle interaction" />
      <Card>Timeline interactions (LinkedIn, email, call, coffee chat), création automatique de tâches.</Card>
    </AppShell>
  );
}
