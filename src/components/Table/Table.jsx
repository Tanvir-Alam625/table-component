import PropTypes from "prop-types";

// Table component
const Table = ({ data, columns, ...props }) => {
  return (
    <div className="responsive-table" {...props}>
      <div className="table">
        {/* Table header  */}
        <div className="table-header">
          <div className="tr">
            {/* Table header for each column */}
            {columns.map((column, index) => (
              <div className="th" key={index}>
                <span className="whitespace-nowrap">{column.title}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Table body */}
        <div className="table-body">
          {/* Table body for each row */}
          {data.map((row, rowIndex) => (
            <div className="tr" key={rowIndex}>
              {/* Table body for each column */}
              {columns.map((column, index) => (
                <div className="td" key={index}>
                  {column.render ? (
                    // Render custom column
                    column.render(row)
                  ) : (
                    // Render default column
                    <span>{row[column.dataIndex]}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Default props for table component
Table.defaultProps = {
  data: [],
  columns: [],
};
// Type validation for table component
Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  isSerially: PropTypes.bool,
};

export default Table;
