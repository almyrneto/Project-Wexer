import { Login } from '@/pages/login'
import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout'
import App from '../app'

export const Router = () => {
  return (
    <Suspense fallback={<h1>Carregando</h1>}>
      <RouterProvider
        router={createBrowserRouter([
          {
            index: true,
            path: '/login',
            element: <Login />
          },
          {
            path: '/',
            element: <Layout />,
            children: [
              {
                element: <App />
              },
              {
                path: 'teste',
                element: <h1>teste</h1>
              }
            ]
          }
        ])}
      />
    </Suspense>
  )
}
