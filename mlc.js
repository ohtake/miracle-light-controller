var synth = new Tone.Synth({
  oscillator: {
    type: 'sine',
  },
}).toMaster();

var signalHz = [
  18500,
  18750,
  19000,
  19250,
  19500,
];

var colors = {
  red: '#F44336',
  orange: '#FF9800',
  pink: '#F48FB1',
  yellow: '#FFEB3B',
  green: '#4CAF50',
  cyan: '#00BCD4',
  blue: '#2196F3',
  purple: '#9C27B0',
  white: '#FAFAFA',
  black: '#424242',
};

var commands = [
  { command: '1212121', pattern: [65, 'red', 'red', 'red', 'green'] },
  { command: '3212121', pattern: [50, 'red', 'green'] },
  { command: '1412121', pattern: [50, 'purple', 'blue'] },
  { command: '3412121', pattern: [] },
  { command: '1232121', pattern: [] },
  { command: '3232121', pattern: [] },
  { command: '1432121', pattern: [] },
  { command: '3432121', pattern: [65, 'white', 'white', 'white', 'green'] },
  { command: '1214121', pattern: [] },
  { command: '3214121', pattern: [65, 'cyan', 'cyan', 'cyan', 'yellow'] },
  { command: '1414121', pattern: [65, 'pink', 'pink', 'pink', 'red'] },
  { command: '3414121', pattern: [] },
  { command: '1234121', pattern: [60, 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red', 'orange'] },
  { command: '3234121', pattern: [] },
  { command: '1434121', pattern: [] },
  { command: '3434121', pattern: [10, 'blue'] },
  { command: '1212321', pattern: [] },
  { command: '3212321', pattern: [] },
  { command: '1412321', pattern: [10, 'green'] },
  { command: '3412321', pattern: [] },
  { command: '1232321', pattern: [] },
  { command: '3232321', pattern: [] },
  { command: '1432321', pattern: [10, 'cyan'] },
  { command: '3432321', pattern: [] },
  { command: '1214321', pattern: [] },
  { command: '3214321', pattern: [10, 'orange'] },
  { command: '1414321', pattern: [] },
  { command: '3414321', pattern: [] },
  { command: '1234321', pattern: [] },
  { command: '3234321', pattern: [10, 'red'] },
  { command: '1434321', pattern: [] },
  { command: '3434321', pattern: [10, 'pink'] },
  { command: '1212141', pattern: [] },
  { command: '3212141', pattern: [10, 'white'] },
  { command: '1412141', pattern: [] },
  { command: '3412141', pattern: [] },
  { command: '1232141', pattern: [] },
  { command: '3232141', pattern: [] },
  { command: '1432141', pattern: [] },
  { command: '3432141', pattern: [65, 'blue', 'blue', 'blue', 'yellow'] },
  { command: '1214141', pattern: [80, 'blue', 'blue', 'blue', 'yellow'] },
  { command: '3214141', pattern: [] },
  { command: '1414141', pattern: [50, 'pink', 'yellow', 'cyan'] },
  { command: '3414141', pattern: [] },
  { command: '1234141', pattern: [50, 'cyan', 'black'] },
  { command: '3234141', pattern: [55, 'pink', 'yellow', 'cyan'] },
  { command: '1434141', pattern: [] },
  { command: '3434141', pattern: [65, 'pink', 'pink', 'pink', 'yellow'] },
  { command: '1212341', pattern: [75, 'pink', 'pink', 'pink', 'yellow'] },
  { command: '3212341', pattern: [10, 'black'] },
  { command: '1412341', pattern: [50, 'pink', 'pink', 'cyan'] },
  { command: '3412341', pattern: [60, 'pink', 'pink', 'cyan'] },
  { command: '1232341', pattern: [50, 'blue', 'black'] },
  { command: '3232341', pattern: [] },
  { command: '1432341', pattern: [] },
  { command: '3432341', pattern: [50, 'purple', 'black'] },
  { command: '1214341', pattern: [] },
  { command: '3214341', pattern: [50, 'green', 'black'] },
  { command: '1414341', pattern: [65, 'yellow', 'yellow', 'yellow', 'white'] },
  { command: '3414341', pattern: [50, 'yellow', 'black'] },
  { command: '1234341', pattern: [] },
  { command: '3234341', pattern: [] },
  { command: '1434341', pattern: [10, 'black'] },
  { command: '3434341', pattern: [65, 'white', 'white', 'white', 'red'] },
  { command: '1212123', pattern: [65, 'yellow', 'yellow', 'yellow', 'green'] },
  { command: '3212123', pattern: [95, 'red', 'green'] },
  { command: '1412123', pattern: [] },
  { command: '3412123', pattern: [] },
  { command: '1232123', pattern: [] },
  { command: '3232123', pattern: [50, 'orange', 'black'] },
  { command: '1432123', pattern: [] },
  { command: '3432123', pattern: [10, 'purple'] },
  { command: '1214123', pattern: [60, 'purple', 'black'] },
  { command: '3214123', pattern: [] },
  { command: '1414123', pattern: [] },
  { command: '3414123', pattern: [100, 'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple'] },
  { command: '1234123', pattern: [50, 'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple'] },
  { command: '3234123', pattern: [] },
  { command: '1434123', pattern: [100, 'purple', 'blue'] },
  { command: '3434123', pattern: [60, 'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple'] },
  { command: '1212323', pattern: [10, 'yellow'] },
  { command: '3212323', pattern: [] },
  { command: '1412323', pattern: [] },
  { command: '3412323', pattern: [60, 'yellow', 'black'] },
  { command: '1232323', pattern: [60, 'white', 'black'] },
  { command: '3232323', pattern: [] },
  { command: '1432323', pattern: [] },
  { command: '3432323', pattern: [80, 'red', 'red', 'red', 'green'] },
  { command: '1214323', pattern: [100, 'yellow', 'green', 'cyan', 'blue', 'purple', 'red', 'orange', 'pink'] },
  { command: '3214323', pattern: [60, 'red', 'green'] },
  { command: '1414323', pattern: [] },
  { command: '3414323', pattern: [60, 'purple', 'blue'] },
  { command: '1234323', pattern: [] },
  { command: '3234323', pattern: [80, 'yellow', 'yellow', 'yellow', 'white'] },
  { command: '1434323', pattern: [80, 'white', 'white', 'white', 'green'] },
  { command: '3434323', pattern: [100, 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red', 'orange'] },
  { command: '1212143', pattern: [] },
  { command: '3212143', pattern: [80, 'cyan', 'cyan', 'cyan', 'yellow'] },
  { command: '1412143', pattern: [50, 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red', 'orange'] },
  { command: '3412143', pattern: [80, 'pink', 'pink', 'pink', 'red'] },
  { command: '1232143', pattern: [] },
  { command: '3232143', pattern: [] },
  { command: '1432143', pattern: [60, 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red'] },
  { command: '3432143', pattern: [50, 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple', 'red'] },
  { command: '1214143', pattern: [60, 'blue', 'black'] },
  { command: '3214143', pattern: [] },
  { command: '1414143', pattern: [] },
  { command: '3414143', pattern: [50, 'red', 'black'] },
  { command: '1234143', pattern: [60, 'green', 'black'] },
  { command: '3234143', pattern: [] },
  { command: '1434143', pattern: [] },
  { command: '3434143', pattern: [50, 'pink', 'black'] },
  { command: '1212343', pattern: [] },
  { command: '3212343', pattern: [] },
  { command: '1412343', pattern: [] },
  { command: '3412343', pattern: [60, 'cyan', 'black'] },
  { command: '1232343', pattern: [60, 'orange', 'black'] },
  { command: '3232343', pattern: [] },
  { command: '1432343', pattern: [] },
  { command: '3432343', pattern: [60, 'red', 'black'] },
  { command: '1214343', pattern: [10, 'black'] },
  { command: '3214343', pattern: [] },
  { command: '1414343', pattern: [] },
  { command: '3414343', pattern: [60, 'pink', 'black'] },
  { command: '1234343', pattern: [] },
  { command: '3234343', pattern: [50, 'white', 'black', ] },
  { command: '1434343', pattern: [] },
  { command: '3434343', pattern: [] },
];

function playSignal(command) {
  var transport = Tone.Transport;
  transport.scheduleOnce(function() {
    synth.triggerAttack(signalHz[0]);
  }, '+0.0');
  transport.scheduleOnce(function() {
    synth.triggerRelease();
  }, '+0.19');
  command.split('').forEach(function(c, i) {
    transport.scheduleOnce(function() {
      synth.triggerAttack(signalHz[parseInt(c, 10)]);
    }, '+0.' + (i + 2));
    transport.scheduleOnce(function() {
      synth.triggerRelease();
    }, '+0.' + (i + 2) + '9');
  });
  transport.start();
  document.getElementById('txtCustom').value = command;
}

function createPatternCell(pattern) {
  var cell = document.createElement('td');
  cell.style.lineHeight = '0';
  var bpm = pattern[0];
  pattern.slice(1).forEach(function(p) {
    var elem = document.createElement('span');
    elem.title = p;
    elem.style.backgroundColor = colors[p];
    elem.style.width = (80 / bpm) + 'em';
    elem.style.height = '1em';
    elem.style.display = 'inline-block';
    cell.appendChild(elem);
  });
  return cell;
}

function insertControl(table, command, name, pattern) {
  var row = document.createElement('tr');
  row.appendChild(createPatternCell(pattern));
  var button;
  if (command) {
    button = document.createElement('button');
    button.innerText = name;
    button.onclick = function() {
      playSignal(command);
    };
  } else {
    button = document.createElement('span');
    button.innerText = name;
  }
  var cell = document.createElement('td');
  cell.appendChild(button);
  row.appendChild(cell);
  table.children[0].appendChild(row);
}

function playCustom() {
  playSignal(document.getElementById('txtCustom').value);
}

function convertCommandToId(command, isLittleEndian, isLowZero) {
  var bits = command.split('').map((d, i) => {
    var isHigh = parseInt(d, 10) >= 3;
    return !isLowZero ^ isHigh;
  });
  if (isLittleEndian) {
    bits.reverse();
  }
  var id = 0;
  bits.forEach((b) => {
    id |= b;
    id <<= 1;
  });
  id >>= 1;
  return id;
}

function convertIdToCommand(id, isLittleEndian, isLowZero) {
  var places = [0, 1, 2, 3, 4, 5, 6];
  if (!isLittleEndian) {
    places.reverse();
  }
  var bits = places.map(i => (id>>i) % 2);
  if (!isLowZero) {
    bits = bits.map(b => (b + 1) % 2);
  }
  var nums = bits.map((b, i) => (b*2) + (i%2) + 1);
  console.log(nums.join(''));
  return nums.join('');
}

window.addEventListener('load', () => {
  var t = document.getElementById('off');
  insertControl(t, '3212341', 'off', [10, 'black']); // '1434341', '1214343'
  t = document.getElementById('on');
  insertControl(t, '3234321', 'red', [60, 'red']);
  insertControl(t, '3214321', 'orange', [60, 'orange']);
  insertControl(t, '3434321', 'pink', [60, 'pink']);
  insertControl(t, '1212323', 'yellow', [60, 'yellow']);
  insertControl(t, '1412321', 'green', [60, 'green']);
  insertControl(t, '1432321', 'cyan', [60, 'cyan']);
  insertControl(t, '3434121', 'blue', [60, 'blue']);
  insertControl(t, '3432123', 'purple', [60, 'purple']);
  insertControl(t, '3212141', 'white', [60, 'white']);
  t = document.getElementById('blink50');
  insertControl(t, '3414143', 'red-50', [50, 'red', 'black']);
  insertControl(t, '3232123', 'orange-50', [50, 'orange', 'black']);
  insertControl(t, '3434143', 'pink-50', [50, 'pink', 'black']);
  insertControl(t, '3414341', 'yellow-50', [50, 'yellow', 'black']);
  insertControl(t, '3214341', 'green-50', [50, 'green', 'black']);
  insertControl(t, '1234141', 'cyan-50', [50, 'cyan', 'black']);
  insertControl(t, '1232341', 'blue-50', [50, 'blue', 'black']);
  insertControl(t, '3432341', 'purple-50', [50, 'purple', 'black']);
  insertControl(t, '3234343', 'white-50', [50, 'white', 'black']);
  t = document.getElementById('blink60');
  insertControl(t, '3432343', 'red-60', [60, 'red', 'black']);
  insertControl(t, '1232343', 'orange-60', [60, 'orange', 'black']);
  insertControl(t, '3414343', 'pink-60', [60, 'pink', 'black']);
  insertControl(t, '3412323', 'yellow-60', [60, 'yellow', 'black']);
  insertControl(t, '1234143', 'green-60', [60, 'green', 'black']);
  insertControl(t, '3412343', 'cyan-60', [60, 'cyan', 'black']);
  insertControl(t, '1214143', 'blue-60', [60, 'blue', 'black']);
  insertControl(t, '1214123', 'purple-60', [60, 'purple', 'black']);
  insertControl(t, '1232323', 'white-60', [60, 'white', 'black']);
  t = document.getElementById('mgp');
  insertControl(t, '3234141', 'three hearts', [55, 'pink', 'yellow', 'cyan']);
  insertControl(t, '3412143', 'kawaii', [80, 'pink', 'pink', 'pink', 'red']);
  insertControl(t, '1212123', 'nakayoku', [65, 'yellow', 'yellow', 'yellow', 'green']);
  insertControl(t, '3212143', 'omoiyari', [80, 'cyan', 'cyan', 'cyan', 'yellow']);
  insertControl(t, '1434123', 'dark fast', [100, 'purple', 'blue']);
  insertControl(t, '1412121', 'dark slow', [50, 'purple', 'blue']);
  insertControl(t, '1434323', '誰でもが持ってる', [80, 'white', 'white', 'white', 'green']);
  insertControl(t, '1414141', 'you believe', [50, 'pink', 'yellow', 'cyan']);
  insertControl(t, '3414123', 'rainbow', [100, 'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple']);
  insertControl(t, '1234123', 'miracle gift', [50, 'red', 'orange', 'pink', 'yellow', 'green', 'cyan', 'blue', 'purple']);
  t = document.getElementById('all');
  commands.map(o => ({
    command: o.command,
    pattern: o.pattern,
    id: convertCommandToId(o.command, true, true),
  })).sort((x, y) => x.id - y.id).forEach(function(o, i) {
    insertControl(t, o.command, o.id + '-' + o.command, o.pattern);
  });
});
