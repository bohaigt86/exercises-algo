const array = [
  { id: '05' },
  { id: '02' },
  { id: '01' },
  { id: '03' },
  { id: '09' },
  { id: '20' },
  { id: '38' },
  { id: '12' },
  { id: '14' }
];
function sortById(array) {
  array.sort(function(a, b) {
    const id1 = a.id.replace(/^\d+\W\w+\W/g, '');
    const id2 = b.id.replace(/^\d+\W\w+\W/g, '');

    return parseInt(id1) - parseInt(id2);
  });
  return array;
}

// console.log('2019-ss-03'.replace(/^\d+\W\w+\W/g, ''));
console.log(sortById(array));
