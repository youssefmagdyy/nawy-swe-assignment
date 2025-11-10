import ApartmentCard from './ApartmentCard'

interface Apartment {
  id: number
  unitName: string
  unitNumber: string
  project: string
  price: number
  bedrooms: number
  bathrooms: number
  imageUrl: string
}

export default function ApartmentGrid({ apartments }: { apartments: Apartment[] }) {

  return (
    <>
      {        
        apartments.length == 0 ? 
        <p>No apartments found.</p>
        :
        <>
          <p className="text-sm text-gray-600 mb-4">
          {apartments.length} apartment{apartments.length !== 1 ? 's' : ''} found
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} {...apt} />
          ))}
        </div>
      </>
      }
    </>
  )
}
