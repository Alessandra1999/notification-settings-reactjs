import { createContext, useState } from "react";

export const NotificationSettingsContext = createContext();

export const NotificationSettingsProvider = (props) => {
    const [notificationsON, setNotificationsON] = useState(true);

    return (
        <NotificationSettingsContext.Provider value={{notificationsON, setNotificationsON}}>
            {props.children}
        </NotificationSettingsContext.Provider>
    )
}