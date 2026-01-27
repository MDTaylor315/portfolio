export default function LoadingDots() {
    return (
        <div className="flex items-center justify-center gap-2 py-20">
            <div
                className="w-3 h-3 bg-white/60 rounded-full animate-bounce"
                style={{ animationDelay: '0ms', animationDuration: '1s' }}
            ></div>
            <div
                className="w-3 h-3 bg-white/60 rounded-full animate-bounce"
                style={{ animationDelay: '150ms', animationDuration: '1s' }}
            ></div>
            <div
                className="w-3 h-3 bg-white/60 rounded-full animate-bounce"
                style={{ animationDelay: '300ms', animationDuration: '1s' }}
            ></div>
        </div>
    );
}
