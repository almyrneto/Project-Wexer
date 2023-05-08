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
            element: <Login />
          },
          {
            path: '/timeline',
            element: <Layout />,
            children: [
              {
                element: <App />
              }
            ]
          }
        ])}
      />
    </Suspense>
  )
}
