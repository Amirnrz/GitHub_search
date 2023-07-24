import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Pie3D = ({ data }) =>  {

  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: 300,
    dataFormat: 'json',
    
    dataSource: {
      "chart": {
        "caption": "Languages",
        "decimals": 0 ,
        "pieRadius": '30%',
        "theme": "fusion"
      },
      "data": data
    },
  }; 

  return (
    <ReactFC {...chartConfigs} />
  ) 
}

export default Pie3D