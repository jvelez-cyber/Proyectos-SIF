const XLSX = require('xlsx');
const wb = XLSX.readFile('Base de datos -Proyectos Secretaría de Infraestructura Física V2.xlsx', {cellDates: true});
const ws = wb.Sheets[wb.SheetNames[0]];
const rowsRaw = XLSX.utils.sheet_to_json(ws, { defval: '' });
console.log("Primeras 3 filas crudas:");
console.log(JSON.stringify(rowsRaw.slice(0, 3), null, 2));

const headerRow = rowsRaw.find(row => {
  const vals = Object.values(row).map(v => String(v).trim().toLowerCase());
  return vals.includes('municipio') && (vals.includes('subregión') || vals.includes('subregion'));
});
console.log("\nHeader Row Encontrado:", !!headerRow);
if(headerRow) {
  const keyRemap = {};
  Object.entries(headerRow).forEach(([k, v]) => {
    const vStr = String(v).trim();
    if (vStr) keyRemap[k] = vStr;
  });
  console.log("Remap:", keyRemap);
}
