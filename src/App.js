import React, { Suspense, useState } from 'react';
import ReactLoading from 'react-loading';


// components

const Header = React.lazy(() => import('./components/header/Header.js'));
const Editor = React.lazy(() => import('./components/editor/Editor.js'));
const TableContainer = React.lazy(() => import("./components/table/TableContainer"));

const App = () => {

  const [query, setQuery] = useState("");
  const [value, setValue] = useState(`select * from categories`);

  return (
    <div className=''>
      <Suspense fallback={
        <div className='text-center flex justify-center items-center text-violet-900'>
          <ReactLoading type={'spin'} color={'#4527a0'} />
        </div>
      }>
        <Header />
        <Editor
          setQuery={setQuery}
          value={value}
          setValue={setValue}
        />
        {query ? <TableContainer query={query}  /> : null}
      </Suspense>
    </div>
  );
}

export default App;
