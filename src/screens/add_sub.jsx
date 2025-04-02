import { useState } from "react"
import { ArrowLeft, Calendar, ChevronDown, Plus } from "lucide-react"
import backgroundImage from "../assets/bg.png"
import { useNavigate } from "react-router-dom"


export default function AddSubscription() {
  const [formData, setFormData] = useState({
    name: "",
    provider: "",
    category: "",
    amount: "",
    billing_cycle: "",
    renewal_date: "",
    auto_renewal: false,
    trial: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen w-full bg-[#d3d0f5] px-[2vw] py-[2vw] sm:px-[3vw] md:px-[4vw]">
      {/* Back Button */}
      <button className="mb-[1.5rem] flex w-[3rem] h-[3rem] items-center justify-center rounded-full border border-gray-300 bg-white" onClick={
        ()=> window.history.back()
      }>
        <ArrowLeft className="w-[1.25rem] h-[1.25rem]" />
      </button>

      {/* Title */}
      <h1 className="mb-[2rem] text-center text-[2rem] font-medium text-black">
        Add New Subscription
      </h1>

      {/* Form Container */}
      <div className="mx-auto max-w-[36rem] rounded-xl bg-white/80 p-[5%] backdrop-blur-sm">
        <form className="flex flex-col gap-[1rem]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Subscription Name"
            className="w-full rounded-full bg-white p-[0.75em] px-[1em] text-gray-600 shadow-sm"
          />

          <input
            type="text"
            name="provider"
            value={formData.provider}
            onChange={handleChange}
            placeholder="Provider Name"
            className="w-full rounded-full bg-white p-[0.75em] px-[1em] text-gray-600 shadow-sm"
          />

          {/* Category Dropdown */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-full bg-white p-[0.75em] px-[1em] text-gray-600 shadow-sm"
          >
            <option value="" disabled>Select Category</option>
            <option value="STREAMING">Streaming</option>
            <option value="PRODUCTIVITY">Productivity</option>
            <option value="SAAS">SaaS</option>
            <option value="CLOUD_STORAGE">Cloud Storage</option>
            <option value="GAMING">Gaming</option>
            <option value="OTHER">Other</option>
          </select>

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="w-full rounded-full bg-white p-[0.75em] px-[1em] text-gray-600 shadow-sm"
          />

          {/* Billing Cycle Dropdown */}
          <select
            name="billing_cycle"
            value={formData.billing_cycle}
            onChange={handleChange}
            className="w-full rounded-full bg-white p-[0.75em] px-[1em] text-gray-600 shadow-sm"
          >
            <option value="" disabled>Select Billing Cycle</option>
            <option value="MONTHLY">Monthly</option>
            <option value="YEARLY">Yearly</option>
            <option value="WEEKLY">Weekly</option>
            <option value="ONE_TIME">One Time</option>
          </select>

          <input
            type="date"
            name="renewal_date"
            value={formData.renewal_date}
            onChange={handleChange}
            className="w-full rounded-full bg-white p-[0.75em] px-[1em] text-gray-600 shadow-sm"
          />

          {/* Auto Renewal and Trial Available */}
          <div className="flex gap-[1rem]">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="auto_renewal"
                checked={formData.auto_renewal}
                onChange={(e) => setFormData(prev => ({ ...prev, auto_renewal: e.target.checked }))}
              />
              Auto Renewal
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="trial"
                checked={formData.trial}
                onChange={(e) => setFormData(prev => ({ ...prev, trial: e.target.checked }))}
              />
              Trial Available
            </label>
          </div>

          {/* Submit Button */}
          <button className="rounded-full bg-purple-500 px-[2em] py-[0.75em] text-white shadow-sm hover:bg-purple-600">
            Save Subscription
          </button>
        </form>
      </div>
    </div>
  )
}
