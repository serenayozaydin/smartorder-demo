'use client';
import { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({
    today: 0,
    pending: 0,
    completed: 0,
    revenue: 0
  });

  // Demo siparişleri
  const demoOrders = [
    {
      id: 1,
      table: 5,
      time: "14:32",
      items: ["Americano", "Cheesecake"],
      total: 70,
      status: "Hazırlanıyor",
      customer: "Müşteri #1"
    },
    {
      id: 2,
      table: 3,
      time: "14:28", 
      items: ["Cappuccino", "Croissant"],
      total: 55,
      status: "Hazır",
      customer: "Müşteri #2"
    },
    {
      id: 3,
      table: 7,
      time: "14:25",
      items: ["Latte", "Brownie", "Limonata"],
      total: 92,
      status: "Teslim Edildi", 
      customer: "Müşteri #3"
    }
  ];

  useEffect(() => {
    setOrders(demoOrders);
    
    // Stats hesapla
    const pending = demoOrders.filter(o => o.status === "Hazırlanıyor").length;
    const completed = demoOrders.filter(o => o.status === "Teslim Edildi").length;
    const revenue = demoOrders.reduce((sum, o) => sum + o.total, 0);
    
    setStats({
      today: demoOrders.length,
      pending,
      completed, 
      revenue
    });
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "Hazırlanıyor": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Hazır": return "bg-green-100 text-green-800 border-green-300";
      case "Teslim Edildi": return "bg-gray-100 text-gray-800 border-gray-300";
      default: return "bg-blue-100 text-blue-800 border-blue-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                👨‍🍳 Garson Paneli
              </h1>
              <p className="text-gray-600">Demo Cafe - Sipariş Yönetimi</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Bugün</p>
              <p className="text-xl font-bold text-blue-600">{new Date().toLocaleDateString('tr-TR')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <span className="text-2xl">📋</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Toplam Sipariş</p>
                <p className="text-2xl font-bold text-gray-900">{stats.today}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100">
                <span className="text-2xl">⏳</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hazırlanıyor</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tamamlanan</p>
                <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100">
                <span className="text-2xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Günlük Ciro</p>
                <p className="text-2xl font-bold text-purple-600">{stats.revenue}₺</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              🔔 Aktif Siparişler
            </h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {orders.map(order => (
              <div key={order.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-blue-600">
                          {order.table}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-bold text-gray-900">
                          Masa {order.table}
                        </p>
                        <span className="text-sm text-gray-500">•</span>
                        <p className="text-sm text-gray-500">{order.time}</p>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">
                        {order.items.join(", ")}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          {order.total}₺
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {order.status === "Hazırlanıyor" && (
                      <button 
                        onClick={() => updateOrderStatus(order.id, "Hazır")}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700"
                      >
                        ✅ Hazır
                      </button>
                    )}
                    {order.status === "Hazır" && (
                      <button 
                        onClick={() => updateOrderStatus(order.id, "Teslim Edildi")}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                      >
                        📤 Teslim Et
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <span className="text-2xl mr-3">ℹ️</span>
            <div>
              <h3 className="text-sm font-semibold text-blue-800">
                SmartOrder Garson Paneli Demo
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Bu demo panel gerçek siparişleri gösterir. Müşteriler QR menüden sipariş verdiğinde 
                buraya düşer ve garsonlar durumu güncelleyebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
