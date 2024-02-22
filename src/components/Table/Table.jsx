import PropTypes from "prop-types";

// Table Component
const Table = ({ data, columns, ...props }) => {
  return (
    <div className="responsive-table" {...props}>
      <div className="table">
        {/* Table Header  */}
        <div className="table-header">
          <div className="tr">
            {columns.map((column, index) => (
              <div className="th" key={index}>
                <span className="whitespace-nowrap">{column.title}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Table Body */}
        <div className="table-body">
          {data.map((row, rowIndex) => (
            <div className="tr" key={rowIndex}>
              {columns.map((column, index) => (
                <div className="td" key={index}>
                  {column.render ? (
                    column.render(row)
                  ) : (
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

// Default props for Table Component
Table.defaultProps = {
  data: [],
  columns: [],
};
// Type Validation for Table Component
Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  isSerially: PropTypes.bool,
};

export default Table;
