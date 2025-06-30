import Image from "next/image";
import Search from "./Components/Search/Search";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
        Resolve your Problems with
        <span className="relative whitespace-nowrap text-blue-600"> Rabbta</span>
      </h1>
      <Search />
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.</p>
      <div className="mt-10 flex justify-center gap-x-6">
        <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900" color="slate" href="/register">Get 6 months free</a>
        <a className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm bg-white text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-white active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300" color="slate" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <svg aria-hidden="true" className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z">
            </path>
          </svg>
          <span className="ml-3">Watch video</span>
        </a>
      </div>
    </div>
  );
}
