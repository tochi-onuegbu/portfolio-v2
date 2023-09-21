import DarkModeButton from "~/components/DarkModeButton";



export default function Blog() {
    return (
        <div className="h-screen dark:bg-gray-900 bg-stone-50 text-white w-screen p-4 fixed overflow-y-auto">

            <div className="mt-2 pt-16 pl-24">
                <DarkModeButton />

            </div>

            <div className="!pt-0 !mt-0 flex justify-center items-center">
                <h1 className="text-slate-800 dark:text-white prose prose-h1 subpixel-antialiased leading-tight text-3xl lg:text-5xl font-bold">
                    coming soon!
                </h1>
            </div>
        </div>






    )
}