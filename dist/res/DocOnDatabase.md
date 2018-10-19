# Database Connection

Databse on Kubernetes can be set up in mostly 2 ways:
    1. Set up the database as a cluster on the kubernetes container.
    2. Set up the databse somewhere else.

## Set up Databse on an External VM with Istio Mesh Expansion

This is the instance where the database is hosted at an external location. Most likely, this option is used to connect new microservice apps to use service Entry;

1. Have a database already set up at desired location by running the .sql set up file. 

2. Obtain the host and ports of the databse. If it is on a linux machine, you can run commands:

```bash
    $export MYSQL_DB_HOST=<your MySQL database host>
    $export MYSQL_DB_PORT=<your MySQL database port>
```

Setup a table if you will, run a table initializer like this: 

```sql
CREATE DATABASE test;
USE test;

CREATE TABLE `ratings` (
  `ReviewID` INT NOT NULL,
  `Rating` INT,
  PRIMARY KEY (`ReviewID`)
);
INSERT INTO ratings (ReviewID, Rating) VALUES (1, 5);
INSERT INTO ratings (ReviewID, Rating) VALUES (2, 4);
```

The SQL file above

3. For the sake of development, you could grant access to a specific user or all users using: 

```sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
quit;
```

4. In the deployment yaml of the application that reference the database table, enter the following configuration to supply connection details.

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: friend-service
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: friend-service
        version: v2-mysql-vm
    spec:
      containers:
      - name: ratings
        image: friend-service:v0
        imagePullPolicy: IfNotPresent
        env:
          # This assumes you registered your mysql vm as
          # istioctl register -n vm mysqldb 1.2.3.4 3306
          - name: DB_TYPE
            value: "mysql"
          - name: MYSQL_DB_HOST
            value: mysqldb.vm.svc.cluster.local
          - name: MYSQL_DB_PORT
            value: "3306"
          - name: MYSQL_DB_USER
            value: root
          - name: MYSQL_DB_PASSWORD
            value: password
        ports:
        - containerPort: 9080
```

The 'env' section sets the environment varible for the friend-service, and is also where the necessary parametes are supplied.


5. Register istio with the location of the VM on which the database is hosted: 

```bash
    $istioctl register -n vm mysqldb <ip-address-of-vm> 3306`
```

where

```bash
 -n <name-of-VM> <ip-address-of-vm> <port>
```

## Set up Databse on an External VM with external TCP connection

Replace step 4 and onwards with the following setup: 
5. Write a Service Entry that would detail the connection host, path, and location in the deployment.yaml file

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: ServiceEntry
metadata:
  name: mysql-external
spec:
  hosts:
  - $MYSQL_DB_HOST
  addresses:
  - $MYSQL_DB_IP/32
  ports:
  - name: tcp
    number: $MYSQL_DB_PORT
    protocol: tcp
  location: MESH_EXTERNAL
```

Due to the containerized nature of istio environment, it is not able to discover services outside of the mesh. Hence it is necessary to a service entry to allow access to the outside components. This is different than in the previous example of 'Set up Databse on an External VM with Istio Mesh Expansion', where the command 'istioctl register <vm> <host> <port>' performs a mesh expansion to include the external service which elevate the ability to enjoy any feature internal services have.

Mysql VS NoSQL databse;
S