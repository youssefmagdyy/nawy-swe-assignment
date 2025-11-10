import Image from "next/image";
import Link from "next/link";

interface ApartmentCardProps {
  id: number;
  unitName: string;
  unitNumber: string;
  project: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
}

export default function ApartmentCard({ id, unitName, project, price, bedrooms, bathrooms, imageUrl, unitNumber }: ApartmentCardProps) {
  return (
    <Link href={`/apartments/${id}`}>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition">
        <Image src={imageUrl} alt={unitName} className="w-full h-48 object-cover" width={1200} height={400}/>
        <div className="p-4">
          <h2 className="text-md font-semibold">{unitNumber}</h2>
          <h2 className="text-lg font-semibold">{unitName}</h2>
          <p className="text-sm text-gray-600">{project}</p>
          <div className="flex flex-col mt-1 mb-2 text-sm">
            <span>{bedrooms} Bedrooms</span>
            <span>{bathrooms} Bathrooms</span>
          </div>
            <span className="font-semibold text-blue-600">{price.toLocaleString()} EGP</span>
        </div>
      </div>
    </Link>
  );
}
