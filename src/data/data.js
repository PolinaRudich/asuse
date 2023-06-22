const flowNodes = [
  {
    id: 1,
    text: 'Везде: 85',
    type: 'ellipse',
    name: 'all'
  },
  {
    id: 2,
    text: 'Договоры: 27',
    type: 'ellipse',
    name: 'dog'
  },
  {
    id: 3,
    text: 'Контрагенты: 44',
    type: 'ellipse',
    name: 'contr'
  },
  {
    id: 4,
    text: 'Объекты: 14',
    type: 'ellipse',
    name: 'obj'
  }
];
const flowEdges = [
  {
    fromId: 2,
    id: 116,
    text: 14,
    toId: 1,
  },
  {
    fromId: 3,
    id: 117,
    text: 7,
    toId: 1,
  },
  {
    fromId: 4,
    id: 122,
    text: '15',
    toId: 1,
  },
];

export default {
  getFlowNodes() {
    return flowNodes;
  },
  getFlowEdges() {
    return flowEdges;
  },
};
