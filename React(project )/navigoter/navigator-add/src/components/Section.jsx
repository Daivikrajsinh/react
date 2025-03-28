import React from 'react'

const Section = () => {
  return (
    <>
       <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🚀',
              title: 'Fast Performance',
              description: 'Our platform is optimized for speed and efficiency.'
            },
            {
              icon: '🛡️',
              title: 'Secure Platform',
              description: 'Your data is protected with enterprise-grade security.'
            },
            {
              icon: '🔄',
              title: 'Easy Integration',
              description: 'Connect with your favorite tools in minutes.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
     <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
        <div className="space-y-8">
          {[
            {
              quote: "This service has completely transformed our workflow. Highly recommended!",
              author: "Sarah Johnson",
              role: "Marketing Director"
            },
            {
              quote: "The best solution we've found for our needs. Excellent customer support too.",
              author: "Michael Chen",
              role: "CTO"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  
    </>
   
  )
}

export default Section