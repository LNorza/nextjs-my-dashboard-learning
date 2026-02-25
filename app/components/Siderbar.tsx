import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from 'react-icons/io5';
import { SiderbarMenuItems } from './SiderbarMenuItems';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Vizualización',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Contador Client Side',
  },
];

export const Siderbar = () => {
  return (
    <section
      id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      {/* Logo */}
      <section id="logo" className="my-4 px-6">
        <h1 className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>Luis</span>
          <span className="text-blue-500">'s</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </section>

      {/* User Info */}
      <section id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Luis Carlos Lie Norzagaray</span>
        </a>
      </section>

      {/* Nav Options */}
      <section id="nav" className="w-full px-6">
        {menuItems.map(item => (
          <SiderbarMenuItems key={item.path} {...item} />
        ))}
      </section>
    </section>
  );
};
