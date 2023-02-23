export default function Station({ data }) {
    const color = `bg-[#${data.color}]`;
    //const color = "bg-[#31a1bd]";
    return (
        <div
            className="flex h-32 w-fit "
            style={{ backgroundColor: `#${data.color}` }}
        >
            <img src={data.image} alt="Channels logo" className="h-32 w-32 " />
            <div className="w-1 opacity-20 h-28 bg-black self-center rounded-full"></div>
            <div className={` p-4 flex justify-between flex-col`}>
                <h2 className="text-2xl font-semibold">{data.name}</h2>
                <audio controls>
                    <source src={data.liveaudio.url} type="audio/mpeg" />
                </audio>
            </div>
        </div>
    );
}
