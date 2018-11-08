CREATE TABLE dragon(
  id              SERIAL PRIMARY KEY,
  birthdate       TIMESTAMP NOT NULL,
  nickname        VARCHAR(64),
  "generationId"  INTEGER,
  /*
  VARCHAR CAN LIMIT SIZE POSTGRESQL IS NOT CASE SENSITIVE but can camel case with "" (NODEJS is camelcase)
  */
  FOREIGN KEY ("generationId") REFERENCES generation(id) 
);