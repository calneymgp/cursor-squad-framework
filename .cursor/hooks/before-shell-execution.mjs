import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', (line) => {
  try {
    const payload = JSON.parse(line);
    const command = (payload.command || "").trim();

    // Regex para detecção de comandos perigosos com variações e encadeamento
    const dangerousPatterns = [
      /rm\s+.*-rf/,                 // rm -rf anywhere
      /sudo\s+/,                    // sudo usage
      /mkfs\./,                     // filesystem creation
      /dd\s+if=/,                   // disk dump
      /chmod\s+.*777/,              // recursive 777
      /chown\s+.*-R/,               // recursive chown (risco de lockout)
      /curl\s+.*\|\s*bash/,         // curl | bash pattern
      /wget\s+.*\|\s*bash/,         // wget | bash pattern
      />\s*\/dev\/sd[a-z]/,         // overwriting raw disk
      /:\(\){:\|:&};:/              // fork bomb
    ];

    const isDangerous = dangerousPatterns.some(pattern => pattern.test(command));

    if (isDangerous) {
      console.log(JSON.stringify({
        permission: "ask",
        userMessage: `PADRÃO PERIGOSO DETECTADO: "${command}"`,
        agentMessage: "Este comando possui padrões conhecidos por serem destrutivos ou comprometerem a segurança do sistema. Por favor, valide cuidadosamente antes de prosseguir."
      }));
    } else {
      console.log(JSON.stringify({ permission: "allow" }));
    }
  } catch (err) {
    console.log(JSON.stringify({ permission: "allow" }));
  }
});
