import Loading from './components/comon/Loading';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout';
const Render = React.lazy(() => import('./PageRender'))

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Render />} />
          <Route path='/:page' element={<Render />} />
          <Route path='/:page/:slug' element={<Render />} />
        </Routes>
      </Suspense>
    </AppLayout>
  );
}

export default App;
