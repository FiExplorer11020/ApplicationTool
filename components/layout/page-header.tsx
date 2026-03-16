import { Button } from "@/components/ui/button";

export function PageHeader({ title, description, cta }: { title: string; description: string; cta?: string }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      {cta ? <Button>{cta}</Button> : null}
    </div>
  );
}
