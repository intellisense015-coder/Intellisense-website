CREATE TABLE IF NOT EXISTS contact_submissions (
  id TEXT PRIMARY KEY NOT NULL CHECK (length(id) BETWEEN 1 AND 64),
  name TEXT NOT NULL CHECK (length(name) BETWEEN 2 AND 100),
  email TEXT NOT NULL CHECK (length(email) BETWEEN 3 AND 254),
  company TEXT CHECK (company IS NULL OR length(company) <= 120),
  help_area TEXT NOT NULL CHECK (help_area IN (
    'custom_software',
    'ai_automation',
    'rag_knowledge_systems',
    'web_mobile_product',
    'business_workflow_improvement',
    'existing_system_improvement',
    'other'
  )),
  project_description TEXT NOT NULL CHECK (length(project_description) BETWEEN 12 AND 4000),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN (
    'new',
    'reviewed',
    'contacted',
    'closed',
    'spam'
  )),
  source TEXT CHECK (source IS NULL OR length(source) <= 64),
  request_id TEXT NOT NULL UNIQUE CHECK (length(request_id) BETWEEN 1 AND 64),
  turnstile_verified INTEGER NOT NULL DEFAULT 0 CHECK (turnstile_verified IN (0, 1)),
  created_at TEXT NOT NULL CHECK (length(created_at) BETWEEN 1 AND 64),
  updated_at TEXT NOT NULL CHECK (length(updated_at) BETWEEN 1 AND 64)
) STRICT;

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status_created
  ON contact_submissions (status, created_at DESC);
