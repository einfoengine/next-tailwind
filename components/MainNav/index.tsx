import Link from "next/link"
import styles from "../../styles/MainNav.module.css"
const index = () => {
  return (
    <>
      <nav className={styles.exbg}>
        {[
            ['Home', '/'],
            ['Biodata', '/biodata'],
        ].map(([title, url], index) => (
            <a key={`mainNav-${index}`} href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
      </nav>
    </>
  )
}

export default index