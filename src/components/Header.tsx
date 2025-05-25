import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const menuButtonRef = useRef(null);

    const navItems = [
        { to: "/features", label: "الميزات" },
        { to: "/pricing", label: "الباقات والأسعار" },
        { to: "/contact", label: "تواصل معنا" },
        { to: "/about", label: "من نحن" },
        { to: "/privacy", label: "سياسة الخصوصية" },
    ];

    const handleClickOutside = (event) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            menuButtonRef.current &&
            !menuButtonRef.current.contains(event.target)
        ) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.classList.add("overflow-hidden");
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.classList.remove("overflow-hidden");
        };
    }, [isSidebarOpen]);

    return (
        <>
            <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <BookOpen className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <Star className="w-2 h-2 text-yellow-800" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    EduForms
                                </h1>
                                <p className="text-sm text-gray-600 font-medium">صديق المعلم والإداري</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link to="/login">
                                <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                                    تسجيل الدخول
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                                    إنشاء حساب
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            ref={menuButtonRef}
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100 z-50"
                            onClick={() => setIsSidebarOpen(true)}
                            aria-label="فتح القائمة"
                        >
                            <Menu className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                role="menu"
            >
                <div className="p-6">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="mb-6 p-2 rounded-md hover:bg-gray-100"
                        aria-label="إغلاق القائمة"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Buttons */}
                    <div className="mt-8 flex flex-col gap-3">
                        <Link to="/login" onClick={() => setIsSidebarOpen(false)}>
                            <Button variant="outline" className="w-full">
                                تسجيل الدخول
                            </Button>
                        </Link>
                        <Link to="/signup" onClick={() => setIsSidebarOpen(false)}>
                            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                                إنشاء حساب
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}