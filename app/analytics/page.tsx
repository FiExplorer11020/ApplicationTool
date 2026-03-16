import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <AppShell>
      <PageHeader title="Analytics & Insights" description="Funnel, efficacité source, détection des goulots d'étranglement" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>Funnel de conversion et performance par source.</Card>
        <Card>Détection de pipeline stale + efficacité des relances.</Card>
      </div>
    </AppShell>
  );
}
