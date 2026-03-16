-- Run after creating a user and replacing <USER_UUID>
insert into public.companies (user_id, name, sector, sub_sector, geography, target_score)
values
  ('<USER_UUID>', 'Lazard', 'M&A', 'Generalist', 'Paris', 95),
  ('<USER_UUID>', 'Ardian', 'Private Equity', 'Buyout', 'Paris', 93);

insert into public.contacts (user_id, full_name, role, warmth, company_id, next_follow_up_date)
select '<USER_UUID>', 'Camille Martin', 'Analyst', 'warm', c.id, current_date + 3
from public.companies c where c.name='Lazard';

insert into public.applications (user_id, company_name, role_title, status, priority, date_applied, follow_up_date)
values
  ('<USER_UUID>', 'Lazard', 'M&A Off-cycle', 'applied', 'high', current_date - 2, current_date + 3),
  ('<USER_UUID>', 'Ardian', 'PE Intern', 'to apply', 'high', null, current_date + 5);
