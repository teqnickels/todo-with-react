DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task_name VARCHAR (255),
  status BOOLEAN DEFAULT FALSE,
  priority SERIAL NOT NULL
);


INSERT INTO todos (task_name) VALUES ('wash the car');
