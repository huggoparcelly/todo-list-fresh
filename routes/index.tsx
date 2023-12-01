import Todos from "../islands/Todos.tsx";

export default function Home() {
    return(
        <body class="bg-gray-200">
            <div class="mt-10 px-5 rounded bg-white mx-auto flex max-w-screen-md flex-col justify-center py-12">

                <div class="mx-auto">
                    <h2 class="text-2x1 font-bold mb-5 text-center">Todo List with Deno Fresh!</h2>
                    <img class="max-auto" src="/logo.svg" alt="logo" />
                </div>
            </div>

            <Todos />
        </body>
    )
}