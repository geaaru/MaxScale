CHANGE MASTER TO MASTER_HOST='127.0.0.1', MASTER_PORT=3000, MASTER_USER='maxuser', MASTER_PASSWORD='maxpwd', MASTER_LOG_POS=4, MASTER_CONNECT_RETRY=1;
START SLAVE;
SET GLOBAL max_connections=10000;