function NavBar(){
    return(
        <div className="relative w-screen p-4 flex items-center justify-center"
        style={{
            background:`
            linear-gradient(135deg,
            white 50%,
            black 50%)
            `
        }}
        >
            <img 
            src="/img/cards.png" width={"80px"} alt="" />
            <h1 className="text-black font-bold 
                text-2xl
                sm:text-3xl
                md:text-3xl
                lg:text-3xl
                xl:text-4xl">Cartas Contra<span className="text-white">&nbsp;&nbsp;&nbsp;a Humanidade</span></h1>
                <img
            src="/img/cards-white.png" width={"80px"} alt="" />
        </div>
    )
}

export default NavBar;