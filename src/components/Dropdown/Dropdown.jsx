"use client"
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Dropdown = () => {
    const participantsList = [
        {
            name: 'John',
        },
        {
            name: "naimur"
        },
        {
            name: "Aurrrnab"
        }
    ]
    return (
        <div>
            <Menu as="div" className="relative inline-block text-right">
                <Menu.Button className=" bg-green-300 !impotent">
                    <GiHamburgerMenu />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
                        <div>
                            {
                                participantsList.map((item, i) => (
                                    <div key={i} className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button

                                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >

                                                    {item.name}
                                                </button>
                                            )}
                                        </Menu.Item>

                                    </div>
                                ))
                            }
                        </div>


                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default Dropdown;