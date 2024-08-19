import { AuthProvider } from "./auth"
import { AppRouter } from "./routes/AppRouter"


export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

