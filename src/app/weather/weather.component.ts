import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  location = 'wałbrzych';
  data = null;
  list = [];

  showPosition = (position) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=78f1c234eb92ec969fa49884c68825c5`
    )
      .then((res) => res.json())
      .then((data) => {
        this.location = data.name;
        console.log(data.name);
      });
  };

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }

  calculate(data) {
    return Math.ceil(data - 273.15);
  }

  handleSearch() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=78f1c234eb92ec969fa49884c68825c5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.data = data;
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.location}&appid=2a1a2f39b94b6bb68a2abb96353ac8b2`
    )
      .then((res) => res.json())
      .then((data) => {
        data.list.map((item) => {
          let url = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
          this.list.push({ src: url, data: item });
        });
      });
  }
}
