const principles = [
  {
    title: 'Never Assume',
    desc: 'Ask, argue, think, discuss — before any plan gets made.',
  },
  {
    title: 'Build for Long-Term Value, Not Just the Ask',
    desc: 'Not everything a client requests needs to be built. Only what makes the product stronger long-term gets prioritized — feasibility and budget decide how, not whether.',
  },
  {
    title: 'Evidence Changes the Plan',
    desc: 'Ship in milestones, test at each one, and adjust scope, timeline, or architecture based on what production shows — not what the original plan assumed.',
  },
  {
    title: 'Protect Production First',
    desc: 'When production breaks, revert immediately. Root cause and prevention happen after, in staging.',
  },
]

export default function EngineeringPhilosophy() {
  return (
    <section className="py-8 md:py-16 border-b border-gray-800">
      <p className="text-amber-500 text-sm font-mono mb-4">How I Work</p>
      <h2 className="text-3xl font-bold text-white mb-10">Engineering Philosophy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {principles.map((principle) => (
          <div key={principle.title} className="bg-gray-800 border border-gray-700 hover:border-amber-500 p-6 rounded-lg transition">
            <h3 className="text-white font-semibold mb-2">{principle.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{principle.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
