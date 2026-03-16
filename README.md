# Internship Hunt OS

Application full-stack Next.js + Supabase pour piloter une recherche de stage en finance (M&A, PE, VC) avec exécution rapide, CRM relationnel, suivi des candidatures et analytics actionnables.

## 1) Architecture proposée

- **Frontend**: Next.js App Router + TypeScript + Tailwind + composants UI style shadcn.
- **Backend**: Supabase Postgres + Auth + Storage + RLS.
- **Data access**: `@supabase/auth-helpers-nextjs` côté serveur/client (typed via `lib/supabase/types.ts`).
- **Validation**: React Hook Form + Zod.
- **Visualisation**: Recharts.
- **Automations rule-based**: fonctions dans `lib/automations/rules.ts`.
- **Tests**: Vitest (règles métier) + Playwright (smoke e2e).

### Pourquoi ce design

- Simple et maintenable, prêt pour Vercel.
- Modèle relationnel extensible (ajout IA future sans refonte).
- Sécurité multi-user dès maintenant via RLS par `user_id`.

## 2) Modèle relationnel

Défini dans `supabase/schema.sql`.

Tables principales:
- `profiles`
- `companies`
- `applications`
- `contacts`
- `interactions`
- `tasks`
- `documents`
- `templates`
- `tags`
- `entity_tags`
- `application_stages`
- `activity_logs`
- pivot `application_contacts`

Chaque table métier contient:
- `user_id` pour isolation par utilisateur
- `created_at` / `updated_at`
- FK cohérentes + indexes de filtres (status, follow-up, user)

## 3) Arborescence projet

```bash
app/
  login/
  dashboard/
  applications/
  companies/
  contacts/
  interactions/
  tasks/
  documents/
  templates/
  analytics/
  settings/
  today/
  week/
components/
  ui/
  forms/
  layout/
lib/
  automations/
  data/
  schemas/
  supabase/
supabase/
  schema.sql
scripts/
  seed.sql
tests/
  rules.test.ts
  e2e/smoke.spec.ts
```

## 4) Setup local

1. Installer dépendances
```bash
npm install
```

2. Configurer variables d'environnement
```bash
cp .env.example .env.local
```
Puis renseigner les clés Supabase.

3. Créer les tables et RLS
- Ouvrir SQL Editor Supabase
- Exécuter `supabase/schema.sql`

4. Seeder des données de démonstration
- Remplacer `<USER_UUID>` dans `scripts/seed.sql`
- Exécuter le script dans Supabase SQL Editor

5. Lancer l'app
```bash
npm run dev
```

## 5) Auth et sécurité

- Login email/password sur `/login`.
- Routes métier protégées via `middleware.ts`.
- RLS strictes: policies `... owner` sur toutes les tables utilisateurs.
- Aucune clé sensible exposée côté client (service role uniquement serveur/ops).

## 6) Modules implémentés

- Dashboard cockpit (`/dashboard`): KPI, tendances, next best actions, quick add.
- Tracker candidatures (`/applications`, `/applications/[id]`).
- Company CRM (`/companies`, `/companies/[id]`).
- Networking CRM (`/contacts`, `/contacts/[id]`).
- Interactions (`/interactions`).
- Tâches (`/tasks`).
- Documents (`/documents`).
- Templates (`/templates`).
- Analytics (`/analytics`).
- Productivité (`/today`, `/week`).

## 7) Automations (règles)

Dans `lib/automations/rules.ts`:
- création de tâche de relance depuis candidature
- création de tâche depuis interaction + next step
- détection relation stale
- détection candidature stale
- suggestion next best action selon statut

## 8) Tests

```bash
npm run test
npm run test:e2e
```

## 9) Déploiement Vercel

1. Push sur GitHub.
2. Import du repo dans Vercel.
3. Ajouter variables d'env (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
4. Build command: `npm run build`
5. Output: Next.js par défaut.

## 10) Backlog phase 2

- Vraies CRUD server actions pour tous les modules
- Kanban drag & drop statuts candidatures
- Command palette globale clavier
- Realtime notifications Supabase
- Saved views avancées + bulk actions
- Upload documents via Supabase Storage UI
- Règles automatiques DB triggers (update last interaction / stale flags)
- Assistant IA (draft follow-up, résumé interactions) branché sur logs structurés
