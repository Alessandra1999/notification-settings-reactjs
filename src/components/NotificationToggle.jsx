import { useContext } from "react";
import { NotificationSettingsContext } from "./NotificationSettingsContext";

const NotificationToggle = () => {
    const { notificationsON, setNotificationsON } = useContext(NotificationSettingsContext);

    const toggleNotifications = () => {
        setNotificationsON(!notificationsON);
    };

    return (
        <div>
            <button onClick={toggleNotifications}>
                {notificationsON ? 'Desativar Notificações' : 'Ativar Notificações'}
            </button>
        </div>
    )
}

export default NotificationToggle