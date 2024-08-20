"use client"

import { useState } from 'react';
const CategorySelector = () => {
    const categories = ['Lifestyle', 'Make_Chrome_Yours', 'Productivity'];
    const subcategories = {
        Lifestyle: [
            "Art and Design",
            "Entertainment",
            "Games",
            "Household",
            "Just for fun",
            "News and Weather",
            "Shopping",
            "Social Networking",
            "Travel",
            "Wellbeing"
        ],
        Make_Chrome_Yours: [
            "Accessibility",
            "Functionality and UI",
            "Privacy and Security"
        ],
        Productivity: [
            "Communication",
            "Developer Tools",
            "Education",
            "Tools",
            "Workflow and planning"
        ],
    };

    const data = [
        {
            Art_and_Design: [
                { name: 'Imagus', rating: 4.5, instals: "500,000", lastUpdated: '4/16/2020' }
            ]
        },

        {
            Entertainment: [
                { name: 'Mapissimo', rating: 3, instals: "402", lastUpdated: '8/10/2024' },
            ]
        },

        {
            Games: [
                { name: '2048 Game', rating: 4.9, instals: "1,000,000", lastUpdated: '7/26/2024' },
            ]
        },

        {
            Household: [
                { name: 'Remix for Chrome - CSA Recipe Saver', rating: 5, instals: "0", lastUpdated: '9/5/2021' },
            ]
        },

        {
            Just_for_fun: [
                { name: 'Super Mania Ball', rating: 2.3, instals: "3,000", lastUpdated: '6/5/2018' },
            ]
        },

        {
            News_and_Weather: [
                { name: 'Feedly Notifier', rating: 4.5, instals: "30,000", lastUpdated: '7/24/2023' },
            ]
        },

        {
            Shopping: [
                { name: 'Vivino Wine Ratings', rating: 1, instals: "115", lastUpdated: '7/25/2020' },
            ]
        },

        {
            Social_Networking: [
                { name: 'QRify', rating: 5, instals: "43", lastUpdated: '8/12/2017' },
            ]
        },

        {
            Travel: [
                { name: 'Tab with A view', rating: 4.9, instals: "2,000", lastUpdated: '5/16/2024' },
            ]
        },

        {
            Wellbeing: [
                { name: 'PurposeTab: Your daily focus on each new tab', rating: 4.9, instals: "1,000", lastUpdated: '4/21/2024' },
            ]
        },

        {
            Communication: [
                { name: 'dotalk', rating: 5, instals: "7", lastUpdated: '6-Aug-21' },
            ]
        },

        {
            Developer_Tools: [
                { name: 'JSON Viewer', rating: 4.5, instals: "1,000,000", lastUpdated: '12/23/2020' },
            ]
        },

        {
            Education: [
                { name: 'Pencil Explore for Chrome', rating: 5, instals: "898", lastUpdated: '6/2/2022' },
            ]
        },

        {
            Tools: [
                { name: 'Glocal', rating: 4.1, instals: "8", lastUpdated: '2/4/2021' },
            ]
        },

        {
            Workflow_and_planning: [
                { name: 'Unhook - Remove YouTube Recommended & Shorts', rating: 4.9, instals: "600,000", lastUpdated: '4/12/2024' },
            ]
        },

        {
            Privacy_and_Security: [
                { name: 'uBlock Origin', rating: 47, instals: "34,000,000", lastUpdated: '8/5/2024' },
            ]
        },

        {
            Accessibility: [
                { name: 'AutoHideDownloadsBar', rating: 4.9, instals: "1,000", lastUpdated: '7/7/2022' },
            ]
        },

        {
            Functionality_and_UI: [
                { name: 'Free VPN Chrome extension - Best VPN by uVPN', rating: 4.6, instals: "1,000,000", lastUpdated: '6/29/2023' },
            ]
        },

    ];

    const stats = {
        Art_and_Design: {
            count: 485,
            oldest: '9/25/2012',
            biggest_installs: '2,000,000',
            smallest_rating: 0,
        },
        Entertainment: {
            count: 428,
            oldest: '10/27/2012',
            biggest_installs: '200,000',
            smallest_rating: 0,
        },
        Games: {
            count: 16,
            oldest: '10/27/2012',
            biggest_installs: '1,000,000',
            smallest_rating: 4.1,
        },
        Household: {
            count: 25,
            oldest: '7/18/2014',
            biggest_installs: '9,000',
            smallest_rating: 1.6,
        },
        Just_for_fun: {
            count: 597,
            oldest: '7/3/2016',
            biggest_installs: '2,000,000',
            smallest_rating: 1,
        },
        News_and_Weather: {
            count: 991,
            oldest: '4/24/2012',
            biggest_installs: '2,000,000',
            smallest_rating: 0,
        },
        Shopping: {
            count: 531,
            oldest: '10/27/2012',
            biggest_installs: '300,000',
            smallest_rating: 1,
        },
        Social_Networking: {
            count: 585,
            oldest: '5/23/2012',
            biggest_installs: '4,000,000',
            smallest_rating: 1,
        },
        Travel: {
            count: 22,
            oldest: '4/8/2014',
            biggest_installs: '2,000',
            smallest_rating: 1,
        },
        Wellbeing: {
            count: 29,
            oldest: '9/3/2012',
            biggest_installs: '50,000',
            smallest_rating: 2.7,
        },
        Communication: {
            count: 37,
            oldest: '2/24/2024',
            biggest_installs: '100,000',
            smallest_rating: 4.3,
        },
        Developer_Tools: {
            count: 549,
            oldest: '7/28/2016',
            biggest_installs: '2,000,000',
            smallest_rating: 1,
        },
        Education: {
            count: 103,
            oldest: '12/3/2015',
            biggest_installs: '1,000,000',
            smallest_rating: 1.1
        },
        Tools: {
            count: 171,
            oldest: '10/25/2016',
            biggest_installs: '300,000',
            smallest_rating: 2
        },
        Workflow_and_planning: {
            count: 354,
            oldest: '9/26/2017',
            biggest_installs: '800,000',
            smallest_rating: 1,
        },
        Privacy_and_Security: {
            count: 46,
            oldest: '2/13/2018',
            biggest_installs: '34,000,000',
            smallest_rating: 4.5,
        },
        Accessibility: {
            count: 553,
            oldest: '12/17/2016',
            biggest_installs: '300,000',
            smallest_rating: 1,
        },
        Functionality_and_UI: {
            count: 99,
            oldest: '7/9/2013',
            biggest_installs: '1,000,000',
            smallest_rating: 0,
        },
    }

    const [category, setCategory] = useState('Productivity');
    const [subcategory, setSubcategory] = useState('Developer Tools');
    const [showTable, setShowTable] = useState(true);

    const handleCategoryChange = (category: string) => {
        setCategory(category);
        setSubcategory(subcategories[category as keyof typeof subcategories][0]); // Set subcategory to the first item when category changes
    };

    const handleSubcategoryChange = (subcategory: string) => {
        setSubcategory(subcategory);
    };

    const getDataForSubcategory = (subcategory: string): any[] => {
        const formattedSubcategory = subcategory.replace(/ /g, '_');

        const subcategoryData = data[formattedSubcategory as keyof typeof data];

        if (Array.isArray(subcategoryData)) {
            return subcategoryData;
        }

        return [];
    };

    const getStatsForSubcategory = (subcategory: string): any => {
        const formattedSubcategory = subcategory.replace(/ /g, '_');
        return stats[formattedSubcategory as keyof typeof stats];
    };

    return (
        <>
            <div className="flex flex-col col-4 justify-center items-center">
                <div className="flex flex-wrap justify-center">
                    {categories.map((c) => (
                        <button
                            key={c}
                            className={`p-2 border border-gray-300 mx-2 my-2 shadow-md rounded-md ${c === category ? 'bg-[#4988f5] text-white hover:bg-blue-600' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                            onClick={() => handleCategoryChange(c)}
                        >
                            {c.replace(/_/g, ' ')}
                        </button>
                    ))}
                </div>
                {category && (
                    <div className="flex flex-wrap mt-4 justify-center">
                        {subcategories[category as keyof typeof subcategories].map((sc) => (
                            <button
                                key={sc}
                                className={`p-2 border border-gray-300 rounded-md mx-2 my-2 ${sc === subcategory ? 'bg-[#4988f5] text-white hover:bg-blue-600' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                                onClick={() => handleSubcategoryChange(sc)}
                            >
                                {sc.replace(/_/g, ' ')}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {showTable && (
                <div className="mt-12">
                    <div className="flex flex-wrap justify-center">
                        <div className="p-2 border border-gray-300 bg-[#dc4e41] min-w-48 rounded-md shadow-md mx-2 my-2 lg:mb-0 md:mb-4 sm:mb-4">
                            <p className='text-center text-xl font-bold'>{getStatsForSubcategory(subcategory).smallest_rating}</p>
                            <h3 className="text-md text-center">Smallest Rating</h3>
                        </div>

                        <div className="p-2 border border-gray-300 bg-[#4988f5] min-w-48 rounded-md shadow-md mx-2 my-2 lg:mb-0 md:mb-4 sm:mb-4">
                            <p className='text-center text-xl font-bold'>{getStatsForSubcategory(subcategory).count}</p>
                            <h3 className="text-md text-center">Rows</h3>
                        </div>

                        <div className="p-2 border border-gray-300 bg-[#ffce42] min-w-48 rounded-md shadow-md mx-2 my-2 lg:mb-0 md:mb-4 sm:mb-4">
                            <p className='text-center text-xl font-bold'>{getStatsForSubcategory(subcategory).oldest}</p>
                            <h3 className="text-md text-center">Oldest Update</h3>
                        </div>

                        <div className="p-2 border border-gray-300 rounded-md bg-[#21a15f] min-w-48 shadow-md mx-2 my-2 lg:mb-0 md:mb-4 sm:mb-4">
                            <p className='text-center text-xl font-bold'>{getStatsForSubcategory(subcategory).biggest_installs}</p>
                            <h3 className="text-md text-center">Biggest Install</h3>
                        </div>
                    </div>
                    <div className="relative mt-12">
                        <table className="min-w-full max-w-full bg-white table-fixed border border-gray-300 overflow-hidden">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-2 text-sm border">Name</th>
                                    <th className="p-2 text-sm border">Rating</th>
                                    <th className="p-2 text-sm border">Installs</th>
                                    <th className="p-2 text-sm border">Last Updated</th>
                                    <th className="p-2 text-sm border">Category</th>
                                    <th className="p-2 text-sm border">Sub Category</th>
                                    <th className="p-2 text-sm border">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* First 3 rows - clear */}
                                {[0].map((i) => {
                                    const subcategoryData = getDataForSubcategory(subcategory);
                                    return (
                                        <tr key={i} className="hover:bg-gray-100 text-sm">
                                            <td className="p-2 border">{subcategoryData[i] ? subcategoryData[i].name : 'N/A'}</td>
                                            <td className="p-2 border">{subcategoryData[i] ? subcategoryData[i].rating : 'N/A'}</td>
                                            <td className="p-2 border">{subcategoryData[i] ? subcategoryData[i].instals : 'N/A'}</td>
                                            <td className="p-2 border">{subcategoryData[i] ? subcategoryData[i].lastUpdated : 'N/A'}</td>
                                            <td className="p-2 border">{category.replace(/_/g, ' ')}</td>
                                            <td className="p-2 border">{subcategory ? subcategory.replace(/_/g, ' ') : 'N/A'}</td>
                                            <td className="p-2 border break-all">https://chromewebsto...</td>
                                        </tr>
                                    );
                                })}

                                {/* Remaining rows - blurred */}
                                {[4, 5].map((i) => (
                                    <tr key={i} className="blurred-row hover:bg-gray-100">
                                        <td className="p-2 border">Lorem Ipsum</td>
                                        <td className="p-2 border">Row {i} - Col 2</td>
                                        <td className="p-2 border">Row {i} - Col 3</td>
                                        <td className="p-2 border">Row {i} - Col 3</td>
                                        <td className="p-2 border">{category.replace(/_/g, ' ')}</td>
                                        <td className="p-2 border">{subcategory.replace(/_/g, ' ')}</td>
                                        <td className="p-2 border break-all">https://chromewebsto...</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Button overlay */}
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                            <button className="btn-get-data px-4 py-2 bg-[#4988f5] text-white rounded hover:bg-blue-600 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto my-auto mr-2 lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Unlock All Data
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </>

    );
};

export default CategorySelector;