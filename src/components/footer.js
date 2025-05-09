export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-foreground">
      <div className="mx-auto w-full container p-4 pb-8 pt-24">
        <div className="md:flex md:justify-between pb-24">
          <div className="mb-12 md:mb-0">
            <div className="text-left leading-tight text-4xl md:text-5xl font-pt-serif tracking-tight">
              From blueprint, <br />to <span className="italic">Brilliance.</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline mb-6 text-sm">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline mb-6 text-sm">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline mb-6 text-sm">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline mb-6 text-sm">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline mb-6 text-sm">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline mb-6 text-sm">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8 h-px bg-neutral-foreground w-full" />
        <div className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underlin">GJB Construction Ground Works</a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}