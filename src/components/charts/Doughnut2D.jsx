import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Doughnut2D = ({ data }) =>  {

  const chartConfigs = {
    type: 'doughnut2D',
    width: '100%',
    height: 300,
    dataFormat: 'json',
    
    dataSource: {
      "chart": {
        "caption": "Stars Per Language",
        "theme": "candy",
        "decimals": 0,
        "doughnutRadius": "45%",
        "showPercentValues": 0,
      },
      "data": data
    },
  };

  return (
    <ReactFC {...chartConfigs} />
  ) 
}

export default Doughnut2D