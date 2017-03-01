//require("./module1.js");
//require("./module2.js");

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <h3>It works really well! I think so</h3>
                <table>
                <tbody>
                <tr><td>HEY</td></tr>
                </tbody>
                </table>
            </div>
        );
    }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);