const fs = require('fs');
const path = require('path');

// --- Paths ---
// Resolve the path to package.json (assuming it's one level up from the 'scripts' folder)
const packageJsonPath = path.resolve(__dirname, '..', 'package.json');
// Resolve the path to the environments folder and the target version file
const envDir = path.resolve(__dirname, '..', 'src', 'environments');
const targetPath = path.resolve(envDir, 'version.ts');

console.log("--- Starting set-version script ---");

try {
  // --- 1. Determine Increment Type from Command Line Arguments ---
  // Expected arguments: 'patch', 'minor', or 'major'
  const incrementType = process.argv[2];
  if (!incrementType) {
    console.error("[Version Script] ERROR: No increment type provided. Usage: node set-version.js [major|minor|patch]");
    process.exit(1);
  }
  if (!['major', 'minor', 'patch'].includes(incrementType)) {
    console.error(`[Version Script] ERROR: Invalid increment type '${incrementType}'. Must be 'major', 'minor', or 'patch'.`);
    process.exit(1);
  }
  console.log(`[Version Script] Requested increment type: '${incrementType}'`);

  // --- 2. Read package.json content ---
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  let packageJson = JSON.parse(packageJsonContent);

  const currentVersion = packageJson.version;
  let [major, minor, patch] = currentVersion.split('.').map(Number);
  let newVersion;

  console.log(`[Version Script] Current version from package.json: ${currentVersion}`);

  // --- 3. Increment Version Based on Type ---
  switch (incrementType) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'patch':
      patch++;
      break;
  }

  newVersion = `${major}.${minor}.${patch}`;

  // Check if the version actually changed to avoid unnecessary commits
  if (newVersion === currentVersion) {
    console.warn(`[Version Script] Version did not change. Current: ${currentVersion}, New: ${newVersion}. Skipping update to package.json.`);
    // Exit gracefully as nothing needs to be committed for versioning
    process.exit(0);
  }

  console.log(`[Version Script] Calculated new version: ${newVersion}`);

  // --- 4. Update and Write package.json ---
  packageJson.version = newVersion; // Update the version in the object
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8'); // Write back pretty-printed
  console.log(`[Version Script] Successfully updated package.json to version: ${newVersion}`);

  // --- 5. Generate and Write src/environments/version.ts ---
  // Define the content for the version file using the NEWLY INCREMENTED version
  const tsContent = `// IMPORTANT: THIS FILE IS AUTO GENERATED!
// Do not edit this file directly.
export const version = '${newVersion}';
`;

  // Create the environments directory if it doesn't exist
  if (!fs.existsSync(envDir)) {
    console.log(`[Version Script] Creating environments directory: ${envDir}`);
    fs.mkdirSync(envDir, { recursive: true }); // Use recursive to create parent dirs if needed
  }

  fs.writeFileSync(targetPath, tsContent, { encoding: 'utf8' });
  console.log(`[Version Script] Wrote version ${newVersion} to ${targetPath}`);

  console.log("--- set-version script finished successfully ---");

} catch (error) {
  console.error(`[Version Script] FATAL ERROR:`, error);
  // Exit with an error code to signal failure to the GitHub Action
  process.exit(1);
}
