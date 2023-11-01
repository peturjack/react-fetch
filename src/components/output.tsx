type Props = {
    chuckText: string,
}

export function Myoutput({chuckText}:Props) {
    
    return(
        <>
            <div className="w-screen flex justify-center">
            <div className="h-30 w-1/4 bg-white border-none flex rounded shadow-md">
                <p className="p-3">{chuckText}</p>
            </div>
            </div>
        </>
    )
}