import { Pie } from '@antv/g2plot';

const data = [
  { type: '1', value: 27 },
  { type: '2', value: 25 },
  { type: '3', value: 18 },
  { type: '4', value: 15 },
  { type: '5', value: 10 },
  { type: '6', value: 5 },
];

const piePlot = new Pie('container', {
  appendPadding: 10,
  data,
  angleField: 'value',
  colorField: 'type',
  radius: 0.9,
  label: {
    type: 'inner',
    offset: '-30%',
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 14,
      textAlign: 'center',
    },
  },
  interactions: [{ type: 'element-active' }],
});

piePlot.render();
