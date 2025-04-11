import React, { useState, useContext, createContext } from 'react';
import CartItem from './components/CartItem';
import ProductGrid from './components/ProductGrid';
import { CartItem as CartItemType, Product } from './types/indexx';
import FilterPanel from './components/FilterPanel';
import ShoppingCart from './components/ShoppingCart';

const CartContext = createContext<{
  cart: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  React.useEffect(() => {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Sample products (unchanged)
const sampleProducts: Product[] = [
  // --- your full product list remains untouched ---
  {
    id: 1,
    name: 'iphone',
    price: 520.99,
    image: 'src/for/i.jpg',
    category: 'electronics',
    rating: 4.5,
    description: 'i phone 16 affordable',
  },
  {
    id: 1,
    name: 'washing machine',
    price: 700020.99,
    image: 'src/for/1.jpg',
    category: 'Electronics',
    rating: 5,
    description: '.fast,robust,no rusting',
  },
  {
    id: 1,
    name: 'JBL',
    price: 99.99,
    image: 'JBL.jpg',
    category: 'Electronics',
    rating: 3.5,
    description: 'JBL Headphones',
  },
  {
    id: 1,
    name: 'iphone',
    price: 520.99,
    image: 'src/for/i.jpg',
    category: 'electronics',
    rating: 4.5,
    description: 'i phone 16 affordable',
  },
  {
    id: 1,
    name: 'washing machine',
    price: 700020.99,
    image: 'src/for/1.jpg',
    category: 'Electronics',
    rating: 5,
    description: '.fast,robust,no rusting',
  },
  {
    id: 1,
    name: 'JBL',
    price: 99.99,
    image: 'JBL.jpg',
    category: 'Electronics',
    rating: 3.5,
    description: 'JBL Headphones',
  },
  {
    id: 1,
    name: 'high tech washing machine',
    price: 520.99,
    image: 'src/for/1.jpg',
    category: 'electronics',
    rating: 4.5,
    description: '.fast,robust,no rusting',
  },
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'legion.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  {
    id: 1,
    name: 'smart watch',
    price: 200.99,
    image: 'src/for/2.jpg',
    category: 'Shoes',
    rating: 4.5,
    description: 'ui,live update,gps',
  },
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'legion.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  {
    id: 1,
    name: 'iwatch',
    price: 1520.99,
    image: 'src/for/2.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'smart,gps,ui',
  },
  
  
  {
    id: 1,
    name: 'Monday package',
    price: 1520.99,
    image: 'src/for/3.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'hot sale',
  },
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/4.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'legion.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  
  {
    id: 1,
    name: 'smart watcch',
    price: 1520.99,
    image: 'src/for/2.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'ui,gps',
  },
  
  
  
  
  {
    id: 1,
    name: 'smart tv',
    price: 1520.99,
    image: 'src/for/7.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'gui,smart',
  },
  
  
  {
    id: 1,
    name: 'smart tv',
    price: 1520.99,
    image: 'src/for/6.jpg',
    category: 'Electronics',
    rating: 5,
    description: '',
  },
  
  
  
  {
    id: 1,
    name: 'Black friday',
    price: 1520.99,
    image: 'src/for/5.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'hot sale',
  },
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/2.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/4.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/6.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/2.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/7.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'legion.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/6.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/5.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/i.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/3.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/4.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'src/for/6.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
  
  
  
  {
    id: 1,
    name: 'Legion Gaming',
    price: 1520.99,
    image: 'legion.jpg',
    category: 'Electronics',
    rating: 5,
    description: 'Lenovo Gaming Laptop',
  },
  
];

interface FilterState {
  selectedCategories: string[];
  priceRange: [number, number];
  minRating: number;
}

const App: React.FC = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(sampleProducts);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [showCartPanel, setShowCartPanel] = useState(false);

  const applyFilters = (filters: FilterState) => {
    const { selectedCategories, priceRange, minRating } = filters;
    const filtered = sampleProducts.filter((product) => {
      const inCategory =
        selectedCategories.length === 0 ||
        (product.category && selectedCategories.includes(product.category));
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      const meetsRating = product.rating >= minRating;
      return inCategory && inPriceRange && meetsRating;
    });
    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setFilteredProducts(sampleProducts);
  };

  const searchProducts = (query: string) => {
    const filtered = sampleProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4 relative">
      {/* Header with Logo and Controls */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Logo Button */}
        <button
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-800 transition"
          onClick={() => window.location.reload()}
        >
          <img src="src/for/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="font-bold text-lg">Tech hub</span>
        </button>

        {/* Search and Cart/Filter Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Products"
            className="p-2 border rounded w-full md:w-96"
            onChange={(e) => searchProducts(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className="bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-600 whitespace-nowra"
            >
              {showFilterPanel ? "Hide Filters" : "Show Filters"}
            </button>
            <button
              onClick={() => setShowCartPanel(!showCartPanel)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 whitespace-nowrap"
            >
              Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {showFilterPanel && (
          <div className="w-full md:w-1/4">
            <FilterPanel
              categories={
                [...new Set(sampleProducts.map((p) => p.category).filter(Boolean))] as string[]
              }
              onFilterChange={applyFilters}
              onClearFilters={clearFilters}
            />
          </div>
        )}

        <div className={`${showFilterPanel ? 'w-full md:w-3/4' : 'w-full'}`}>
          <h2 className="text-xl font-semibold mb-4">Shop Our Products</h2>
          <p className="text-gray-600 mb-4">Showing {filteredProducts.length} products</p>
          <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
        </div>

        {/* Shopping Cart Side Panel */}
        {showCartPanel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowCartPanel(false)}></div>
        )}
        <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
                        ${showCartPanel ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Shopping Cart ({cart.length} items)</h2>
              <button 
                onClick={() => setShowCartPanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <ShoppingCart 
              cartItems={cart} 
              onUpdateQuantity={updateQuantity} 
              onRemove={removeFromCart} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Root: React.FC = () => (
  <div className="min-h-screen bg-[#f9f9f9] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
    <div className="container mx-auto p-4">
      <CartProvider>
        <App />
      </CartProvider>
    </div>
  </div>
);

export default Root;
