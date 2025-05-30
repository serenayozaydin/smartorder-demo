'use client';
import { useState } from 'react';

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  const menuItems = [
    // Kahveler
    { 
      id: 1, 
      name: "Americano", 
      price: 25, 
      category: "☕ Sıcak İçecekler", 
      desc: "Klasik siyah kahve", 
      emoji: "☕",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop&auto=format"
    },
    { 
      id: 2, 
      name: "Cappuccino", 
      price: 30, 
      category: "☕ Sıcak İçecekler", 
      desc: "Sütlü köpüklü kahve", 
      emoji: "☕",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=200&fit=crop&auto=format"
    },
    { 
      id: 3, 
      name: "Latte", 
      price: 32, 
      category: "☕ Sıcak İçecekler", 
      desc: "Hafif sütlü kahve", 
      emoji: "☕",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&auto=format"
    },
    { 
      id: 4, 
      name: "Espresso", 
      price: 20, 
      category: "☕ Sıcak İçecekler", 
      desc: "Yoğun kahve", 
      emoji: "☕",
      image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=300&h=200&fit=crop&auto=format"
    },
    
    // Soğuk İçecekler
    { 
      id: 5, 
      name: "Ice Coffee", 
      price: 28, 
      category: "🧊 Soğuk İçecekler", 
      desc: "Buzlu kahve", 
      emoji: "🧊",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=200&fit=crop&auto=format"
    },
    { 
      id: 6, 
      name: "Frappuccino", 
      price: 35, 
      category: "🧊 Soğuk İçecekler", 
      desc: "Blended kahve", 
      emoji: "🧊",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop&auto=format"
    },
    { 
      id: 7, 
      name: "Limonata", 
      price: 22, 
      category: "🧊 Soğuk İçecekler", 
      desc: "Taze sıkılmış limon", 
      emoji: "🍋",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop&auto=format"
    },
    
    // Tatlılar
    { 
      id: 8, 
      name: "Cheesecake", 
      price: 45, 
      category: "🍰 Tatlılar", 
      desc: "Ev yapımı cheesecake", 
      emoji: "🍰",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop&auto=format"
    },
    { 
      id: 9, 
      name: "Tiramisu", 
      price: 48, 
      category: "🍰 Tatlılar", 
      desc: "İtalyan tatlısı", 
      emoji: "🍰",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop&auto=format"
    },
    { 
      id: 10, 
      name: "Brownie", 
      price: 38, 
      category: "🍰 Tatlılar", 
      desc: "Çikolatalı brownie", 
      emoji: "🍫",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop&auto=format"
    },
    
    // Aperatifler
    { 
      id: 11, 
      name: "Croissant", 
      price: 25, 
      category: "🥐 Aperatifler", 
      desc: "Tereyağlı croissant", 
      emoji: "🥐",
      image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5d?w=300&h=200&fit=crop&auto=format"
    },
    { 
      id: 12, 
      name: "Sandviç", 
      price: 35, 
      category: "🥐 Aperatifler", 
      desc: "Tost sandviç", 
      emoji: "🥪",
      image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop&auto=format"
    },
  ];

  const categories = [...new Set(menuItems.map(item => item.category))];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const placeOrder = () => {
    setShowOrderSuccess(true);
  };

  if (showOrderSuccess) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md w-full">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-green-600 mb-2">Siparişiniz Alındı!</h1>
          <p className="text-gray-600 mb-4">Masa 5 - Toplam: {getTotalPrice()}₺</p>
          <p className="text-sm text-gray-500 mb-6">Garson paneline iletildi. Hazırlanmaya başladı!</p>
          <div className="mb-6 text-4xl animate-bounce">📱➡️👨‍🍳</div>
          
          {/* Manuel Kapatma Butonu */}
          <button 
            onClick={() => {
              setShowOrderSuccess(false);
              setCart([]);
            }}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            🏠 Yeni Sipariş Ver
          </button>
          
          {/* Demo için küçük bilgi */}
          <p className="text-xs text-gray-400 mt-4">
            Demo: Gerçek sistemde bu bilgi garson paneline gider
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            🏪 Demo Cafe
          </h1>
          <p className="text-blue-100 text-sm mt-1">📍 Masa 5 - QR Menü Sistemi</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4">
        {/* Sepet Özeti */}
        {cart.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              🛒 Sepetiniz ({cart.length} ürün)
            </h3>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center py-1 text-sm">
                <span>{item.emoji} {item.name} x{item.quantity}</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.price * item.quantity}₺</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:bg-red-50 rounded px-1"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t pt-2 mt-2 flex justify-between items-center">
              <span className="font-bold text-lg">Toplam: {getTotalPrice()}₺</span>
              <button 
                onClick={placeOrder}
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                🍽️ Sipariş Ver
              </button>
            </div>
          </div>
        )}

        {/* Menu Categories */}
        {categories.map(category => (
          <div key={category} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 bg-white rounded-lg p-3 shadow">
              {category}
            </h2>
            
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === category)
                .map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                    {/* Ürün Fotoğrafı */}
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.emoji}</span>
                          <div>
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                        <span className="text-xl font-bold text-blue-600">{item.price}₺</span>
                      </div>
                      
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        🛒 Sepete Ekle
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Demo Notice */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 border-l-4 border-yellow-500 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 flex items-center gap-2">
            <span className="text-lg">🚀</span>
            <span><strong>DEMO:</strong> Bu SmartOrder QR menü sisteminin canlı önizlemesidir. Gerçek sipariş işlemini deneyimleyebilirsiniz!</span>
          </p>
        </div>
      </div>
    </div>
  );
}