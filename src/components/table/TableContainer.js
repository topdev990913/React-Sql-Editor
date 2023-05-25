import React, { useMemo } from "react";
import useData from "../utilities/useData.js";
import ReactLoading from "react-loading";
import Table from "./Table";

const TableContainer = React.memo(({ query, isOpen }) => {
  const { data, error } = useData(query);

  const columns = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        const result = data[0][key]
          .replace(/([A-Z]+)/g, " $1")
          .replace(/([A-Z][a-z])/g, " $1");

        return {
          Header: result,
          accessor: key,
        };
      });
    }
  }, [data]);

  const queryData = useMemo(() => data.slice(1), [data]);
  if (error)
    return (
      <section
        className={`col-start-1 col-end-3 row-start-3 row-end-4 text-white m-6`}
      >
        <h1 className="text-center font-bold text-xl bg-violet-800">
          Something Went Wrong{" "}
          <span role="img" aria-label="sad face">
            😔
          </span>
        </h1>
      </section>
    );
  return (
    <>
      <section
        className={`col-start-1 col-end-3 row-start-3 row-end-4 text-white mx-6 my-12 lg:mx-12 overflow-hidden`}
      >
        {data.length > 0 ? (
          <>
            <Table
              columns={columns}
              completeData={data}
              data={queryData}
              query={query}
            />
          </>
        ) : (
          <div className="flex justify-center items-center flex-1">
            <h1>Loading...</h1>
          </div>
        )}
      </section>
    </>
  );
});

export default TableContainer;
