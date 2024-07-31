import { NotificationSettingsProvider } from "./components/NotificationSettingsContext"
import NotificationStatus from "./components/NotificationStatus"
import NotificationToggle from "./components/NotificationToggle"


function App() {

  return (
    <>
      <NotificationSettingsProvider>
        <div>
          <h1>Gerenciamento de Configurações de Notificação</h1>
          <NotificationToggle />
          <NotificationStatus />
        </div>
      </NotificationSettingsProvider>
    </>
  )
}

export default App
