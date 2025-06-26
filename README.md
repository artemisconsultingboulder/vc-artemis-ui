# Artemis Consulting UI

Vibecoded Artemis Consulting UI (for immediate release)

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Run Development Server
```bash
npm run dev
```

## Features

- Application submission form with file upload
- Supabase integration for data storage
- Resume file handling with unique naming
- Form validation and error handling

## Database Setup

Create the following table in your Supabase database:

```sql
CREATE TABLE applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  year TEXT NOT NULL,
  major TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  resume_filename TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

Also create a storage bucket named `resumes` for file uploads.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
