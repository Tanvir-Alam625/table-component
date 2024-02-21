import PropTypes from "prop-types";

const Table = ({ data = [], columns = [], isSerially = false }) => {
  return (
    <div className="responsive-table">
      <div className="table">
        <div className="table-header">
          <div className="tr">
            {isSerially ? (
              <div className="th">
                <span className="whitespace-nowrap">Sr. No.</span>
              </div>
            ) : null}
            {columns.map((column, index) => (
              <div className="th" key={index}>
                <span className="whitespace-nowrap">{column.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="table-body">
          {data.map((row, rowIndex) => (
            <div className="tr" key={rowIndex}>
              {isSerially ? (
                <div className="td">
                  <span className="whitespace-nowrap">{rowIndex + 1}</span>
                </div>
              ) : null}
              {columns.map((column, index) => (
                <div className="td" key={index}>
                  {column.render ? (
                    column.render(row)
                  ) : (
                    <span className="whitespace-nowrap">
                      {row[column.dataIndex]}
                    </span>
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

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  isSerially: PropTypes.bool,
};

export default Table;
