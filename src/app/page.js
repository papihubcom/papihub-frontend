"use client";
import NavMobile from "@/app/components/nav/mobile/nav-mobile";
import NavDesktop from "@/app/components/nav/desktop/nav-desktop";
import Footer from "@/app/components/footer/footer";

const navigation = [
  {name: '首页', href: '#'},
  {name: '网站配置', href: '#'},
  {name: '使用接口', href: '#'},
]
export default function Home() {

  return (
      <div className="bg-white">
        {/* Header */}
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8"
               aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">PapiHub</span>
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <NavMobile data={navigation}/>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <NavDesktop data={navigation}/>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#"
                 className="text-sm font-semibold leading-6 text-white">
                登录 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>

        </header>

        <main>
          {/* Hero section */}
          <div
              className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
              <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    PapiHub 私有接口中心
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    部署在本地的私有接口中心，把任何网站转换成标准API接口。
                  </p>
                  <div
                      className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                    >
                      立即开始
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <Footer/>
      </div>
  )
}
