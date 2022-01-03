let clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = hour < 10 ?  "0" + hour: hour;
    minute = minute < 10 ?  "0" + minute: minute;
    second = second < 10 ?  "0" + second: second;

    let time = `${hour}:${minute}:${second}`;

    document.querySelector("#clock").innerText = time;
    setInterval( () => clock(), 1000);
}

let timezoneOptions = () => {

    document.querySelector("#timezoneEl").innerHTML = ``;

    document.querySelector("#timezoneEl").innerHTML = `
    <option value="" disabled selected>Välj tidszon</option>
    <option value="+1">+1</option>
    <option value="+2">+2</option>
    <option value="+3">+3</option>
    <option value="+4">+4</option>
    <option value="+5">+5</option>
    <option value="+6">+6</option>
    <option value="+7">+7</option>
    <option value="+8">+8</option>
    <option value="+9">+9</option>
    <option value="+10">+10</option>
    <option value="+11">+11</option>
    <option value="+12">+12</option>
    <option value="UTC">UTC</option>
    <option value="-1">-1</option>
    <option value="-2">-2</option>
    <option value="-3">-3</option>
    <option value="-4">-4</option>
    <option value="-5">-5</option>
    <option value="-6">-6</option>
    <option value="-7">-7</option>
    <option value="-8">-8</option>
    <option value="-9">-9</option>
    <option value="-1">-10</option>
    <option value="-11">-11</option>
    `
}

timezoneOptions();
clock();