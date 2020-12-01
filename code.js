Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Opstarten OPP App'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: getLabels(),
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Tijd (ms)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:f} ms</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Checkpoints',
        data: getValues()

    }]
});

function getValues() {
   const data= [
        '18:52:59.839',
        '18:52:59.938',
        '18:52:59.941',
        '18:52:59.941',
        '18:53:00.226',
        '18:53:00.567',
        '18:53:00.636',
        '18:53:00.642',
        '18:53:00.648',
        '18:53:00.658',
        '18:53:00.663',
        '18:53:00.902',
        '18:53:01.173',
        '18:53:01.176',
        '18:53:02.139',
        '18:53:02.260',
        '18:53:02.262',
        '18:53:02.263',
        '18:53:02.671',
        '18:53:02.672',
        '18:53:03.054',
        '18:53:03.054'
        ].map(convert);
        const first = data[0];
       return data.slice(1).map(e=>e-first);
    // return  [149.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
}

function getLabels() {
    return [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Jan',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ].slice(1);
}

function convert(a) {
    let b =moment(a,'HH:mm:ss.SSS');
    return b.minutes()*60000+b.seconds()*1000+b.milliseconds();
  }