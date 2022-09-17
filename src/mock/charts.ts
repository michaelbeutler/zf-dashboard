export const doughtnutGraphData = {
  labels: ["Dents", "Rear-end", "Paint", "Others"],
  datasets: [
    {
      label: "Types of defects",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderWidth: 1,
    },
  ],
};

export const lineGraphData = {
  labels: ["May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Missed Driver Submission",
      fill: true,
      data: [5, 10, 7, 18],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const lineGraphSecondaryData = {
    labels: ["May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Successful Driver Submission",
        fill: true,
        data: [18, 10, 7, 3],
        backgroundColor: "rgb(144, 238, 144)",
      },
    ],
  };

export const radarGraphData = {
  labels: ["Front", "Right", "Left", "Back"],
  datasets: [
    {
      label: "Vehicle side damage",
      data: [2, 5, 3, 2],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderWidth: 1,
    },
  ],
};
