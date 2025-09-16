# weather-dashboard
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Luckiest+Guy&family=Oswald&family=Unna:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {
  font-family: "Oswald", sans-serif;
  background-image: url('image1.jpg');
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.container {
  width: 95%;
  max-width: 900px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.144);
  /* background-blend-mode: overlay; */
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  margin: 20px auto;
}

h1, h2 {
  text-align: center;
  margin-bottom: 15px;
}

/* Search Box */
.search-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.search-box input {
  padding: 12px;
  flex: 1 1 250px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  font-size: 16px;
}

.search-box button {
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background: #afcef08f;
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-family: "Oswald", sans-serif;;
  font-size: 15px;
  transition: background 0.3s ease;
}

.search-box button:hover {
  background: #0056b3;
}

/* Current Weather Card */
.weather-card {
  text-align: center;
  padding: 20px;
  background: #3367739d;
  border-radius: 12px;
  margin-bottom: 20px;
}

.weather-card img {
  width: 80px;
  height: 80px;
}

/* Forecast Grid */
.forecast-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 15px;
}

.forecast-day {
  background: #47717cd0;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.forecast-day img {
  width: 60px;
  height: 60px;
}

/*Mobile Responsive */
@media (max-width: 600px) {
  .container {
    padding: 15px;
  }

  .search-box {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box input,
  .search-box button {
    width: 100%;
    font-size: 16px;
  }

  .weather-card {
    font-size: 15px;
  }

  .forecast-container {
    grid-template-columns: 1fr 1fr;
  }
}

/* Very Small Devices */
@media (max-width: 400px) {
  .forecast-container {
    grid-template-columns: 1fr;
  }

  .forecast-day {
    padding: 10px;
  }

  .weather-card img {
    width: 60px;
    height: 60px;
  }
}
