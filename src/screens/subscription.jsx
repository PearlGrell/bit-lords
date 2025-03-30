import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionDashboard = () => {
  const cardData = Array(15).fill({
    title: 'Netflix',
    user: 'John',
    plan: '199 /-month',
    sharedWith: ['Shreyansh', 'Kushagra', 'Aryan'],
    addUser: 'Shaurya',
  });

  const nav = useNavigate()

  return (
    <div className="min-h-screen w-full bg-[#d3d0f5] p-[2vw] font-urbanist flex flex-col overflow-hidden text-black">
      {/* Header */}
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-black">Hey John!</h1>
        <div className="flex items-center gap-2">
          <nav className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-white text-black border-none cursor-pointer" onClick={()=>nav('/')}>
              Dashboard
            </button>
            <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-black text-white border-none cursor-pointer">
              Subscriptions
            </button>
            <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-white text-black border-none cursor-pointer">
              History
            </button>
            <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-white text-black border-none cursor-pointer" onClick={()=>nav('/insights')}>
              Insights <span>↗</span>
            </button>
          </nav>
          <button className="ml-2 w-10 h-10 rounded-full bg-white flex items-center justify-center border-none cursor-pointer text-[clamp(1rem,2.5vw,1.5rem)]">
            👤
          </button>
        </div>
      </header>

      {/* Subscriptions Section */}
      <div className="flex-1 flex flex-col">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-black">Subscriptions</h2>
          <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-white text-black border-none cursor-pointer" onClick={
            ()=>nav('/add')
          }>
            Add Subscription <span className="text-xl">+</span>
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-1">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white rounded-xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[clamp(1rem,3vw,1.25rem)] font-medium">{card.title}</h3>
                <div className="w-[15%] max-w-12 aspect-square rounded-full bg-gray-200"></div>
              </div>
              <div className="mb-2 text-[clamp(0.875rem,2vw,1rem)]">
                <p>{card.user}</p>
                <p className="text-gray-500">Current Plan: {card.plan}</p>
              </div>
              <div className="flex gap-2 mb-3">
                <button className="px-3 py-1 rounded-full text-[clamp(0.75rem,1.5vw,0.875rem)] bg-green-500 text-white border-none cursor-pointer">
                  Auto renew
                </button>
                <button className="px-3 py-1 rounded-full text-[clamp(0.75rem,1.5vw,0.875rem)] bg-gray-200 text-gray-600 border-none cursor-pointer">
                  Trial
                </button>
              </div>
              <div className="mb-2">
                <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-gray-500">Share with:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {card.sharedWith.map((name, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full bg-gray-200 text-[clamp(0.75rem,1.5vw,0.875rem)]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[clamp(0.75rem,1.5vw,0.875rem)]">{card.addUser}</span>
                <button className="w-5 h-5 rounded-full border border-gray-300 bg-white flex items-center justify-center cursor-pointer text-[clamp(0.75rem,1.5vw,0.875rem)]">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDashboard;