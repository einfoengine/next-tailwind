const index = () => {
  return (
    <>
      <nav className="sm:justify-center space-x-4 table m-auto">
        {[
            ['Home', '/dashboard'],
            ['Team', '/team'],
            ['Projects', '/projects'],
            ['Reports', '/reports'],
        ].map(([title, url], index) => (
            <a key={`mainNav-${index}`} href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
      </nav>
    </>
  )
}

export default index