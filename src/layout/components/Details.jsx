import React, { Fragment } from 'react'
import {
    HeartIcon,
} from '@heroicons/react/outline'
import logo from '../../assets/visal.png'
import {
    PencilIcon,
    PlusIcon as PlusIconSolid,
} from '@heroicons/react/solid'

const currentFile = {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    information: {
        'Uploaded by': 'Marie Culver',
        Created: 'June 8, 2020',
        'Last modified': 'June 8, 2020',
        Dimensions: '4032 x 3024',
        Resolution: '72 x 72',
    },
    sharedWith: [
        {
            id: 1,
            name: 'Aimee Douglas',
            imageUrl:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
        },
        {
            id: 2,
            name: 'Andrea McMillan',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],
}


const Details = () => {
    return (
        <Fragment>
             <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
                        <div className="pb-16 space-y-6">
                            <div className="flex justify-center items-center">
                                <div className="block w-60 h-60 aspect-w-10 aspect-h-7 rounded-full  border-4 border-indigo-600 overflow-hidden">
                                    <img src={logo} alt="" className="object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Information</h3>
                                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    {Object.keys(currentFile.information).map((key) => (
                                        <div key={key} className="py-3 flex justify-between text-sm font-medium">
                                            <dt className="text-gray-500">{key}</dt>
                                            <dd className="text-gray-900">{currentFile.information[key]}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Description</h3>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-sm text-gray-500 italic">Add a description to this image.</p>
                                    <button
                                        type="button"
                                        className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <PencilIcon className="h-5 w-5" aria-hidden="true" />
                                        <span className="sr-only">Add description</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Shared with</h3>
                                <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    {/* {currentFile.sharedWith.map((person) => (
                                        <li key={person.id} className="py-3 flex justify-between items-center">
                                            <div className="flex items-center">
                                                <img src={person.imageUrl} alt="" className="w-8 h-8 rounded-full" />
                                                <p className="ml-4 text-sm font-medium text-gray-900">{person.name}</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Remove<span className="sr-only"> {person.name}</span>
                                            </button>
                                        </li>
                                    ))} */}
                                    <li className="py-2 flex justify-between items-center">
                                        <button
                                            type="button"
                                            className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                                                <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                                                Share
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </aside>
                
        </Fragment>
    )
}

export default Details
