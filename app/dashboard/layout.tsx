import { Siderbar } from '../components';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
			<section className='flex'>
				<Siderbar />
				<section className='p-2 w-full text-slate-900'>{children}</section>
			</section>
		</section>
	);
}
