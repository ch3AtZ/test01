import { useState, useEffect } from "react";

const TEST = () => {
    const [data, SetData] = useState([]);
    const [printedUserIds, setPrintedUserIds] = useState(new Set()); // Track printed userIds

    async function getData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const result = await response.json();

            SetData(result); // Set all the data
        } catch (error) {
            console.error('Error', error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {data.map((d, index) => {
                if (!printedUserIds.has(d.userId)) {
                    printedUserIds.add(d.userId); // Add the userId to the printed set
                    setPrintedUserIds(new Set(printedUserIds)); // Update the state to trigger re-render

                    return (
                        <div key={d.id}>
                            <h1>User ID: {d.userId}</h1>
                        </div>
                    );
                }
                return null; // Don't render if the userId is already printed
            })}
        </div>
    );
}

export default TEST;
