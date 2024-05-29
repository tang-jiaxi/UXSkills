import Chart from 'chart.js/auto'
// import Chart from 'https://cdn.jsdelivr.net/npm/chart.js/dist/chart.esm.js'

const UXD1 = 'rgba(159, 206, 103)';
const UXD1a = 'rgba(159, 206, 103, 0.2)';

const UXD2 = 'rgba(54, 162, 235)';
const UXD2a = 'rgba(54, 162, 235, 0.2)';

const UXD3 = 'rgb(255, 193, 7)';
const UXD3a = 'rgba(255, 193, 7, 0.2)';

const UXD4 = 'rgb(111, 10, 124)';
const UXD4a = 'rgba(111, 10, 124, 0.2)';

const UXD5 = 'rgb(255, 99, 132)';
const UXD5a = 'rgba(255, 99, 132, 0.2)';

const UXD6 = 'rgb(255, 200, 95)';
const UXD6a = 'rgba(255, 200, 95, 0.2)';

const UXD7 = 'rgb(147, 211, 202)';
const UXD7a = 'rgba(147, 211, 202, 0.2)';

const UXD8 = 'rgba(159, 106, 233)';
const UXD8a = 'rgba(159, 106, 233, 0.2)';


const data = {
  labels: [
    'Design Thinking',
    'Design Strategy',
    'Product / BPR',
    'Systems thinking',
    'Market research',
    'Quantitative research',
    'Qualitative research',
    'Research synthesis',
    'Content strategy',
    'Information architecture',
    'UX copywriting',
    'Wireframing and user flows',
    'Low / Hi-fi mockups',
    'Interactive prototyping',
    'Motion design',
    'Design system',
    'Interface design',
    'Design sprint',
    'Design evaluation/audit',
    'Design ops',
    'Research ops'
  ],
  datasets: [{
    label: 'UXD 1',
    data: [3,2,0,0,1,0,2,2,2,1,2,2,2,2,1,2,3,2,2,2,2],
    fill: true,
    backgroundColor: UXD1a,
    borderColor: UXD1,
    pointBackgroundColor: UXD1,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: UXD1
  }, {
    label: 'UXD 2',
    data: [2,3,2,3,2,0,2,2,1,1,0,3,2,2,0,2,2,2,1,2,2],
    fill: true,
    backgroundColor: UXD2a,
    borderColor: UXD2,
    pointBackgroundColor: UXD2,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: UXD2
  }, {
    label: 'UXD 3',
    data: [2,1,1,1,2,1,1,1,1,1,2,2,2,2,1,2,1,2,2,2,2],
    fill: true,
    backgroundColor: UXD3a,
    borderColor: UXD3,
    pointBackgroundColor: UXD3,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: UXD3
  }, {
    label: 'UXD 4',
    data: [2,1,1,0,2,2,2,2,1,2,1,2,2,2,1,2,3,1,1,2,2],
    fill: true,
    backgroundColor: UXD4a,
    borderColor: UXD4,
    pointBackgroundColor: UXD4,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: UXD4
  }, {
    label: 'UXD 5',
    data: [2,2,1,0,0,0,3,2,1,0,2,3,2,3,0,0,1,0,1,0,0],
    fill: true,
    backgroundColor: UXD5a,
    borderColor: UXD5,
    pointBackgroundColor: UXD5,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: UXD5
  }, {
    label: 'UXD 6',
    data: [3,2,1,1,2,2,3,2,2,2,3,3,2,1,0,0,1,2,2,0,3],
    fill: true,
    backgroundColor: UXD6a,
    borderColor: UXD6,
    pointBackgroundColor: UXD6,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: UXD6
  }, {
    label: 'UXD 7',
    data: [2,2,2,1,2,2,2,2,2,2,2,3,3,2,1,3,3,2,2,2,1],
    fill: true,
    backgroundColor: UXD7a,
    borderColor: UXD7,
    pointBackgroundColor: UXD7,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: UXD7
  }, {
    label: 'UXD 8',
    data: [3,3,2,2,2,2,3,3,0,0,0,3,3,2,0,2,2,3,2,2,3],
    fill: true,
    backgroundColor: UXD8a,
    borderColor: UXD8,
    pointBackgroundColor: UXD8,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: UXD8
  }
]};

const option = {
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 3,
      ticks: {
        stepSize: 1
      }  
    }
  }
};

const config = {
  type: 'radar',
  data: data,
  options: option
};


new Chart(document.getElementById('Current'), config);