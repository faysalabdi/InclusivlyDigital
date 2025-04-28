# Deploying Your App to Vercel

## Prerequisites
1. A [Vercel account](https://vercel.com/signup)
2. [Git](https://git-scm.com/downloads) installed on your machine
3. Your project pushed to a GitHub, GitLab, or Bitbucket repository

## Environment Variables
Set up the following environment variables in your Vercel project settings:
- `DATABASE_URL`: Your PostgreSQL database URL
- `NODE_ENV`: Set to `production`

## Deployment Steps

### 1. Push Your Code to a Git Repository
If your code isn't already in a repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repository-url>
git push -u origin main
```

### 2. Import Your Project to Vercel
1. Log in to [Vercel](https://vercel.com/)
2. Click "Add New" → "Project"
3. Select your repository
4. Configure the project:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Add the environment variables mentioned above
6. Click "Deploy"

### 3. Verify Your Deployment
Once deployment is complete, Vercel will provide you with a URL to access your application.

## Troubleshooting
- If you encounter any issues with the database connection, verify that your `DATABASE_URL` is correctly set and accessible from Vercel's servers.
- If you're using session management, make sure the session secret is properly configured.
- Check Vercel deployment logs for any errors. 