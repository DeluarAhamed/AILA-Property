# AILA Property Solutions

A responsive, multi-page website for a Melbourne commercial and property cleaning company. It includes desktop mega menus, mobile accordion navigation, dedicated service pages, industry and company pages, and enquiry/quote forms.

## Run locally

```powershell
npm.cmd start
```

Then open `http://localhost:4173`.

## Test

```powershell
npm.cmd test
```

## Safe deployment workflow

This project is now backed up in GitHub and set up for production deploys from the `main` branch via GitHub Actions.

### Current production

- Vercel project: `aila-property-solutions`
- Production URL: `https://aila-property-solutions.vercel.app`

### To finish automated deploys

Add this GitHub repository secret:

- `VERCEL_TOKEN`

Then every push to `main` will:

1. install dependencies
2. run tests
3. build with Vercel
4. deploy to Vercel production

The workflow file lives at:

`/.github/workflows/vercel-production.yml`

### Optional native Vercel Git connection

If you want Vercel’s built-in Git integration as well, open the project in Vercel and connect the repository:

`https://vercel.com/ahameddeluar22-9503s-projects/aila-property-solutions`

If Vercel says it cannot access the repo, reconnect the GitHub app to the `DeluarAhamed/AILA-Property` repository inside Vercel.

Before launch, replace the placeholder phone number and email address, connect the quote form to your preferred form handler or CRM, and add final Privacy and Terms pages.

Real project photography supplied by AILA is stored under `assets/work-*.jpg`. The supplied AILA logo is stored in `assets/aila-logo.png`.
