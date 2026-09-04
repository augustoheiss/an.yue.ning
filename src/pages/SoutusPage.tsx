import { useEffect } from 'react'
import App from '../App'

export default function SoutusPage() {
  useEffect(() => {
    document.title = 'Método Soutus — Bio-Integração | An.Yue.Ning'
    // Smooth scroll to #soutus section on the unified page
    const elem = document.getElementById('soutus')
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return <App />
}
