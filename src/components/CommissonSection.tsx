import React from 'react'

const Commission = () => {
  return (
    <div className='bg-gradient-to-b from-white to-green-50'>
    <div className="max-w-4xl  mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-teal-300 mb-8 text-center">Commission Opportunities</h1>

      {/* Army */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-orange-700 border-b pb-2 mb-4">Commission in Army</h2>
        <ul className="space-y-4 text-slate-800">
          <li><strong>PMA Long Course:</strong> 17–22 years, FA/FSc (60%), or BA/BSc (23 years)</li>
          <li><strong>TCC:</strong> 17–21 years, FSc (65%)</li>
          <li><strong>Graduate Course:</strong> 20–25 years, BA/BSc (60%)</li>
          <li><strong>AMC (Medical Cadet):</strong> 17–21 years, FSc (70%)</li>
          <li><strong>Other:</strong> Short Service Commission, Lady Cadet Course, Mujahid Force</li>
        </ul>
      </section>

      {/* PAF */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 border-b pb-2 mb-4">Commission in PAF</h2>
        <ul className="space-y-4 text-slate-800">
          <li><strong>GDP:</strong> 16–22 years, FSc (60%)</li>
          <li><strong>CAE:</strong> 16–22 years, FSc (65%)</li>
          <li><strong>Admin & Special Duties:</strong> 16–22 years, FSc (60%)</li>
          <li><strong>Short Service Branches:</strong> Engineering, Medical, Education, Legal, Logistics, etc.</li>
        </ul>
      </section>

      {/* Navy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b pb-2 mb-4">Commission in Navy</h2>
        <ul className="space-y-4 text-slate-800">
          <li><strong>Regular Commission:</strong> 16.5–21 years, FSc (60%)</li>
          <li><strong>Short Service Commission:</strong> Details based on branch and qualification</li>
        </ul>
      </section>
    </div>
    </div>
  )
}

export default Commission
