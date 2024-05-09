"use client";
import {
    Bars3Icon,
    ChatBubbleLeftIcon,
    ChevronDownIcon,
    HomeIcon,
    PaperAirplaneIcon,
    PhoneIcon,
    PlayCircleIcon,
    XMarkIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { Drawer } from "./ui/drawer";

const products = [
    {
        name: "Stays",
        description: "Find the perfect place to stay",
        icon: HomeIcon,
        href: "#",
    },
    {
        name: "Flights",
        description: "Fly to your dream destination",
        href: "#",
        icon: PaperAirplaneIcon,
    },
    {
        name: "Car Rentals",
        description: "Rent a car and hit the road",
        icon: ChatBubbleLeftIcon,
        href: "#",
    },
];

const callsToAction = [
    { name: "See Demo Book", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon },
];
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#013894]">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Booking.com</span>
                        <img
                            src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                            alt=""
                            className="h-12 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        type="button"
                        className="p-2 inline-flex items-center justify-center rounded-md text-white hover:text-white hover:bg-[#012b5b]"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Popover>
                        <PopoverTrigger className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                            Stays
                            <ChevronDownIcon className="h-5 w-5 flex-none text-white"></ChevronDownIcon>
                        </PopoverTrigger>
                        <PopoverContent className="absolute bg-white -left-8-top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 p-0">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div
                                            className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200"
                                            aria-hidden="true"
                                        >
                                            <item.icon className="h-6 w-6 text[#013894] group-hover:text-blue-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a
                                                href="{item.href}"
                                                className="block font-semibold text-[#013894]"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0"></span>
                                            </a>
                                            <p className="mt-1 text-[#013894]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href="{item.href}"
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013894] hover:bg-gray-100"
                                    >
                                        <item.icon
                                            className="h-5 w-5 flex-none text-[#013894]"
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        Flights
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        Car Rentals
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        Attractions
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        Flight + Hotel
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        Log in
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DialogContent className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013894] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Booking.com</span>
                            <img
                                src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                                alt=""
                                className="h-12 w-auto"
                            />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(false)}>
                                <span className="sr-only">Close Menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true"></XMarkIcon>
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </header>
    );
};

export default Header;
