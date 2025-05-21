export default function BreakpointChecker() {
  return (
    <div className="fixed w-max right-1/2 translate-x-1/2 bg-black text-white top-1/2 z-50">
      <div className="block sm:hidden">Smallest Breakpoint onwards</div>
      <div className="hidden sm:block md:hidden">SM Breakpoint onwards</div>
      <div className="hidden md:block lg:hidden">MD Breakpoint onwards</div>
      <div className="hidden lg:block xl:hidden">LG Breakpoint onwards</div>
      <div className="hidden xl:block">XL Breakpoint onwards</div>
    </div>
  )
}