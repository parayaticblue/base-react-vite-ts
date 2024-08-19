import { AuthProvider } from "./auth"
import { AppRouter } from "./routes/AppRouter"


export const Index = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

