import React, { useState } from 'react';

function ImageSearch() {
    const [image, setImage] = useState(null);
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        setError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!image) {
            setError('Please upload an image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch('http://localhost:5000/api/search', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setResults(data.results);
            setError('');
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while searching.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Reverse Image Search</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200 transition cursor-pointer"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-custom-nav-text text-white py-3 rounded-lg shadow-lg hover:bg-gray-500 transition"
                    >
                        Search
                    </button>
                </form>
                {error && (
                    <div className="mt-4 text-red-500 text-sm text-center animate-bounce">
                        {error}
                    </div>
                )}
                <div className="mt-6">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            className="mb-2 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                        >
                            <a
                                href={result.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 font-semibold hover:underline"
                            >
                                {result.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageSearch;
