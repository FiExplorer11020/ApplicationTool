import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { applications } from "@/lib/data/mock";

export default function ApplicationsPage() {
  return (
    <AppShell>
      <PageHeader title="Application Tracker" description="Vue table + pilotage statut" cta="Nouvelle candidature" />
      <Card className="mb-4">
        <div className="grid gap-3 md:grid-cols-4">
          <Input placeholder="Recherche entreprise / poste" />
          <Input placeholder="Filtre secteur" />
          <Input placeholder="Filtre localisation" />
          <Input placeholder="Filtre statut" />
        </div>
      </Card>
      <Card className="overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-left text-slate-600">
            <tr>
              <th className="p-3">Entreprise</th><th>Poste</th><th>Lieu</th><th>Statut</th><th>Priorité</th><th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t border-slate-200">
                <td className="p-3"><Link className="text-brand-700" href={`/applications/${app.id}`}>{app.company}</Link></td>
                <td>{app.role}</td><td>{app.location}</td><td><Badge>{app.status}</Badge></td><td>{app.priority}</td><td>{app.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
