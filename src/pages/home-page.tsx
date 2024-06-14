import BasicChart from "../components/chart/basic-chart";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const HomePage = () => {
  return (
    <div style={{ width: "500px" }}>
      <BasicChart options={options} />
    </div>
  );
};

export default HomePage;
