import { useEffect, useState } from 'react';
import { useToastStore, type Toast } from '../../stores/toastStore';

interface ToastItemProps {
    toast: Toast;
}

const icons = {
    success: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    ),
    error: (
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    ),
    info: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    warning: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    ),
};

const bgColors = {
    success: 'bg-gray-800 border-green-500/20',
    error: 'bg-gray-800 border-red-500/20',
    info: 'bg-gray-800 border-blue-500/20',
    warning: 'bg-gray-800 border-yellow-500/20',
};

export const ToastItem = ({ toast }: ToastItemProps) => {
    const removeToast = useToastStore((state) => state.removeToast);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setIsVisible(true));

        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => removeToast(toast.id), 300);
        }, (toast.duration || 3000) - 300);

        return () => clearTimeout(timer);
    }, [toast.id, toast.duration, removeToast]);

    return (
        <div
            className={`
        flex items-center w-full max-w-sm p-4 mb-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] border
        transform transition-all duration-300 ease-in-out
        ${bgColors[toast.type]}
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
            role="alert"
        >
            <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg bg-gray-700/50">
                {icons[toast.type]}
            </div>
            <div className="ml-3 text-sm font-normal text-gray-200">{toast.message}</div>
            <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-gray-400 hover:text-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-700 inline-flex items-center justify-center h-8 w-8 transition-colors"
                aria-label="Close"
                onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => removeToast(toast.id), 300);
                }}
            >
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    );
};
