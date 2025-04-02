import React from 'react';
import { useNavigate } from 'react-router-dom';

const Insights = () => {

    const nav = useNavigate()
  const insightsData = [
    {
      title: 'Netflix',
      plan: '199 /-month',
      users: 3,
      insight: 'Cost per user is 49.75 INR. Consider if the plan tier meets everyone\'s needs. A higher tier might be more economical if usage is constrained.',
    },
    {
      title: 'Spotify',
      plan: '149 /-month',
      users: 1,
      insight: 'Cost per user is 74.5 INR. If all users reside at the same address and are eligible, a Spotify Premium Family plan could be a more cost-effective option.',
    },
    {
      title: 'Amazon Prime',
      plan: '1499 /-month',
      users: 4,
      insight: 'Yearly cost is 1499 INR. Monthly equivalent is 124.92 INR. Cost per user is 24.98 INR. Seems efficient for shared use.',
    },
    {
      title: 'YouTube Premium',
      plan: '129 /-month',
      users: 2,
      insight: 'Cost per user is 43 INR. Consider if the plan tier meets everyone\'s needs. A higher tier might be more economical if usage is constrained.',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#d3d0f5] p-[2vw] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-black">Hey John!</h1>
        <div className="flex items-center gap-2">
          <nav className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-white text-black border-none cursor-pointer" onClick={()=>nav('/')}>
              Dashboard
            </button>
            <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-white text-black border-none cursor-pointer" onClick={()=>nav('/subscriptions')}>
              Subscription
            </button>
            <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-white text-black border-none cursor-pointer">
              History
            </button>
            <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-black text-white border-none cursor-pointer">
              Insights <span>↗</span>
            </button>
          </nav>
          <button className="ml-2 w-10 h-10 rounded-full bg-white flex items-center justify-center border-none cursor-pointer text-[clamp(1rem,2.5vw,1.5rem)]">
            👤
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">Insights</h2>
          <button className="px-4 py-2 rounded-full text-[clamp(0.875rem,2vw,1rem)] font-medium bg-white text-black border-none cursor-pointer">
           Get Latest Insights
          </button>
        </div>

        {/* Subscription Cards */}
        <div className="space-y-6 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {insightsData.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 rounded-xl p-6"
              style={{ marginBottom: 0 }} // Override Tailwind's margin-bottom
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="text-gray-600">Current Plan</span>
                <span>: {item.plan}</span>
                <span className="text-gray-600">Current Users</span>
                <span>: {item.users}</span>
                <span className="text-gray-600">Insight</span>
                <span>: {item.insight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;