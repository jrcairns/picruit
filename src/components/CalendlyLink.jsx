import clsx from 'clsx'

export function CalendlyLink({ className = '', color = 'black' }) {
  return (
    <a
      rel="noreferrer"  
      target="_blank"
      href="https://calendly.com/isaacarch"
      aria-label="Schedule a meeting"
      className={clsx(
        'rounded-lg transition-colors flex items-center py-2 px-4 font-semibold',
        className,
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      Schedule A Call
    </a>
  )
}
