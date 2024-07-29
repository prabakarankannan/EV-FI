import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

interface FetchCarsParams {
  brand?: string;
  limit?: number;
  model?: string;
}

export const fetchVehiclesFromCSV = async ({
  brand = '',
  limit = 8,
  model = ''
}: FetchCarsParams): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    const filePath = path.resolve('modified_vehicle_data.csv');

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        // Apply filters based on brand and model
        let filteredResults = results;

        if (brand) {
          filteredResults = filteredResults.filter(car => car.Brand.toLowerCase() === brand.toLowerCase());
        }
        if (model) {
          filteredResults = filteredResults.filter(car => car.title.toLowerCase().includes(model.toLowerCase()));
        }

        // Apply pagination
        const paginatedResults = filteredResults.slice(0, limit);
        resolve(paginatedResults);
      })
      .on('error', (error) => reject(error));
  });
};
