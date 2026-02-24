import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', (line) => {
  try {
    const payload = JSON.parse(line);
    const workspaceRoot = payload.workspace_roots?.[0] || process.cwd();
    
    // Nota: A partir de agora a sincronização é 100% via MCP no Plane.so.
    // Este hook pode ser expandido para enviar alertas via MCP se necessário.
    
  } catch (err) {
    // Silence on error to not break agent flow
  }
});
