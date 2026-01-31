import { useToastStore } from '../../stores/toastStore';
import { ToastItem } from './ToastItem';

export const ToastContainer = () => {
    const toasts = useToastStore((state) => state.toasts);

    return (
        <div className="fixed top-24 right-4 z-[9999] flex flex-col gap-2 w-full max-w-sm pointer-events-none">
            <div className="flex flex-col gap-2 pointer-events-auto">
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} toast={toast} />
                ))}
            </div>
        </div>
    );
};
