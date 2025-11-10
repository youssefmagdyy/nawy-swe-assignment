import api from '@/lib/api'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Apartment {
  id: number
  unitName: string
  unitNumber: string
  project: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  images: string[]
}

async function getApartment(id: string): Promise<Apartment> {
  try {
    const res = await api.get<Apartment>(`/apartments/${id}`)
    return res.data
  } catch {
    notFound();
  }
}

export default async function ApartmentDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const apartment = await getApartment(id);

    return (
      <div className="container py-8">
        <div className="mb-4">
          <Image
            src={apartment.images[0]}
            alt={apartment.unitName}
            width={1200}
            height={500}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 mb-6">
          {apartment.images.slice(1).map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`${apartment.unitName} thumb ${index}`}
              width={300}
              height={200}
              className="w-full h-32 object-cover rounded-md hover:opacity-80 transition"
            />
          ))}
        </div>
        <h1 className="text-xl font-semibold">{apartment.unitNumber}</h1>
        <h1 className="text-2xl font-bold">{apartment.unitName}</h1>
        <p className="text-gray-600">{apartment.project}</p>
        <div className="mt-2 flex gap-4 text-sm text-gray-700">
          <span>{apartment.bedrooms} Bedrooms</span>
          <span>{apartment.bathrooms} Bathrooms</span>
          <span>{apartment.area} m²</span>
        </div>
        <p className="mt-4 text-blue-600 font-semibold text-lg">
          {apartment.price.toLocaleString()} EGP
        </p>
        <p className="mt-4">{apartment.description}</p>
      </div>
    )
}
