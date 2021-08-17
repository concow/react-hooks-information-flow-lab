import React from "react";

function Header (isDarkMode, onModeClick) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )


}

export default Header;