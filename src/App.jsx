import { useState } from 'react'
import { motion } from 'framer-motion'

// ✅ Import images from src/assets
import logo from './assets/logo.png'
import sClass from './assets/s-class.jpg'
import vClass from './assets/v-class.jpg'
import rangeRover from './assets/range-rover.jpg'

export default function App() {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [datetime, setDatetime] = useState('')
  const [passengers, setPassengers] = useState('1')

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `New Transcend booking request:%0APickup: ${pickup}%0ADrop-off: ${dropoff}%0ADate & Time: ${datetime}%0APassengers: ${passengers}`
    window.open(`https://wa.me/447301905072?text=${message}`, '_blank')
  }

  const cars = [
    { name: 'Mercedes S-Class', desc: 'Luxury sedan with premium comfort for executive travel.', img: sClass },
    { name: 'Mercedes V-Class', desc: 'Spacious MPV for group travel or extra luggage.', img: vClass },
    { name: 'Range Rover', desc: 'Iconic SUV offering luxury and presence.', img: rangeRover },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <a href="#">
          <img src={logo} alt="Transcend Logo" className="h-10" />
        </a>
        <a href="#booking" className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600">
          Get a Quote
        </a>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-900 py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Luxury Chauffeur Service
        </motion.h1>
        <p className="text-lg md:text-xl mb-6">
          Professional drivers. Premium vehicles. Exceptional service.
        </p>
        <a href="#booking" className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-600">
          Get a Quote
        </a>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 bg-gray-50 p-6 rounded-2xl shadow-md">
          <input type="text" placeholder="Pickup location" required value={pickup} onChange={(e) => setPickup(e.target.value)} className="p-3 border rounded-xl" />
          <input type="text" placeholder="Drop-off location" required value={dropoff} onChange={(e) => setDropoff(e.target.value)} className="p-3 border rounded-xl" />
          <input type="datetime-local" required value={datetime} onChange={(e) => setDatetime(e.target.value)} className="p-3 border rounded-xl" />
          <input type="number" placeholder="Number of passengers" required value={passengers} onChange={(e) => setPassengers(e.target.value)} className="p-3 border rounded-xl" />
          <button type="submit" className="bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700">
            Send via WhatsApp
          </button>
        </form>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Airport Transfers', 'Weddings', 'Corporate'].map((title, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">
                {title === 'Airport Transfers'
                  ? 'Seamless travel to and from all major airports.'
                  : title === 'Weddings'
                  ? 'Arrive in style on your special day.'
                  : 'Professional travel for business executives.'}
              </p>
              <a href="#booking" className="text-blue-600 font-medium hover:underline">
                Book this service →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Fleet</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.desc}</p>
                <a href="#booking" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-600">
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 py-6 text-center">
        <p>© {new Date().getFullYear()} Transcend. All rights reserved.</p>
      </footer>
    </div>
  )
}
