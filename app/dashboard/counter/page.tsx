import { CartCounter } from '@/app/shopping-cart';

const metadata = {
  title: 'Counter Page',
  description: 'A simple counter page to demonstrate state management in Next.js',
};

const CounterPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={0} />
    </section>
  );
};

export default CounterPage;
