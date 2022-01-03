const timezones = [
    "+1",
    "+2",
    "+3",
    "+4",
    "+5",
    "+6",
    "+7",
    "+8",
    "+9",
    "+10",
    "+11",
    "+12",
    "UTC",
    "-1",
    "-2",
    "-3",
    "-4",
    "-5",
    "-6",
    "-7",
    "-8",
    "-9",
    "-1",
    "-11"
]

const timezoneEl = document.querySelector("#timezoneEl");

let timezoneOptions = (zone) => {
    // Rensa dropdown
    timezoneEl.innerHTML = ``;
    
    // Generera platshållare
    timezoneEl.innerHTML += `
        <option id="timezoneOption" value="0" disabled selected>Välj tidszon</option>
    `;

    // Generera alternativ
    timezones.forEach(zone => {
        if (zone === "UTC") {
            timezoneEl.innerHTML += `
                <option id="timezoneOption" value="0">${zone}</option>
        `
        } else {
            timezoneEl.innerHTML += `
                <option id="timezoneOption" value=${zone}>${zone}</option>
            `
        };
    })
}


timezoneOptions();

let clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = hour < 10 ?  "0" + hour : hour;
    minute = minute < 10 ?  "0" + minute : minute;
    second = second < 10 ?  "0" + second : second;

    hour = hour + optionNmb;

    let time = `${hour}:${minute}:${second}`;

    document.querySelector("#clock").innerText = time;
    setInterval( () => clock(), 1000);
}

const optionStr = document.querySelector("#timezoneOption").getAttribute('value');
const optionNmb = parseInt(optionStr);

clock();