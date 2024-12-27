import React, { useState, useEffect } from 'react';

const Suggestions = () => {
    const [data, setData] = useState([]); 
    const [suggestion, setSuggestions] = useState("");
    const [list, setList] = useState([]);

    const handleSuggestion = (e) => {
        setSuggestions(e.target.value);
    };

    const handleList = (item) => {
        setList([...list, item]); // Add the selected item to the list
    };

    useEffect(() => {
        if (suggestion.length > 1) {
            fetchData();
        }
    }, [suggestion]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.frontendeval.com/fake/food/${suggestion}`); 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <input
                className="border border-black p-2 mb-4"
                placeholder="Type food"
                type="text"
                value={suggestion} // Controlled input
                onChange={handleSuggestion}
            />
            <div>
                {data.map((item, index) => (
                    <div key={index} className="bg-blue-300 m-2 p-2 flex justify-between">
                        <div>{item}</div>
                        <button
                            className="ml-6 bg-gray-600 text-white p-2 border rounded-md"
                            onClick={() => handleList(item)} // Pass the item to the function
                        >
                            Add to List
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <h1 className="text-xl font-bold mt-6">Shopping List</h1>
                <div>
                    {list.map((item, index) => (
                        <div key={index} className="bg-green-200 m-2 p-2 rounded-md">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
