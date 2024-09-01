import { parse } from 'csv-parse';
import fs from 'node:fs';

const csvPath = new URL('./sample.csv', import.meta.url);

async function processCSV() {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(csvPath);
    const parser = parse({
      delimiter: ',',
      skipEmptyLines: true,
      fromLine: 2,
    });

    readStream.pipe(parser);

    let processedRows = 0;

    parser.on('data', async (row) => {
      const [title, description] = row;

      try {
        const response = await fetch('http://localhost:3333/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description }),
        });

        if (!response.ok) {
          throw new Error(`Erro ao enviar dados: ${response.statusText}`);
        }

        processedRows++;
        console.log(`Linha ${processedRows} processada com sucesso.`);
      } catch (error) {
        console.error(`Erro ao processar linha ${processedRows}:`, error);
      }
    });

    parser.on('end', () => {
      console.log('Todas as linhas processadas.');
      resolve();
    });

    parser.on('error', (err) => {
      console.error('Erro ao parsear CSV:', err);
      reject(err);
    });
  });
}

processCSV()
  .then(() => console.log('Processamento finalizado.'))
  .catch((err) => console.error('Erro:', err));
