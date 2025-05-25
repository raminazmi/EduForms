import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-4 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <Link to="/" className="inline-flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold">EduForms</span>
                </Link>
                <p className="text-gray-400">جميع الحقوق محفوظة 2025 © EduForms</p>
            </div>
        </footer>
    );
}