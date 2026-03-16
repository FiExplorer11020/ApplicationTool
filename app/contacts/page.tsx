import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const contacts = [
  { id: "1", name: "Camille Martin", company: "Lazard", warmth: "warm", next: "2026-03-17" },
  { id: "2", name: "Yanis Leroy", company: "Ardian", warmth: "cold", next: "2026-03-19" }
];

export default function ContactsPage() {
  return (
    <AppShell>
      <PageHeader title="Networking CRM" description="Relations, relances, conversion networking → entretiens" cta="Ajouter un contact" />
      <div className="space-y-3">
        {contacts.map((contact) => (
          <Card key={contact.id} className="flex items-center justify-between">
            <div>
              <Link href={`/contacts/${contact.id}`} className="font-semibold text-brand-700">{contact.name}</Link>
              <p className="text-sm text-slate-600">{contact.company}</p>
            </div>
            <div className="text-right text-sm">
              <Badge>{contact.warmth}</Badge>
              <p className="mt-1">Suivi: {contact.next}</p>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
