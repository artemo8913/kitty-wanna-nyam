import React from "react";
declare const Modernizr: any;

export default function BrowserNotification() {
    let [isHidden, hide] = React.useState(Modernizr.smil);
    return (
        <div className="browser-notification" hidden={isHidden}>
            <div className="browser-notification_conteiner">
                <button
                    className="browser-notification__close"
                    onClick={() => hide(true)}
                >x</button>
                <h2>Уважаемый хозяин котэ!</h2>
                <p>15 июня Microsoft прекратила поддержку приложения Internet Explorer 11, поэтому не гарантируется правильная работа сайта в Internet Explorer. Настоятельно рекомендуется переходить на браузер Edge/Chrome/Opera/Mozila FireFox.</p>
                <img className="browser-notification__img" src="./Images/IE11Tombstone.png" alt="Это был хороший браузер, чтобы скачивать другие браузеры"></img>
            </div>
        </div>
    );
}