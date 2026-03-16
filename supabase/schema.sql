create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  sector text,
  sub_sector text,
  geography text,
  headcount text,
  target_score int,
  target_roles text[],
  strategic_notes text,
  seasonality_notes text,
  alumni_notes text,
  website_url text,
  linkedin_url text,
  why_firm_notes text,
  last_interaction_date date,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists idx_companies_user on public.companies(user_id);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  company_id uuid references public.companies(id) on delete set null,
  full_name text not null,
  role text,
  seniority text,
  email text,
  linkedin_url text,
  phone text,
  relationship_strength int,
  source text,
  shared_background text,
  alumni_flag boolean default false,
  geography text,
  last_interaction_date date,
  next_follow_up_date date,
  warmth text check (warmth in ('warm', 'cold', 'referred')) default 'cold',
  tags text[],
  notes text,
  referral_potential_score int,
  responsiveness_score int,
  thank_you_sent boolean default false,
  follow_up_sent boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists idx_contacts_user on public.contacts(user_id);
create index if not exists idx_contacts_next_followup on public.contacts(next_follow_up_date);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  company_id uuid references public.companies(id) on delete set null,
  company_name text not null,
  role_title text not null,
  internship_type text,
  location text,
  channel text,
  date_found date,
  date_applied date,
  status text not null,
  priority text not null default 'medium',
  source text,
  deadline date,
  job_description text,
  salary text,
  recruiter_contact text,
  notes text,
  cv_version text,
  cover_letter_version text,
  outcome text,
  rejection_reason text,
  follow_up_date date,
  tags text[],
  stale_since_days int generated always as (case when date_applied is null then null else (current_date - date_applied) end) stored,
  is_stale boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists idx_apps_user on public.applications(user_id);
create index if not exists idx_apps_status on public.applications(status);
create index if not exists idx_apps_follow_up on public.applications(follow_up_date);

create table if not exists public.application_contacts (
  application_id uuid references public.applications(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete cascade,
  primary key (application_id, contact_id)
);

create table if not exists public.interactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  contact_id uuid references public.contacts(id) on delete set null,
  company_id uuid references public.companies(id) on delete set null,
  application_id uuid references public.applications(id) on delete set null,
  interaction_date date not null,
  interaction_type text not null,
  outcome text,
  summary text,
  next_action text,
  next_action_due_date date,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  task_type text,
  linked_entity_type text,
  linked_entity_id uuid,
  due_date date,
  priority text default 'medium',
  status text default 'todo',
  recurring_interval_days int,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  company_id uuid references public.companies(id) on delete set null,
  application_id uuid references public.applications(id) on delete set null,
  contact_id uuid references public.contacts(id) on delete set null,
  file_name text not null,
  file_path text not null,
  doc_type text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.templates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  content text not null,
  template_type text,
  favorite boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.tags (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  color text,
  created_at timestamptz default now()
);

create table if not exists public.entity_tags (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  tag_id uuid not null references public.tags(id) on delete cascade,
  entity_type text not null,
  entity_id uuid not null,
  created_at timestamptz default now()
);

create table if not exists public.application_stages (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications(id) on delete cascade,
  stage_name text not null,
  stage_date date,
  feedback text,
  created_at timestamptz default now()
);

create table if not exists public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  meta jsonb,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.companies enable row level security;
alter table public.contacts enable row level security;
alter table public.applications enable row level security;
alter table public.interactions enable row level security;
alter table public.tasks enable row level security;
alter table public.documents enable row level security;
alter table public.templates enable row level security;
alter table public.tags enable row level security;
alter table public.entity_tags enable row level security;
alter table public.activity_logs enable row level security;

create policy "profiles owner" on public.profiles for all using (id = auth.uid()) with check (id = auth.uid());

create policy "companies owner" on public.companies for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "contacts owner" on public.contacts for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "applications owner" on public.applications for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "interactions owner" on public.interactions for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "tasks owner" on public.tasks for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "documents owner" on public.documents for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "templates owner" on public.templates for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "tags owner" on public.tags for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "entity tags owner" on public.entity_tags for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "activity logs owner" on public.activity_logs for all using (user_id = auth.uid()) with check (user_id = auth.uid());
