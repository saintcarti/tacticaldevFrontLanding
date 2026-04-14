import { services } from '@/lib/constants';  
import DynamicServicePage from './ClientPage';  
export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }  
export default function Page({ params }: { params: { slug: string } }) { return <DynamicServicePage params={params} />; } 
