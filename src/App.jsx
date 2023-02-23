import { useState, useEffect } from "react";
import Station from "./Station";

function App() {
    const [channels, setChannels] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getApiData();
    }, []);

    async function getApiData() {
        const response = await fetch(
            "https://api.sr.se/api/v2/channels?format=json&size=100"
        );
        const data = await response.json();
        console.log(data);
        setChannels(data.channels);
    }

    return (
        <div className="min-h-screen p-4">
            <h2 className="text-gray-900 font-semibold">Search</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 text-lg border-black border-2 mb-4"
            />
            <div className="flex flex-col gap-4">
                {/* {channels.length > 0 ? (
                    channels.map((channel) => {
                        return <Station key={channel.id} data={channel} />;
                    })
                ) : (
                    <div> Stations loading...</div>
                )} */}
                {channels.length > 0 ? (
                    channels
                        .filter((channel) => {
                            return channel.name
                                .toUpperCase()
                                .includes(search.toUpperCase());
                        })
                        .map((channel) => {
                            return <Station key={channel.id} data={channel} />;
                        })
                ) : (
                    <div className="text-4xl text-gray-900">
                        Stations loading ...
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
