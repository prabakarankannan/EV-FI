import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import csv from 'csv-parser';

interface FetchCarsParams {
  brand?: string;
  limit?: number;
  model?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { brand = '', limit = 16, model = '' }: FetchCarsParams = req.query;

  const results: any[] = [];
  const filePath = path.resolve('public', 'modified_vehicle_data.csv');

  console.error('Fetching data from CSV...');
  
  if (!fs.existsSync(filePath)) {
    console.error('CSV file not found:', filePath);
    return res.status(404).json({ error: 'CSV file not found' });
  }

  try {
    const readStream = fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        // Remove BOM if present
        if (data['﻿id']) {
          data.id = data['﻿id'];
          delete data['﻿id'];
        }
        results.push(data);
      })
      .on('end', () => {
        console.error('CSV data fetched:', results);

        let filteredResults = results;

        if (brand) {
          filteredResults = filteredResults.filter(car => car.Brand.toLowerCase() === brand.toLowerCase());
        }
        if (model) {
          filteredResults = filteredResults.filter(car => car.title.toLowerCase().includes(model.toLowerCase()));
        }

        const paginatedResults = filteredResults.slice(0, Number(limit));

        const manufacturers = Array.from(new Set(results.map(car => car.Brand)));
        const models = Array.from(new Set(results.map(car => car.title)));

        const response = {
          cars: paginatedResults,
          manufacturers,
          models
        };
        
        console.error('API response:', response);
        res.status(200).json(response);
      })
      .on('error', (error) => {
        console.error('Error reading CSV data:', error);
        return res.status(500).json({ error: 'Error reading CSV data' });
      });

    readStream.on('close', () => {
      console.error('Stream closed');
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
