# URL Shortener - Full Stack (Express.js + Next.js)

This is a simple yet professional full-stack **URL Shortener** application built using:

- **Backend**: Express.js, PostgreSQL, Prisma ORM
- **Frontend**: Next.js (App Router, Vanilla CSS, Black & White UI)
- **TypeScript** across the stack

---

## Features

- Create short URLs
- Retrieve original URLs from short codes
- Update or delete existing short URLs
- Track access statistics (access count)
- Clean, minimal frontend with black & white theme

---

## Project Setup
- Clone repository
  git clone https://github.com/MuhammadSHOUKATSYED/syed-innovaxel-ali.git

  --- 
  
- npm install
- Create .env file i.e.
  DATABASE_URL="postgresql://postgres:Horraah1234!@localhost:5432/url-shorten"
  PORT=5000
- Set up prisma
  npx prisma init
  npx prisma migrate dev --name init
  npx prisma generate
- Run server
  npm run dev
- Server will be running at: http://localhost:5000

  --- 

  
- Navigate to url-shortener-ui
  cd url-shortener-ui
- npm install
- Create .env.local:
  NEXT_PUBLIC_API_BASE=http://localhost:5000/api/shorten
  Make sure this matches your backend API URL
- Run the frontend
  npm run dev
  navigate to http://localhost:3000/  (using any web browser) 
