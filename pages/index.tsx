import Link from "next/link";
import Layout from "../components/Layout";
import ThemeSwitchButton from "../components/ThemeSwitchButton";
import ThemeSwitchOption from "../components/ThemeSwitchOption";


export default function Home() {
  return (
    <Layout>
      <div className="justify-center text-center flex mt-16">
        <ThemeSwitchButton />
      </div>
      <div className="bg-neutral-200 dark:bg-neutral-800 py-12 px-6 mt-16 rounded-lg justify-center text-center">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">Dark Mode</h1>
        <p className="text-lg font-normal text-neutral-900 dark:text-neutral-300 mt-4"> Switch Button de ejemplo de como implementar un Dark Mode con Nextjs y Tailwind css</p>
      </div>

      <button className="mt-16 justify-center text-center items-center gap-6 md:gap-10 flex m-auto">
        <Link href="https://www.humbersanchez.com/" className="px-8 py-4 text-xl font-medium text-white bg-emerald-500 rounded-lg hover:ring-4 ring-emerald-300">

          Ver más proyectos
        </Link>

        <ThemeSwitchOption />
      </button>

      

    </Layout>
  )
}
