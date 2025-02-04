import axios from "axios";

export const steplineChartDataUtility = async (region) => {
  try {
    const response = await axios.get(`/api/ElectricityPrice/${region}`); // Skapar en variabel respones som lagarar API:et.
    return response.data; // Retunera data som hämtas från API.
  } catch (err) {
    console.error("Fel vid hämtning av data:", err); // Ger tillbaka error om något går fel.
    return []; // Ger tillbaka en tom lista om något går fel.
  }
};

export const formatChartData = (electricityPrices) => {
  return electricityPrices.map((price) => ({
    // Map tar en befintlig lista och formaterar den till en ny.
    x: price.timestamp, // Här använder vi timestamp som x-axel
    y: price.price, // Och price som y-axel
  }));
};
