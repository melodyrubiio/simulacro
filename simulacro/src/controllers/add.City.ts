import { ICity } from "../models/ICity.ts";

const form = document.querySelector("form") as HTMLFormElement;
const city = document.querySelector("#new-city") as HTMLInputElement;
const country = document.querySelector("#new-country") as HTMLInputElement;
const cityDescription = document.querySelector("#newCity-description") as HTMLInputElement;

const cityArray : ICity[] = JSON.parse(localStorage.getItem('cityArray') || '[]'); // array donde se almacenan las ciudades que se van creando para almacenarlas en el localStorage. Si hay información almacenada previamente, la trae, la convierte en array y permite agregarle nueva.

form.addEventListener('submit', (event : Event) => {

    event.preventDefault();

    const newCity = {
        city : city.value,
        country : country.value,
        date : new Date(),
        cityDescription : cityDescription.value
    }

    cityArray.push(newCity);
    localStorage.setItem("cityArray", JSON.stringify(cityArray));
    form.reset();
    alert('se agregó la ciudad');
})