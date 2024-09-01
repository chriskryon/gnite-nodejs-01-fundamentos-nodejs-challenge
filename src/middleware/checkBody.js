export async function checkBody(request, response) {
  const { title, description } = request.body;
  if (!title || !description) {
    return response.writeHead(400).end();
  }
}
