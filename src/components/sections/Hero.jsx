function Hero() {
    return (
        <div className="relative flex items-center justify-center min-h-screen px-4 md:px-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-blush rounded-full blur-3xl opacity-70" />
            <div className="absolute top-1/3 right-0 w-80 h-80 md:w-[26rem] md:h-[26rem] bg-sky rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-20 left-1/4 md:bottom-32 md:left-1/3 w-64 h-64 md:w-96 md:h-96 bg-lavender rounded-full blur-3xl opacity-70" />
            <p className="z-10 text-center max-w-xl text-2xl">
                I'm a <span className="font-semibold">full-stack developer</span> who blends creativity with logic. I focus on ✦ <span className="font-semibold">designing thoughtful user experiences</span>, ✧ engineering robust systems, and ❋ <span className="font-semibold">crafting digital stories that connect</span>.
            </p>
        </div>
    )
}

export default Hero
