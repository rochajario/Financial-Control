#! /bin/sh
{
    echo "Starting Backend Server..."
    sleep 2
    echo "Waiting for Dabase ${TYPEORM_DATABASE}@${MYSQL_URI} to Wakeup..."
    sleep 3

    npm run start

} 2>&1
