ECHO OFF
ECHO "Starting Deployement"
ECHO "Building components"
yarn -version
ECHO "Building components Finished"
ECHO "Deploying components of Firebase"
firebase projects:list
ECHO "Deploying components of Firebase Finished"
PAUSE

