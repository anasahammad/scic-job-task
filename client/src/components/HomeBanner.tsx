import bannerImg from "../assets/banner-image.png"

const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="mb-8 md:mb-0 text-center">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Summer Sale!</h1>
                <p className="text-lg md:text-xl text-white mb-2">Enjoy discount on selected items</p>
                <p className="text-2xl md:text-5xl text-yellow-400 font-bold capitalize">Get 50% Off</p>
            </div>
            <div className="w-1/3 relative aspect-video">
                <img
                src={bannerImg}
                alt="Banner Image"
                className="object-contain"
                />
            </div>
        </div>
    </div>
    );
};

export default HomeBanner;