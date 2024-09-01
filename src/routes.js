import { Database } from './database.js';
import { randomUUID } from 'node:crypto';
import { buildRoutePath } from './utils/build-route-path.js';
import Task from './task.js';
import { checkBody } from './middleware/checkBody.js';

const database = new Database();
const database_name = 'task';

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
      const { search } = request.query;

      const tasks = database.select(
        'task',
        search
          ? {
              id: search,
              title: search,
            }
          : null,
      );

      return response.end(JSON.stringify(tasks));
    },
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
      checkBody(request, response);

      const { title, description } = request.body;

      const task = new Task({
        id: randomUUID(),
        title,
        description,
      });

      database.insert(database_name, task);

      return response.writeHead(201).end();
    },
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params;
      checkBody(request, response);
      const { title, description } = request.body;

      const existingTask = database.find(database_name, id);

      if (!existingTask) {
        return response.writeHead(404).end('Task not found');
      }

      const updatedTask = {
        ...existingTask,
        title: title !== undefined ? title : existingTask.title,
        description:
          description !== undefined ? description : existingTask.description,
        updated_at: new Date(),
      };

      database.update(database_name, id, updatedTask);

      return response.writeHead(204).end();
    },
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params;

      const existingTask = database.find(database_name, id);

      if (!existingTask) {
        return response.writeHead(404).end('Task not found');
      }

      database.delete(database_name, id);

      return response.writeHead(204).end();
    },
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (request, response) => {
      const { id } = request.params;

      const existingTask = database.find(database_name, id);

      if (!existingTask) {
        return response.writeHead(404).end('Task not found');
      }

      const updatedTask = {
        ...existingTask,
        completed_at: new Date(),
      };

      database.update(database_name, id, updatedTask);

      return response.writeHead(204).end();
    },
  },
];
