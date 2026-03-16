import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dashboardStats, nextActions } from "@/lib/data/mock";
import { ApplicationQuickForm } from "@/components/forms/application-quick-form";
import { WeeklyApplicationsChart } from "@/components/dashboard/weekly-applications-chart";

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader title="Cockpit de recherche" description="Priorités, pipeline et actions intelligentes" cta="Capture rapide" />
      <ApplicationQuickForm />
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="mb-3 text-sm font-semibold">Tendance hebdomadaire</h2>
          <WeeklyApplicationsChart />
        </Card>
        <Card>
          <h2 className="mb-3 text-sm font-semibold">Next best actions</h2>
          <div className="space-y-2">
            {nextActions.map((action) => (
              <div key={action} className="rounded-lg border border-slate-200 p-2 text-sm">
                {action} <Badge className="ml-2">urgent</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
