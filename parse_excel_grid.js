const XLSX = require('xlsx');
const wb = XLSX.readFile('Base de datos -Proyectos Secretaría de Infraestructura Física V2.xlsx', {cellDates: true});
const ws = wb.Sheets[wb.SheetNames[0]];

// Output the raw sheet cells A1 to F3
for (let r = 0; r < 4; r++) {
  let rowStr = [];
  for (let c = 0; c < 6; c++) {
    const cellAddress = XLSX.utils.encode_cell({r, c});
    const cell = ws[cellAddress];
    rowStr.push(cell ? cell.v : '(empty)');
  }
  console.log(`Row ${r+1}: ${rowStr.join(' | ')}`);
}
