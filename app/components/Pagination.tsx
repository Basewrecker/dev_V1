type PaginationProps = {
    totalPages: number;
    currentPages: number;
    onPageChange: (page:number) => void;
}

    const Pagination:React.FC<PaginationProps> = ({totalPages, currentPages, onPageChange}) => {

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-8">
      {Array.from({length: totalPages, }, (_, index) => (
        <button key = {index + 1} className={`px-3 py-1 cursor-pointer rounded ${
          currentPages === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
        }`}
        onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
    );
}

export default Pagination;