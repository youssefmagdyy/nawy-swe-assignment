import api from '@/lib/api';
import ApartmentGrid from './components/ApartmentGrid'
import SearchBar from './components/SearchBar'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string}>
}) {
  const filters = (await searchParams) // Extract filter values from the URL search parameters
  const queryString = new URLSearchParams(filters as Record<string, string>).toString();
  const res = await api.get(`/apartments${queryString ? `?${queryString}` : ""}`)
  const apartments =  res.data;
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Available Apartments</h1>
      <SearchBar />
      <ApartmentGrid apartments={apartments} />
    </div>
  )
}
