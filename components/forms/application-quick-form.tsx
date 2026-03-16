"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  company: z.string().min(2),
  role: z.string().min(2),
  followUpDate: z.string().optional()
});

type FormData = z.infer<typeof schema>;

export function ApplicationQuickForm() {
  const form = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { company: "", role: "" } });

  const onSubmit = form.handleSubmit(async () => {
    form.reset();
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-4">
      <Input placeholder="Entreprise" {...form.register("company")} />
      <Input placeholder="Poste" {...form.register("role")} />
      <Input type="date" {...form.register("followUpDate")} />
      <Button type="submit">Ajouter en 20 sec</Button>
    </form>
  );
}
