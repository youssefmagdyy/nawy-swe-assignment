# Nawy SWE Assignment

## Frameworks & Libraries Used

- **Frontend:** Next.js + TypeScript + TailwindCSS  
- **Backend:** Node.js + Express + TypeScript + Prisma ORM + class-validator  
- **Database:** PostgreSQL  

## API Examples

### Create Apartment  
**POST** `http://localhost:5000/api/apartments`

```json
{
  "unitName": "Palm Hills Residence",
  "unitNumber": "B203",
  "project": "Palm Hills New Cairo",
  "price": 5500000,
  "bedrooms": 3,
  "bathrooms": 2,
  "area": 180,
  "description": "Spacious modern apartment with balcony and garden view.",
  "images": [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  ]
}
```

**Get All Apartments** 

`GET http://localhost:5000/api/apartments`

**Search & Filter Apartments** 

`GET http://localhost:3000/?unitName=palm&unitNumber=2`

**Get One Apartment** 

`GET http://localhost:5000/api/apartments/apartment_id`


## Services (Ports)

| Service  | Port | Description        |
|-----------|------|--------------------|
| frontend  | 3000 | Next.js UI         |
| backend   | 5000 | Node.js API        |
| db        | 5432 | PostgreSQL server  |

---

## To Run

Clone the repository, then run:

```bash
docker-compose up --build
```
Once running:

Frontend: `http://localhost:3000`

Backend API: `http://localhost:5000/api/apartments`


