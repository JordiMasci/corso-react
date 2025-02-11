import { createSlice } from "@reduxjs/toolkit";

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    value: [
      {
        id: 0,
        title: "Tokyo",
        description: "Ci troviamo a Tokyo",
        src: "https://media.istockphoto.com/id/904453184/it/foto/immagine-composita-del-monte-fuji-e-dello-skyline-di-tokyo.jpg?s=2048x2048&w=is&k=20&c=fZoNI6DrR2Q24uTJuViUkGwdFVkEwMZOepwafdDaWeQ=",
        isVisited: true,
      },
      {
        id: 1,
        title: "Berlino",
        description: "Ci troviamo a Berlino",
        src: "https://media.istockphoto.com/id/907886562/it/foto/cattedrale-di-berlino-con-nave-sul-fiume-sprea-al-tramonto-berlino-germania.jpg?s=2048x2048&w=is&k=20&c=w9RTcE8C2ld0WrPt4wN6Pg-p8ZR7TjzTyJUJ5ZIrMio=",
        isVisited: false,
      },
      {
        id: 2,
        title: "Parigi",
        description: "Ci troviamo a Parigi",
        src: "https://media.istockphoto.com/id/1145422105/it/foto/vista-aerea-della-torre-eiffel-parigi.jpg?s=2048x2048&w=is&k=20&c=376zXQHOsMbLrNYMp0u-0iQY6xxRhb-Guq98ic5Pq08=",
        isVisited: true,
      },
      {
        id: 3,
        title: "Roma",
        description: "Ci troviamo a Roma",
        src: "https://media.istockphoto.com/id/539115110/it/foto/colosseo-di-roma-e-sole-mattutino-italia.jpg?s=2048x2048&w=is&k=20&c=KFvMixcyzlISNGw5mZAADjwK9ZTlbOktmsmZ7gIAhyQ=",
        isVisited: false,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = citiesSlice.actions;
export default citiesSlice.reducer;
