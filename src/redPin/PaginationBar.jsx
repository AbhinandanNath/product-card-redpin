const PaginationBar = ({
    handlePageChange,
    startIndex,
    endIndex,
    totalPageSize,
  }) => {
    let showPreviousButton = Boolean(startIndex != 0);
    let showNextButton = Boolean(endIndex < totalPageSize);
    return (
      <div className="paginationBar">
        {showPreviousButton && (
          <button onClick={() => handlePageChange(-10)}>Previous</button>
        )}
        {showNextButton && (
          <button onClick={() => handlePageChange(10)}>Next</button>
        )}
      </div>
    );
  };
export default PaginationBar;  