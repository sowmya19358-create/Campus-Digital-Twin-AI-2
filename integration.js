const fs = require('fs');
const path = require('path');

const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:8081';

function guessMimeType(ext) {
  switch (ext.toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.webp':
      return 'image/webp';
    case '.gif':
      return 'image/gif';
    default:
      return 'application/octet-stream';
  }
}

async function analyzeComplaint({ description, building, room, photoPath }) {
  const url = new URL('/api/ai/analyze-complaint', AI_SERVICE_URL).toString();
  const form = new FormData();

  form.append('description', description || '');
  form.append('building', building || '');
  if (room) {
    form.append('room', room);
  }

  if (photoPath) {
    const buffer = await fs.promises.readFile(photoPath);
    const extension = path.extname(photoPath).toLowerCase();
    const mimeType = guessMimeType(extension);
    form.append('file', new Blob([buffer], { type: mimeType }), path.basename(photoPath));
  }

  const response = await fetch(url, {
    method: 'POST',
    body: form,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`AI service responded with ${response.status}: ${body}`);
  }

  return response.json();
}

async function proxyHealth() {
  const url = new URL('/api/ai/health', AI_SERVICE_URL).toString();
  const response = await fetch(url);
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`AI health check failed with ${response.status}: ${body}`);
  }
  return response.json();
}

module.exports = {
  analyzeComplaint,
  proxyHealth,
};
