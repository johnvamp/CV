var xValues = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

new Chart("myChart", {
	type: "line",
	data: {
		labels: xValues,
		datasets: [
			{
				label: "Mis metas a nivel personal y profesional",
				data: [1600, 1700, 1800, 2000, 2300, 2700, 4000, 5000, 6000],
				borderColor: "green",
				fill: false,
			},
		],
	},
	options: {
		legend: {
			display: true,
			labels: {
				boxWidth: 80,
				fontColor: "black",
			},
		},
	},
});
