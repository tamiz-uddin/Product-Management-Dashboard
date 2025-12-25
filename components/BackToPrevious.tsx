'use client';
const BackToPrevious = () => {
    const backToPreviousPage = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };
    return (
        <button onClick={backToPreviousPage} className='inline-flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors mb-8'>
            <ArrowLeft />
            <span>Back to previous page</span>
        </button>
    );
};

export default BackToPrevious;


const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>

)