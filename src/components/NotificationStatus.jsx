import { useContext } from "react";
import { NotificationSettingsContext } from "./NotificationSettingsContext";

const NotificationStatus = () => {
    const { notificationsON } = useContext(NotificationSettingsContext);

    return (
        <div>
            <p>As notificações estão {notificationsON ? 'ativadas' : 'desativadas'}.</p>
        </div>
    )
}

export default NotificationStatus