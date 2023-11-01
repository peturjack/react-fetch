

export function Mybutton(Props:{onClick(): void}) {

    return (
        <>
            <div className="w-screen flex justify-center">
                <button onClick={Props.onClick} className="bg-red-700 hover:bg-red-800 ease-in-out duration-300 active:bg-red-900 py-2 px-6 font-bold rounded flex mt-4 text-white">Chuck jokes</button>
            </div>
        </>
    )
}