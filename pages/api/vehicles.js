import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const csvFilePath = path.resolve(process.cwd(), 'public', 'modified_vehicle_data.csv');
  const file = fs.readFileSync(csvFilePath, 'utf8');

  const parsedData = Papa.parse(file, { header: true });
  res.status(200).json(parsedData.data);
}
