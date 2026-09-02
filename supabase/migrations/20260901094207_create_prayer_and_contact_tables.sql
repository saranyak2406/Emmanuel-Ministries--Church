/*
# Create prayer requests and contact messages tables

1. New Tables
- `prayer_requests`: Stores prayer request submissions from website visitors.
  - id (uuid, primary key)
  - name (text, not null) — submitter's name
  - email (text, not null) — submitter's email
  - phone (text) — optional phone number
  - city_country (text) — city and country of the submitter
  - category (text) — prayer category: Salvation, Family, Healing, Guidance, Provision, Deliverance, Ministry, Other
  - request (text, not null) — the prayer request message
  - is_public (boolean, default false) — whether the submitter allows the request to be shared publicly
  - created_at (timestamptz, default now())
- `contact_messages`: Stores general contact form submissions.
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - phone (text) — optional
  - country (text) — optional
  - message (text, not null)
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated INSERT only (public can submit forms).
- No SELECT/UPDATE/DELETE for anon — only ministry staff with service role can read submissions.
*/

CREATE TABLE IF NOT EXISTS prayer_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  city_country text DEFAULT '',
  category text NOT NULL DEFAULT 'Other',
  request text NOT NULL,
  is_public boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_prayer_requests" ON prayer_requests;
CREATE POLICY "anon_insert_prayer_requests"
ON prayer_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  country text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
