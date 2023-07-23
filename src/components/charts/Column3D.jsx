import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Column3D = ({ data }) =>  {

  const chartConfigs = {
    type: 'column3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    
    dataSource: {
      "chart": {
        "caption": "Most Popular",
        "yAxisName": "stars",
        "XAxisName": "Repos",
        "XAxisNameFontSize":"10px",
        "yAxisNameFontSize": "10px",
        "theme":"fint"
      },
      "data": data
    },
  }; 

  return (
    <ReactFC {...chartConfigs} />
  ) 
}

export default Column3D