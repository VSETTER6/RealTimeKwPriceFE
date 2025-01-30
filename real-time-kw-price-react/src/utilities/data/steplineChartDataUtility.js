export const steplineChartDataUtility = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0 = januari, 1 = februari osv.
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const data = [];

  const formatNumber = (num) => parseFloat(num.toFixed(2));

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i).toISOString().split("T")[0]; // Format YYYY-MM-DD
    data.push({
      x: date, // ISO-sträng för bättre kompatibilitet
      y: formatNumber(Math.random() * 500),
    });
  }

  return data;
};
